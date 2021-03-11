---
layout: page
title: Activity 8.2
permalink: /Activities/activity8-2
parent: Activities
---

# Activity 8.2: Refactoring Covey.Town

For this activity, we will investigate refactoring the back-end code of Covey.Town so that all the town controller code is placed in the `TownController` class.

This is a group activity.  When the TA comes by, please pause work on this activity and discuss your project plan.


## The Initial Situation

We will be continuing work with the "room service" portion of the Covey.Town project. Please get a copy of code by having one of your group members fork the repository: [https://github.com/neu-se/covey-town-roomservice](https://github.com/neu-se/covey-town-roomservice).  Then clone your fork locally, and run `npm ci` to get it ready to run (`ci` works faster than `install` because it uses `package-lock.json` rather than looking everything up from scratch).

Avery's manager insisted that the code be refactored to use "town" instead of "room" and after a few false starts, the code has been refactored, as you have seen if you have started Homework #4.  The poor structure that Ripley criticized when writing unit tests lives on however.  Our task will be to fix that part, at least part where the subscription handler includes code that rightly is town controller code.

If you look in the request handlers code in `src/requestHandlers/coveyTownRequestHandlers.ts`, you will see that all the handlers take the requests from the client and call into the `CoveyTownStore` or `CoveyTownController` classes and then construct the response to be sent back to the client. None has substantial logic otherwise, *except* `townSubscriptionHandler`.

Since the code in the subscription handler is outside of the class, the class needs to export some functionality that arguably shouldn't be public.  In particular the methods:
* getSessionByToken
* destroySession
* updatePlayerLocation


are only called by the subscription handler.  The add/remove town listener methods are also only used here in the normal code, but they are also used extensively in the testing framework and serve a well-defined purpose.

## The desired situation

The goal of the refactoring is to clean up the subscription handler so that it functions in the same way as the other ones, simply calling a new method "connect" of the `TownController` class which takes the session token and the socket.

The `TownController` class no longer has public functionality to get or destroy sessions, or to update players.  The `connect` method uses private methods to handle the two events from the socket so that its own code is short and simple.

## The required approach

For this exercise, the way in which we meet the goal is as important as the goal itself.  It should be accomplished using *refactorings* that re-form the code, neither adding or deleting code.  The code is moved, stretched, or compressed as if it were a plastic substance.  After each step, you should run the tests to make sure that the code still works correctly.  We will use VSC's refactorings where possible.  To verify your approach, each step of the refactoring should be committed separately.

## The steps

You should refactor the code with at least the following refactorings:
1. We need to get the `townController` local variable to be defined before we get the session using the token because we want that code to be done in the `TownController` class.  Therefore, we first take the `if` statement with its compound condition and duplicate it so that we test each condition separately in their own `if` block.  So instead of `if (A || B) { BLOCK }` we should have
   > `if (A) { BLOCK }`<br/>
   > `if (B) { BLOCK }`

   After each step, run the tests, correcting any errors that show up and then committing the change.
   
2. We then move the conditional block that tests the `townController` *before* the code that gets the session, thus allowing us to remove the question mark from the call. (That question mark essentially is another conditional, whose else branch is obviated when we move the condition).

   After this step as with *all* steps, run the tests and commit your change.
   
3. Next we turn our attention to the second conditional block.  It currently ends in a `return` statement.  Instead of a `return`, the rest of the subscription handler should be placed in an `else` branch of the block.

4. This would be a good time to rename the local `s` as `session`.  Select the declaration of `s` and press "F2" to use VSC's rename feature.

   Remember to run the tests and *commit* after *each* step!

4. Now the code from the point where we get the session up to the end of the function can be extracted as a function at the "module" level.  VSC will do this: select the whole block of code and press control-shift-R.  When asked for a new name, choose `connect`.  if it doesn't work, make sure you have correctly done previous refactorings -- perhaps you left a `return` in the second conditional block?

5. Now we have an opportunity to give a better name than `token` to the second formal parameter of `connect`.  Use the "Rename" functionality of VSC (press F2 after selecting the formal parameter) to change it to `sessionToken`.

6. We can also prepare for making the `connect` function a method by renaming the `townController` parameter as `this`.  Do this step.

7. The next refactoring is major, but needs to be done by hand: it has three parts that all must be done:
  - The `townSocketAdapter` must be moved to the end of the `CoveyTownController.ts`  file.
  - The `connect` function must be copied into a method of the `CoveyTownController` class, and the `this` parameter removed.
  - The call to `connect` must be changed from `connect(townController,token,socket)` to `townController.connect(token,socket)`.

   Are you running the tests after each step?
   Are you committing after every step?
  
8. Now we've cleaned up the subscription handler.  We will turn our attention to the `TownController` class.  First: rename the `updatePlayerLocation` method as `onPlayerMovement` *and* make it private.  ("F2" in VSC)

9. Next extract the two calls in the anonymous function handling disconnect as a new method (control-shift-R) called `onDisconnect`.

10. Then inline the code for `destroySession` into the new private method, and remove the `destroySession` method.

12. Finally inline the code for `getSessionByToken` into `connect` and remove this method.

Run the tests one final time and commit and push your changes.

## Deliverable

Make a pull request back to the repo you forked from to get credit for
this assignment.  Please put your group number in the PR title.

## Regroup in Full Class

In the full class, the instructor may call on several students to discuss experiences.  This step may be skipped if we run out of time, or need the extra time for the project plan.

[comment]: # (LocalWords:  permalink UX Calin CoveyTownID UI src JSON
[comment]: # (LocalWords:  github FERPA studentID eslint npm dev len
[comment]: # (LocalWords:  parserOptions warnOnUnsupportedTypeScriptVersion linter
[comment]: # (LocalWords:  ignorePatterns readonly tsx

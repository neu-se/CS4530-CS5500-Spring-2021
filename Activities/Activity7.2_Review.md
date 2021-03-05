---
layout: page
title: Activity 7.2
permalink: /Activities/activity7-2
parent: Activities
---

# Activity 7.2: Using github pull-request and reviews

For this activity, you will perform *branches* or *forks*, *pull requests* and *reviews* on `github`.

## Updated Transcript Front-End

Last week, some of us worked on adding a React front-end on the transcript system. Avery also worked on it and got it to the point of being barely functional.  There are no security checks because that involves getting campus administration involved and FERPA, so we continue to work with fictional courses and grades.

In this activity, we will consider what's involved in adding some of the enhancements we considered last week, and practice using version control and pull requests on `github`.

## Enhancements

The enhancements we will consider for this activity are the following, identified by number.

1. Change the server [Groups 1 and 3]

   In this extension, a button is placed on the page to edit the server.
   If pressed, a modal dialog overlay is put up where the user can specify an alternate REST server to use, for example `pabst.cs.uwm.edu:4001`.  The server is checked before the dialog comes down.  If accessing the serve gets an error or the server doesn't respond within a reasonable period, an error toast is shown.

2. Non-Consecutive Student IDs [Groups 4 and 6]

   The transcript system used to have the functionality to delete a student from the system, but this functionality was broken since it moved all later students' IDs one step earlier.  In general, student IDs should be selected somewhat randomly within a large space.  In this extension, new students should be assigned a random 10 digit number.  This extension should also add back the ability to delete a student's transcript from the system, and add a button to the effect to the front end.

3. Use letter grades [Groups 7 and 9]

   In this extension, we change the format for grades from numbers to strings and accept only grades from the following list: "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F", "I", "P", "NP", "S", "U", "NR".  It should also be possible for the grade to be undefined.  The front-end shouldn't accept anything other than this list (which should be defined once) and the REST server should make the same checks.

4. Grade change [Groups 2 and 10]

   The current system doesn't permit a grade to be changed.  The REST protocol should be updated with a PATCH protocol on `/transcripts/:studentID/:course` that accepts a body with three fields: all of which are required: `former` a number, `grade` a number, and `reason` a string.  The reason must not be empty.  If the current grade matches the new grade, success is returned without any change, otherwise, if the current grade matches the former grade, then the grade is changed and the message is added to the course grade structure (which should be updated to permit an optional message).

   The React front-end should permit the grade to be changed with a modal overlay.

5. Term [Groups 5 and 11]

   The course grade type should be updated to include a required `term` (a string of the form *season*-*year*, e.g. (Spring-2021).  All the routes that handle grades should add `:term` between `:studentID` and `:course`.  The front-end needs a new column to give the term in displays and dialogs.

6. Course Descriptions [Groups 8 and 12]

     The REST protocol should be updated with the following routes: `GET /courses`, `POST /courses`, and `GET /courses/:course`.  The data sent with the post request will have `name` (what we are using already) and `description` (a long string description).  The GET request on `/courses` should return a list of such structures and the GET request on an individual course should return the description as a text response (not JSON).
     
     The front end should be updated to give an "open" button (e.g. a down arrow) to show the description for any course in the transcript of any student.  It should remember which descriptions are being viewed when the system updates.


Your group will be assigned only of these extensions, and depending on the complexity will not be expected to complete it.
Neither do you need to worry about interaction between this extension and others.

## Activity

We will do this activity in stages.  After each stage, come back to the main room to take a poll and discuss results.

### Phase 1

Each group will be assigned one of the extensions to work on.
When the activity starts:
1. One of the group members should *fork* the repository `https://github.com/neu-se/transcript-app`
2. Then they should give write access to all other members of the group.
3. Then the group as a whole should plan what changes to work on in the given time.

The goal in this phase to make partial but useful progress on the extension.  This progress should consist of
* A small test suite for the new capabilities.
  These tests should fail in the unchanged system (except for extension 1).
* A change toward the result that leaves the system self-consistent.
  It should enable at least one of the tests to pass.
  The modified system should work with itself.

Finally make a *pull request* on the main repository pointing to your forked repository which should have your changes.  The name of the pull request should include your group number.  The pull request itself should name the group members and should summarize what you did overall.  Reviewers will be able to see the changes, so there's no need to repeat the low-level information.


### Stage 2

In stage 2, your group will be assigned another group's pull request to review.
Navigate to the pull request on `github` and each group member should examine the files and do their own review.  This activity can be done individually, but it's also acceptable to confer among the group members.  The reviewer should indicate whether
- They cannot comment on whether the pull request is acceptable or not ("Comment")
- The pull request needs changes before being acceptable ("Request changes"), or
- The pull request is acceptable as is ("Accept").
Remember that the pull request doesn't need to implement the entire extension, and neither does it need to work with other extensions.  Acceptable simple means that the change would make forward progress and leave the system in a good state.  By choosing "Accept", you are not merging in the changes, in any case.

On the other hand, it is appropriate to request changes to correct errors, gross inefficiencies or style problems.

## Deliverables

Each group must jointly provide a pull-request in the first phase, and each group member individually must write a review in the second phase.  Please make sure to identify yourself in your review, especially if your github username is something opaque such as "Molten Popsicle."

[comment]: # (LocalWords:  permalink UX Calin CoveyRoomID UI src JSON
[comment]: # (LocalWords:  github FERPA studentID

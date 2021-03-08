---
layout: page
title: Assignment 4
permalink: /assignments/hw4
parent: Assignments
---

# Assignment 4: UI Implementation **Due Friday March 19, 10:00pm EST**{: .label .label-red }
Based on the feedback from [Activity 6.1 - User requirements and UI design for Covey.Town]({{site.baseurl}}{% link Activities/Activity6.1_Requirements.md %}),
our UX designer Calin has created a revised prototype for Covey.Town. In particular, the following changes have been made:
* The concept of a "room" (an isolated map that users can interact in) is now referred to as a "town."
The "rooms" REST API has been refactored into the "towns" API. Calin believes that this will be a much less confusing metaphor 
than "room." There may still be some references to the term "room" in the code, but everything user-facing has been replaced with "town."
* The landing page for the app now lets a user create a new town or join an existing town. Users can manually enter the 
town ID for a town (to join a non-publicly listed town), or they can select from any publicly listed town. When listing the
public towns, the interface shows the capacity of the town, and how many users are currently in it.
* Once connected to a town, there is a new "Town Settings" button that opens a popup to allow the user to edit the town's friendly name,
to change its visibility, or to delete it.

To get started, [download the handout zip]({{site.baseurl}}{% link assignments/hw4-handout.zip %}). 
You will need to run `npm install` in the `frontend` folder (it is not necessary to run `npm install` in the top-level directory).

Your end product will look and behave just like what is currently deployed at [app.covey.town](https://app.covey.town/).
You will be able to test your code locally by interacting with it in your browser, and also by running our provided test suite.

The objectives for this first assignment, are to:
* Write React components that make use of state
* Use React hooks
* Analyze Chakra UI documentation and write new code that uses widgets from this library 
* Write new TypeScript code that uses asynchronous operations
 
**This is an individual assignment.** 
 
Please post any questions about this assignment on Piazza.

### Suggested References

### Change Log
* 3/5: Initial Release 

## General Requirements 
All of the code that you write must be in the two files `frontend/src/components/Login/TownSelection.tsx` (Parts 1-3) and `frontend/src/components/Login/TownSettings.tsx` (Part 4). These are the only two files that you will submit.

The handout contains a pre-designed implementation of your user interface, and your task is to make it functional, *not* to change the design. *Do not* change the layout of the pages --- some of the tests may depend on the exact format (e.g. order of columns and specific error message text). Similarly, do not change the `name`, or `data-testid` of existing components.

To run the app locally, please refer to the [README in the Covey.Town repository](https://github.com/neu-se/covey.town).

The handout contains components that are written as *functional components* in React. You might find examples online that refer to class-based components. Functional components use [hooks](https://reactjs.org/docs/hooks-intro.html) to store state and perform effects when the component is first rendered or when it's unmounted from the page. Class-based components use the `setState` method to store state, and callbacks like `componentDidMount`. We covered functional components in class, and this assignment requires you to write functional components. For references on how to maintain state in your component or how to perform actions when a component is first mounted on the page or when it's removed from the page, we suggest that you stick to the [React useState documentation](https://reactjs.org/docs/hooks-state.html) and [React useEffect documentation](https://reactjs.org/docs/hooks-effect.html). There are quite a few resources that instead describe the class-based API, and these might be confusing (since they are not applicable).

The handout contains an automated test suite, which you can run with the command `npm test` from within the `frontend` directory.

## Grading
Each of the four parts of this assignment will be graded separately, and equally weighted in your overall grade for the assignment.
Each part will be graded using the following rubric specification:

To receive a mark of "Satisfactory" for a part, your code submission must:
* Pass all of the automated tests run by GradeScope (which are also included in the handout). All tests must pass.
* Follow the specifications noted in the task description.
* Conform to our [style guide]({{ site.baseurl }}{% link style.md %}) *and* have no style warnings or errors as reported by `npm run-script lint`
* Have no `@ts-ignore` or `eslint-disable` annotations in the code that you write

To receive a mark of "Meets minimum expectations" for Part 2, your code submission must:
* Pass all of the automated tests run by GradeScope (which are also included in the handout). All tests must pass.
* Have no style errors (may have warnings) as reported by `npm run-script lint`
* Have no `@ts-ignore` or `eslint-disable` annotations in the code that you write

## Part 1 - Listing the existing rooms
Your first task will be to implement the table that lists the public rooms on the landing page of the app. This table is located in the `TownSelection` component in `TownSettings.tsx`. The handout includes the following table with demonstration row:
```jsx
<Table>
    <TableCaption placement="bottom">Publicly Listed Towns</TableCaption>
    <Thead><Tr><Th>Room Name</Th><Th>Room ID</Th><Th>Activity</Th></Tr></Thead>
    <Tbody>
    <Tr key='demoTownID'>
        <Td role='cell'>DEMO_TOWN_NAME</Td>
        <Td role='cell'>demoTownID</Td>
        <Td role='cell'>Unknown/Unknown 
            <Button onClick={handleJoin}>Connect</Button></Td></Tr>
    </Tbody>
</Table>
```
Using the `apiClient`, retrieve the public listing of towns from the server and render each town as a row in this table, sorted by current occupancy descending. Every 2 seconds,
the component should refresh the list of rooms from the server, updating the displayed component as needed. When the component unmounts (e.g. when the user navigates off of the page), be sure to cancel any timers that you set up to update the page. You do not yet need to make the "Connect" button work: the goal with part 1 is simply to get a grasp of the notion of *state* and *effects* in React. 

To get started with this task, refresh your understanding of the [useState hook](https://reactjs.org/docs/hooks-state.html)  
and the [useEffect hook](https://reactjs.org/docs/hooks-effect.html). To successfully complete this task, you'll need to create an *effect* that loads the town listing into *state* when the component is mounted, refreshes that listing every 2 seconds, and cancels that timer when the component is unmounted.  **Hint**: The web page on effects explains how to use a single call to `useEffect` to set up one handler to be called once when a component is first rendered, and a second handler when it is unmounted.  Also remember `setTimeout` from earlier this semester.

The capacity of the town should be displayed as `town.currentOccupancy/town.maximumOccupancy`. Be sure to include the `role='cell'` attribute in each `Td`, and note the distinction between `Td` and `td`.

You can test this component with our automated tests (that replace the actual server with a mock), or by running the app locally in your browser.
 To run *just* the Part 1 tests, run the command `npm test TownSelectionPart1.test.tsx`, or install the "vscode-jest-runner" extension for VSCode, which will easily let you run individual tests/test suites from the VSCode GUI. To test it in your browser, you can either use our backend (which will show towns that are created on [app.covey.town](https://app.covey.town/)), or use a local backend (and create towns programatically for it using the API Client directly, or Postman).


## Part 2 - Joining existing towns
The next step will be to allow a user to manually input a coveyTownID to join a town. There is an existing form field on the `TownSelection` component to allow the user to enter this, and a button labeled "Connect" adjacent to it.
The handout code already has a method `handleJoin`, which checks the username, and connects the user to the town with the ID `demoTownID`. 
Using the example of the `userName` field, update the component so that the value from the `townIDToJoin` field is passed to `Video.setup` in `handleJoin` instead of `demoTownID`. Add a check to ensure that the town ID is not blank before calling `Video.setup`. If the townID is blank, display an error toast with the title 'Unable to join town', description 'Please enter a town ID'. If any error occurs (e.g. thrown by `Video.setup`, `doLogin`, or `connect`), the 'Unable to connect to Towns Service' toast should be displayed (this error handler is already implemented - your new code should not change that behavior).

Use the same `handleJoin` code (although, likely with some modifications) to *also* handle clicks to each public room's "Connect" button that you created in Part 1. If a room is at capacity, disable the corresponding button by setting its `disabled` property.

You can test this component with our automated tests (that replace the actual server with a mock), or by running the app locally in your browser. 
 To run *just* the Part 2 tests, run the command `npm test TownSelectionPart2.test.tsx`, or install the "vscode-jest-runner" extension for VSCode, which will easily let you run individual tests/test suites from the VSCode GUI.
To test it in your browser, you can either use our backend (which will show towns that are created on [app.covey.town](https://app.covey.town/)), or use a local backend (and create towns programatically for it using the API Client directly, or Postman).

## Part 3 - Creating new towns
With your newfound grasp of state, implement the functionality for the create new town section of the app.
When the user clicks on the "Create" button in the "Create new town" section, your component should create the town as requested by the user and then directly enter that town. Specifically, the handler should:
1. Check to make sure that a username and town name are entered
2. Call `apiClient.createTown` with the `friendlyName` and `isPubliclyListed` values entered by the user (where the checkbox should be true by default)
3. If successful, display a success toast (that won't disappear until explicitly closed) with the title "Town {newTownName} is ready to go!" and descriptive new town information, then use your existing `handleJoin` code to connect to that town
4. If unsuccessful, display an error toast

We would like you to use the following (exact) status toasts for errors:
* Empty username: 'Unable to create town', message: 'Please select a username before creating a town'
* Empty town name: 'Unable to create town', message: 'Please enter a town name'
* An error in `createTown`: please display the same toast format that `handleJoin` uses

Again, you can test this component with our automated tests (that replace the actual server with a mock), or by running the app locally in your browser.  To run *just* the Part 3 tests, run the command `npm test TownSelectionPart3.test.tsx`, or install the "vscode-jest-runner" extension for VSCode, which will easily let you run individual tests/test suites from the VSCode GUI.

## Part 4 - Updating and deleting towns
Your last task is to implement the functionality in the "Town Settings" popup that appears when a user is inside of a town. This component is called `TownSettings`, and is in the file "TownSettings.tsx". Use your newfound knowledge of React, *state*, and form inputs to implement the "Update Town" and "Delete Town" functionality. When the user opens the component, the "Friendly name" field should be pre-populated with the current friendly name of the room, and the "is public" checkbox should be checked if the room is currently public.

When the user clicks on "update", your code should call `apiClient.updateTown` with the appropriate values. Upon success, display a toast "Town updated" with message "To see the updated town, please exit and re-join this town". In the event of a failure, display a toast "Unable to update town", and include the error's string representation (`err.toString()`) as the description.

When the user clicks on "delete", your code should call `apiClient.deleteTown` with the appropriate values. Upon success, display a toast "Town deleted", and in case of error, display a toast "Unable to delete town", and include the error's string representation (`err.toString()`) as the description. 

In either case, if the action was successful, the popup should be closed.

Again, you can test this component with our automated tests (that replace the actual server with a mock), or by running the app locally in your browser.  To run *just* the Part 3 tests, run the command `npm test TownSettings.test.tsx`, or install the "vscode-jest-runner" extension for VSCode, which will easily let you run individual tests/test suites from the VSCode GUI.

## Submission Instructions
Submit your assignment in GradeScope. The easiest way to get into GradeScope the first time is to first
[sign into Canvas](https://northeastern.instructure.com/courses/60188) and then click the link on our course for "GradeScope". 
You should then also have the option to create an account on GradeScope (if you don't already have one) so that you can log in to GradeScope directly.
Please contact the instructors immediately if you have difficulty accessing the course on GradeScope.

Unlike in past assignments, you will *not* submit an archive of the entire project, because there is so much extra code. Instead, submit *only* your `TownSelection.tsx` and `TownSettings.tsx` files. Submit these as individual files (do not make a zip of them).
GradeScope will provide you with feedback on your submission, providing a numeric score for Part 1, Part 2, Part 3 and Part 4 of:
* 2 (Satisfactory)
* 1 (Meets minimum expectations)
* 0 (Not passing)

In the "Autograder" score, you'll see the sum of these three values. You can view the per-part grade and complete output from running the tests and linter on GradeScope. If you have any doubts
about the autograder, please contact the course staff immediately. In particular: if you are not able to reproduce
and debug test or linter failures on your local machine, **please** ask the TAs for assistance: otherwise you'll waste
an immense amount of time waiting for the autograder to complete, when you could get the same feedback in seconds running
the tests + linter locally.

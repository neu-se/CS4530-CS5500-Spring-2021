---
layout: page
title: Assignment 1
permalink: /assignments/hw1
parent: Assignments
grand_parent: Schedule
---

# Assignment 1: Onboarding

Welcome aboard to the Covey.Town team! We're glad that you're here and ready to join our development team as a new software engineer.
We're building an open source virtual meeting application, and are very happy to see that we have so many new developers who can help make this application a reality.
By the end of the semester, you'll be able to propose, design, implement and test a new feature for our project.
We understand that some of you may have some web development experience, but don't expect that most of you do, and hence, have created
this series of four individual assignments to help you get up to speed with our existing codebase and development environment.

Our lead software engineer, Avery, has developed a prototype for Covey.Town, but in their haste, they neglected to create very good
documentation. 
Covey.Town is a web application that consists of some code that runs in each client's web browser, and also code that runs on
a server.
In this assignment, you will examine some of the existing code that runs in the server, create documentation for it, and add some new functionality to it.

Your assignment will be graded following the rubric embedded in this document, which will consist of the marks "Satisfactory," "Meets Minimum Expectations," and "Not Acceptable."
Based on past experiences, we project that this assignment could take you up to 14 hours (depending on your prior preparation).
We encourage you to start early so that you can post questions on Piazza, make the most use of our TAs' tutorials, and
 attend office hours as necessary in order to ensure that you can reach Satisfactory marks across the board.

The objectives for this first assignment, are to:
* Apply design principles and design patterns skills to real code
* Evaluate naming and other style concerns of an existing codebase
* Write new code in TypeScript 

Parts 1 and 2 of this assignment should be completed in a text editor (you might find it easiest to use a word processor
to format the CRC cards as tables); Part 3 is a coding task, and you should implement it using [the handout code](#todo).

### Part 1: Documenting the design 
Avery's first prototype implementation of Covey.Town was unreadable spaghetti code that was deemed
"Not Satisfactory" by upper management and was rejected. Avery spent the whole weekend trying to rewrite it following
the design principles covered in Lesson 1.X. Avery's done an OK job at this, and the code is much better, but it's still missing
design documents. Your first task is to review Avery's code and document the design.

Review Avery's code to understand the role of the following types, and create a CRC card for each:
* `PlayerSession` (in `src/types/PlayerSession.ts`)
* `Player` (in `src/types/Player.ts`)
* `CoveyRoomListener` (in `src/types/CoveyRoomListener.ts`)
* `CoveyRoomController` (in `lib/CoveyRoomController.ts`)
* `roomJoinHandler` (in `requestHandlers/CoveyRoomRequestHandlers.ts`) 
* `roomSubscriptionHandler` (in `requestHandlers/CoveyRoomRequestHandlers.ts`)
* `IVideoClient` (in `lib/IVideoClient.ts`)

Note that unlike in purely object oriented languages, functions are first-class entities that can be passed around as objects, 
and hence, while traditionally the first 'C' in 'CRC' stands for *Class*, for this design exercise, we'll consider two functions as classes.
In a language like Java, `roomJoinHandler` would likely end up being a class with a single function --- in TypeScript, we can 
have that single function stand on its own without being part of a class.

It is up to you to define the responsibilities and collaborators for each of these 6 types.
You should be sure to include the following responsibilities in your cards in order to receive (at least) a "Meets Minimum Expectations" for this task:
* (TBD, Create master CRC cards and extract some of the responsibilities)

#### Rubric for Part 1
TBD

### Part 2: Evaluating the design
Using the design principles covered in Lesson 1.X, please review the following aspects of Avery's design,
and provide a 1-2 sentence response to each of the following questions:

1. Does `CoveyRoomController` follow the principle of *encapsulation*? Explain how it does or does not follow this principle.
1. Avery is currently using a video service called [Twilio Programmable Video](https://www.twilio.com/video) for Covey.Town.
What changes would be necessary to change to a different provider, and how does Avery's design make that easy or hard?
1. Consider the interface `CoveyRoomListener`: this interface is part of an *observer* pattern that Avery designed as part of the 
server code. Describe the role of this pattern in the overall behavior of this system.
1. Avery received a warning for adherence to our project's naming conventions. Thankfully, we think that the 
names of each type are OK, and similarly, that the names for each property are OK.
However, we were concerned with some of the names of local variables within 
Avery's code. Using the rules outlined in our [style guide](#TODO), find three naming violations in local variables in Avery's code and
suggest a better name for each.

The following *optional* question does not count towards your grade, but will be used to help Avery improve their design in the future (which 
might mean that you have an easier time understanding Avery's code!):

What do you think overall of Avery's design? Are there parts that you think could be improved? 

#### Rubric for Part 2
TBD

### Part 3: Extending the design
[Avery's prototype](https://app.covey.town/) *almost* implements the *Minimum Viable Product* (the first deliverable that
satisfies our client's *must have* requirements) for Covey.Town, but lacks one crucial feature: support for multiple rooms.
The Covey.Town prototype currently consists of a single room: all users that connect to Covey.Town are placed on the same map.
Our client is unhappy with this because they really want people to be able to create their own personalized spaces in Covey.Town.
Also, since each room is mapped to a single video room in our video calling system, and each video room is [limited to only 50 participants](https://www.twilio.com/docs/video/programmable-video-limits#room-and-participant-system-limits),
having a single room means that there can only be 50 people on the platform at once.

But, if we can structure the system so that different groups of users join different rooms, then we can satisfy our client's requirement,
while also allowing more than 50 people to use the system at a time, by putting them in different rooms.
Avery started implementing this feature, but never got to finish it: apparently
Avery's frontend code is a huge mess of spaghetti too, and Avery's manager told them to focus on cleaning that up before finishing the product.

While Avery cleans up the frontend code, *your* task will be to implement this last key feature: adding support for multiple rooms.
For this onboarding assignment, you'll modify Avery's backend code to support multiple rooms. Once Avery finishes reorganizing the frontend
code (and you learn about frontend development in class), you'll also modify the frontend to support this feature.

Avery previously created the interface `ICoveyRoomsStore` to define the behavior for a new class, `CoveyRoomsStore`, 
which will hold onto a collection of `CoveyRoomController`s, one per-room. Your coding task is:
1. In the (empty) file `CoveyRoomsStore.ts`, define the new type `CoveyRoomsStore`, which should be a singleton, and
implement the functionality of `ICoveyRoomsStore`.
1. Change the `CoveyRoomController` so that it is no longer a singleton. Instead, there will be one instance of this type
for each room, and those instances will be created by your `CoveyRoomsStore`. Add a new *private*, *readonly* property, called `_coveyRoomID` (and a [TypeScript-style getter](https://www.typescriptlang.org/docs/handbook/classes.html#accessors)) to 
`CoveyRoomController` so that each room controller knows the name of the room that it is mapped to. Update the call to
`getTokenForRoom` to pass this room ID instead of the hard-coded one.
1. Change the `roomSubscriptionHandler` and `roomJoinHandler` to retrieve the correct `CoveyRoomController` from your
`CoveyRoomsStore`, based on the `coveyRoomID` requested.

#### Rubric for Part 3
TBD

## Submission Instructions
TBD


---
layout: page
title: Assignment 3
permalink: /assignments/hw3
parent: Assignments
---

# Assignment 3: Test Design and Implementation **Due Friday March 5, 10:00pm EST**{: .label .label-red }

Welcome back! We were very pleased to see your thorough implementation of the new rooms and sessions API.
We are certain that this new design and implementation will be a solid foundation for Covey.Town in the years to come.
Before we move on to implement the frontend portion of this feature, however, there is one last matter to discuss: testing.

Unfortunately, we are seeing a recurring pattern with Avery's development practices: just like Avery's first
implementation of covey.town was poorly documented and structured... so are Avery's tests. While we were able to use Avery's 
tests to do some quality assurance on your backend, we really do not want to rely on them going forward: they will be a 
nightmare for maintenance --- they violate many of our test design principles, have duplicated code, and are quite brittle.
Avery doesn't know how to use mocks or spies, and struggles with complicated asynchronous interactions --- and unfortunately,
these are all necessary skills to write a quality test suite for a complex system like you've built.

Our lead test engineer, Ripley, has a better idea: Ripley has outlined a series of unit tests for the `CoveyRoomController`,
and has created mocks for all of the significant external collaborators for the class: `TwilioVideo`, `CoveyRoomListener` and `Socket`. Ripley's designed a set of tests for you to implement that can be implemented using only the public API of `CoveyRoomController` and these mocks. These unit tests will form a strong base for the overall test suite that you're building.

Ripley has *also* outlined a series of integration tests for the room service API that can be implemented entirely using the publicly
exposed client API (the REST endpoints and the socket protocol).

These tests will be quite useful in the coming months and years of the project, and will allow the rest of the team to maintain and enhance the room service as the overall system needs change. For instance, we envision that, one day, the `CoveyRoomController` will keep its state in a database (rather than directly in-memory in NodeJS), and a comprehensive test suite for the behavior of `CoveyRoomController` will make it much easier to validate the correctness of a change like that.

Your assignment will be graded following the rubric embedded in this document, which will consist of the marks "Satisfactory," "Meets Minimum Expectations," and "Not Acceptable."
We will grade your tests on several criteria:
* Do your tests pass on correct (non-buggy) code? (Checked automatically by GradeScope)
* Do your tests fail when run on buggy code? (Checked automatically by GradeScope)
* Following the language in lesson 5.3: are your tests clear, do they only make calls against public APIs, and are they as small as possible?

The objectives for this assignment, are to:
* Practice writing integration-level tests using TypeScript and Jest
* Practice writing unit tests using TypeScript and Jest, including techniques like spies and mocks
* Analyze asynchronous operations and define tests that ensure that events occur in their expected orders

Based on past experiences, we project that this assignment could take you up to 18 hours (depending on your prior preparation).
We encourage you to start early so that you can post questions on Piazza, make the most use of our TAs' tutorials, and
 attend office hours as necessary in order to ensure that you can reach Satisfactory marks across the board.
 
To get started, [download the handout zip]({{site.baseurl}}{% link assignments/hw3-handout.zip %}). (Update 2/23: handout now contains the HW2 reference solution, there is no need to copy your HW2 solution into the handout)
~~From your HW2 solution, copy the files `src/client/RoomServiceClient.ts`, `src/requestHandlers/CoveyRoomRequestHandlers.ts`, `src/lib/CoveyRoomsStore.ts` and `src/router/room.ts` into the corresponding location in the HW3 handout.~~
 
**This is an individual assignment.** 
 
Please post any questions about this assignment on Piazza.


### Overview of the socket protocol
Your past coding assignments have focused on the REST side of the client and server, but you will now need to also interact with the socket server and client. Recall that the steps for a client to join a room are:
1. Make a REST request to the `/sessions` service to fetch a session token
2. Connect to the socket server using this session token as a credential

Once the connection is established, the client and server communicate asynchronously: on either side, the code can call `emit('eventName', eventData)`, where `eventName` is one of the events listed below, and `eventData` is that event's corresponding payload. 

There is a single event that the client may send to the server:
* `playerMovement` sent by the client to the server to indicate that the player controlling the client has moved on the map. The `eventData` is a `UserLocation` indicating the new location

There are multiple events that the server may send to the client:
* `playerMoved` sent by the server to the client when any player moves (this message may also be sent to the same player that moved). The payload is a `Player` object describing the player who just moved
* `newPlayer` sent by the server to the client when a new player joins the room (aka when a new player makes a request to the `/members` resource). The payload is the `Player` object corresponding to the new player.
* `playerDisconnect` sent by the server to the client when a player leaves the room. The payload is the `Player` object corresponding to the player that disconnected
* `roomClosing` sent by the server to the client when the room is destroyed (aka when the room is deleted).

The socket library will automatically generate the event `connected` on the client side once it establishes a connection to the server (it is not connected immediately, but rather, asynchronously). The socket library will also generate a `disconnected` event (on both the client and the server) when a connection is broken.


### Suggested References
* [Jest Matchers Reference](https://jestjs.io/docs/en/expect) describes all of the different `expect` calls that you can make use of, including those for mocks!
* [Jest Async Testing Reference](https://jestjs.io/docs/en/asynchronous#asyncawait) describes how to use Jest to test asynchronous code. Note that there are multiple ways to do this (callbacks, promises, async/await). You are not *required* to use async/await, but Ripley thinks that it's the easiest way to implement these tests.
* [Jest Mock-Extended Reference](https://github.com/marchaos/jest-mock-extended) provides more examples on mocking with Jest (Ripley installed this package in the handout code and used it to set up most of the mocks for you)

### Change Log
* 2/19: Initial Release 
* 2/23: Update handout to include HW2 solution, add a hint to part 3 - JSB

## General Requirements and Grading
This assignment is split into three parts: each part requires you to implement test cases that are stubbed out in the handout.
You may add additional helper methods to these files, and you may add `beforeEach`, `beforeAll`, `afterEach`, or `afterAll` to these test suites. You may also add helper methods to `TestUtils.ts`. Your tests must be fully contained within the test files and `TestUtils.ts` - when they run on GradeScope, we will copy only these files out of your submission to grade.
You **must not** change the order of the tests or the names of the tests. To integrate with GradeScope, each test has a call to `ConfigureTest` and `StartTest` - these lines must not be changed. Your test may not use the value of `testConfiguration` other than in this call to `StartTest`.

**Unusual Test Feedback:**{: .label .label-yellow } When inspecting the results of your tests on GradeScope, you might initially be concerned to see tests failing - recall that we are running your tests on both bug-free code, and on buggy code. Your tests are *expected to fail* on the buggy code. In the output on GradeScope, you'll see each test is run more than once, sometimes with the suffix `[No fault]` (these ones should pass), and other times with `[Fault RM01I... - this configuration should FAIL]` - these test runs *should* fail. To be clear, this means that the following output indicates that you've implemented your test correctly:
```
✕ Prohibits a blank friendlyName [Fault XErr2MZjsnN7 - this configuration should FAIL] (659 ms)
✓ Prohibits a blank friendlyName [No fault] (4 ms)
```

Jest might also report the following message after running some tests:
```
 Jest did not exit one second after the test run has completed.
 
 This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

Ripley and Avery can't figure out how to get rid of this, and it's mostly harmless. Please ignore it, although if you *do* happen to figure out a fix, please feel free to let us know so that we can share it with Ripley and Avery!

### Rubric Specification 
Each of the three parts of this assignment will be weighted equally, each account for 1/3 of your overall grade on this assignment. All parts will be graded on the following rubric:

To receive a mark of "Satisfactory" for the part, your tests for that part must:
* All pass when run on the reference server code (this is the code included in the handout: you can check this by running it locally, GradeScope runs these checks too)
* GradeScope has *buggy* server implementations too - to receive a "Satisfactory," each test must *fail* on each bug that we have planted in the server
* Follow the design specification outlined above, in particular: tests should only call public APIs, be as small as possible and clear
* Conform to our [style guide]({{ site.baseurl }}{% link style.md %}) *and* have no style warnings or errors as reported by `npm run-script lint`
* Have no `@ts-ignore` or `eslint-disable` annotations in the code that you write

To receive a mark of "Meets minimum expectations" for Part 3, your tests for that part must:
* All pass when run on the reference server code (this is the code included in the handout: you can check this by running it locally, GradeScope runs these checks too)
* GradeScope has *buggy* server implementations too - to receive a "Meets minimum expectations," each test must *fail* on *at least one* bug that we have planted in the server
* Have no style errors (may have warnings) as reported by `npm run-script lint`
* Have no `@ts-ignore` or `eslint-disable` annotations in the code that you write

**Warning**{: .label .label-yellow }  Submissions that do not meet the above criteria will receive no credit for that part.
 **Do not wait to test or style check your code until the last minute.**
 
## Part 1 - REST Integration Tests:
A good testing strategy includes a mix of tests both small and large in scope. In many cases, writing integration tests can be easier than writing unit tests, since the behavior of our systems is usually well-defined at the system level (for instance: "When a user creates a room in Covey.Town, the system returns the ID for the room, and a password for updating that room"), while the specification and behavior of individual units that service that request might be a bit more difficult to isolate. 
Since the entire, end-to-end system is already implemented, we'll start off writing some integration tests for the API by using a REST client to make requests against a server, and observe the results.

Ripley has analyzed the specification for the Covey.Town room service, and has determined that the following tests should be sufficient to test the REST API:
```ts
 describe('CoveyRoomCreateAPI', () => {
    it('Allows for multiple rooms with the same friendlyName', async () => {
    });
    it('Prohibits a blank friendlyName', async () => {
    });
  });
  
  describe('CoveyRoomListAPI', () => {
    it('Lists public rooms, but not private rooms', async () => {
    });
    it('Allows for multiple rooms with the same friendlyName', async () => {
    });
  });
  
  describe('CoveyRoomDeleteAPI', () => {
    it('Throws an error if the password is invalid', async () => {
    });
    it('Throws an error if the roomID is invalid', async () => {
    });
    it('Deletes a room if given a valid password and room, no longer allowing it to be joined or listed', async () => {
    });
  });
  
  describe('CoveyRoomUpdateAPI', () => {
    it('Checks the password before updating any values', async () => {
    });
    it('Updates the friendlyName and visbility as requested', async () => {
    });
    it('Does not update the visibility if visibility is undefined', async () => {
    });
  });

  describe('CoveyMemberAPI', () => {
    it('Throws an error if the room does not exist', async () => {
    });
    it('Admits a user to a valid public or private room', async () => {
    });
  });
```

Implement these tests in the file `client/CoveyRoomREST.test.ts`. Ripley has pre-configured these tests so that before they start, a server is deployed on a random port (so you can run the tests even if something else on your computer is using port 8081), and a client is automatically configured to connect to that testing server. In your tests, be sure to use the `apiClient` instance of the `RoomServiceClient` - this client will be automatically configured to connect to the server that the test starts up.

Each of the tests is declared with an `async` modifier, which means that you may use `await` within your test, and Jest will `await` on your test.
Ripley shared this example integration test for the TranscriptServer:
```ts
it('should remove the deleted student from the list of students', async () => {
      // Create 2 new Avery entries
      const [createdAvery1, createdAvery2] = await Promise.all([
        client.addStudent('Avery'),
        client.addStudent('Avery')
      ]);
      // Fetch all Avery entries
      const ids = await client.getStudentIDs('Avery');
      // Make sure the 2 created ones are both listed
      expect(ids).toContain(createdAvery1.studentID);
      expect(ids).toContain(createdAvery2.studentID);

      // Now do the deletion, then make sure that the one we deleted is gone, other still there
      await client.deleteStudent(createdAvery2.studentID);
      const idsAfterDelete = await client.getStudentIDs('Avery');
      expect(idsAfterDelete).toContain(createdAvery1.studentID);
      expect(idsAfterDelete).not.toContain(createdAvery2.studentID);
});
```

When a test is declared as `async`, Jest will wait for your test to finish for up to 5,000 milliseconds, after which point it will fail with an error:
```
Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error
``` 
You can use this timeout to your advantage: if you find yourself needing to write a test that should fail if some asynchronous event *does not* occur, then a test that includes an `await` along the lines of `await somePromiseThatMustHappenForThisTestToPass;` and that promise does *not* resolve within 5,000 milliseconds, the test will fail.

## Part 2 - CoveyRoomController Unit Tests: 
While integration-level tests (which test multiple units) might be the easiest to write, they are often the hardest to debug, the most prone to flakiness, and slowest to run. 
Unit tests can be a bit trickier to write, because you often need to create mocks in order to test individual components in isolation.
Ripley is quite frustrated with Avery's initial design of the `CoveyRoomController` and `CoveyRoomRequestHandlers`, in particular: the design decision to embed a significant amount of room-specific logic in the `roomSubscriptionHandler` method, which is outside of `CoveyRoomController`. We still need to test all of this behavior on the server, but doing so will require that your `CoveyRoomController` "unit" tests also invoke some methods of `CoveyRoomStore` and the method `roomSubscriptionHandler`. If this feels cumbersome, then blame Avery! A better design would have placed more of this logic in `CoveyRoomController`.

In the file `CoveyRoomController.test.ts`, Ripley has pre-defined tests and pre-configured mocks for all of the methods and types that you will need to mock: `TwilioVideo.getTokenForRoom`, `CoveyRoomListener`, and `Socket`. 
The tests that you'll need to implement are reproduced below:
```ts
describe('CoveyRoomController', () => {
  it('constructor should set the friendlyName property', () => {
  });
  describe('addPlayer', () => {
    it('should use the coveyRoomID and player ID properties when requesting a video token',
      async () => {
      });
  });
  describe('room listeners and events', () => {
    it('should notify added listeners of player movement when updatePlayerLocation is called', async () => {
    });
    it('should notify added listeners of player disconnections when destroySession is called', async () => {
    });
    it('should notify added listeners of new players when addPlayer is called', async () => {
    });
    it('should notify added listeners that the room is destroyed when disconnectAllPlayers is called', async () => {
    });
    it('should not notify removed listeners of player movement when updatePlayerLocation is called', async () => {
    });
    it('should not notify removed listeners of player disconnections when destroySession is called', async () => {
    });
    it('should not notify removed listeners of new players when addPlayer is called', async () => {
    });
    it('should not notify removed listeners that the room is destroyed when disconnectAllPlayers is called', async () => {
    });
  });
  describe('roomSubscriptionHandler', () => {
    it('should reject connections with invalid room IDs by calling disconnect', async () => {
    });
    it('should reject connections with invalid session tokens by calling disconnect', async () => {
    });
    describe('with a valid session token', () => {
      it('should add a room listener, which should emit "newPlayer" to the socket when a player joins', async () => {
      });
      it('should add a room listener, which should emit "playerMoved" to the socket when a player moves', async () => {
      });
      it('should add a room listener, which should emit "playerDisconnect" to the socket when a player disconnects', async () => {
      });
      it('should add a room listener, which should emit "roomClosing" to the socket and disconnect it when disconnectAllPlayers is called', async () => {
      });
      describe('when a socket disconnect event is fired', () => {
        it('should remove the room listener for that socket, and stop sending events to it', async () => {
        });
        it('should destroy the session corresponding to that socket', async () => {
        });
      });
      it('should forward playerMovement events from the socket to subscribed listeners', async () => {
      });
    });
  });
});
```

Implement these tests by using the public API of `CoveyRoomController` and the mocks defined in the file. You may also create new instances of `Player` directly in your tests as you feel necessary.

### Hints for using mocks
Here is an example of a test that uses Jest Mocks, provided by the [jest-mock-extended](https://github.com/marchaos/jest-mock-extended) library (this is the library that Ripley chose to implement the mocks in the handout code).

```ts
import { mock } from 'jest-mock-extended';

interface PartyProvider {
   getPartyType: () => string;
   getSongs: (type: string) => string[]
   start: (type: string) => void;
}

describe('Party Tests', () => {
   test('Mock out an interface', () => {
       const mock = mock<PartyProvider>();
       mock.start('disco party');
       
       expect(mock.start).toHaveBeenCalledWith('disco party');
   });
});
``` 

In this example test, the test checks to make sure that the method `start` was called with the particular value `disco party`. 
For further reading on mocks and the different kinds of `expect` matchers that you can use, see:
* [Jest Matchers Reference](https://jestjs.io/docs/en/expect) describes all of the different `expect` calls that you can make use of, including those for mocks!
* [Jest Mock-Extended Reference](https://github.com/marchaos/jest-mock-extended) provides more examples on mocking with Jest (Ripley installed this package in the handout code and used it to set up most of the mocks for you)



## Part 3 - Socket Server Integration Tests
The last set of integration tests to write will test the behavior of the socket handlers in the server. The socket handlers implement a bidirectional communication protocol between the server and each client, allowing the server to push updates to clients (unlike the REST api, which only allows clients to poll the server for data).

Your integration tests will create a REST and socket client and interact with the REST and socket server. Ripley has provided a Promise-based wrapper for interacting with the socket server that provides promises that will be resolved when each of these events are received. Here is the declaration of that helper (it is in `TestUtils.ts`):
```ts
/**
 * A handy test helper that will create a socket client that is properly configured to connect to the testing server.
 * This function also creates promises that will be resolved only once the socket is connected/disconnected/a player moved/
 * a new player has joined/a player has disconnected. These promises make it much easier to write a test that depends on
 * some action being fired on the socket, since you can simply write `await socketConnected;` (for any of these events).
 *
 * Feel free to use, not use, or modify this code as you feel fit.
 *
 * @param server The HTTP Server instance that the socket should connect to
 * @param sessionToken A Covey.Town session token to pass as authentication
 * @param coveyRoomID A Covey.Town Room ID to pass to the server as our desired room
 */
export function createSocketClient(server: http.Server, sessionToken: string, coveyRoomID: string): {
  socket: Socket,
  socketConnected: Promise<void>,
  socketDisconnected: Promise<void>,
  playerMoved: Promise<RemoteServerPlayer>,
  newPlayerJoined: Promise<RemoteServerPlayer>,
  playerDisconnected: Promise<RemoteServerPlayer>,
};
```
**RemoteServerPlayer?** Due to limitations in TypeScript's type engine, when an object (an instance of a class) is transmitted over the socket, it comes out the other side with all of the same properties, but none of the methods. The main implication of this is that if the sender sends a payload that is a `Player` object, the receiver will not see a `Player` object with all of the methods (including getters and setters) that exist on that class. Instead, they'll simply see the fields (`{location: UserLocation, _userName: string, _id: string }`). Ripley has already created a new type to help with this in `TestUtils.ts`, called `RemoteServerPlayer`.

Ripley has also provided an example of how to use this API in one of the tests:
```ts
  it('Rejects invalid CoveyRoomIDs, even if otherwise valid session token', async () => {
    // Create a new room, so that we can make a valid session token
    const validRoom = await apiClient.createRoom({isPubliclyListed: true, friendlyName: 'Test Room'});

    // Get a valid session token by joining the room
    const {coveySessionToken: validSessionToken} = await apiClient.joinRoom({
      coveyRoomID: validRoom.coveyRoomID,
      userName: nanoid(),
    });

    // Connect with a valid session token, but an invalid room ID
    const {socketDisconnected, socketConnected} = TestUtils.createSocketClient(server, validSessionToken, nanoid());
    await socketConnected; // Make sure that the socket actually connects to the server
    await socketDisconnected; // If the server rejects our CoveyRoomID, it will disconnect our socket, and this promise will shortly resolve
    // This test will fail by timing out (in the event that the socket doesn't disconnect)
  });
```

The tricky part about writing these tests is that you will need to consider the order of operations that your test needs to perform, and the responses that you should be receiving from the server.

**Hint (2/23):** In these integration tests, you will be testing the server-side logic that responds to client actions. For instance, to test that the server informs all new players when a player joins, you will be testing the server's behavior when a client joins a room. Unlike in part 2, where you directly manipulated the server, to implement these tests, you will interact with the server only using the REST + socket API, from the client side. Hence, the only way to test the server's behavior when a player joins the room is to actually use the apiClient to join the room, and observe what messages the server sends.

Similar to the other parts, Ripley has outlined the tests that you need to implement:
```ts
describe('RoomServiceApiSocket', () => {
  it('Rejects invalid CoveyRoomIDs, even if otherwise valid session token', async () => {
    // You don't need to write this one, the example is included in the handout
  });
  it('Rejects invalid session tokens, even if otherwise valid room id', async () => {
  });
  it('Dispatches movement updates to all clients in the same room', async () => {
  });
  it('Invalidates the user session after disconnection', async () => {
  });
  it('Informs all new players when a player joins', async () => {
  });
  it('Informs all players when a player disconnects', async () => {
  });
  it('Informs all players when the room is destroyed', async () => {
  });
});
```

Implement these tests in `CoveyRoomSocket.test.ts`. You may also create new instances of `Player` directly in your tests as you feel necessary. 

Jest might report the following message after running some tests (particularly these Socket-based tests):
```
 Jest did not exit one second after the test run has completed.
 
 This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

Ripley and Avery can't figure out how to get rid of this, and it's mostly harmless. Please ignore it, although if you *do* happen to figure out a fix, please feel free to let us know so that we can share it with Ripley and Avery!

## Submission Instructions
Submit your assignment in GradeScope. The easiest way to get into GradeScope the first time is to first
[sign into Canvas](https://northeastern.instructure.com/courses/60188) and then click the link on our course for "GradeScope". 
You should then also have the option to create an account on GradeScope (if you don't already have one) so that you can log in to GradeScope directly.
Please contact the instructors immediately if you have difficulty accessing the course on GradeScope.

The assignment should be submitted in one archive on GradeScope.
Run the command `npm run-script pack` in your project directory, which will create a zip file that is properly
structured for submission. **Important**: GradeScope only accepts .zip files, *not* .tgz files - if you run `npm pack`, you will get a .tgz file, and it will not be accepted by GradeScope. Please be sure to run `npm run-script pack`. Submit this zip file to the assignment "Homework 3" on GradeScope.
GradeScope will provide you with feedback on your submission, providing a numeric score for Part 1, Part 2 and Part 3 of:
* 2 (Satisfactory)
* 1 (Meets minimum expectations)
* 0 (Not passing)

In the "Autograder" score, you'll see the sum of these three values. You can view the per-part grade and complete output from running the tests and linter on GradeScope. If you have any doubts
about the autograder, please contact the course staff immediately. In particular: if you are not able to reproduce
and debug test or linter failures on your local machine, **please** ask the TAs for assistance: otherwise you'll waste
an immense amount of time waiting for the autograder to complete, when you could get the same feedback in seconds running
the tests + linter locally.


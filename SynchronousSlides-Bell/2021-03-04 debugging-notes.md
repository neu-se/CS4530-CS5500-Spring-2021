---
layout: lecture
title: Debugging Walkthrough
permalink: /Activities/debugging-walkthrough
parent: Activities
---

Discussion: What are your pro debugging strategies? [Responses organized below]
### Hypothesis testing
* Console.log/print statements - around where you think the error is
    * Print out values that you are assuming are “right” to double-check
* Breakpoints
    * When to use breakpoints vs console.log?
        * “Why isn’t something happening?” [Print out lots of messages showing different control points/branches/etc]
        * “Step through an algorithm/method line-by-line”
* Commenting out new code, see if you can remove new lines to get the old behavior to work

### NOT hypothesis testing (don’t involve running tests 50x)
* Read documentation?
    * Google?
    * Stackoverflow?
    * Documentation from the library you’re using?
* Examine and understand error logs

### Meta-strategies:
* Talking through the example (if you can)
* Writing down the logic trying to achieve, see if implementation matches
* Write tests? <— come back to this ones
* Put it down and come back to it later
* Minimize the steps to reproduce the bug - reproduce it FASTER
    * Example: rerunning tests
    * 0.88 sec for one test, 3.4 sec for all -> 200x? -> 500 seconds -> ~10 minutes

## Look at debug.app.covey.town: Hypotheses for why more than 5 players can join?
* Button `disabled` is broken: pretend that we tested this thoroughly (it's not the bug)
* `maximumOccupancy` is not being checked against in the backend?
    * How can we check this?
        * Just look at the code first? (Thumbs up) <— good if you already mostly understand the code
            * Confirmed by visual inspection: there is no check against maximumOccupancy
        * Test the API endpoint? (Thumbs down) <— good if you don’t understand or trust the code
    * How do we fix this?
        * We have to add a check for occupancy. Here's the first try:
        * Do we do that first?
        * NO: Write a test!
           * Write test before fixing so we could confirm test finds the bug! 
        * Then we fix it
            First fix:
 ```ts
  const room = CoveyRoom.findInstance(requestData.coveyTownID);
  if (!room) {
    return {
      isOK: false,
      message: 'Error: No such room',
    };
  }
  const newPlayer = new Player(requestData.userName);
  const newSession = await room.registerPlayer(newPlayer);
  assert(newSession.videoToken);
  if (room.occupancy > 5) {
    return {
      isOK: false,
      message: 'Sorry, this room is full',
    };
  }
```
First test:
```ts
it('Does not allow more than 5 users to join a room', async () => {
    /*
    What does our test do?
    Create a room
    Join the room 5 times
    Try to join the room a 6th time, expect an error
    */
    const newRoom = await apiClient
      .createRoom({isPubliclyListed: true, friendlyName: 'someName'});
    const promisesShouldBeAccepted = [];
    for (let i = 0; i < 5; i = i + 1) {
      promisesShouldBeAccepted.push(apiClient
        .joinRoom({coveyTownID: newRoom.coveyTownID, userName: 'test'}));
    }
    await Promise.all(promisesShouldBeAccepted);
    await expect(apiClient
      .joinRoom({coveyTownID: newRoom.coveyTownID, userName: 'test'}))
      .rejects.toThrowError();
```
* Are we done? Lets validate the fix using browser + react dev tools to force-enable the connect button
    * [uh-oh]: Still shows 6 in room
    * How can we check this?
        * Just look at the code first?
        * Just look at test first?
        * A: This time look at test first. Must be obvious from test what's wrong. Why doesn't test catch this
            * What's wrong? What's wrong is that the test doesn't check to make sure that the player wasn't added to the room! (If you finished HW3 you might recognize this kind of bug...)
New test:
```ts
    const newRoom = await apiClient
      .createRoom({isPubliclyListed: true, friendlyName: 'someName'});
    const promisesShouldBeAccepted = [];
    for (let i = 0; i < 5; i = i + 1) {
      promisesShouldBeAccepted.push(apiClient
        .joinRoom({coveyTownID: newRoom.coveyTownID, userName: 'test'}));
    }
    await Promise.all(promisesShouldBeAccepted);
    await expect(apiClient
      .joinRoom({coveyTownID: newRoom.coveyTownID, userName: 'test'}))
      .rejects.toThrowError();
    const roomsAfterRejection = await apiClient.listRooms();
    const ourRoom = roomsAfterRejection.towns.find(room => room.coveyTownID === newRoom.coveyTownID);
    assert(ourRoom);
    expect(ourRoom.currentOccupancy).toBe(5);
```
Look at code of patch, anyone see the bug? Let's talk it through. Read code line by line.
OK, where does occupancy come from? Adding session. OK, aha, here's the fix:
```ts
 const room = CoveyRoom.findInstance(requestData.coveyTownID);
  if (!room) {
    return {
      isOK: false,
      message: 'Error: No such room',
    };
  }
  if (room.occupancy > 5) {
    return {
      isOK: false,
      message: 'Sorry, this room is full',
    };
  }
  const newPlayer = new Player(requestData.userName);
  const newSession = await room.registerPlayer(newPlayer);
  assert(newSession.videoToken);
```
Run test: test does not pass. Is it worth trying to debug why not, or can we just guess it's a fencepost error and use the test to check?
This works:
```ts
  const room = CoveyRoom.findInstance(requestData.coveyTownID);
  if (!room) {
    return {
      isOK: false,
      message: 'Error: No such room',
    };
  }
  if (room.occupancy >= 5) {
    return {
      isOK: false,
      message: 'Sorry, this room is full',
    };
  }
  const newPlayer = new Player(requestData.userName);
  const newSession = await room.registerPlayer(newPlayer);
  assert(newSession.videoToken);
```

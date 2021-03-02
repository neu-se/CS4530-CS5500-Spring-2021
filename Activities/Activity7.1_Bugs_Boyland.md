---
layout: page
title: Activity 7.1
permalink: /Activities/activity7-1jtb
parent: Activities
---

# Activity 7.1: Bug Handling for covey.town

For this activity, you will perform bug report handling for covey.town. 

## A Rushed Release

After looking at the complicated structure Ripley set up for tests, Avery wasn't too happy with the structure of their code, so they rewrote it with new abstractions, but kept the same REST interface.  The new code passed the REST tests that Avery and Ripley put together, and because the managers were getting nervous about not having updated their code, it was installed on the server.

It seemed to work OK, but then some bug reports floated in.  In particular three reports came in that were assigned to Avery:

1. User pat555le@aol.com reports that they created a public town called 'Pat Birthday Party', but then they realized they wanted to make it private, they pressed the [Update Town] button, unchecked the "public" box and gave the room ID, but the system simply said "Error: undefined" and the room stayed public.  Then some sketchy people showed up during the party, which freaked everyone out.

2. User tayloRULESok@unott.ac.uk complained that the number of people listed in the room on the entry page isn't consistent with how many people you see when you enter.  Sometimes it says there are lots of people, but then when you go in, there's one one or two, although it seems eventually more people seem to appear out of thin air.  The bug is intermittent, mainly showing up in active rooms where people are coming and going a lot.

3. User xqz618@qq.888.ok.cn complained that the arrow keys work strange: sometimes they move a minuscule amount, at other times, they make big steps.  Sometimes they don't turn off and the avatar just goes in a straight line until it hits a wall or something.

As usual, Avery is quite busy, and leaves this mess to you. Your task is to
start processing these bug reports (as described in this week's lecture notes).

## Activity

In your breakout groups,
you can access the version of Covey.Town connected to Avery's buggy back-end here: [https://debug.app.covey.town](https://debug.app.covey.town). The front-end code is not available to you, but [you can clone the buggy back-end code on GitHub](https://github.com/neu-se/covey-town-roomservice-buggy). You can also make requests directly against our buggy back-end  at [https://debug.roomservice.covey.town](https://debug.roomservice.covey.town).

We will do this activity in stages.  After each stage, come back to the main room to take a poll and discuss results.

### Stage 1

First, see if each bug can be reproduced in the buggy app.  Then decide which category the bug should be dropped into:
* **U**nreproducible (can't tell if valid)
* **I**nvalid (even if reproducible)
* **R**eproducible and valid

Then for each reproducible bug, consider whether it is a problem with the back-end or the front-end.
If you think it's a bug in the front-end, then be prepared to defend your point of view to the front-end team!

When you have done this initial sorting, come back to the main session and answer a poll.

### Stage 2

Next, for the bugs that are valid for the back-end, we do this stage in which we have three new tasks:

1. You need to create a test case that fails because of the bug (but should succeed if the bug is fixed).
This test should be placed in `src/test/CoveyRoomREST.test.ts` so it can run easily on a locally started server (not on an external server, which can cause the test to be flaky).

2. You need to locate the fault.  Here you need to show your work: did you work back from the failure?  Or did you "fence the wolf" ?

3. You need to come up with a hypothesis why the bug is manifest.  This hypothesis doesn't need to be correct, but it should be plausible and testable.

## Deliverables

Drop the test(s) in a private slack chat to your group's TA.
The other parts will be discussed in the main session: appoint a spokesperson to give your group's results.

[comment]: # (LocalWords:  permalink UX Calin CoveyRoomID UI src

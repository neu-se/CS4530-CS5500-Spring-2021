---
layout: page
title: Activity 7.1
permalink: /Activities/activity7-1
parent: Activities
---

# Activity 7.1: Bug Handling for covey.town

For this activity, you will perform bug report handling for covey.town. 

## A Rushed Release

After looking at the complicated structure Ripley set up for tests, Avery wasn't too happy with the structure of their code, so they rewrote it with new abstractions, but kept the same REST interface.  The new code passed the REST tests that Avery and Ripley put together, and because the managers were getting nervous about not having updated their code, so it was installed on the server.

It seemed to work OK, but then some bug reports floated in.  In particular three reports came in that were assigned to Avery:

1. User pat555le@aol.com reports that they created a public room called 'birthday party', and then when they tried to make it a private (not publicly listed) room, the system wouldn't do it, and uninvited people wandered into their room.  When asked to explain what happened, they said that when the system asked for a password, they used the covey room ID that they got for the room, and then it gave an error without any information.

2. User tayloRULESok@unott.ac.uk complained that the number of people listed in the room on the entry page looks bugs sometimes. Sometimes it says there's just one, when there are in fact many people, and it looks like it jumps around sometimes. When asked to give more details, they said that it doesn't happen all the time, but especially when there's lots of people coming and going, the number gets very low, sometimes saying there are only two people when there are actually ten.

3. User xqz618@qq.888.ok.cn complained that the system advertised that no more than 5 people could enter a room, but they had a public room and it quickly filled up with so many people no one could do anything.  The service slowed to a crawl and it became completely useless.

## Activity

As usual, Avery is quite busy, and leaves this mess to you. Your task is to triage these bug reports: can you reproduce them, and if so, can you locate the bug (and even better: fix it)?

You can access the version of Covey.Town connected to Avery's buggy backend here: [https://debug.app.covey.town](https://debug.app.covey.town). The frontend code is not available to you, but [you can clone the buggy backend code on GitHub](https://github.com/neu-se/covey-town-roomservice-buggy). You can also make requests directly against our buggy backend  at [https://debug.roomservice.covey.town](https://debug.roomservice.covey.town).

One member of each team should use the PollEverywhere link posted in Slack to post their progress.

### Stage 1

For each bug report, determine if it can be reproduced as a bug in the REST service. Once you have made this determination, one member of your team should click "Yes" or "No" on PollEverywhere. If "Yes", a failing test should be created.  The test should be clear that the result is incorrect. Create an automated test (in CoveyRoomREST.test.ts), or test it manually using Postman. Post this test on PollEverywhere.

If the problem is not a valid bug report for the back end, then this will need to get tossed over the wall to the frontend team: maybe the bug that was reported is not a bug in the backend, but instead a bug in the frontend. If you think it's a bug in the frontend, then be prepared to defend your point of view to the frontend team! Once you have made this determination, post this explanation on PollEverywhere.

### Stage 2

For each bug that you identify *is* caused by a fault in the REST service, identify exactly what the fault is that is causing the bug.
Find the line (or lines) of code responsible, and propose a fix. Post this explanation on PollEverywhere.

## Deliverables

We'll go through these bugs one-by-one. With your teammates, start by trying to reproduce the bug. If you can reproduce it, write a test for it, and then localize and propose a fix for it. Post your progress as you go on PollEverywhere.

[comment]: # (LocalWords:  permalink UX Calin CoveyRoomID UI

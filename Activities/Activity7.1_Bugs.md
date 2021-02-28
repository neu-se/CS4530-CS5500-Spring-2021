---
layout: page
title: Activity 7.1
permalink: /Activities/activity7-1
parent: Activities
---

# Activity 7.1: Bug Handling for covey.town

For this activity, you will perform bug report handling for covey.town.


## The Story So far

After looking at the complicated structure Ripley set up for tests, Avery wasn't too happy with the structure of their code, so they rewrote it with new abstractions, but kept the same REST interface.  The new code passed the REST tests that Avery and Ripley put together, and because the managers were getting nervous about not having updated their code, so it was installed o the server.

It seemed to work OK, but then some bug reports floated in.  In particular three reports came in that were assigned to Avery:

1. User pat555le@aol.com complained that when they tried to make their birthday party room private, the system wouldn't do it, and uninvited people wandered into their room.  When asked to explain what happened, they said that when the system asked for a password, they used the covey room ID that they got for the room, and then it gave an error without any information.

2. User tayloRULESok@unott.ac.uk complained that the number of people listed in the room when people are deciding whether to come into the room often lags.  Sometime people say that since there was only one person there, they decided it would be too embarrassing to enter, but actually there were three already.  When asked to give more details, they said that it doesn't happen all the time, but especially when there's lots of people coming and going, the number gets very low, sometimes saying there are only two people when there are actually ten.

3. User xqz618@qq.888.ok.cn complained that the system advertised that no more than 50 people could enter the room, but they had a public room and it quickly filled up with so many people no one could do anything.  The service slowed to a crawl and it became complete useless.

## Activity

### Stage 1

For each bug report, Avery should figure out whether it can be reproduced as a client in the the REST tests.  If so, a failing test should be created.  The test should be clear that the result is incorrect.

If the problem is not a valid report for the back end, Avery should pass it on to the front-end folks to evaluate with a short report (paragraph) explaining why it doesn't appear to be a back-end problem.

### Stage 2

For the bug reports that get a test in the REST tests, Avery then needs to locate the fault.  Since Avery is new to the job, the managers want a report indicating the process of locating the fault: what steps were used to narrow down the problem to a single function/method.

Next Avery needs to give a diagnosis of the problem and add code to the project that checks for the problem and logs an error message at the point the fault happens.  Avery should *not* fix the problem, but may add a comment suggesting a fix.


## Deliverables

In summary, the deliverables for this activity are
1. Disposition of each of the three bug reports,
   with an explanation for each bug report forwarded to the front-end group.
   
2. For each bug retained, a test should be added to `CoveyRoomREST.test.ts` at the end.

3. For each of these bugs, explain how the fault was located, each step.

4. The final fault should be diagnosed, possible with a suggested fix.

[comment]: # (LocalWords:  permalink UX Calin CoveyRoomID UI

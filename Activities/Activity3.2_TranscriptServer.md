---
layout: lecture
title: Activity 3.2 Upgrading the Transcript Server
permalink: /Activities/Activity3.2
parent: Activities
---

# Activity 3.2: Upgrading the Transcript Server

Consider the transcript server in [Example 3.1]({{ site.baseurl }}{% link /Examples/Example 3.1 transcript-server.zip %}). How might it be improved?  Here are some possibilities:

1. Improve the error handling in the system.  Check the error paths and redo them to give predictable behavior and better error information to the client.

2. Upgrade `/studentids?name=...` so that it will return the ids of any student whose name matches some regexp.  Modify the return data to give the client more useful information.

3. Imagine that we want to store student term papers, represented as files, along with the grades.  
    * Design a set of REST requests to upload, index, and retrieve these term papers
    * Implement them.

4. What else can you think of?

For the coding portions of this exercise, start with the [zip file 3.1]({{ site.baseurl }}{% link /Examples/Example 3.1 transcript-server.zip %})zip file of the transcript server.  When you are done, make a zip of your project with `npm pack` and put the result in the Slack channel.  Be sure to label your posting with your room number and the names of all of the students in your room.

For the design portions of the exercise, create a document in whatever format you like, and post it in the Slack in a similar fashion.

We will go into breakout rooms in groups of 4 for (20 | 45) minutes. You should probably appoint a scribe to create your report. At the end of that time, we will reassemble and I will call on people to report on what their group decided.  I may call on anyone, so everyone in your group should be prepared to report.


**Instructors Note:** 

This can be done as a design exercise, with the second part of #2 and the first part of #3.  Or it can be done as a coding exercise.  You could have the students choose one of the enhancements, or you can assign one of them.

You could allocate 20 minutes for the design tasks, or 45 minutes for the coding tasks.





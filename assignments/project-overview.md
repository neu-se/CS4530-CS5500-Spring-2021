---
layout: page
title: Project Overview
permalink: /assignments/project-overview
parent: Assignments
---

# Project Overview
The assignments and project for this class are designed to mirror the experiences of a software engineer joining a new development team:
you will be "onboarded" to our codebase, make several individual contributions, and then form a team to propose, develop and implement a new feature.
The codebase that we'll be developing on is a remote collaboration tool called [Covey.Town](https://www.covey.town).
Covey.Town provides a virtual meeting space where different groups of people can have simultaneous video calls, allowing participants to drift between different conversations, just like in real life.
Covey.Town is inspired by existing products like [Gather.Town](https://gather.town), [Sococo](https://www.sococo.com), and [Gatherly.IO](https://www.gatherly.io) --- but it is an open source effort, and the features will be proposed and implemented by you!
All implementation will take place in the TypeScript programming language, using React for the user interface.


### Overview of Project Deliverables

| Date | Deliverable | Description | 
| -----| ----------- | ----------- |
| 2/12/21 | Team Formation | Specify preferences for teammates |
| 2/26/21 | Project Pitch | Propose a new feature for Covey.Town that can be implemented within 5 weeks |
| 3/12/21 | Project Plan | Refine the scope of your feature based on staff feedback, define detailed requirements and project acceptance criteria. Propose a high-level design. |
| 4/15/21 | Project Implementation and Documentation | Deliver your new feature, including design documentation and tests |

### Team Formation
All projects will be completed in a team of 3-4 students.
The very first deliverable for the project will be a team formation survey: you will be able to indicate
your preferences for teammates. Students may form their own teams (by specifying a complete team of 4 in the survey),
otherwise the instructors will assign students to teams based on responses to the survey.
All students in each team must be in the same section of the class.

### Project Pitch
All projects will involve frontend and backend development of a new feature for Covey.Town.
Once teams have been formed, you and your team will decide what kind of new feature you would like to build.
Your feature should be something that can be implemented within the timeframe allotted (5 weeks), and will be implemented in a fork of the main Covey.Town codebase.
Given that you will be up-to-speed on the Covey.Town codebase (and have been introduced to TypeScript, React, NodeJS, and testing frameworks),
and that you will have a team of four, we expect that the feature that you propose will be more complex than the feature implemented in the individual
homeworks.

[Read more about this deliverable in the Project Pitch Assignment]({{ site.baseurl }}{% link assignments/project-pitch.md %})

### Project Plan
Based on the feedback that you receive from the course staff, you will propose a detailed plan to implement your new feature.
The project plan will include:
* Revised user stories (based on feedback on the project pitch)
* Revised acceptance testing criteria (based on feedback on the project pitch)
* High level architecture: Describe the key components in your feature (or how your feature relates to the existing components of Covey.Town)
* Work breakdown: Define engineering tasks that will be necessary to implement your new feature. Provide a weekly schedule for completion of these tasks.

We will use the work breakdown and schedule as the basis for weekly check-ins with your team's TA.

### Project Implementation and Documentation
Your final team deliverable will be a "release" of your new feature on GitHub (with tests), and will be accompanied by a demo.
*Optionally,* you may also open a pull request to merge your feature into our main repository (submitting a pull request, or the pull request being merged into our
codebase is independent of the grade you receive, but provides a platform for more visiblity of your project). 

Your final team deliverable will include:
* The implementation of your new feature
* Automated tests for your new feature
* A README.md document that includes instructions to deploy Covey.Town with your new feature
* A FEATURE.md document that describes the final version of your use cases
* A DESIGN.md document that includes documentation of your design (using CRC cards, UML class diagrams, and/or UML sequence diagrams as you find necessary; remember that a picture is worth a thousand words!). In particular,
    for any change that you had to make to the existing codebase, provide a rationale for why the change was made, and what alternatives were considered.
* A 10 minute video that demonstrates the usage of your feature
    
Accompanying the final team deliverable will be an *individual reflection*, which every student must submit on their own, which will include your reflections on:
* The evolution of your project concept: How does the project that you delivered compare to what you originally planned to deliver? What caused these deviations?
* The software engineering processes that you feel could have been improved in your project: were there any procesess that in hindsight, you wish that you followed, or wish that you followed better?
* Your team dynamic: Provide a frank (and ideally, blameless) postmortem of your and your teammates collaborative performance and participation. If you had to do this same project over with the same teammates, what would *you* have done differently (or not) to improve your team's overall performance?

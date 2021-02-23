---
layout: page
title: Project Plan
permalink: /assignments/project-plan
parent: Assignments
---
# Project Plan **Due Friday March 12, 10:00pm EST**{: .label .label-red }
The teaching staff will review your project pitch, provide you feedback on the scope of your project, and assign a specific TA as your project mentor.
You should use the feedback on your project pitch to revise the scope of your project, and discuss any changes with your assigned TA (time will be provided in class for these meetings).
The goal of this assignment is to finalize the intended scope of your project based on these discussions and to outline the engineering and documentation tasks that you will need to accomplish in order to complete your project.
 
The project plan will include:
* *Revised* Introductory problem statement: what problem in Covey.Town does your (proposed) feature solve? Provide a paragraph (or two) that describes why you are interested in building this feature.
* *Revised* User stories and acceptance criteria: high level description of how users will interact with your new feature. 
* Revised acceptance testing criteria (based on feedback on the project pitch)
* High level architecture: Describe the key components in your feature (or how your feature relates to the existing components of Covey.Town)
* Work breakdown: Define engineering tasks that will be necessary to implement your new feature. 
* Schedule: Provide a weekly schedule for completion of these tasks. 

We list page *maximums* for each section as general guidance of what we are willing to grade. Please do not feel compelled to use all of the pages provided, and remember that a diagram or table can be as expressive (or more) as a comparable amount of text.

## Revised Problem Statement, User Stories and Acceptance Criteria (max 2 pages)
If your problem statement has changed in response to feedback from the course staff, please include a revised problem statement. If there are no changes to your problem statement from your original project pitch, then please include your original problem statement along with a note that this problem statement is unchanged.

If your user stories and acceptance criteria have changed in response to feedback from the course staff, then please include the revised user stories and acceptance criteria. If there are no changes to your user stories and their acceptance criteria, then please include your original user stories and acceptance criteria along with a note that they are unchanged. Please use the same format [as specified in the project pitch]({{ site.baseurl}}{% link assignments/project-pitch.md %}) for your user stories and acceptance criteria.

## High Level Architecture (max 1 page)
All projects must include a frontend component and a backend component that interact with the existing Covey.Town codebase.
Based on your knowledge of the Covey.Town codebase, propose an architecture for your new feature, enumerating the key components and how those components will interact.
Create a diagram that shows the main components that you will construct.
Your architecture should include all key components necessary to implement all of your user stories.
This architecture should be at a relatively high level: think in terms of components, not in terms of classes.
In terms of component communication, think in terms of communication styles (which component calls which?) and not in terms of specific API implementations.

Your architecture must include:
* At least one frontend component and at least one backend component
* A description of how those two components will communicate
* A listing of any third party/external services or APIs that your feature will employ (if any)


For your reference, this diagram is representative of the current architecture of Covey.Town.
You may find it useful to use a diagram like this to describe how the main components that make up your new feature will fit into the existing code.

![Covey.Town High Level Architecture]({{ site.baseurl }}{% link assignments/assets/covey-town-architecture.png %})

## Work Breakdown (max 4 pages)
Define engineering, documentation, and infrastructure tasks for your project (please be sure to consider all three categories of tasks).
Start by considering each of your user stories, and identify what work needs to be done to implement each of them.
Each work item should be associated with at least one user story - this will be useful for prioritizing tasks later in the semester in the event that some features can not be delivered in time.
Your work breakdown can take the format of a simple textual list, or items scheduled in an issue tracker, like GitHub issues.
It is hard to say (generically) how many work items are necessary, but you should consider breaking down tasks into small enough chunks that each can be accomplished in a week or less.

## Schedule (max 2 pages)
Prepare a detailed schedule with personnel assignments for completing each of the tasks defined in your work breakdown. Make sure to consider dependencies among tasks (this has to be done before that). Be realistic, and leave time for contingencies.
Remember that you will need to have a demo prepared of your feature by 4/15 - just 5 weeks from the due date of this assignment. Be sure to leave time for testing and quality assurance.

You do not need to use any special format (such as Gantt or Pert charts). If you choose to create your work breakdown in an issue tracker, you may of course also use the issue tracker to schedule your tasks.
 
## Submission 
Your project plan should be submitted as a single PDF in GradeScope to the assignment "Project Plan."
Each team submits a single document to GradeScope: when uploading the submission, GradeScope will ask you who your teammates are, and then will associate this submission with every member of your team.
This assignment is due March 12. **In order to provide timely feedback on your project plan, we can not allow any DRC accomodations for late submissions on this assignment.**


## Grading
The project plan will be graded on the following rubric:

Satisfactory:
* Project pitch includes all sections specified; no section is longer than the maximum permitted length
* Any and all feedback received on the project pitch is incorporated into the revised project problem statement and user stories
* The high level architecture includes at least one frontend and backend component, along with the communication scheme for those components. The architecture is realistic: the components described appear to completely cover the implementation necessary to cover the user stories.
* The work breakdown includes engineering, documentation, and infrastructure tasks. Tasks are mapped to user stories, and all user stories have at least one task. Tasks are defined at a granularity that each can realistically be completed in less than a week. 
* The schedule includes each task from the work breakdown. The schedule considers realistic dependencies between tasks. Each task is assigned to at least one team member.

Meets minimum expectations:
* Project pitch includes all sections specified; no section is longer than the maximum permitted length
* Key feedback on project scope is incorporated into the revised project problem statement and user stories. Some feedback (for example, on formatting of user stories, or suggested, but missing user stories) is omitted.
* The high level architecture includes at least one frontend and backend component, but may not cover all implementation components necessary to cover all user stories, and may omit communication schemes.
* The work breakdown schedule includes engineering tasks, which are mapped to user stories. Infrastructure and documentation tasks might be omitted; not all user stories are covered by implementation tasks.
* The schedule includes each task from the work breakdown, and each task is assigned to at least one team member. Dependencies between tasks might be omitted in the schedule.

Submissions that do not meet the criteria for "meets minimum expectations" will receive no credit.

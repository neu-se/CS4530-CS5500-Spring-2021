---
layout: page
title: Project Final Deliverable
permalink: /assignments/project-deliverable
parent: Assignments
nav_order: 8
---
# Project: Final Deliverable **Due Friday April 16, 10:00pm EST**{: .label .label-red }
The final project deliverable is the implementation, available in github and (front-end) deployed on Netlify, and the documentation turned in to gradescope.

# Project Implementation and Documentation

Your final team deliverable will be a "release" of your new feature on GitHub (with tests), and will be accompanied by a demo.
*Optionally,* you may also open a pull request to merge your feature into our main repository (submitting a pull request, or the pull request being merged into our
codebase is independent of the grade you receive, but provides a platform for more visibility of your project). 

### Change Log
* 3/23: Initial Release 
* 4/8: Add page limits, add requirement to submit a link to GitHub repo
* 4/12: Add submission info for video, clarify how to submit code and documentation
* 4/15 Update: Lots of students had trouble submitting their code/documentation archive on GradeScope, so we're doing it on Canvas now. However, if you already submitted on GradeScope successfully then you're all set!

## Contents

Your final team deliverable will include:
* The implementation of your new feature, deployed to Netlify + Heroku
* Automated tests for your new feature
* A README.md document that includes instructions to deploy Covey.Town with your new feature
* A FEATURE.md document that describes the final version of your use cases
* A DESIGN.md document that includes documentation of your design (using CRC cards, UML class diagrams, and/or UML sequence diagrams as you find necessary; remember that a picture is worth a thousand words!). In particular,
    for any change that you had to make to the existing codebase, provide a rationale for why the change was made, and what alternatives were considered.
* A 10 minute video that demonstrates the usage of your feature
    
Accompanying the final team deliverable will be an *individual reflection*, which every student must submit on their own, which will include your reflections on:
* The evolution of your project concept: How does the project that you delivered compare to what you originally planned to deliver? What caused these deviations?
* The software engineering processes that you feel could have been improved in your project: were there any processes that in hindsight, you wish that you followed, or wish that you followed better?
* Your team dynamic: Provide a frank (and ideally, blameless) postmortem of your and your teammates collaborative performance and participation. If you had to do this same project over with the same teammates, what would *you* have done differently (or not) to improve your team's overall performance?

### Submission Instructions
(This section added 4/12)
#### Code and documentation
Place your `README.md`, `FEATURE.md` and `DESIGN.md` files in the root of your project git repository. After you have pushed all of your code (and documentation) to your team's GitHub repository, create [a release](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository) on GitHub, and apply the tag version `final-submission`. After your release is created, you'll find that there is now a `.zip` that can be downloaded from GitHub that contains a snapshot of your entire repository. Download this zip file, unpack it, and follow the instructions that you provided in your README to double-check that the course staff will be able to run your project (this step is handy to make sure that you didn't forget to include some key files in git). If needed, you can delete the release, make some changes, and re-release up until the deadline. **Submit this zip file to Canvas** under the assignment "Final Project - Code and Documentation Submission". (4/15 Update: Lots of students had trouble submitting this on GradeScope, so we're doing it on Canvas now. However, if you already submitted on GradeScope successfully then you're all set!)

#### Demo video
Record your demo video and upload it to [Canvas](https://northeastern.instructure.com/courses/60188/assignments/870889), under the assignment "Demo Video for Final Project".

#### Individual Reflection
Create a PDF of your reflection, and submit it to GradeScope, under the assignment "Project - Individual Reflection".

## Grading
The final project deliverable will be graded on the following rubric:

### 50% Implementation

#### Satisfactory:
* Implemented feature satisfies the acceptance criteria as proposed by the team and as interpreted by the course staff
* Implemented feature is deployed to a publicly-accessible URL, using Netlify and Heroku for hosting as outlined in Activity 10.1
* Implemented feature contains no ESLint warnings or errors; does not include any eslint-disable or ts-ignore flags

#### Meets minimum requirements:
* Implemented feature largely satisfies acceptance criteria as proposed by the team, but may not meet the course staff’s interpretation of those criteria.
* Implemented feature is deployed to a publicly-accessible URL, using Netlify and Heroku for hosting as outlined in Activity 10.1
* The implementation may have some obvious flaws, but largely works without crashing.
* Implemented feature does not include any eslint-disable or ts-ignore flag

### 10% Testing
Includes automated tests for any new or modified backend features:

#### Satisfactory:
* Any new or modified backend features include tests that validate that the feature works as intended. Frontend tests are not required (but will be accepted!)
* Tests contains no ESLint warnings or errors; does not include any eslint-disable or ts-ignore flags

#### Meets minimum requirements:
* Any new or modified backend features include a test, which may or may not be an effective test.
* Tests may contain ESlint warnings (but no errors); does not include any eslint-disable or ts-ignore flags

### 10% Documentation -- README

#### Satisfactory:
* `README.md` file contains detailed instructions to deploy the application with your new feature - modified from our initial installation instructions to include any new setup necessary for your feature.
* The course staff is able to follow these instructions to deploy your application.
* The document is at most 2 pages (fewer pages are absolutely acceptable, consider this a rough limit) **Added 4/8**
* The document includes a link to your git repository if public, or instructions to access it if it is private **Added 4/8**

#### Meets minimum requirements:
* `README.md` file contains instructions to deploy the application with your new feature, perhaps missing key steps for installing/deploying the application
* The course course staff were able to stumble through configuring it without contacting you.
* The document is at most 2 pages (fewer pages are absolutely acceptable, consider this a rough limit) **Added 4/8**
* The document includes a link to your git repository if public, or instructions to access it if it is private **Added 4/8**


### 10% Documentation - FEATURES
#### Satisfactory:
* `FEATURES.md` file contains sufficient documentation for a user to interact with your updated version of Covey.Town.
* The documentation covers all steps that the user would need to take to exercise all of your user stories.
* Course staff were able to follow these instructions to successfully interact with your project implementation.
* The document is at most 4 pages (fewer pages are absolutely acceptable, consider this a rough limit) **Added 4/8**


#### Meets minimum requirements:
* `FEATURES.md` contains documentation for a user to interact with your updated version of Covey.Town, but perhaps does not fully describe how.
* The course staff were able to figure out how to use it through trial and error.
* The document is at most 4 pages (fewer pages are absolutely acceptable, consider this a rough limit) **Added 4/8**


### 10% Documentation - DESIGN
#### Satisfactory:
* `DESIGN.md` file contains a description of any substantive changes to the existing Covey.Town codebase, and the architecture of your new code.
* It uses CRC cards, or state diagrams or any of the other techniques that help describe the structure.
* The document is at most 4 pages (fewer pages are absolutely acceptable, consider this a rough limit) **Added 4/8**


#### Meets minimum requirements:
* `DESIGN.md` includes a description of all major changes to the code compared to our existing Covey.Town codebase.
* The document is at most 4 pages (fewer pages are absolutely acceptable, consider this a rough limit) **Added 4/8**


### 10% Demonstration video
#### Satisfactory:
* Fits in required time (10 minutes)
* Contains a brief description of the high level components in Covey.Town introduced or modified by the team.
* Successfully demonstrates all of the primary implemented user stories

#### Meets minimum requirements: 
* Fits in required time (10 minutes)
* Contains a brief description of the high level components in Covey.Town introduced or modified by the team
* Demonstrates at least one of the implemented user stories


## Individual Reflection

Accompanying the final team deliverable will be an individual reflection, which every student must submit on their own.
Satisfactory completion of all parts of this reflection is required to receive an "A" grade in the course.

### Project Concept

Reflect on the evolution of your project concept: How does the project that you delivered compare to what you originally planned to deliver? What caused these deviations?

#### Satisfactory:
* Is at least 2 paragraphs long;
* Includes at least 1 paragraph describing all variances from original project concept;
* Includes at least 1 paragraph of personal reflection on the cause of any variances from the project concept.

### Project Process

Reflect on the evolution of your development process: How did the process by which you designed and implemented evolve from your original project plan? Were there any processes that in hindsight, you wish that you followed, or wish that you followed better?

#### Satisfactory:
* Is at least 2 paragraphs long;
* Includes at least 1 paragraph describing all variances from the software development processes envisioned in your original project plan;
* Includes at least 1 paragraph describing software processes (described in class or not) that you wish you had followed, or wish you had followed better, supported by evidence from your personal experience working on the project.

### Project Team

Reflect on your team dynamic: Provide a frank (and ideally, blameless) postmortem of your and your teammates collaborative performance and participation. If you had to do this same project over with the same teammates, what would you have done differently (or not) to improve your team’s overall performance?

#### Satisfactory:
* Is at least 2 paragraphs long;
* Includes at least 1 paragraph reflecting on your own performance as a team member on this project, including what you would have done differently, given what you know now;
* Includes at least 1 paragraph reflecting on your overall team dynamic, including strengths and weaknesses. Reflect on how you might have organized your team differently given what you know now.



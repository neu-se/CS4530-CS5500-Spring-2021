---
layout: home
title: CS4530/5500, Spring 2021
nav_exclude: true
seo:
  type: Course
  name: CS4530 + CS5500, Fundamentals/Foundations of Software Engineering
---

# {{ site.title }}: {{ site.tagline }}
{: .mb-2 }
{: .fs-6 .fw-300 }

{% if site.announcements %}
{{ site.announcements.last }}
[Announcements](announcements.md){: .btn .btn-outline .fs-3 }
{% endif %}

## Overview
Building, delivering and maintaining successful software products requires more than being good at programming. Software engineering encompasses the tools and processes that we use to design, construct and maintain programs over time. Software engineering has been said to consider the "multi person development of multi version programs." Development processes that work well for a single developer do not scale to large or even medium-sized teams. Similarly, development processes that work well for quickly delivering a one-off program to a client cause chaos when applied to a codebase that needs to be maintained and updated over months and years. This class will begin to explore these tradeoffs throughout the entire software development lifecycle, with a particular focus on how these decisions affect the quality of the resulting software. 

This class will serve as an introduction to the field of software engineering, covering key topics such as:

-   **Requirements gathering and specification** <br />How to make sure that you build the product that your customer really wants
-   **Designing code for reuse, for readability, and for scale** <br />How to avoid reinventing the wheel? What makes code readable? Where does performance fit into designs? When do we decide when to revisit old design decisions, and how do we replace them? Can we avoid the mistakes that past developers have made?
-   **How to organize your development process to collaborate effectively** <br />How do we communicate our designs with others? How do we structure and coordinate development activities? How do we measure the performance of these processes, and tweak them over time?
-   **How to ensure that your code works, is secure, and broadly speaking, "does the right thing"** <br />How do we measure different quality attributes like usability, scalability and performance? How do we minimize the cost of defects? How do we automatically test complex systems? Can we automatically prove the absence of some kinds of defects?

## Course Outcomes

-   Students will gain an understanding of all phases of the software engineering lifecycle (requirements, design, implementation, testing, deployment, maintenance).
-   Students will prepare for co-op interviews by gaining an understanding of current technologies and vocabulary.
-   Students will have experience applying software engineering methods to address the requirements, design and implementation phases of a non-toy software project in a small-team environment

## Course Project
The assignments and project for this class are designed to mirror the experiences of a software engineer joining a new development team:
you will be "onboarded" to our codebase, make several individual contributions, and then form a team to propose, develop and implement a new feature.
The codebase that we'll be developing on is a remote collaboration tool called [Covey.Town](https://www.covey.town).
Covey.Town provides a virtual meeting space where different groups of people can have simultaneous video calls, allowing participants to drift between different conversations, just like in real life.
Covey.Town is inspired by existing products like [Gather.Town](https://gather.town), [Sococo](https://www.sococo.com), and [Gatherly.IO](https://www.gatherly.io) --- but it is an open source effort, and the features will be proposed and implemented by you!
All implementation will take place in the TypeScript programming language, using React for the user interface.

### Acknowledgements
This class and its contents were inspired by Software Engineering courses at various institutions, including:
* Columbia's Software Engineering Course, COMS W4156
* CMU's Software Engineering Course, [17-313](https://cmu-313.github.io/)
* GMU's Web App Development Course, [SWE 432](https://cs.gmu.edu/~tlatoza/teaching/swe432f19/home.html)
* NCSU's Software Engineering Course, [CSC 326](https://sites.google.com/a/ncsu.edu/csc326-software-engineering/) and its [iTrust term project](https://dl.acm.org/doi/10.1145/3183377.3183393), also Chris Parnin's [DevOps](https://github.com/CSC-DevOps/Course) course.
* Past iterations of CS5500 at Northeastern, as prepared by [Mike Weintraub](https://pages.github.ccs.neu.edu/CS5500-CourseMaterials/2020-spring-mw/index.html), [Mike Shah](http://www.mshah.io/comp/Fall20/FSE/public/index.php), and [Frank Tip](https://pages.github.ccs.neu.edu/CS5500-CourseMaterials/2019-Fall-Section1/index.html).

This website is built using [Kevin Lin's Just the Class](https://kevinl.info/just-the-class/) Jekyll template. The term project, Covey.Town, is built using code from the [Clowdr open source project](https://github.com/clowdr-app/clowdr-web-app).
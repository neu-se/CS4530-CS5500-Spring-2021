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
Building, delivering and maintaining successful software products requires more than being good at programming. Software engineering encompasses the tools and processes that we use to design, construct and maintain programs over time. Software engineering has been said to consider the âmulti person development of multi version programs.â Development processes that work well for a single developer do not scale to large or even medium-sized teams. Similarly, development processes that work well for quickly delivering a one-off program to a client cause chaos when applied to a codebase that needs to be maintained and updated over months and years. This class will begin to explore these tradeoffs throughout the entire software development lifecycle, with a particular focus on how these decisions affect the quality of the resulting software. 

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

This course will involve the development of a software system in a team setting. The project will exhibit significant complexity and will provide students with an opportunity to employ techniques covered during the lectures (e.g., agile development techniques, design patterns, refactoring, and functional and structural testing). Students will work in teams of approximately 4 people.

The system will be implemented using the TypeScript programming language and using React for the construction of the system's user interface.

## Textbooks

This class is a survey of many sub-areas of software engineering, and an unfortunate result of this is that there is no single textbook that is appropriate for this class. However, there are several texts that have chapters that are quite relevant, and most of these books are available for free for Northeastern students through O'Reilly's Safari Books online. To create your account, first visit this page: <https://www.safaribooksonline.com/library/view/temporary-access/> and then select "Not Listed? Click Here" for institution, then enter your @northeastern.edu email address. After this first account creation, you'll be able to log in directly to Safari Books Online with your @northeastern.edu email and no need for 2FA (hooray!). The schedule will list which chapters of which texts are relevant for each lecture:

-   ["Software Engineering at Google" By Titus Winters, Tom Manshreck and Hyrum Wright](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/) <br />
    This book is effectively a manual that describes the software engineering practices at Google, and the rationale behind those practices
-   "The Programmer's Brain" by Felienne Hermans ([Not on Safari](https://www.manning.com/books/the-programmers-brain))<br />
    An early-release text that links studies in human cognition to software engineering tasks like reading and writing code.
-   ["Fundamentals of Software Architecture" By Mark Richards and Neal Ford](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/)<br />
An overview of software architectural patterns and their role in successful software projects.
-   ["Design Patterns Explained: A New Perspective on Object-Oriented Design" by Alan Shalloway and James Trott](https://learning.oreilly.com/library/view/design-patterns-explained/0201715945/)<br />
In-depth coverage of design patterns, considering why they are important in software development, how to apply them, and descriptions of some common patterns.
-   ["Refactoring: Improving the Design of Existing Code" By Martin Fowler](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/)<br />
The definitive list of "code smells" that should be avoiding in programming, matched up with "refactoring" techniques to improve that code
-   ["Site Reliability Engineering" By Betsy Beyer, Chris Jones, Niall Richard Murphy, Jennifer Petoff](https://learning.oreilly.com/library/view/site-reliability-engineering/9781491929117/)<br />
    Site Reliability Engineering is a topic very related to software engineering: while software engineers might focus primarily on the design and development of software systems, SRE's are engineers who focus on the deployment, monitoring and maintenance of that software. This book documents the SRE practices at Google.
-   ["Learn React with TypeScript 3" by Carl Rippon](https://learning.oreilly.com/library/view/learn-react-with/9781789610253/)<br />A solid reference for React, describing how to get started, plus more advanced features like React's Router and testing using Jest
-   ["Programming TypeScript" by Boris Cherny](https://learning.oreilly.com/library/view/programming-typescript/9781492037644/)<br />A useful introduction to TypeScript, written assuming familiarity with programming in languages like Java, C# or python.


### Acknowledgements
This class and its contents were inspired by Software Engineering courses at various institutions, including:
* Columbia's Software Engineering Course, COMS W4156
* CMU's Software Engineering Course, [17-313](https://cmu-313.github.io/)
* NCSU's Software Engineering Course, [CSC 326](https://sites.google.com/a/ncsu.edu/csc326-software-engineering/) and its [iTrust term project](https://dl.acm.org/doi/10.1145/3183377.3183393)
* Past iterations of CS5500 at Northeastern, as prepared by [Mike Weintraub](https://pages.github.ccs.neu.edu/CS5500-CourseMaterials/2020-spring-mw/index.html), [Mike Shah](http://www.mshah.io/comp/Fall20/FSE/public/index.php), and [Frank Tip](https://pages.github.ccs.neu.edu/CS5500-CourseMaterials/2019-Fall-Section1/index.html).



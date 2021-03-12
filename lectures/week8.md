---
layout: lecture
title: Week 8 - Code Improvement
permalink: /modules/week8-improvement
parent: Modules
---
### Learning Objectives:

In this week of the course, you will learn about
* Program Verification
* Bug Finders
* Code Smells
* Refactoring


### Important Dates:
* [HW3]({{ site.baseurl }}{% link assignments/hw3.md %}) **Due Mar 5 by 10pm**{: .label .label-red }
* [Project Plan]({{ site.baseurl }}{% link assignments/project-plan.md %}) **Due Mar 12 by 10pm**{: .label .label-red }
* [HW4]({{ site.baseurl }}{% link assignments/hw4.md %}) **Due Mar 19 by 10pm**{: .label .label-red }


### Lessons:

* 8.1: Static Program Analysis

    * [Video](https://northeastern.instructure.com/courses/60188/pages/lesson-8-dot-1-static-program-analysis-video?module_item_id=5560120)
    * [Slides]({{ site.baseurl }}{% link /Slides/Lesson 8.1 Static Program Analysis.pptx %}) 
    * [PDF]({{ site.baseurl }}{% link /Pdfs/Lesson8.1.pdf %})

* 8.2: Code Smells and Refactoring

    * [Video](https://northeastern.instructure.com/courses/60188/pages/lesson-8-dot-2-code-smells-and-refactoring-video?module_item_id=5560123)
    * [Slides]({{ site.baseurl }}{% link Slides/Lesson 8.2 Code Smells and Refactoring.pptx %}) 
    * [PDF]({{ site.baseurl }}{% link Pdfs/Lesson8.2.pdf %})
    
### Resources

* [Activity 8.1]({{ site.baseurl }}{% link Activities/Activity8.1_Lint.md %}) (Boyland)
* [Activity 8.2]({{ site.baseurl }}{% link Activities/Activity8.2_Refactor.md %}) (Boyland)
* In-class slides and notes from Prof Bell's Section (Thursday): [Slides PDF]({{ site.baseurl }}{% link SynchronousSlides-Bell/2021-03-11 Covey.Town Internals.pdf %}), [Slides PPT]({{ site.baseurl }}{% link SynchronousSlides-Bell/2021-03-11 Covey.Town Internals.pptx %}), [Slides Keynote]({{ site.baseurl }}{% link SynchronousSlides-Bell/2021-03-11 Covey.Town Internals.key %}). There's a recording of Prof Bell walking through Covey.Town codebase in Canvas/Zoom on March 11 (can't post link here).
* Project resources: [Refactored Covey.Town code to support WASD, HJKL](https://github.com/neu-se/covey.town/commit/203e9a647d50f8547b7b51a530d3b87055f0e4a7), [Phaser Game Engine Tutorial](https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6), [Twilio React App Starter Code](https://github.com/twilio/twilio-video-app-react)


### Additional Readings:

#### Articles
* [Lessons from Building Static Analysis Tools at Google](https://cacm.acm.org/magazines/2018/4/226371-lessons-from-building-static-analysis-tools-at-google/fulltext) (CACM article from 2018)
* [Technical Debt: From Metaphor to Theory and Practice](https://resources.sei.cmu.edu/asset_files/WhitePaper/2012_019_001_58818.pdf) (IEEE Software artice from 2012)

#### Books

* [Refactoring: Improving the design of existing code](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/)

* [Software Engineering at Google](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/) especially the following chapters
  - [Chapter 15: Deprecation](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch15.html)
  - [Chapter 20: Static Analysis](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch20.html#static_analysis-id00082)

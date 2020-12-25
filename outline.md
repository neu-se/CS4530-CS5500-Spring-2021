---
layout: page
title: Course Outline
nav_exclude: true
permalink: /outline/
---

## Detailed Class Outline

This outline is a perhaps overly-ambitious attempt to condense a survey of software engineering into a single, one-semester class. This document is publicly accessible, and [lives in GitHub](https://github.com/neu-se/CS4530-CS5500-Spring-2021/blob/master/outline.md).

* Course Overview
	* What is SE, broadly? Programming vs SE. Small vs mid vs large scale development practices. [SE@Google Ch 1](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch01.html#what_is_software_engineeringquestion_ma)
	* Example of how SE can bring in broader insights to improve programming: cognitive processes that affect coding [Programmer's Brain Ch 1](https://livebook.manning.com/book/the-programmers-brain/chapter-1/v-1/1)
	* Synchronous lesson plan:
		* Introductions (PollEverywhere survey)
		* Discuss key course policies
		* Open discussion of what people want to learn from the class, material from lectures. Lots of cool tidbits relatable to non-coding tasks in Felienne's book
* When and how do we start developing: User stories, prioritizing tasks, X driven development
	* How do you start a new project? How to refine a project concept to user stories and break it into tasks.
	* What drives design + development? RDD/FDD/TDD/BDD/CDD/MDD/DDD (responsibility/functionality/test/behavior/contract/model/domain) [xDD workshop at SPLASH 2012](http://manclswx.com/workshops/splash12/), [xDD workshop final report](http://manclswx.com/workshops/splash12/final_report.html), [Rebecca Wirfs-Brock OOPSLA '08 talk](https://dl.acm.org/doi/10.1145/1449814.1501018), [Dennis' summary](http://manclswx.com/workshops/splash12/rebecca_talk_summary.html)
	* Course project overview 
	* Synchronous lesson plan:
		* Discuss pros and cons of different design philosophies - brainstorm from class with some guidance, then talk about different applications and when you might choose a different methodology. Use PollEverywhere to seed the discussion
		* Demo covey.town, discuss methodologies that people think will be most effective for developing this into a successful product
* Unit Testing
	* Context: last class we talked about XDD, TDD is a reasonable approach to take in many cases, we are taking it in this case, so we're starting with tests.
	* Why TDD and testing? Discuss cost of bugs (more expensive if found later in development process, more expensive if found by users, most expensive if result in vulnerability), Beyonce rule. [SE@CGoogle Ch 11](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch11.html#testing_overview) + [Hyrum's Law](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch01.html) + [XKCD 1172](https://xkcd.com/1172/). Bugs not always in code, but that's where we're starting.
	* "Program testing can be used to show the presence of bugs, but never to show their absence" (Dijkstra's Law)
	* Black box vs white box (and testing publicly visible APIs vs internal methods)
	* Equivalence classes, boundary value analysis
	* Brief discussion of testing frameworks
	* Note that unit vs integration testing is a spectrum, we'll discuss this boundary later in the class, for now focus on "unit" is technically unsound.
	* Synchronous lesson plan:
		* Lesson review
		* Equivalence class activity: Tastyburger ordering site?
		* Programming activity: writing some tests for something...
* Test Quality
	* What makes a good test? Most important answer: a good test is one that someone else can easily debug when it fails in 3 months and you've forgotten what it was supposed to do (make sure to connect this all back to team development). [SE@Google Ch 12](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch11.html#testing_overview)
	* What makes a bad test? [van Deursen's 2001 test smells](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.29.486&rep=rep1&type=pdf), [Peruma's 2019 test smells](https://testsmells.github.io/assets/publications/CASCON2019_TechnicalPaper.pdf)
	* Test adequacy criteria (statement, branch, mutation coverage)
	* Assertion/oracle design and placement - remember that coverage != defect detection
	* Synchronous lesson plan:
		* Lesson review, step through examples of good and bad tests, pausing for discussion - note that some of the good test/bad test things are subjective, more important to be able to explain why something is good or bad than to identify a violation of a rule
		* Programming activity: testing?
* Design Principles
	* Why do we care about design principles? Maintainability, evolution. [YAGNI](https://www.martinfowler.com/bliki/Yagni.html) argues that we don't build features we think we might need in the future - instead, we should make our code so that we can easily build those features later, LoTR example.
	* SOLID, DRY principles
	* Synchronous lesson plan:
		* Step through a bunch of examples of code that violates SOLID principles, discuss for each example as a class WHY the code is bad
* Knowledge sharing, documenting designs
	* Importance of collaboration in design, also the "bus factor," maybe an OK place to discuss some teamwork stuff from [SE@Google Ch 2](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch02.html#how_to_work_well_on_teams).
	* How to document class-level designs: basic UML class diagrams, sequence diagrams, CRC cards. Discuss the importance of shared vocabulary (shared between devs, also to management and to clients). Bug-finding in designs. See "Object Oriented Design & Patterns" (Cay Horstmann) Ch 2
	* Synchronous lesson plan:
		* Lesson review
		* CRC design activity: Voicemail system (see Horstmann Ch 2.12 for worked example)
* Design Patterns
	* Motivation - from Christopher Alexander's participatory design work, then GoF software patterns, note that patterns may be seen as failures of programming language design
	* "The carpenters" design patterns conversation from Ralph Johnson, retold in [DP Explained Ch 5](https://learning.oreilly.com/library/view/design-patterns-explained/0321247140/ch05.html).
	* Several example patterns
	* Synchronous lesson plan:
		* Lesson review
		* Discuss design patterns "in the real world": [extremely influential in the creation of SimCity](https://www.iconeye.com/icon-056-february-2008/will-wright-interview-3), examples of university-specific design patterns from [The Oregon Experiment](https://en.wikipedia.org/wiki/The_Oregon_Experiment)
		* Discuss and react to Richard Gabriel's [Think of the GoF as helping losers lose less](https://groups.google.com/g/comp.lang.lisp/c/3GoG3oR9qYA/m/2mXvq-1sDYoJ)
* Architecture Design
	* Motivation - we talked about how to design (and document that design) of several classes, which helped us make that code more flexible. What about doing same for whole, complex systems, like Covey.Town?
	* "Architecture is about the important stuff... whatever that is" - [Ralph Johnson](https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist))
	* What are the characteristics of different architectural designs? Design for reliability, testability, performance, learnability, etc. Skim [Fundamentals of Software Architecture Ch 1](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/ch01.html#ch-introduction), some more useful stuff in [Ch 4](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/ch04.html#ch-architecture-characteristics-defined)
	* Modularity as a key goal, discuss cohesion, coupling and connascence [Fundamentals of Software Architecture Ch 2](https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/ch03.html#ch-modularity)
	* Classic architectures: layered, pipeline, event-driven
	* Synchronous lesson plan:
		* Lesson review
		* Discuss: what architectural characteristics matter in Covey.Town? What about other projects?
		* ???
* Microservices + REST
	* Motivation - microservices as the catch-all modern mash-up architecture. [Fowler on Microservices](https://martinfowler.com/articles/microservices.html)
	* Big picture: lots of individual components, each is kind of a black box, maybe has its own internal architectural design.
	* REST - as a design philosophy for hooking up these components
	* ExpressJS - as a case study in architecture design for one of those components
	* Synchronous lesson plan:
		* Lesson review
		* Discuss: microservice vs monolith tradeoffs. How big is a "micro"-service?
		* Programming activity: REST client + server
* Asynchronous programming
	* Motivation - more about communication. When talking about network I/O, asynchrony almost always needs to come up.
	* Asynchronous programming styles: callbacks, promises, async/await [Modern JS for the Impatient Ch 9](https://learning.oreilly.com/library/view/modern-javascript-for/9780136502166/ch09.xhtml#ch09)
	* System-level design for timing + ordering assumptions: do our components communicate synchronously or asynchronously? Implications for fault tolerance.
	* Synchronous lesson plan:
		* Lesson review
		* Programming activity: writing tests for the REST client/server from last lesson - need to focus more on hooking up async actions (like telling the testing framework when we're done)
* Testing Larger Units: mocks, spies, etc
	* Motivation - Flaky tests: big system level tests are guaranteed to have false alarms. Classic google example of ad server that takes too long to return an ad - [SE@Google ch 14](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch14.html). How do you make this thing better?
	* Integration tests vs unit tests. Google's small vs medium vs large tests.
	* Test doubles and high-fidelity fakes as a fix to keep our units small. [SE@Google Ch 13](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch13.html#test_doubles)
	* Make sure to close by distinguishing problems that unit tests can't find (e.g. failed assumptions that the mock makes and the mocked system doesn't implement)
	* Synchronous lesson plan:
		* Lesson review
		* Programming activity: mock/spy framework?
* Static Analysis & Bug finders
	* Return to Dijkstra's law ("Program testing can be used to show the presence of bugs, but never to show their absence") - If program testing can't show their absence, can something else?
	* Maybe can't prove absence of ALL bugs, but can we prove absence of some classes of bugs?
		* Example: embedding secret keys in code in public repos
	* Discuss what is possible with static analysis vs what is not - false positives and false negatives
	* Example: [FindBugs](http://findbugs.sourceforge.net)
	* [Lessons from building static analysis tools at google](https://cacm.acm.org/magazines/2018/4/226371-lessons-from-building-static-analysis-tools-at-google/fulltext)
	* [CodeQL](https://securitylab.github.com/tools/codeql)
	* Synchronous lesson plan:
		* Lesson review
		* Run some static analysis tools in groups on codebases, then have discussion of what was found
* Debugging
	* What do we do when we find a defect? Process side: issue trackers, deciding who to assign a bug to
	* Capturing enough details to reproduce bug (e.g. steps to reproduce, stack trace, core dump, more invasive logging)
	* Fault localization & root cause analysis. Delta debugging. 
	* Debugging with printlns vs debuggers. Cover several of the techniques in [Effective Debugging: 66 Specific Ways to Debug Software and Systems](https://learning.oreilly.com/library/view/effective-debugging-66/9780134394909/)
	* Debugging as hypothesis testing [Using Hypotheses as a Debugging Aid](https://arxiv.org/abs/2005.13652)
	* Synchronous lesson plan:
		* Lesson review
		* Discussion/reflection: What were the most difficult debugging scenarios you have encountered at NEU or working?
		* Activity: Debug some annoying issue in Covey.Town, students work in groups to form hypotheses of root cause and describe steps to test those hypotheses.
* UI Design + React
	* Motivation: While some software isn't user-facing, most is. There are other classes on HCI, this lecture might encourage you to go seek them out.
	* Usability as a design goal + user centered design
	* UI-design as an SE problem: design for reuse (common widget libraries)
	* UI-design as an SE problem: architecture for presenting changing data to users, and responding to requests from users. [React](https://reactjs.org) and [AngularJS](https://angular.io) as modern libraries that help us write UIs.
	* React: function components + hooks. Simple TodoList example.
	* Synchronous lesson plan:
		* Lesson review
		* Programming activity: extend TodoList example to have edit/delete functions, connect it to ExpressJS backend.
* Pull Requests + Code review
	* Motivation - News of the world starts today: How do we manage our process working with others?
	* Branch-based development, pull request as a quality gate on merge
	* Style guides and rules - mostly just the importance of having some consistent rules that don't get in the way [SE@Google Ch 8](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch08.html#style_guides_and_rules)
	* Code review - why (code quality + education across team/org), how (checklists), who (a team mate, not you) [SE@Google Ch 9](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch09.html#code_review-id00002), [Modern code review: a case study at google](https://dl.acm.org/doi/10.1145/3183519.3183525), [Code Reviewing in the Trenches: Understanding Challenges, Best Practices and Tool Needs](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/05/MS-Code-Review-Tech-Report-MSR-TR-2016-27.pdf)
	* Synchronous lesson plan:
		* Lesson review
		* Discussion: what is your personal style guide? 
		* Work on projects
* Technical Debt, Code Smells + Refactoring
	* Motivation - What is technical debt and how do we avoid it? [Technical Debt: From metaphor to theory and practice](https://resources.sei.cmu.edu/asset_files/WhitePaper/2012_019_001_58818.pdf) and [Ward Explains Debt Metaphor](http://wiki.c2.com/?WardExplainsDebtMetaphor). Some code-level issues can be noticed in code review... "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
	* Code smells as a way to detect some contributing factors to technical debt. Cover a few smells. Refactoring as a structured approach to address those smells. Cover a few refactorings. Link to book [Refactoring: Improving the design of existing code](https://learning.oreilly.com/library/view/refactoring-improving-the/9780134757681/).
	* Other kinds of tech debt is harder: return to microservices vs monolith, coordination cost of starting out with microservices + their communication cost vs starting out with monolith. Architectural refactorings.
	* Google's approach to "Large-Scale Changes" - great examples in [SE@Google Ch 22](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch22.html#large-scale_changes)
	* Technical debt not always bad, think of it like a mortgage (but hopefully not sub-prime). [SPLASH 14 TechDebt Workshop Report](http://manclswx.com/workshops/splash14/technical_debt_2014_final_report.html)
	* Synchronous lesson plan:
		* Lesson review
		* Work on projects
* Deployment Infrastructure 
	* Motivation: How do we deploy our apps in a way such that a "success disaster" of our app becoming popular doesn't result in the entire thing crashing?
	* Available abstractions for machines: raw machines, VMs, containers; fleets of same with autoscaling like Heroku...
	* Plus abstractions for infrastructure as a service that result in "serverless" setups: hosted DB's, hosted KV stores, things like Back4App
	* More machines -> more failures, need to worry about fault tolerance as a requirement
	* Storing persistent state - how/where?
	* Lots of interesting ideas in [SE@Google Ch 25](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch25.html#compute_as_a_service)
	* Synchronous lesson plan:
		* ...
* Continuous Development + DevOps
	* Motivation: How do we get out software into that deployment infrastructure? If we can automate that, maybe we can do do it often and we can move fast.
	* Continuous development as an evolution of classical software processes like waterfall/agile
	* Continuous integration for fast feedback loops [SE@Google Ch 23](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch23.html)
	* Staging + development environments to mirror those complicated deployment infrastructures that we discussed in last lecture
	* Developers as operators of those staging environments -> DevOps
	* Deployment pipelines, release management [SE@Google Ch 24](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch24.html#continuous_delivery-id00035)
	* Synchronous lesson plan:
		* ...
* Distributed Software Engineering
	* Motivation: What is the big difference between building an app that one person uses on one machine, vs something that many people use, or: that one person uses but runs on many machines? Answer: networks. Why are networks a problem? Failure modes, latency/speed of light
	* Brief review of performance measures (latency + throughput)
	* Brief review of physical limitations of speed of light vs Doherty Threshold (err, really let's just say 150msec, despite HACF)
	* New failure mode: timeout
	* Shared fate vs split brain
	* CAP theorem
	* Key distributed abstractions: consensus ([ZooKeeper](https://zookeeper.apache.org)), K/V stores ([Redis](https://redis.io))
	* Testing distributed systems: hard, lots of open problems, a practical reference is [Jepsen](https://jepsen.io), also discuss briefly Chaos Engineering: [Netflix's Simian Army](https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116)
	* Synchronous lesson plan:
		* ...
* Security
	* Motivation: Security is often overlooked, then bolted on with poor results. Failures in security can be seen as failures in requirements + design (that is - threat modeling) or implementation (in which case, it's a bug!)
	* Why is security hard? Reflect on [Bill Gates: Trustworthy Computing (2002)](https://www.wired.com/2002/01/bill-gates-trustworthy-computing/), followed by [Celebrating 10 years of Patch Tuesday](https://www.zdnet.com/article/celebrating-10-years-of-patch-tuesday/); 
	* Basics of threat modeling: understand the difference between a system that is designed to be secure against a random hacker looking for exploits vs a motivated, nation-state attacker.
	* How to make a system secure by design? Choices of language (avoid buffer overflows by construction), choice of framework and tooling (avoid injection vulnerabilities by construction with an ORM, avoid man in the middle by construction with SSL)
	* Why are we still [having zero-day exploits that can own your iPhone from a text message](https://www.bleepingcomputer.com/news/security/apple-patches-three-actively-exploited-ios-zero-days/)? Answer: constant tension between security and performance: preventing buffer overflow + RCE's is easy, but not free.
	* Security you can use: secrets management (e.g. [Vault](https://www.vaultproject.io), [KeyWhiz](https://square.github.io/keywhiz/)), 2FA, avoid using unmaintained libraries, auto-update of dependencies with [Dependabot](https://dependabot.com), have a reasonable trust/threat model.
	* Synchronous lesson plan:
		* ...
* SE For Equity
	* Motivation - With great power comes great responsibility. "Don't be evil" generally requires conscious thought to be sure that we are not implicitly discriminating against a class of human.
	* Examples: many in AI, like [Google labels black people as gorillas](https://www.wired.com/story/when-it-comes-to-gorillas-google-photos-remains-blind/), [Bias in predictive sentencing](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing), [price discrimination in online sales based on location and browser](https://www.ftc.gov/system/files/documents/public_comments/2015/09/00011-97593.pdf) - leading to [cheaper prices for wealthier individuals](https://www.wsj.com/articles/SB10001424127887323777204578189391813881534)
	* Examples: Inclusivity and accessibility. Closed captions, screen reader support. [Domino's Would Rather Go to the Supreme Court Than Make Its Website Accessible to the Blind](https://www.eater.com/2019/7/25/8930669/dominos-supreme-court-website-accessible-blind-users) [Appellate Court decision remains](https://www.usatoday.com/story/money/2019/10/07/dominos-pizza-website-accessibility-supreme-court-wont-hear-case/3904582002/). Reminder that accessibility aids help more than just those they were originally designed for - consider [Curb cuts](https://99percentinvisible.org/episode/curb-cuts/), which were a huge battle for wheelchair-bound individuals end up helping people pushing strollers, deliveries, etc. Closed captions benefit not just the hard of hearing, but anyone who can't turn on sound right now, and also allows for full-text search. Profit-driven companies should consider innovation to be able to reach this broader user base - ["Rather than refusing to take the money of those of us with disabilities, why not innovate and take our money?"](https://www.cnbc.com/2019/07/25/dominos-asks-supreme-court-to-say-disability-protections-dont-apply-online.html). For more on history of ADA: [Crip Camp](https://www.netflix.com/search?q=crip&jbv=81001496)
	* Examples: Climate impact. Training huge ML models is... energy-consuming [Energy and Policy Considerations for Deep Learning in NLP](https://arxiv.org/abs/1906.02243). Content Delivery Networks (for video and other data) consume an enormous amount of energy [On the energy consumption computation in Content Delivery Networks](https://www.sciencedirect.com/science/article/abs/pii/S2210537916301196)
	* Codes of ethics? Professional engineering fields vs CS. [Does ACM's code of ethics change ethical decision making in software development?](https://dl.acm.org/doi/10.1145/3236024.3264833)
	* GenderMag and persona-based UX evaluation. [GenderMag](https://gendermag.org/index.php), [GenderMag Teaching Materials](https://sites.google.com/site/gendermagteach/)
	* Importance of having a diverse group of people in the room, all of whom feel comfortable pointing out flaws like these [SE@Google Ch 4](https://learning.oreilly.com/library/view/Software+Engineering+at+Google/9781492082781/ch04.html#ch01fn54)
	* Synchronous lesson plan:
		* GenderMag evaluation of Covey.Town?
* Acceptance + Usability Testing
	* Motivation - Not all bugs are in code, some might be in spec! How to get the spec right. How do we do what is best for our clients, and also our users?
	* Understanding users - focus groups, interviews, reminder of requirements gathering (this is probably the main discussion of requirements engineering in the class right now)
	* Acceptance testing: alpha testing, dog fooding
	* Usability testing: focus groups, heuristic evaluation
	* Usability testing: A/B testing [N=10^9 Automated Experimentation at Scale](https://www.slideshare.net/optimizely/opti-con-2014-automated-experimentation-at-scale), [PlanOut](https://github.com/facebook/planout)
	* Synchronous lesson plan:
		* ...
* SE Metrics and Estimation
	* Motivation: How to track progress, estimate how long something will take, improve our team? Important to avoid using metrics for fine-grained evaluation (e.g. of engineers or teams) because it's easy to game metrics, but works well in aggregate. [Classic Dilbert](https://dilbert.com/strip/1995-11-13)
	* Classical motivating example: Brooks' Mythical Man-Month
	* Code complexity metrics: cyclomatic complexity, etc - are these actionable? (No). [A critique of software defect prediction models](http://www.eecs.qmul.ac.uk/~norman/papers/defects_prediction_preprint105579.pdf), [Software Engineering Metrics: What Do They Measure and How Do We Know](http://kaner.com/pdfs/metrics2004.pdf)
	* General concerns with measuring things - [McNamara Fallacy](https://chronotopeblog.com/2015/04/04/the-mcnamara-fallacy-and-the-problem-with-numbers-in-education/)
	* Perhaps a better approach: Goal/Signal/Metric model, with QUANTS: Quality of Code/Attention from engineers/iNtellectual complexity/Tempo and velocity/Satisfaction goals [SE@Google Ch7](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch07.html#measuring_engineering_productivity)
	* Synchronous lesson plan:
		* ...
* Team Dynamics
	* Motivation: how to play nice with others? We thought about doing this at the start of the semester, but the duration of the project is so short that the problems you run into (and more importantly their solutions) are different than in the real world. In the real world, you need to work with your team-mates for years, and there are consequences for not being a team player. In most class projects, you get at most a semester, and it's hard to provide significant consequences for behaving poorly. So, here we are.
	* Lots of great stuff in [SE@Google Ch 2](https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/ch02.html#how_to_work_well_on_teams), including:
	* The myth of the 10x developer. Yes, half of developers are below average... but this is a silly way to go
	* The bus factor: importance of knowledge sharing, tracking pace of progress
	* 3 Pillars of social interaction: Humility, respect, trust
	* Give and take criticism
	* Blameless post-mortem culture
	* Synchronous lesson plan:
		* [True color personality styles activity](http://bonnernetwork.pbworks.com/w/file/fetch/70546645/BonCur.TrueColors.pdf)
* Demos
* Exam

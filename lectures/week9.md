---
layout: lecture
title: Week 9 - Distributed Systems & Security
permalink: /modules/week9-distributed-security
parent: Modules
---
### Learning Objectives:

In this week of the course, you will learn to:
* Describe 5 key goals of distributed systems and the 8 fallacies that make it hard to achieve those goals
* Characterize the benefits of replication and partitioning in distributed systems
* Evaluate the tradeoffs between consistency and availability in distributed systems
* Recognize the causes of and common mitigations for common vulnerabilities in web applications

### Important Dates:
* [HW4]({{ site.baseurl }}{% link assignments/hw4.md %}) **Due Mar 19 by 10pm**{: .label .label-red }


### Lessons:

* 9.1: Why Engineer Distributed Software? [Video](https://northeastern.instructure.com/courses/60188/modules/items/5614640), Slides: [PDF]({{ site.baseurl }}{% link /Pdfs/Lesson 9.1 - Why Engineer Distributed Software.pdf %}), [PPT]({{site.baseurl}}{% link /Slides/Lesson 9.1 - Why Engineer Distributed Software.pptx %}), [Keynote]({{site.baseurl}}{% link /Slides/Lesson 9.1 - Why Engineer Distributed Software.key %})
* 9.2: Strategies for Engineering Distributed Software [Video](https://northeastern.instructure.com/courses/60188/modules/items/5614661), Slides: [PDF]({{ site.baseurl }}{% link /Pdfs/Lesson 9.2 - Strategies for Engineering Distributed Software.pdf %}), [PPT]({{site.baseurl}}{% link /Slides/Lesson 9.2 - Strategies for Engineering Distributed Software.pptx %}), [Keynote]({{site.baseurl}}{% link /Slides/Lesson 9.2 - Strategies for Engineering Distributed Software.key %})
* 9.3: Software Engineering + Security Threats [Video](https://northeastern.instructure.com/courses/60188/modules/items/5614663), Slides: [PDF]({{ site.baseurl }}{% link /Pdfs/Lesson 9.3 - Software Engineering + Security Threats.pdf %}), [PPT]({{site.baseurl}}{% link /Slides/Lesson 9.3 - Software Engineering + Security Threats.pptx %}), [Keynote]({{site.baseurl}}{% link /Slides/Lesson 9.3 - Software Engineering + Security Threats.key %})
* 9.4: Engineering Secure Software [Video](https://northeastern.instructure.com/courses/60188/modules/items/5614749), Slides: [PDF]({{ site.baseurl }}{% link /Pdfs/Lesson 9.4 - Engineering Secure Software.pdf %}), [PPT]({{site.baseurl}}{% link /Slides/Lesson 9.4 - Engineering Secure Software.pptx %}), [Keynote]({{site.baseurl}}{% link /Slides/Lesson 9.4 - Engineering Secure Software.key %})

### Resources
* Prof Bell's [in-class notes reviewing Distributed Systems]({{site.baseurl}}{%link SynchronousSlides-Bell/2021-03-15-Distributed Systems Review Notes.pdf %})
* [Juice Shop Activity]({{site.baseurl}}{%link 
Activities/Activity9.2_JuiceShop.md %})

### For further reading:
* ["Distributed Systems for Fun and Profit"](http://book.mixu.net/distsys/index.html) by Mikito Takada
* ["Fallacies of Distributed Computing"](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing) (Wikipedia)
* ["The CAP FAQ - The Paper Trail"](https://www.the-paper-trail.org/page/cap-faq/)
* ["OWASP Top 10 Web Security Risks"](https://owasp.org/www-project-top-ten/)
* [LGTM analysis of transcript server](https://lgtm.com/projects/g/neu-se/transcript-app/?mode=list) and [XSS example on transcript server](https://rest-example.covey.town/transcripts/%3Ch1%3ECongratulations%21%3C%2Fh1%3E%20You%20are%20the%201000th%20visitor%20to%20the%20transcript%20site%21%20You%20have%20been%20selected%20to%20receive%20a%20free%20iPad.%20To%20claim%20your%20prize%20%3Ca%20href%3D%27https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDLzxrzFCyOs%27%3Eclick%20here%21%3C%2Fa%3E%3Cscript%20language%3D%22javascript%22%3Edocument.getRootNode%28%29.body.innerHTML%3D%27%3Ch1%3ECongratulations%21%3C%2Fh1%3EYou%20are%20the%201000th%20visitor%20to%20the%20transcript%20site%21%20You%20have%20been%20selected%20to%20receive%20a%20free%20iPad.%20To%20claim%20your%20prize%20%3Ca%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDLzxrzFCyOs%22%3Eclick%20here%21%3C%2Fa%3E%27%3Balert%28%27You%20are%20a%20winner%21%27%29%3B%3C%2Fscript%3E) (This link might be annoying, but is not malicious)
* Software supply-chain vulnerabilities: [ESLint 2018 attack](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes), [Podcast on SolarWinds attack](https://www.theverge.com/2021/1/26/22248631/solarwinds-hack-cybersecurity-us-menn-decoder-podcast)

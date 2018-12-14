---
metaData:
    itemSlug: ddcmr-launched
    itemName: DurableDrupal Content Migration Rescue website launched
    itemType: article
    language: en-US
    disabled: false
    published: true
    publishedDate: 2018-12-14
    createdDate: 2018-11-01
    modifiedDate: 2018-11-01
articleTitle: DurableDrupal Content Migration Rescue website launched
articleSubTitle: Let's completely demystify decoupled, fullstack Javascript web apps. As well as how to rescue your content and migrate to these exciting new architectures.
author: 'Victor Kane'
tags:
    - tagSlug: blog
      tagName: Blog
---
---articleSummary
---
Access resources freely shared on this site to rescue your content, to structure up, to migrate from an obsolete, non-performant monolithic architecture to a completely open and truly scalable set of applications and services.

---articleBody
---
So aren't you sick and tired of tutorials that show how "awesome" and "easy" fullstack JavaScript is, and how you can whip up an app in 5 minutes? Sometimes that's even true. But the apps used in all the shallow examples 99% of the time have one thing in common: they are completely trivial and never touch the real world on several important points:

* They are rarely re-usable
* They almost always include some kind of "free" but actually paid service on the backend that puts your content behind a wall
* They don't take into account how to do things like update to newer versions of frameworks, or truly deploy apps for production
* They sometimes do nothing more than repeat what is already in the docs

That's why we're so excited about launching this website today. We've carefully documented everything it took to analyze, design, implement, test and launch, including the structured content server and the content management utilities. All decoupled parts of the system are covered, as well as server provisioning, the coding workflow and deployment process. We will be publishing everything as fast as we can review, clarify and complete our notes.

Let's go over what's available for you to get into right now, and what's scheduled to appear shortly.

Available right now on the DurableDrupal Content Migration Rescue Website:

* The [ddcmr monorepo](https://github.com/DurableDrupal/ddcmr) is free to use with the same license used by Wikipedia (the Creative Commons Attribution-ShareAlike License). The repo includes:
    * A Node.js/Express.js/Mongoose/MongoDB API-first structured content server (SCS) which exposes that content in a straightforward REST API (see the `scs` folder)
    * A sample Vue.js/Nuxt.js/Vuetify.js based client web application (CWA) which consumes that REST API (see the `cwa` folder)
    * A command-line and yaml/markdown based CMS which, using the same syntax and conventions as many popular static web site content management systms, allows you to edit your content with simple text editors and send it to the structured content server (see the `cms` folder).
* The guide: [DurableDrupal website. The making of.](https://www.durabledrupal.org/case-studies/durable-drupal-website-making-of): Follow this website's analysis, design, implementation, deployment and content workflow based on a modern and open full-stack JavaScript decoupled API-first architecture.

And this is only the beginning. Now that the website is up and running, we will publish our second case study, the migration of AwebFactory.com, the project founder's professional website now running on Drupal 6, to the same decoupled, API-first solution we are sharing here. The steps taken will also be thoroughly explained in detail so that they will be useful for the handling of real world problems, as a kind of cookbook.

Available shortly:

* Completion and publishing on site for your use of all the steps making up the guide [DurableDrupal website. The making of.](https://www.durabledrupal.org/case-studies/durable-drupal-website-making-of). Each step is thoroughly detailed and will be augmented by additional explanations and instructions, including videos.
* More detailed guides and case studies which you can follow step-by-step. For example, how to immediately set up an instance of an entire system, and start tinkering with it to see how it can help you as a starter kit for your next project.
* The book [Durable Drupal Content Migration Rescue](https://www.durabledrupal.org/books/durable-drupal-content-migration-rescue), published as a freely readable online work in progress. This is the book central to DurableDrupal, its methods and tools, and most significant case studies, especially that detailing the content migration rescue process for AWebFactory.com itself. The book will include examples of migration of legacy content from Drupal 6 and Drupal 7 sites.

If you are not already signed up, make sure you [leave us your email right on our home page](https://www.durabledrupal.org/) so we can notify you as content is updated and published.

You can also help us by:

* [starring us on github](https://github.com/DurableDrupal/ddcmr)
* [telling us about your project](http://durabledrupal.org/info/projects)
* [choosing us as your team mentors](http://durabledrupal.org/info/mentoring)

Check out the following articles already published on the site:

* [What is Content Migration Rescue and why do we need it?](https://www.durabledrupal.org/what-why/what-is-content-migration-rescue)
* [Content Migration Rescue Pros and Cons](https://www.durabledrupal.org/what-why/content-migration-rescue-pros-cons)
* [Steps you can take](https://www.durabledrupal.org/steps-you-can-take)
* and more...

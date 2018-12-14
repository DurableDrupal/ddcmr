---
metaData:
    itemSlug: ddcmr-business-model
    itemName: DDCMR Business Model
    itemType: article
    language: en-US
    disabled: false
    published: true
    publishedDate: 2018-11-28
    createdDate: 2018-11-26
    modifiedDate: 2018-11-26
author: 'Victor Kane'
articleTitle: DDCMR Business Model
articleSubTitle: The DDCMR Business Model Canvas. Whose needs does the solution meet? And will people really use it?
tags:
    - tagSlug: steps
      tagName: Steps
    - vocabSlug: step-topic
      vocabName: Step Topic
      tagSlug: process
      tagName: Process
    - vocabSlug: step-topic
      vocabName: Step Topic
      tagSlug: analysis-and-design
      tagName: Analysis and Design
    - vocabSlug: step-topic
      vocabName: Step Topic
      tagSlug: business-model
      tagName: Business Model
    - vocabSlug: step-topic
      vocabName: Step Topic
      tagSlug: mvp
      tagName: MVP
    - vocabSlug: step-topic
      vocabName: Step Topic
      tagSlug: prototype
      tagName: Prototype
---
---articleSummary
---
Why do we need to care about business models to build a website?

---articleBody
---

### A Business Model for DurableDrupal

**Why we can't move forward without a business model**

Well, we can and too often do. But most of us are learning that doing so is just a recipe for having to tear everything down and start over. Maybe several times. So specifying our Business Model is a natural starting point and context for the entire project. Every time.

> At a time when businesses are becoming more and more automated -- when oftentimes a computer system makes up the largest part of a business -- understanding the business and how it works can be key to success. Existing businesses evolve and change; new businesses can require many complex, interconnecting pieces. In both instances, a visual model of the business can provide important insights into whether it is doing the right thing and how it might be improved.

Says IBM (Jim Heumann in [Introduction to business modeling using the Unified Modeling Language (UML)](https://www.ibm.com/developerworks/rational/library/360.html)).

Now, a visual business model done in UML (business use case + business object model) could turn out to be a valuable bridge for those of us involved in development, as we move on to analysis and design, and content modeling (see [deep content modeling](#)). But for healthy dialog with all stakeholders (that's the thing) the [Business Model Canvas](https://en.wikipedia.org/wiki/Business_Model_Canvas#/media/File:Business_Model_Canvas.png) proves itself invaluable time and time again. At a single glance you can visualize the Value Proposition (problem/solution/market fit), the customers, costs and finances.

A really attractive and easy-to-understand 2-minute video explains the virtues of the business model canvas and how the 9 panes making it up are structured and related [Business Model Canvas Explained](https://www.youtube.com/watch?v=QoAOzMTLP5s). One comes to appreciate immediately the uncanny power they have to sum up business models in a single diagram and why it is an indisuputable leader at this point.

What follows is our own Business Model Canvas for DurableDrupal Content Migration Rescue.

Even though we tend to print out the canvas and attach easy to move around and edit post-its to each pane during weekly team discussions ("is this real?", "what needs changing?", "what are we forgetting?"), it's often practical also to use an outline format, which we are using here (and which can be placed under version control).

> Note: to the traditional 9 sections, we have added a "Competition" section also, which we think adds an additional valuable aspect. Of course, this could be included in the Value Proposition pane.

The aim of the canvas is to answer one simple question: Whose needs does the solution meet, and will anyone actually use it?

### Presenting The DDCMR Business Model Canvas

#### Customer Segments

* Individuals and Entities who have sites running on D6, D7 or even D8, and want to structure and migrate their content in accordance with a new and/or evolving business model in order to move on with their content and not start over from scratch
    * Developers and agencies interested in learning the process at their own pace, using freely available community resources
    * Those who want to do it themselves, with the support of and in return for contributing to, the DurableDrupal community
    * Those who need mentoring services offered by DurableDrupal support engineers giving full time, part time or hourly support to their teams
    * Clients in need of the process as a service
* Content consumers on various levels (learners in need of books, videos, courses, etc., in order to follow along step-by-step)
* b2b version: Big Users of WordPress, Drupal, Joomla, Sharepoint, JAVA CMS's, Spring....whatever monolith; or a large company going through a [NYTimes "Innovation" moment](https://archive.org/details/nyt_innovation_2014).

#### Value Proposition

* Pain points:
    * Currently unstructured content
    * Redundancy in content delivery and content creation workflow media (doc and pdf mania in editorial workflows, and "What version do you have?"; or worse, "Which version got published finally?")
    * Inability to reuse content
    * Inability to audit/search past content
    * Inability or difficulties when attempting to publish on different devices
    * Huge costs to adapting to new devices
    * See NYTimes "Innovation" document to discover a rich set of pain points for large and small scale needs alike
    * Even opting for "headless" CMS, the need for going behind expensive paywalls that own our stuff!
    * The need to join top-heavy communities that get bogged down and bog us down with complexities only serving the needs of Big Tech, not ours!
    * Obstacles to keeping it simple! And keeping it up-to-date!
* Problems
    * We have our stuff unstructured and stuck in an old obsolete Drupal site, and we need to structure it according to our new business model and current needs, and rescue the existing content for SEO purposes, as well as a basis for moving on
    * Apart from being too slow and impossible to scale due to its obsolete PHP based monolithic architecture, D8, being an entirely newly devised product, has such a steep learning curve that completely modern and much better frontend and backend technologies are often easier to learn and to work with.
    * The monolith is dead! But guidance is needed on which architecture to move on to.
    * Many of the solutions offered involve having your content hijacked and kept behind a (very expensive) paywall (see "headless CMS" [Contentful pricing](https://www.contentful.com/pricing/), for example, for any non-trivial project, apart from the fact that you can't host your own content even if you want to, has a starting cost of $879/month *for each project*)
* Products and solutions
    * We offer an open source process in the context of a growing community (website + social networks + repositories). The website content will be made up of articles, books, case studies and guides, videos, tutorials, tools, and practical real world examples, with links to the repos and all resources and services being offered.
    * The books explain the DDCMR process, and the principles, methods and tools involved, for a growing number of case studies
        * Model your content according to your real Business Model as understood from the point of view of all stakeholders
        * Implement the Content Model using Open API First Architecture
        * Content Migration Rescue. Populate the structured content server and Move On with your legacy content
        * Migrate from Content Monolith to Structured Content Model
        * To Open API First Architecture
        * Real world content workflows
        * Real world web app deployment
    * We offer support and mentoring services
    * We offer Content Migration Rescue Services
    * We offer straight up content app development

#### The Competition

##### CMS

* [Gather Content](https://gathercontent.com/)
* [Contentful](https://www.contentful.com/)
* Ponzu
* Strapi
* Directus
* Keystone
* Prismic
* Built.io Contentstack
* Cloud CMS
* Kentico Cloud
* Contenta (Drupal)
    * https://github.com/contentacms
    * [Contenta JS](https://github.com/contentacms/contentajs) (which recognizes the need for a Node.js proxy to offset Drupal 8's inability to scale as a structure content server)
> Your LAMP stack (or alternative) runs your Contenta CMS installation. We all know how flexible and powerful Drupal is. But at the same time it is not great from a performance point of view. In fact it can rapidly become your bottleneck. (ContentaJS README)
* Reservoir (Acquia)
    * https://dev.acquia.com/blog/introducing-reservoir-a-distribution-for-decoupling-drupal/19/06/2017/18296
    * https://github.com/acquia/reservoir
* Waterfall (Drupal SDK)
* Netlify [A Complete CMS with No Server and 18 Lines of Code](https://www.netlify.com/blog/2017/08/17/a-complete-cms-with-no-server-and-18-lines-of-code/) works like Ponzu (golang)
    * [tutorial netlify cli](https://github.com/netlify/netlify-cli-tutorial)
    * https://github.com/netlify/netlify-cms
    * https://www.netlify.com/docs/git-gateway/
    * [Create a static site in 15 minutes or less using Vue/Nuxt and Netlify](https://codeburst.io/create-a-static-site-in-15-minutes-or-less-using-vue-js-e4e2a9945ee6)

##### Educational Resources

While DDCMR has as its main objective the building of a contributing community and the sale of project-based team mentoring and services rather than the sale of content, these sites show interesting approaches to tech content outreach.

* [Kent Dodd's Testing Javascript](https://testingjavascript.com/)
* [Personal eduction site with many bite-size steps](https://adamwathan.me/)
* [Flavio Copes Frontend Development Tutorials](https://flaviocopes.com/ + email campaigns)
    * He uses [GumRoad](https://gumroad.com/): [1250+ page ebook with all tutorials for 19.98](https://gumroad.com/l/FKbd)
    * [Course, Course + Mentoring](https://thenodecourse.com/)
        * In our case the course (and code) would always be free, but we have the opportunity of offering mentoring to accompany individual courses and other instructional levels.

#### Customer Relationships

* Online and personal
* Community based around durabledrupal.org, the book, together with open source examples, tools and repositories
* Online personal Mentoring and support services
* Remote contracting with Rescue as a Service
* Face-to-face mentoring and services

#### Channels

* Awareness
    * Customer Development via content pushed by social networks and a variety of campaigns to DurableDrupal.org
        * Articles
        * Books and code based on real-world case studies
        * Case Studies and tutorial Guides broken down into re-usable bite-size "mix and match" Steps (searchable by topic categories)
        * Accompanying videos
    * Funding platforms
    * Books and videos and streaming in their own right, on their appropriate platforms
    * Presentations and seminars, etc.
* Evaluation
    * Content, Recommendations
* Purchase
    * PayPal
    * DurableDrupal and AWebFactory payment gateways and methods
* Delivery and After sales/free use support
    * Online services
    * Zoom
    * Trello
    * Discord
    * GitHub
    * Community support throughout

#### Revenue Streams

* Content sales, funding and donations
    * Book
    * Exceptional Courses and Paid Tutorials (video + resources)
* DurableDrupal Mentoring services
* DurableDrupal Rescue as a service
* AWebFactory contracting revenue

#### Key Activities

* Activities Overview
    * Biz and process engineering
        * [Steve Blanc's How to Build a Startup (The Lean LaunchPad) free course on Udacity](https://www.udacity.com/course/how-to-build-a-startup--ep245)
        * [Victor Kane's Setting up a Reusable and Durable Drupal Lean Process Factory](https://latinamerica2015.drupal.org/session/setting-reusable-and-durable-drupal-lean-process-factory.html)
            * [Slides (English)](http://awebfactory.com/drupalcon2015lean/#/)
            * [Presentation video on YouTube (Main Presentation, Spanish](https://www.youtube.com/watch?v=bNbkBvtQ8Z0)
            * [Desgrabación completa, corregida y ampliado de la presentación](http://awebfactory.com/node/533)
    * Determine and advertise resources exhibiting our solvency as a professional entity
        * Write the book using AWebFactory.com as first test case, with further case studies (lit) to be added (including D6, D7 and even D8 (evolutionary) migration examples)
        * Freely available content on durabledrupal.org
    * Development
        * Put up, develop, expand and maintain the durabledrupal.org site, a fullstack Javascript decouple set of web apps in its own right
    * Manage sales and post sales support
    * Accounting and administration
* Immediate and near future: MVP01 Book + offering our own services only
    * As a first task, launch durabledrupal.org site up
        * Home page with links and current options
        * Landing page(s) to get support for the book and for DurableDrupal Content Migration Rescue mentoring and services
            * Give us 100 stars on the GitHub book CMS/pandoc repo -> OpenCollective
            * Add request for paypal, bitcoin support (donations, sponsorship...)
            * Continue with measurable marketing objectives, but always adhering to free content, with income to be associated with mentoring and development services.
        * Immediately start twitter and fb campaign for book project and for mentoring and development services
    * As a second task, migrate AWebFactory.com while documenting all steps taken as raw material for the book
        * Perform complete migration of AWebFactory.com
        * Book write-up in parallel (free to read online, at least in HTML format)
        * Add real time videos and screencasts (to split into learning point Steps to form courses (Guides))
        * Add recipe process videos (with video/tapescript with additional resources like reusable templates and starter and tool repos)
    * Work on client projects
    * Blog
        * Case studies
            * AWebFactory (initial -> book)
            * Other case studies emerging from work with clients
        * Migration blog (-> sell book, or specific articles)
        * Articles for prospective clients
    * Client projects
    * Mentoring
* Immediate and near future: MVP02 Community
    * Home page showing alternatives
        * You are someone in need of content migration rescue
        * You are someone who wishes to offer their content migration rescue services
        * You wish to learn more about the process -> content
    * Landing pages for specific marketing campaigns
        * support durable drupal
        * buy/support/subscribe to the book
        * users
        * providers
    * Additional case studies, guides and courses
    * Community contributed case studies

#### Key Resources

* Github repo development team
* Build via partnering and contracting on a team-per-project basis:
    * Virtual Assistants
    * Graphic Designers
    * Developers
    * Coaches, trainers, people to provide support
    * Sales people
    * Other professionals

#### Key Partners

* Content and Website/Web App Hosting and Development Infrastructure
    * ISPs
    * DigitalOcean
    * Cloudflare
    * Cloudinary
    * Vimeo or YouTube
    * GitHub
    * Trello
    * Draw.io
    * Paid instruction, books, subscriptions, other content
* Online sessions and webinars
    * Zoom
* Finances
    * PayPal
    * Gumroad
* A sales/marketing partner to facilitate clients
* Communities of high-quality freelancers (Codementor.io, etc.)

#### Cost Structure

* Hosting of all kinds
* Online services
* Zoom
* PayPal costs
* team-per-project building

### OK, we have our DDCMR Business Model Canvas. Now what?

Now we're ready for [Analysis and Design](#), specifying what our MVP should be.

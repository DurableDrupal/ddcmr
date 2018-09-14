metaData:
    itemSlug: content-migration-rescue-pros-cons
    itemName: Content Migration Rescue Pros and Cons
    itemType: article
    language: en-US
    published: true
    publishedDate: '2018-09-10T10:00:00.000Z'
    createdDate: '2018-09-10T10:00:00.000Z'
    modifiedDate: '2018-09-10T10:00:00.000Z'
articleTitle: Content Migration Rescue Pros and Cons
articleSubTitle: null
author: 'Victor Kane'
articleBody:
    value: |
        The DurableDrupal Content Migration Rescue process puts forward the need:

        * To move on with your content
        * To migrate from the Drupal Content Monolith to a Structured Content Model
        * To move to an open and truly modern API-First Architecture

        So what exactly are the pros and cons?

        ### Pros
        
        * You receive a thorough content audit and analysis of the resulting content inventory. You will get a clearer picture of your content types, the content attributes structuring them, and the relationships between them. In short, you receive a clear definition of the existing content model, to the maximum permitted by the state of the legacy web application or website.
        * You receive an opportunity to modify the existing content model so that it can be aligned with your current business model, which is not the same as it was when you built your legacy system. You can make simple modifications, or deeper ones, or start completely from scratch if that seems like the best course of action. In any of these cases, you will be able to rescue all of your content, and re-seat it within the new content model.
        * You will be able to fire up a simple, scalable structured content server (SCS) buit in Node.js, Express.js and storing its data in MongoDB, that has one job: deliver all of your content via a the execution of a fast, flexible and industry-standard based content schema. It's open source. It's free. It's yours. It's not behind any paywall. It works.
        * You will be able to fire up a modern, API-first Content Management System (CMS) that has one job: to enable the creation and editing of content ready to be published in the context of  user role based workflow appropriate to stff needs and adopted by your organization. It's open source. It's free. It's yours. It's not behind any paywall. It works.
        * You will have at your disposal a free and flexible open source set of content migration scripts to extract and carry out the rescue of content from the monolith. Your content will be placed onto the Structured Content Server as JSON objects inserted or upserted via a REST API.
        * You will be able to fire up at least one client web pplication (CWA) tht will consume the API exposed by your SCS. The CWA can actually be any client of your choosing (Angular, React, Vue, HTML+jQuery, web components, etc.. The only requirement is that it knows how to consume the content endpoints of a REST API.
        * The end result will be scalable and enjoy high performance and built on modern, non-obsolete softwqre and cloud server architecture
        * You will be able to create content once and render everywhere (CORE)
        * Best of all, you can do this in one fell swoop, or you can do this gradually.

        #### Choice 1: All at once, a complete and immediate change leading to the following architecture

        * CMS (Content Management System): Your own modern, customized API First, decoupled, “headless” CMS based on a React.js or Vue.js administration panel running on your own servers.
        * Your own SCS (Structured Content Server) using Node.js, Express.js, MongoDB and schemas using an ODM (object document modeler) such as Mongoose, in order to structure the persistence and API of our Content Model. Running on your own servers.
        * A CWA (Client Web Application) built as a universal web app based on Vue.js, Nuxt.js and Vuetify.js
        * Additional CWA and native apps consuming the same central SCS. These can even be static websites built by the same tools.

        #### Choice  2: The gradual, staged, evolutionary alternative, leveraging the best of Drupal 8
        
        * Stage 1. Drupal 8 as a provisionary All in One Vehicle for a Refactored Structured Content Model. This would involve first migrating your Wordpress or Drupal 6 or 7 site to Drupal 8, and then undergoing a "structuring up" process in line with your current business model. 
        * Stage 2. Drupal 8 as an API First CMS and Structured Content Server, with decoupled front end JavaScript framework based websites and web application CWA's.
        * Stage 3. Drupal 8 as the API-First CMS only, with a completely decoupled Structured Content Server (SCS) together with Front End Client Web Application instances (CWA's). This is a major step forward, since it is [generally acknowledged in the industry](https://www.lullabot.com/articles/introducing-contenta-js) that: "Most decoupled projects require a Node.js back-end proxy to sit between the various front-end consumers and Drupal." But with DurableDrupal Content Migration Rescue, this whole thing is a pro, and not a con, since we don't need any highly complex proxies to add on: we already have our scalable, Node.js based Structured Content Server in the first place. Following the evolutionary, gradual choice 2, you can add it in as a third step. But it's there and easy to fire up when you need it.
        * Stage 4. The "wwithering away" of Drupal 8 as CMS altogether with a much lighter and scalable JavaScript admin app, resulting in a highly flexible API-First "headless" CMS that was genuinely designed for just the one job it needs to do. Another big step since a featherweight admin app does the job perfectly well, and you now no longer need an old-fashioned LAMP stack on your servers. You just cut your resource needs by half!

        ### Cons

        So, what are the cons to following such a process?

        * Even though you will not be behind a paywall, the complexity and costs involved in infrastructure and DevOps do increase.
        * The team will need to acquire new knowledge and skills. No more than learning Drupal 8 and Symfony, it my be argued. But there are more skills to be dealt with.
        * As a corollary, special attention needs to be paid to authentication and authorization concerns, since the API's are great, but also contain business secrets. This is always true, of course, but doubly so in a decoupled scenario.
        * None of the tremendous advantages of decoupling and rescuing ourselves from the monolith can take away the fact that we expect our CMS to do  whole bunch of stuff for us. We now have to make sure that some part of the system complies with the degree of expectations we are accustomed to. For example, instant preview. We do get instant preview, but it is not strictly part of the CMS, it is provided by adding a client web app instance to the staging environment via a link, and by taking advantage of its "hot reload" functionality. It's all there, it's just, erm, decoupled. Which is great. Except that in order to take advantage of decoupled architecture, it's necessary to, well, decouple.

        ### Static Site Generation

        It is not true, however, that unless you are building a huge set of enterprise web applications, the decoupled approach is overkill. The monolith (whether it's Joomla, Wordpress or Drupal 8) is the overkill. The decoupled approach works very well for small and medium sized projects with small and medium sized traffic perspectives. Plus, the advantage of Static Site Generation (using Nuxt.js as we do makes that option built right in), deserves this special mention, since it is a wonderful alternative for marketing campaigns and for such things as portfolio sites, or even newspapers. Because thanks to built in Javascript (via Nuxt.js as we are doing, or via React as in Gatsby), your "static" web app is completely serverless, and can be deployed anywhere HTML can go; and yet by include a certain amount of browser based dynamic behavior. More on that in case studies!

articleSummary:
    value: |
        The DurableDrupal Content Migration Rescue process puts forward the need:

        * To move on with your content
        * To migrate from the Drupal Content Monolith to a Structured Content Model
        * To move to an open and truly modern API-First Architecture

        So what exactly are the pros and cons?

tags:
    - tagSlug: content-migration-rescue
      tagName: Content Migration Rescue
    - tagSlug: what-why
      tagName: What? Why?
      vocabSlug: top-level-content
      vocabName: Top Level Content


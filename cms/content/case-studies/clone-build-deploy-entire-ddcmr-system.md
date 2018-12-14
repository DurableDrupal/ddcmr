metaData:
    itemSlug: clone-build-deploy-entire-ddcmr-system
    itemName: Clone, build and deploy the entire DDCMR system
    itemType: caseStudy
    language: en-US
    published: false
    publishedDate: null
    createdDate: 2018-11-29
    modifiedDate: 2018-11-29
    disabled: false
    workflowState:
        vocabSlug: workflow
        vocabName: Workflow
        tagSlug: draft
        tagName: Draft
caseStudySummary:
    value: |
        Provision, clone, build and run DDCMR from scratch, then use it for your own projects.
caseStudyDescription:
    value: |
        Provision your own VPS from scratch with all development, staging and production dependencies. Then fork or clone the monorepo and configure, build and run each one of the decoupled parts of the DDCMR system: the Structured Content Server (SCS), the CMS, and the Client Web App (CWA) on the front end. Tinker with the results and use the system for your own projects.
articles:
    - weight: 1
      article: ddcmr-provisioning-ubuntu-18-04
    - weight: 2
      article: ddcmr-decoupled-app-deployment
tags:
    - tagSlug: ddcmr
      tagName: Durable Drupal Content Migration Rescue
    - tagSlug: content-migration-rescue
      tagName: Content Migration Rescue

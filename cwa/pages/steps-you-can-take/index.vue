<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content item with heading -->
        <v-flex xs12>
          <v-card>
            <v-card-title class="primary--text headline">Guides and Case Studies you can follow step-by-step right now</v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-list three-line>
            <v-subheader>
              <span class="title secondary--text">{{ csawf.metaData.itemName }}</span>
            </v-subheader>
            <v-list-tile :to="/case-studies/ + csawf.metaData.itemSlug">
              <v-list-tile-content>
                  <div>{{ csawf.caseStudySummary.value.substr(0,80) + '...' }}</div>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex xs12 sm4>
          <v-list three-line>
            <v-subheader>
              <span class="title secondary--text">{{ csdd.metaData.itemName }}</span>
            </v-subheader>
            <v-list-tile :to="/case-studies/ + csdd.metaData.itemSlug">
              <v-list-tile-content>
                <div>{{ csdd.caseStudySummary.value.substr(0,80) + '...' }}</div>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex xs12 sm4>
          <v-list three-line>
            <v-subheader>
              <span class="title secondary--text">{{ csling.metaData.itemName }}</span>
            </v-subheader>
            <v-list-tile :to="/case-studies/ + csling.metaData.itemSlug">
              <v-list-tile-content>
                <div>{{ csling.caseStudySummary.value.substr(0,80) + '...' }}</div>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
<!-- end first content section with heading -->

<!-- start second content item with heading -->
        <v-flex xs12>
          <v-card>
            <v-card-title class="primary--text headline">Steps we will be taking together</v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-list three-line>
            <v-subheader>
              <v-icon class="mr-2">fa-github</v-icon>
              <span class="title">Migrate your own content</span>
            </v-subheader>
            <v-list-tile href="https://github.com/DurableDrupal/ddcmr">
              <v-list-tile-action>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Clone the code</v-list-tile-title>
                <v-list-tile-sub-title>
                  Follow our <nuxt-link to="/case-studies">Case Studies</nuxt-link> and build your project step by step.
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex xs12 sm4>
          <v-list three-line>
            <v-subheader>
              <v-icon class="mr-2">fa-book</v-icon>
              <span class="title">Master decoupled architecture</span>
            </v-subheader>
            <v-list-tile to="/books">
              <v-list-tile-action>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Read the books</v-list-tile-title>
                <v-list-tile-sub-title>
                  Follow the guides below, step-by-step
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex xs12 sm4>
          <v-list three-line>
            <v-subheader>
              <v-icon class="mr-2">fa-users</v-icon>
              <span class="title">Use our mentoring services</span>
            </v-subheader>
            <v-list-tile to="/books">
              <v-list-tile-action>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Get just-in-time help</v-list-tile-title>
                <v-list-tile-sub-title>
                  Finish your high priority projects fast!
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-card-title class="primary--text headline">Complete index of categories and topics</v-card-title>
            <v-card-text>
              <p>Below you can find a handy alphabetical index of Categories (click to open) grouping together articles and videos followed step-by-step in the Guides, Case Studies and Books.</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>

 <v-expansion-panel popout>
    <v-expansion-panel-content
      v-for="(stepFilter,i) in loadedStepFilters.stepFilters"
      :key="i"
    >
      <h3 class="pl-2 subheading secondary--text" slot="header">{{ stepFilter._id  }}</h3>
              <div class="mb-4" v-for="(article, j) in stepFilter.article" :key="j">
                <ArticleTeaser
                  :article="selectLoadedArticle(article)"
                >
                </ArticleTeaser>
                <v-divider></v-divider>
              </div>
    </v-expansion-panel-content>
</v-expansion-panel>
        </v-flex>
<!-- end second content section with heading -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
import ArticleTeaser from '@/components/articles/teaser'
export default {
  components: {
    ArticleTeaser
  },
  computed: {
    loadedArticles() {
      const articles = this.$store.state.loadedPageArticlesSteps
      return {
        articles
      }
    },
    loadedStepFilters() {
      const stepFilters = this.$store.state.loadedStepFilters
      return {
        stepFilters
      }
    }
  },
  methods: {
    selectLoadedArticle(name) {
      return this.loadedArticles.articles.find(a => a.metaData.itemName === name )
    }
  },
  async asyncData(context) {
    const csawf = await context.app.$axios.$get(context.env.API_HOST + '/api/case-studies/slug/awebfactory-dot-com')
    const csdd = await context.app.$axios.$get(context.env.API_HOST + '/api/case-studies/slug/durable-drupal-website-making-of')
    const csling = await context.app.$axios.$get(context.env.API_HOST + '/api/case-studies/slug/linguathon-dot-com')
    return {
      csawf,
      csdd,
      csling
    }
  }
}
</script>

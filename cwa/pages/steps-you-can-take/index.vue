<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content item with heading -->
        <v-flex xs12>
          <v-card>
            <v-card-title class="primary--text headline">Steps you can take</v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-card-text class="pb-0">
              <div>
              <p class="subheading">
                Grab the code on GitHub (please star us and help us grow the community!)
              </p>
              </div>
            </v-card-text> 
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-card-text class="pb-0">
              <div>
              <p class="subheading">
                Read the books, check out the case studies, follow the guides below
              </p>
              </div>
            </v-card-text> 
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-card-text class="pb-0">
              <div>
              <p class="subheading">
                Use our mentoring services and finish your high priority projects fast!
              </p>
              </div>
            </v-card-text> 
          </v-card>
        </v-flex>
<!-- end first content item with heading -->

        <v-flex xs12>
          <v-card>
            <v-card-title class="primary--text headline">Guides you can follow step-by-step</v-card-title>
            <v-card-text>
              <p>Handy alphabetical index to categories (click to open) makes it easy to find individual guides that forming part of the Case Studies.</p>
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
  }
}
</script>

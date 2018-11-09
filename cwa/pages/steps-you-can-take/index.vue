<template>
<!-- start page layout -->
  <v-layout column>

<!-- start first content item with heading -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title class="primary--text headline">Steps you can take</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>
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
<!-- end first content item with heading -->

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

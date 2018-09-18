<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content row -->
        <v-flex xs12 sm6>
          <ArticleFull
            :article="selectLoadedArticle('case-studies-intro')"
            back=false
          ></ArticleFull>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-card-title class="primary--text headline">Case Studies</v-card-title>
            <div>
            </div>
          </v-card>
        </v-flex>
<!-- end first content row -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
import ArticleFull from '@/components/articles/full'

export default {
  components: {
    ArticleFull
  },
  computed: {
    loadedArticles() {
      const articles = this.$store.state.loadedPageArticlesCaseStudies
      return {
        articles
      }
    }
  },
  methods: {
    selectLoadedArticle(slug) {
      return this.loadedArticles.articles.find(a => a.metaData.itemSlug === slug )
    }
  }
}
</script>

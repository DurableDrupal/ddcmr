<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content item with heading -->
        <v-flex xs12 sm6>
          <ArticleTeaser
          :article="selectLoadedArticle('what-is-content-migration-rescue')"
          ></ArticleTeaser>
        </v-flex>
        <v-flex xs12 sm6>
          <ArticleTeaser
          :article="selectLoadedArticle('the-content-migration-rescue-process')"
          ></ArticleTeaser>
        </v-flex>
        <v-flex xs12>
          <ArticleTeaser
          :article="selectLoadedArticle('content-migration-rescue-pros-cons')"
          ></ArticleTeaser>
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
      const articles = this.$store.state.loadedPageArticlesWhatWhy
      return {
        articles
      }
    }
  },
  methods: {
    selectLoadedArticle(slug) {
      console.log('slug', slug)
      // console.log('articles', this.loadedArticles.articles)
      // return slug
      return this.loadedArticles.articles.find(a => a.metaData.itemSlug === slug )
    }
  }
}
</script>

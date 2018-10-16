<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content row -->
        <v-flex xs12 sm6>
          <ArticleFull
            :article="selectLoadedArticle('books-intro')"
            :back=false
          ></ArticleFull>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card v-if="books.length > 0">
            <v-card-title class="primary--text headline">Books</v-card-title>
            <v-list class="mt-1">
              <v-list-tile class="mb-1" v-for="(item, index) in books" :key=index>
                <nuxt-link :to="/books/ + item.metaData.itemSlug">
                  <p>{{ item.metaData.itemName }}</p>
                </nuxt-link>
              </v-list-tile>
            </v-list>
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
      const articles = this.$store.state.loadedPageArticlesBooks
      return {
        articles
      }
    },
    books() {
      const books = this.$store.state.loadedBooks
      return books 
    },
  },
  methods: {
    selectLoadedArticle(slug) {
      return this.loadedArticles.articles.find(a => a.metaData.itemSlug === slug )
    }
  }
}
</script>

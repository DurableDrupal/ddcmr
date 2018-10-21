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
          <v-card v-if="books.length > 0"  v-for="(item, index) in books" :key=index>
                  <BookTeaser
                      :book="item"
                  ></BookTeaser>
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
import BookTeaser from '@/components/books/teaser'

export default {
  components: {
    ArticleFull,
    BookTeaser
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

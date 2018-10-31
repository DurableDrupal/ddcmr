<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content item with heading -->
        <v-flex xs12 sm6>
          <v-card v-if="loadedArticles.articles.length > 0">
            <v-list class="mt-1">
              <v-list-tile class="mb-1" v-for="(article, index) in loadedArticles.articles" :key=index>
                <nuxt-link :to="/blog/ + article.metaData.itemSlug">
                  <p>{{ article.metaData.itemName }}</p>
                </nuxt-link>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
<!-- end first content item with heading -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
  export default {
    layout: 'blog',
    computed: {
      loadedArticles() {
        const articles = this.$store.state.loadedPageArticlesBlog
        return {
          articles
        }
      }
    },    
  }
</script>


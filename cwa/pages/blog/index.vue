<template>
<!-- start page layout -->
  <v-layout column>

<!-- start content items -->
    <v-container fluid grid-list-md fill-height v-if="loadedArticles.articles.length > 0" v-for="(article, index) in loadedArticles.articles" :key=index>
      <v-layout row wrap>
          <v-flex xs12 offset-md2 md5 sm7>
            <v-card class="pa-2" flat>
              <v-card-title color="primary">
                <v-btn block flat color="secondary" :to="/blog/ + article.metaData.itemSlug">
                  <span style="white-space: normal; text-transform: none;" class="headline text-sm-center">{{ article.metaData.itemName }}</span>
                </v-btn>
              </v-card-title>
              <v-card-text>
                {{ article.articleSubTitle }}
              </v-card-text>
              <v-card-text
                v-html="$md.render(article.articleSummary.value)"
              >
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="pa-2" flat>
          <AuthorTeaser
            :author="article.author[0]"
          ></AuthorTeaser>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
<!-- end content items -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
  import AuthorTeaser from '@/components/authors/teaser'
  export default {
    layout: 'blog',
    components: {
      AuthorTeaser
    },
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


<template>
<!-- start page layout -->
  <v-layout column justify-center align-center>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start content item -->
        <v-flex xs12 offset-md2 md5 sm7>
          <ArticleFull
            :article="article"
          ></ArticleFull>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="pa-2" flat>
        <AuthorFull
          :author="article.author[0]"
          :back=false
        ></AuthorFull>
          </v-card>
        </v-flex>
<!-- end content item -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
import ArticleFull from '@/components/articles/full'
import AuthorFull from '@/components/authors/full'

export default {
  layout: 'blog',
  components: {
    ArticleFull,
    AuthorFull
  },
  async asyncData(context) {
    const article = await context.app.$axios.$get(context.env.API_HOST + '/api/articles/slug/' + context.route.params.slug)
    return {
      article
    }
  }
}
</script>

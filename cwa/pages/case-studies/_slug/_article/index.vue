<template>
<!-- start page layout -->
  <v-layout column justify-center align-center>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start content item -->
        <v-flex xs12>
          <ArticleFull
            :article="article"
          ></ArticleFull>
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

export default {
  components: {
    ArticleFull
  },
  async asyncData(context) {
    const article = await context.app.$axios.$get(context.env.API_HOST + '/api/articles/slug/' + context.route.params.article)
    return {
      article
    }
  }
}
</script>

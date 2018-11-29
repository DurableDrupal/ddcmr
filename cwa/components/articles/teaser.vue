<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title v-if="article.metaData.published" class="primary--text title">{{ article.articleTitle }}</v-card-title>
        <v-card-title v-else class="grey--text title">{{ article.articleTitle }}</v-card-title>
        <v-card-title v-if="article.articleSubtitle && article.metaData.published" class="primary--text subheading">{{ article.articleSubTitle }}</v-card-title>
        <v-card-text
          v-html="$md.render(article.articleSummary.value)"
        >
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="article.metaData.published"
            :to="$route.path + '/' + article.metaData.itemSlug"
            flat
            color="primary"
          >
          See More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

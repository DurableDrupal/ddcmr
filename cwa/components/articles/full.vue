<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title class="primary--text title">{{ article.articleTitle }}</v-card-title>
        <v-card-title v-if="article.articleSubtitle" class="primary--text subheading">{{ article.articleSubTitle }}</v-card-title>
        <v-card-text
          class="ml-4 pl-4 pr-4 pb-0"
          v-if="article.articleSummary.value"
          v-html="$md.render(article.articleSummary.value)"
        >
        </v-card-text>
        <v-card-text
          v-html="$md.render(article.articleBody.value)"
        >
        </v-card-text>
        <v-card-actions v-if="back==true">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" v-on:click="backbutton">Back</v-btn>
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
    },
    back: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  methods: {
    backbutton: function() {
      this.$router.go(-1)
    }
  }
}
</script>

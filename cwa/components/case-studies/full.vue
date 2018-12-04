<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title class="primary--text title">{{ caseStudy.metaData.itemName }}</v-card-title>
        <v-card-text
          v-html="$md.render(caseStudy.caseStudySummary.value)"
        >
        </v-card-text>
        <v-list class="mt-1">
          <v-list-tile class="mb-1" v-for="(article, index) in caseStudy.articles" :key=index>
            <nuxt-link v-if="article.article.metaData.published" :to="/case-studies/ + caseStudy.metaData.itemSlug + '/' + article.article.metaData.itemSlug">
              <p>{{ article.article.metaData.itemName }}</p>
            </nuxt-link>
            <p v-else class="grey--text">{{ article.article.metaData.itemName }}</p>
          </v-list-tile>
        </v-list>
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
    caseStudy: {
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

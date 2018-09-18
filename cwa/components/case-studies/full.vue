<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title class="primary--text title">{{ caseStudy.metaData.itemName }}</v-card-title>
        <v-card-text
          v-html="$md.render(caseStudy.caseStudySummary.value)"
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

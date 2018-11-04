<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title class="primary--text title">{{ author.metaData.itemName }}</v-card-title>
        <v-card-text
          v-html="$md.render(author.authorAbout.value)"
        >
        </v-card-text>
        <v-card-text>
        <p>avatar to left of name</p>
        <p>Paginated list of articles by this author on left</p>
        <p>Category tree on right</p>
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
    author: {
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

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title class="primary--text title">{{ author.metaData.itemName }}</v-card-title>
        <v-card-text
          v-html="$md.render(author.authorAbout.value)"
        >
        </v-card-text>
<!--
        <v-card-text>
          <p>avatar to left of name</p>
        </v-card-text>
-->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :to="'/authors/' + author.metaData.itemSlug"
            class="primary white--text"
          >
          See Author's Page
          </v-btn>
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
    }
  }
}
</script>

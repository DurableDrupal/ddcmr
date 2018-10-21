<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <v-card flat>
        <v-card-title class="primary--text title">{{ book.bookTitle + '(' + book.bookCopyright + ')' }}</v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

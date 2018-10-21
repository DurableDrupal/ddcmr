<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
        <v-btn color="primary" flat :to="/books/ + book.metaData.itemSlug">{{ book.bookTitle }}</v-btn>
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

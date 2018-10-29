<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
      <div style="text-align: center;">
        <v-btn color="primary" class="mb-0" flat :to="/books/ + book.metaData.itemSlug">{{ book.bookTitle }}</v-btn>
        <p class="mt-0">{{ book.bookCopyright }}</p>
      </div>
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

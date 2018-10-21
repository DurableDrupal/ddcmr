<template>
<!-- start page layout -->
  <v-layout column justify-center align-center>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start content item -->
        <v-flex xs12>
          <BookFull
            :book="book"
          ></BookFull>
        </v-flex>
<!-- end content item -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
import BookFull from '@/components/books/full'

export default {
  components: {
    BookFull
  },
  async asyncData(context) {
    const book = await context.app.$axios.$get(context.env.API_HOST + '/api/books/slug/' + context.route.params.slug)
    return {
      book
    }
  }
}
</script>

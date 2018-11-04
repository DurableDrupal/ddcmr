<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content row -->
        <v-flex xs12 sm6>
          <AuthorFull
            :author="author"
            :back=true
          ></AuthorFull>
        </v-flex>
        <!--
        <v-flex xs12 sm6>
          <v-card v-if="books.length > 0"  v-for="(item, index) in books" :key=index>
                  <BookTeaser
                      :book="item"
                  ></BookTeaser>
          </v-card>
        </v-flex>
        -->
<!-- end first content row -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
import AuthorFull from '@/components/authors/full'

export default {
  components: {
    AuthorFull
  },
  async asyncData(context) {
    const author = await context.app.$axios.$get(context.env.API_HOST + '/api/authors/slug/' + context.route.params.author)
    return {
      author
    }
  }
}
</script>


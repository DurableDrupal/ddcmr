<template>
<!-- start page layout -->
  <v-layout column justify-center align-center>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start content item -->
        <v-flex xs12>
          <CaseStudyFull
            :caseStudy="caseStudy"
          ></CaseStudyFull>
        </v-flex>
<!-- end content item -->

      </v-layout>
    </v-container>
<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
import CaseStudyFull from '@/components/case-studies/full'

export default {
  components: {
    CaseStudyFull
  },
  async asyncData(context) {
    const caseStudy = await context.app.$axios.$get(context.env.API_HOST + '/api/case-studies/slug/' + context.route.params.slug)
    return {
      caseStudy
    }
  }
}
</script>

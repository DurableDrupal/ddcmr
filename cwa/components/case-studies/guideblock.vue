<template>
          <v-list three-line>
            <v-subheader v-if="guide.metaData.published" class="title secondary--text">
              <nuxt-link :to="/case-studies/ + guide.metaData.itemSlug" style="text-decoration:none;"><span>{{ guide.metaData.itemName }}</span></nuxt-link>
            </v-subheader>
            <v-subheader v-else class="subheading grey--text mb-2">
              <span><small>[In preparation]</small> {{ guide.metaData.itemName }}</span>
            </v-subheader>
            <v-list-tile v-if="guide.metaData.published" :to="/case-studies/ + guide.metaData.itemSlug">
              <v-list-tile-content>
                  <div class="pb-2">{{ guide.caseStudySummary.value.substr(0,80) + '...' }}</div>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-else>
              <v-list-tile-content>
                  <div class="grey--text">{{ guide.caseStudySummary.value.substr(0,80) + '...' }}</div>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
</template>

<script>
export default {
  props: {
    guide: {
      type: Object,
      required: true
    }
  }
}
</script>

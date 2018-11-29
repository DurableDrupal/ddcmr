<template>
          <v-list three-line>
            <v-subheader>
              <span class="title secondary--text">{{ guide.metaData.itemName }}</span>
            </v-subheader>
            <v-list-tile :to="/case-studies/ + guide.metaData.itemSlug">
              <v-list-tile-content>
                  <div>{{ guide.caseStudySummary.value.substr(0,80) + '...' }}</div>
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

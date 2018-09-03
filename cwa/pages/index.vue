<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->

<!-- start first content item set with heading -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card flat>
            <v-title class="pl-1 secondary--text headline">Moving on from the monolith</v-title>
            <img style="width:100%;" src="/img/monolith-1200.jpg" />
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card flat>
            <v-title class="pl-1 secondary--text headline">To decoupled architecture</v-title>
            <img style="width:100%;" src="/img/decoupled-1200.jpg" />
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-card-text>
              <div>
              <p class="pa-2">
              A step-by-step approach offering the freely shared resources you need to retrieve your content and structure up, migrating from an obsolete, monolithic architecture to a free and modern truly scalable fullstack JavaScript set of decoupled applications and services. <nuxt-link to="/what-why">Learn more</nuxt-link>
              </p>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
<!-- end first content item set with heading -->

<!-- second content item set -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-card flat class="pa-4">
          <v-title class="pl-1 primary--text title"><v-icon color="accent">fa-life-buoy</v-icon> Migration Rescue</v-title>
          <v-list two-line>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><v-icon>fa-map</v-icon> What is it?</v-list-tile-title>
                <v-list-tile-sub-title>Why do you need it?</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><v-icon>fa-balance-scale</v-icon> Pros and cons?</v-list-tile-title>
                <v-list-tile-sub-title>What are the hard parts?</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card flat class="pa-4">
          <v-title class="pl-1 primary--text title"><v-icon color="accent">fa-tasks</v-icon> Steps We're Taking</v-title>
          <v-list two-line>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><v-icon>fa-file-text</v-icon> Case study</v-list-tile-title>
                <v-list-tile-sub-title>This website: the making of</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><v-icon>fa-file-text</v-icon> Case study</v-list-tile-title>
                <v-list-tile-sub-title>AWebFactory.com Step-by-step</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card flat class="pa-4">
          <v-title class="pl-1 primary--text title"><v-icon color="accent">fa-road</v-icon> Steps You Can Take</v-title>
          <v-list two-line>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><v-icon>fa-exchange</v-icon> Migrate your content!</v-list-tile-title>
                <v-list-tile-sub-title>Use our code, guides, mentoring</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title><v-icon>fa-github</v-icon> Support us!</v-list-tile-title>
                <v-list-tile-sub-title>Star us on GitHub</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
<!-- end second content item set -->

<!-- end grid layout -->

  </v-layout>
<!-- end page layout -->
</template>

<script>
  export default {
    data: () => ({
      theAssetHost: process.env.ASSET_HOST
    })
  }
</script>


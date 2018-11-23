<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->

<!-- start first content item set with heading -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card flat>
            <v-card-title class="pl-1 secondary--text headline">Moving on from the monolith</v-card-title>
            <img style="width:100%;" src="/img/monolith-1200.jpg" />
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card flat>
            <v-card-title class="pl-1 secondary--text headline">To decoupled architecture</v-card-title>
            <img style="width:100%;" src="/img/decoupled-1200.jpg" />
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card>
            <v-card-text class="pb-0">
              <div>
              <p class="subheading">
              A step-by-step approach offering the freely shared resources you need to retrieve your content and structure up, migrating from an obsolete, monolithic architecture to a free and modern truly scalable fullstack JavaScript set of decoupled applications and services.
              </p>
              </div>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-spacer></v-spacer>
              <v-btn
                to="/what-why"
                class="primary white--text"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
<!-- end first content item set with heading -->

<!-- second content item set -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>
        <v-flex xs12 md4>
          <v-card flat class="pa-4">
          <v-card-title class="pl-1 primary--text title"><v-icon class="mr-1" color="accent">fa-life-buoy</v-icon>Migration Rescue</v-card-title>
          <v-list three-line>
            <v-list-tile to="/what-why">
              <v-list-tile-action>
                <v-icon>fa-map</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>What is it?</v-list-tile-title>
                <v-list-tile-sub-title>
                  Why do you need it?
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/what-why">
              <v-list-tile-action>
                <v-icon>fa-balance-scale</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Pros and cons?</v-list-tile-title>
                <v-list-tile-sub-title>
                  What about migration process?
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card flat class="pa-4">
          <v-card-title class="pl-1 primary--text title"><v-icon class="mr-1" color="accent">fa-tasks</v-icon>Case Studies</v-card-title>
          <v-list three-line>
            <v-list-tile to="/case-studies/durable-drupal-website-making-of">
              <v-list-tile-action>
                <v-icon>fa-file-text</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Full-stack Dev</v-list-tile-title>
                <v-list-tile-sub-title>
                  This website: the making of
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/case-studies/awebfactory-dot-com">
              <v-list-tile-action>
                <v-icon>fa-file-text</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Migration</v-list-tile-title>
                <v-list-tile-sub-title>
                  The AWebFactory.com migration step-by-step
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card flat class="pa-4">
          <v-card-title class="pl-1 primary--text title"><v-icon class="mr-1" color="accent">fa-road</v-icon> Steps You Can Take</v-card-title>
          <v-list three-line>
            <v-list-tile href="https://github.com/DurableDrupal/ddcmr">
              <v-list-tile-action>
                <v-icon>fa-github</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Grab the code</v-list-tile-title>
                <v-list-tile-sub-title>
                  Join the Community
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/steps-you-can-take">
              <v-list-tile-action>
                <v-icon>fa-exchange</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Migrate content!</v-list-tile-title>
                <v-list-tile-sub-title>
                  Use our code and guides. Use our mentoring.
                </v-list-tile-sub-title>
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
  }
</script>


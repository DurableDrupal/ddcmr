<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content item with heading -->
        <v-flex xs12>
          <v-card>
            <v-card-title class="primary white--text headline">What is Content Migration Rescue and why do we need it?</v-card-title>
            <v-card-text>
              <div>
                <p>Well...</p>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
<!-- end first content item with heading -->

      </v-layout>
    </v-container>
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


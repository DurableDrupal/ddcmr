<template>
<!-- start page layout -->
  <v-layout column>

<!-- start grid layout -->
    <v-container fluid grid-list-md fill-height>
      <v-layout row wrap>

<!-- start first content item with heading -->
        <v-flex xs12>
          <v-card>
            <v-card-title class="primary white--text headline">Welcome to the DurableDrupal Content Migration Rescue Community</v-card-title>
            <v-card-text>
              <div>
              <p class="pa-2">Proin sodales velit risus, quis volutpat augue blandit vitae. Aliquam in eleifend dolor. Nulla sodales metus quis sodales finibus. Sed rhoncus diam sed neque lobortis tristique. Maecenas at lorem sed enim aliquam vestibulum. Pellentesque eget eros vestibulum, sollicitudin lorem id, faucibus nulla. Praesent vestibulum mattis dapibus. Donec in sem varius, auctor enim in, tempor mi. Aliquam semper libero eu libero ultricies placerat.</p>
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


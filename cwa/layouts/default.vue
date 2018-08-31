<template>
  <v-app light id="lso-cwa">
<!-- start left-hand drawer/menu/sidebar -->
    <v-navigation-drawer
      :clipped="clipped"
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
<!-- end left-hand drawer/menu/sidebar -->
<!-- main top toolbar -->
    <v-toolbar class="secondary nav-toolbar" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title color="white">
        <v-avatar size=48>
        <nuxt-link to="/" exact>
            <img style="width: 48px; opacity: 0.75" :src="theAssetHost + '/v.png'" alt="  DurableDrupal Content Migration Rescue" title="DurableDrupal Content Migration Rescue">
        </nuxt-link>
        </v-avatar>
      </v-toolbar-title>
      <h2 class="body-2 ml-4 principal-slogan">DurableDrupal Content Migration Rescue</h2>
    </v-toolbar>
<!-- end top toolbar -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <p class="ml-1">DurableDrupal Content Migration Rescue</p>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      clipped: true,
      theAssetHost: process.env.ASSET_HOST,
      items: [
        { icon: 'fa-home', title: 'Home', to: '/' },
        { icon: 'fa-pencil', title: 'Inspire', to: '/inspire' }
      ]
    })
  }
</script>


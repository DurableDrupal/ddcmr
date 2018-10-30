<template>
  <v-app light id="ddcmr-default-cwa">
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
    <v-toolbar class="secondary nav-toolbar" height=64 dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title color="white">
        <v-avatar size=48 style="margin-top:6px; margin-right: 4em;" tile>
        <nuxt-link to="/" exact>
            <img style="width: 100% height: 100%;" src="/logo-square-64.jpg" alt="  DurableDrupal Blog for Content Migration Rescue" title="DurableDrupal BLOG for Content Migration Rescue">
        </nuxt-link>
        </v-avatar>
      </v-toolbar-title>
      <nuxt-link to="/blog" exact>
        <h2 class="pl-1 pr-1 principal-slogan">DurableDrupal BLOG for Content Migration Rescue</h2>
      </nuxt-link>
      <v-spacer></v-spacer>
      <a href="https://github.com/DurableDrupal/ddcmr"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub"></a>
    </v-toolbar>
<!-- end top toolbar -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer height="auto" class="primary pl-1">
      <v-container>
        <v-layout>
          <v-flex>
            <v-btn
              flat
              exact
              v-for="fitem in footerItems"
              :key="fitem.title"
              :to="fitem.to"
              class="grey--text text--lighten-3 pa-3">
              {{ fitem.title }}
            </v-btn>
        <div class="primary grey--text text--lighten-3 mt-2">Texts © 2017-2018 authored by Victor Kane CC-BY-SA (unless otherwise stated) Creative Commons Attribution-ShareAlike 4.0 International License <v-btn fab small color="secondary" dark title="@durable_drupal" href="http://twitter.com/durable_drupal"><v-icon>fa-twitter</v-icon></v-btn><v-btn fab small color="secondary" dark title="@DurableDrupal" href="https://www.facebook.com/DurableDrupal/"><v-icon>fa-facebook</v-icon></v-btn></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      clipped: true,
      items: [
        { icon: 'fa-home', title: 'Home', to: '/' },
        { icon: 'fa-question', title: 'What? Why?', to: '/what-why' },
        { icon: 'fa-file-text', title: 'The Case Studies', to: '/case-studies' },
        { icon: 'fa-book', title: 'The Books', to: '/books' },
        { icon: 'fa-pencil', title: 'Blog', to: '/blog' },
        { icon: 'fa-github', title: 'Steps you can take', to: '/steps-you-can-take' }
      ],
      footerItems: [
        { icon: 'fa-home', title: 'Home', to: '/' },
        { icon: 'fa-question', title: 'What? Why?', to: '/what-why' },
        { icon: 'fa-file-text', title: 'The Case Studies', to: '/case-studies' },
        { icon: 'fa-book', title: 'The Books', to: '/books' },
        { icon: 'fa-pencil', title: 'Blog', to: '/blog' },
        { icon: 'fa-github', title: 'Steps you can take', to: '/steps-you-can-take' }
      ]
    })
  }
</script>

<style>
.application.theme--light .principal-slogan {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 26px;
  font-weight: 600;
}
.application.theme--light .v-toolbar__content a {
  text-decoration: none;
  margin-left: 1em;
  background: url("/img/background.jpg")
}

.application.theme--light footer {
  text-align: center;
}

@media only screen and (max-width : 420px) {
  .application.theme--light .principal-slogan {
    font-size: 21px;
    line-height: 1em;
  }
}
</style>


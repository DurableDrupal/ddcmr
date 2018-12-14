<template>
  <v-layout>
    <v-flex xs12 class="info-page">
      <div class="g-form">
        <p>placeholder for google form Tell me about your project</p>
        <!--
        <iframe src="#google-or-marketing-form" width="640" height="1124" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        -->
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
.g-form iframe {
    position: absolute;
    /* top:0; */
    left:0;
    width: 100%;
    height: 100%;
}
.info-page h1 {
  font-weight: 500;
}
</style>

import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.darken3,
    accent: colors.lightBlue.accent3,
    secondary: colors.lightBlue.darken1,
    error: colors.red.base,
    info: colors.lightBlue.darken4,
    success: colors.lightBlue.lighten4,
    warning: colors.amber.base, 
    dicons: colors.grey.darken3,
    licons: colors.grey.lighten4
  }
})

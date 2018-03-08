// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

var store = {
  debug: true,
  state: {
    connected: false,
    username: ''
  },
  version: {
    preprodvalid: {
      zotac: [],
      normal: []
    },
    preprod: {
      zotac: [],
      normal: []
    },
    prodvalid: {
      zotac: [],
      normal: []
    },
    prod: {
      zotac: [],
      normal: []
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data: {
    privateState: {},
    sharedState: store.state
  },
  methods: {
  },
  template: '<App/>'
})

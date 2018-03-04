// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

var store = {
  debug: true,
  state: {
    connected: false,
    username: ''
  }
/*,
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction déclenchée avec', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction déclenchée')
    this.state.message = ''
  }
*/
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
  template: '<App/>'
})

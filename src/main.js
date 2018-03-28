/* eslint-disable */
import Vue        from 'vue'
import App        from './App'
import router     from './router'
import VueSession from 'vue-session'
import Vuetify    from 'vuetify'
import Vuex       from 'vuex'
import VueFire    from 'vuefire'
import VueCookie  from 'vue-cookies'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueSession)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(VueCookie)

Vue.config.productionTip = false

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

// eslint-disable-next-line
const store = new Vuex.Store({
  state: {
    isLogged: false,
    GoogleToken: [],
    user: {
      username: '',
      status: ''
    },
    isLoggedIn: !!localStorage.getItem('token')
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true
    },
    [LOGIN_SUCCESS] (state, user) {
      Object.assign(state.user, user)
      state.isLoggedIn = true
      state.pending = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    login ({ commit }, creds) {
      commit(LOGIN)
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('token', 'JWT')
          commit(LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  data: {
    privateState: {},
    sharedState: store.state
  },
  methods: {
  },
  template: '<App/>'
}).$mount('#app')

/* eslint-disable */
import Vue            from 'vue'
import App            from './App'
import router         from './router'
import VueSession     from 'vue-session'
import Vuetify        from 'vuetify'
import Vuex           from 'vuex'
import VueFire        from 'vuefire'
import VueCookie      from 'vue-cookies'
import firebase       from 'firebase'
import VueDragDrop    from 'vue-drag-drop'
import Api            from './services/Api.js'
import VueChatScroll  from 'vue-chat-scroll'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueSession)
Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(VueCookie)
Vue.use(VueDragDrop)
Vue.use(VueChatScroll)

Vue.config.productionTip = false

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

var config = {
  apiKey: 'AIzaSyDPS2033t0N1gNNswDuL6C1_ZmZY9T_0wA',
  authDomain: 'yorha-198313.firebaseapp.com',
  databaseURL: 'https://yorha-198313.firebaseio.com',
  projectId: 'yorha-198313',
  storageBucket: 'yorha-198313.appspot.com',
  messagingSenderId: '774476919196'
}

firebase.initializeApp(config)

// eslint-disable-next-line
const store = new Vuex.Store({
  state: {
    isLogged: false,
    firebase: firebase,
    activeQwickConv: 'null',
    GoogleToken: [],
    request: '',
    forceMenu: false,
    user: {
      username: '',
      status: '',
      local: {
        theme: 'dark_normal'
      }
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
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  }
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if (user.email.search('@blade-group') === -1) {
      if (user.email.search('@forgetbox') === -1) {
        firebase.auth().signOut()
        return
      }
    }
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      var client = {
        displayName: user.displayName,
        username: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: '/static/profil/' + user.displayName + '.png',
        WphotoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        uid: user.uid,
        providerData: user.providerData
      }
      Api().post('/account', {
        username: client.displayName,
        mail: client.email,
        picture: '/static/profil/' + user.displayName + '.png',
        Wpicture: client.WphotoURL,
        Token: idToken
      }).then((response) => {
        console.log('logged')
        var me = client
        store.state.user = client
        store.state.user.local = response.data
        if (store.state.request) {
          router.push(store.state.request)
        } else {
          router.push('/')
        }
      })
    })
  } else {
    console.log('sign out')
    router.push('/login')
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
  created () {
  },
  template: '<App/>'
}).$mount('#app')

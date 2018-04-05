<template>
  <v-app id="app" data-app>
    <v-navigation-drawer fixed
                         :clipped="$vuetify.breakpoint.lgAndUp"
                         app
                         dark
                         v-model="drawer"
                         v-if="$route.fullPath === '/home'"
                         style="z-index: 30; box-shadow: 0.9px 0px 0px #222; background-color: rgba(80, 80, 140, 0.2);">
      <v-list dense>
        <template v-for="item in items">
          <span v-if="item.display" :key="item.display">
            <v-layout row
                      v-if="item.heading"
                      align-center
                      :key="item.heading">
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group v-else-if="item.children"
                          v-model="item.model"
                          :key="item.text"
                          :prepend-icon="item.model ? item.icon : item['icon-alt']"
                          append-icon="">
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="redirect(item.link)" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </span>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer fixed
                         :clipped="$vuetify.breakpoint.lgAndUp"
                         app
                         v-model="drawer"
                         v-else
                         style="z-index: 30; box-shadow: 0.9px 0px 0px #aaa;">
      <v-list dense>
        <template v-for="item in items">
          <span v-if="item.display" :key="item.display">
            <v-layout row
                      v-if="item.heading"
                      align-center
                      :key="item.heading">
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group v-else-if="item.children"
                          v-model="item.model"
                          :key="item.text"
                          :prepend-icon="item.model ? item.icon : item['icon-alt']"
                          append-icon="">
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="redirect(item.link)" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </span>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3"
               style="z-index: 20;"
               v-if="$route.fullPath !== '/home'"
               dark
               app
               :clipped-left="$vuetify.breakpoint.lgAndUp"
               fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span style="cursor:pointer;" @click="redirect('/')" class="hidden-sm-and-down">Yorha</span>
      </v-toolbar-title>
      <v-text-field flat
                    solo-inverted
                    label="Search Users"
                    v-model="search"
                    style="border-radius: 10px;"
                    class="hidden-sm-and-down"></v-text-field>
      <v-btn @click="searching()" icon>
        <v-icon style="padding: 10px;" >search</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <a href="https://inbox.google.com/u/0/" target="_blank" style="text-decoration: none;">
        <v-btn icon>
          <v-icon>mail</v-icon>
        </v-btn>
      </a>
      <v-btn @click="$router.push('/home')" icon>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn v-if="signed === true" @click="logout()" icon>
        <img width="20px" src="http://www.clker.com/cliparts/a/U/q/S/B/e/white-button-power-md.png" />
      </v-btn>
      <v-btn v-if="signed === true" @click="redirect('/profil')" icon large>
        <v-avatar size="32px" tile>
          <img style="border-radius: 20px;" :src="user.local.picture" alt="Profil">
        </v-avatar>
      </v-btn>
      <v-btn v-else @click="login()" color="primary" fab small dark>
          <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar
               style="z-index: 20; background-color: rgba(30, 30, 200, 0.2);"
               v-else
               dark
               app
               :clipped-left="$vuetify.breakpoint.lgAndUp"
               fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span style="cursor:pointer;" @click="redirect('/')" class="hidden-sm-and-down">Yorha</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://inbox.google.com/u/0/" target="_blank" style="text-decoration: none;">
        <v-btn icon>
          <v-icon>mail</v-icon>
        </v-btn>
      </a>
      <v-btn v-if="signed === true" @click="logout()" icon>
        <img width="20px" src="http://www.clker.com/cliparts/a/U/q/S/B/e/white-button-power-md.png" />
      </v-btn>
      <v-btn v-if="signed === true" @click="redirect('/profil')" icon large>
        <v-avatar size="32px" tile>
          <img style="border-radius: 20px;" :src="user.local.picture" alt="Profil">
        </v-avatar>
      </v-btn>
      <v-btn v-else @click="login()" color="primary" fab small dark>
          <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view style="margin-top: 60px;" :Search="search" v-on:refresh="checkUser()" />
  </v-app>
</template>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  margin-left: 15px;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>

<script>
import Api from '@/services/Api'
import AccountServices from '@/services/AccountService'

import firebase from 'firebase'
// var db = firebase.database

export default {
  data: () => ({
    user: [],
    signed: false,
    firebaseApp: [],
    token: [],
    search: '',
    menu: '',
    drawer: false,
    department: [
      { text: 'Test' },
      { text: 'Marketing' },
      { text: 'Support' },
      { text: 'Dev' },
      { text: 'Web' },
      { text: 'Infra' },
      { text: 'RH' },
      { text: 'R&D' },
      { text: 'International' },
      { text: 'US' }
    ],
    items: [
      { display: false, icon: 'phonelink', text: 'Version Manager', link: '/posts' },
      { display: true, icon: 'assignment', text: 'Online version', link: '/overview' },
      { display: false, icon: 'contacts', text: 'Management', link: '/management' },
      { display: false, icon: 'history', text: 'App downloads', link: '/downloads' },
      { display: false, icon: 'history', text: 'App downloads', link: '/downloads' },
      { display: false, icon: 'content_copy', text: 'Inventory', link: '/' },
      { display: true, icon: 'assessment', text: 'Benchmark', link: '/benchmark' },
      { display: true, icon: 'favorite', text: 'Dr House', link: 'https://backoffice.pa1.blade-group.fr:2448/drhouse/status' },
      { display: true, icon: 'poll', text: 'Jira', link: 'https://o-computers.atlassian.net/secure/Dashboard.jspa' },
      { display: true, icon: 'settings', text: 'Changelog', link: '/changelog' }
    ]
  }),
  methods: {
    searching () {
      this.$router.push('/SearchUser')
    },
    onSignInSuccess (googleUser) {
      // See https://developers.google.com/identity/sign-in/web/reference#users
      this.$store.GoogleToken = googleUser
      Api().post('/account', {
        username: googleUser.getBasicProfile().getName(),
        mail: googleUser.getBasicProfile().getEmail(),
        picture: googleUser.getBasicProfile().getEmail()
      }).then((response) => {
        this.user = response.data
        this.$store.state.user = response.data
        this.checkUser()
      })
      this.$router.push('/home')
    },
    login () {
      var provider = new firebase.auth.GoogleAuthProvider()
      var vue = this
      firebase.auth().signInWithPopup(provider).then(function (result) {
        Api().post('/account', {
          username: result.user.displayName,
          mail: result.user.email,
          picture: result.user.photoURL
        }).then((response) => {
          vue.token = result.credential.accessToken
          vue.user = result.user
          vue.signed = true
          vue.$store.state.user = result.user
          vue.$store.state.user.local = response.data
          vue.user.local = response.data
          vue.checkUser()
          window.$cookies.set('user_session', vue.user.local.token, '1d')
          vue.$router.push('/home')
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    logout () {
      window.$cookies.remove('user_session')
      location.reload()
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    redirect (link) {
      if (link.indexOf('http') !== -1) {
        window.location.href = link
      } else {
        this.drawer = false
        this.$router.push(link)
      }
    },
    checkUser () {
      var vue = this
      if (vue.$route.fullPath) {
      }
      // check on router change for refresh
      if (vue.user.local) {
        vue.items[3].display = false
        if (vue.user.local.work === 'Test') {
          vue.items[0].display = true
        }
      }
    }
  },
  mounted () {
    var vue = this
    var token = window.$cookies.get('user_session')
    console.log(token)
    if (token) {
      AccountServices.QwickLog({token: token}).then((response) => {
        vue.user = response.data
        vue.user.local = response.data
        vue.$store.state.user = response.data
        vue.$store.state.user.local = response.data
        vue.signed = true
        console.log(vue.user)
        vue.checkUser()
      })
    }
    this.firebaseApp = firebase.initializeApp({
      apiKey: 'AIzaSyDPS2033t0N1gNNswDuL6C1_ZmZY9T_0wA',
      authDomain: 'yorha-198313.firebaseapp.com',
      databaseURL: 'https://yorha-198313.firebaseio.com',
      projectId: 'yorha-198313',
      storageBucket: 'yorha-198313.appspot.com',
      messagingSenderId: '774476919196'
    })
  },
  props: {
    source: String
  },
  watch: {
    $route (to, from) {
      this.checkUser()
    }
  },
  events: {
    refresh: function (data) {
      this.checkUser()
    }
  }
}
</script>

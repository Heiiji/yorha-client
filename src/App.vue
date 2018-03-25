<template>
  <v-app id="app" data-app>
    <v-navigation-drawer fixed
                         :clipped="$vuetify.breakpoint.lgAndUp"
                         app
                         v-model="drawer"
                         style="z-index: 30; box-shadow: 1px 0px 1px #aaa;">
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
              <v-list-tile v-for="(child, i) in item.children"
                           :key="i">
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
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
                    prepend-icon="search"
                    @change="redirect('/SearchUser')"
                    label="Search Users"
                    v-model="search"
                    class="hidden-sm-and-down"></v-text-field>
      <v-spacer></v-spacer>
      <v-menu offset-x
              :close-on-content-click="false"
              :nudge-width="200"
              v-model="menu"
              v-if="signed === true">
        <v-btn slot="activator" icon>
          <v-icon>notifications</v-icon>
          <v-badge left style="margin-left: 15px; margin-top: 15px;">
            <span slot="badge">4</span>
          </v-badge>
        </v-btn>
        <v-card style="padding: 10px;">
          <span style="padding: 10px; display: inline-block;">
            Nouvelle reunions le 15/13/1995
          </span>
          <v-divider></v-divider>
          <span style="padding: 10px; display: inline-block;">
            Nouvelle version en  test !
          </span>
          <v-divider></v-divider>
          <span style="padding: 10px; display: inline-block;">
            civilization VI est bien
          </span>
          <v-divider></v-divider>
        </v-card>
      </v-menu>
      <a href="https://inbox.google.com/u/0/" target="_blank" style="text-decoration: none;">
        <v-btn icon>
          <v-icon>mail</v-icon>
        </v-btn>
      </a>
      <v-btn v-if="signed === true" @click="redirect('/profil')" icon large>
        <v-avatar size="32px" tile>
          <img style="border-radius: 20px;" :src="user.photoURL" alt="Profil">
        </v-avatar>
      </v-btn>
      <v-btn v-else @click="login()" color="primary" fab small dark>
          <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar
               style="z-index: 20; background-color: rgba(30, 30, 200, 0.1)"
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
      <v-menu offset-x
              :close-on-content-click="false"
              :nudge-width="200"
              v-model="menu"
              v-if="signed === true">
        <v-btn slot="activator" icon>
          <v-icon>notifications</v-icon>
          <v-badge left style="margin-left: 15px; margin-top: 15px;">
            <span slot="badge">4</span>
          </v-badge>
        </v-btn>
        <v-card style="padding: 10px;">
          <span style="padding: 10px; display: inline-block;">
            Nouvelle reunions le 15/13/1995
          </span>
          <v-divider></v-divider>
          <span style="padding: 10px; display: inline-block;">
            Nouvelle version en  test !
          </span>
          <v-divider></v-divider>
          <span style="padding: 10px; display: inline-block;">
            civilization VI est bien
          </span>
          <v-divider></v-divider>
        </v-card>
      </v-menu>
      <a href="https://inbox.google.com/u/0/" target="_blank" style="text-decoration: none;">
        <v-btn icon>
          <v-icon>mail</v-icon>
        </v-btn>
      </a>
      <v-btn v-if="signed === true" @click="redirect('/profil')" icon large>
        <v-avatar size="32px" tile>
          <img style="border-radius: 20px;" :src="user.photoURL" alt="Profil">
        </v-avatar>
      </v-btn>
      <v-btn v-else @click="login()" color="primary" fab small dark>
          <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <br/><br/><br/>
    <router-view :Search="search" v-on:refresh="checkUser()" />
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

import firebase from 'firebase'
// var db = firebase.database

export default {
  data: () => ({
    user: [],
    signed: false,
    firebaseApp: [],
    token: [],
    search: '',
    drawer: false,
    department: [
      { text: 'Test' },
      { text: 'Marketing' },
      { text: 'Support' },
      { text: 'Dev' },
      { text: 'Web' },
      { text: 'Infra' },
      { text: 'RH' }
    ],
    items: [
      { display: false, icon: 'phonelink', text: 'Version Manager', link: '/posts' },
      { display: true, icon: 'content_copy', text: 'Online version', link: '/overview' },
      { display: false, icon: 'contacts', text: 'Management', link: '/management' },
      { display: false, icon: 'history', text: 'App downloads', link: '/downloads' },
      {
        display: false,
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' }
        ]
      },
      { display: false, icon: 'content_copy', text: 'Inventory', link: '/' },
      { display: false, icon: 'settings', text: 'Changelog', link: '/changelog' },
      { display: true, icon: 'settings', text: 'Benchmark', link: '/benchmark' },
      { display: false, icon: 'contacts', text: 'N/A' }
    ]
  }),
  methods: {
    onSignInSuccess (googleUser) {
      // See https://developers.google.com/identity/sign-in/web/reference#users
      console.log(googleUser)
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
        vue.token = result.credential.accessToken
        vue.user = result.user
        vue.signed = true
        vue.$store.state.user = result.user
        Api().post('/account', {
          username: result.user.displayName,
          mail: result.user.email,
          picture: result.user.photoURL
        }).then((response) => {
          vue.$store.state.user.local = response.data
          vue.user.local = response.data
          console.log(response.data)
          vue.checkUser()
          vue.$router.push('/home')
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    redirect (link) {
      this.drawer = false
      this.$router.push(link)
    },
    checkUser () {
      var vue = this
      // check on router change for refresh
      if (vue.user.local) {
        vue.items[3].display = false
        if (vue.user.local.work === 'QA') {
          vue.items[0].display = true
        }
      }
    }
  },
  mounted () {
    this.firebaseApp = firebase.initializeApp({
      apiKey: 'AIzaSyDPS2033t0N1gNNswDuL6C1_ZmZY9T_0wA',
      authDomain: 'yorha-198313.firebaseapp.com',
      databaseURL: 'https://yorha-198313.firebaseio.com',
      projectId: 'yorha-198313',
      storageBucket: 'yorha-198313.appspot.com',
      messagingSenderId: '774476919196'
    })
    this.checkUser()
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

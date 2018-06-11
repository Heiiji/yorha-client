<template>
  <v-app id="app" data-app>
    <div class="overlay"></div>
    <main class="page-content content-wrap">
                <span v-if="$route.path != '/home' || $store.state.forceMenu" class="noMobile">
        <div v-if="$route.path != '/login'" class="navbar">
            <div class="navbar-inner">
                <div v-if="signed === true" class="sidebar-pusher">
                    <a href="javascript:void(0);" class="waves-effect waves-button waves-classic push-sidebar">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <div class="logo-box">
                    <a @click="redirect('/home')" class="logo-text" style="background-color: rgb(33, 110, 210);"><img style="display: absolute;" width="100%" :src="MainImg" /></a>
                </div>
                <div v-if="signed === true">
                    <form v-on:submit.prevent="searching()" style="width: 50%; position: absolute; left: 200px; top: 13px;" action="/rechercher">
                        <input type="text" name="search" v-model="search" style="width: 100%; margin-left: 20px;" class="form-control search-input" placeholder="Search...">
                    </form>
                </div>
                <div class="topmenu-outer">
                    <div class="top-menu">
                        <ul class="nav navbar-nav navbar-right">
                            <li v-if="signed === true" class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="material-icons" style="font-size: 24px;">email</i><span v-if="msgNbr > 0" class="badge badge-success pull-right">{{ msgNbr }}</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li class="dropdown-menu-list slimscroll messages" style="max-height: 90%;">
                                        <ul class="list-unstyled">
                                            <li v-for="msg in messages" :key="msg._id" v-if="msg.asread === false" @click="msgNbr = 0; redirect('/chat')">
                                                <a>
                                                    <div class="msg-img"><div class="online on"></div><img class="img-circle" :src="msg.senderPic" alt="pic"></div>
                                                    <p class="msg-name">{{ msg.sender }}</p>
                                                    <p class="msg-text"> {{ msg.text }}</p>
                                                    <p class="msg-time">{{ msg.date }}</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all" style="width: 100%; text-align: center; margin: 0px;"><a @click="msgNbr = 0; redirect('/chat')" class="text-center">All Messages</a></li>
                                </ul>
                            </li>
                            <!--<li v-if="signed === true" class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="fa fa-bell"></i><span class="badge badge-success pull-right">2</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li><p class="drop-title">You have 2 pending tasks !</p></li>
                                    <li class="dropdown-menu-list slimscroll tasks">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <div class="task-icon badge badge-success"><i class="icon-user"></i></div>
                                                    <span class="badge badge-roundless badge-default pull-right">1min ago</span>
                                                    <p class="task-details">New user registered.</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all"><a href="#" class="text-center">All Tasks</a></li>
                                </ul>
                            </li>-->
                            <li>
                              <div v-if="signed === true" @click="redirect('/profil')" style="padding: 20px; cursor: pointer;">
                                <span style="font-size: 0.8em; margin: 15px;">{{user.local.username}}</span>
                                <v-avatar v-if="user.local" size="32px" tile>
                                  <img style="border-radius: 20px;" :src="user.local.picture" alt="Profil">
                                </v-avatar>
                              </div>
                              <v-btn v-else @click="login()" color="primary" fab small dark>
                                  <v-icon>account_circle</v-icon>
                              </v-btn>
                            </li>
                                <li v-if="signed === true">
                                    <a @click="redirect('/calendar')" class="waves-effect waves-button waves-classic"><v-icon medium>event</v-icon></a>
                                </li>
                            <li v-if="signed === true">
                                <a @click="logout()" class="log-out waves-effect waves-button waves-classic">
                                    <span>Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </span>
            <div v-if="($route.path != '/home' || $store.state.forceMenu) && $route.path != '/login'" class="page-sidebar sidebar">
                <div class="page-sidebar-inner slimscroll">
                <div class="sidebar-header">
                        <div class="sidebar-profile">
                            <div v-if="user.local" class="sidebar-profile-details">
                                <span><small>{{ $store.state.user.local.work }}</small></span>
                            </div>
                        </div>
                    </div>
                    <ul class="menu accordion-menu">
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-home"></span><p>Home</p></a></li>
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/profil')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-user"></span><p>Dashboard</p></a></li>
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/department')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-briefcase"></span><p>Departments</p></a></li>
                        <li style="width: 80%; margin-left: 10%;" class="droplink"><a @click="tools = !tools" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-tasks"></span><p>Tools</p><i dark class="material-icons">keyboard_arrow_down</i></a>
                            <ul v-if="tools" class="sub-menu">
                            <!--<li v-if="work === 'Test'" style="width: 85%;"><a @click="$router.push('/posts')">Version Manager</a></li>-->
                                <li style="width: 85%;"><a @click="redirect('/drhouse')" target="_blank">Dr House</a></li>
                                <li style="width: 85%;"><a href="https://o-computers.atlassian.net/secure/Dashboard.jspa" target="_blank">Jira</a></li>
                                <li style="width: 85%;"><a @click="redirect('/Overview')">Version status</a></li>
                            </ul>
                        </li>
                        <li style="width: 80%; margin-left: 10%;" class="droplink"><a @click="document = !document" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-edit"></span><p>Documents</p><i dark class="material-icons">keyboard_arrow_down</i></a>
                            <ul v-if="document" class="sub-menu" style="display: inline-block;">
                                <li style="width: 85%;"><a @click="search = 'Live'; redirect('/SearchUser')">Shadow Live</a></li>
                                <li style="width: 85%;"><a @click="redirect('/version/viewer')">QA Report</a></li>
                            </ul>
                        </li>
                        <!--<li style="width: 80%;"><a @click="$router.push('/timeline')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>replay</v-icon></span><p>Timeline</p></a></li>-->
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/trombi')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.5;" dark>face</v-icon></span><p>Trombi</p></a></li>
                        <li style="width: 80%; margin-left: 10%;"><a @click="feedback = true" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.5;" dark>mail</v-icon></span><p>Feedback</p></a></li>
                    </ul>
                </div>
            </div>
        <router-view class="page-inner" :Search="search" v-on:refresh="checkUser()" />
          <v-dialog style="z-index:25;" v-model="feedback" scrollable max-width="800px">
            <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
              <v-card-title style="color: grey; font-size: 1.4em; text-align: center; display: block;">feedback (by default, it's anonyme)</v-card-title>
              <hr style="margin: 0px;"/>
                <v-flex xs8>
                  <v-text-field v-model="FeedbackText"
                    textarea
                    name="FeedbackText"
                    id="FeedbackText"
                    style="width: 700px; margin: 5px; margin-left: 50px;"
                  ></v-text-field>
                </v-flex>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" flat @click.native="feedback = false;">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="sendFeedback(); feedback = false;">Send</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
    </main>
    <span v-if="$route.path != '/login'" class="mobileOnly"><v-icon class="buttonp" style="z-index: 10; cursor: pointer; position: fixed; background-color: white; border-radius: 40px; padding: 10px; padding-left: 30px; padding-top: 30px; left: -30px; top: -30px;" @click.stop="Mdrawer2 = !Mdrawer2" size="30">menu</v-icon></span>
    <v-navigation-drawer
      v-model="Mdrawer2"
      temporary
      absolute
      style="position: fixed;"
    >
      <v-list class="pa-1">
        <v-list-tile style="height: 100px; background: url('/static/Wallpaper 13.jpg') center; background-size: cover;">
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile @click="redirect('/home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="redirect('/profil')">
          <v-list-tile-action>
            <v-icon>calendar_view_day</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="redirect('/department')">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Departments</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">Tools</div>
            <v-card>
              <v-list-tile @click="redirect('https://backoffice.pa1.blade-group.fr:2448/drhouse/status')">
                <v-list-tile-action>
                  <v-icon>verified_user</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Dr House</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="redirect('https://o-computers.atlassian.net/secure/Dashboard.jspa')">
                <v-list-tile-action>
                  <v-icon>assessment</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>JIRA</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-list-tile @click="redirect('/trombi')">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>trombi</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
.sidebar {
  position: fixed;
}
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
.navbar {
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 0px 1px 0 rgba(0,0,0,.14), 0 2px 4px 0 rgba(0,0,0,.12);
}
@media (max-width:850px) {
  .noMobile {
    display: none;
  }
  .page-inner {
    margin-left: 0px;
    padding-top: 0px;
  }
  .mobileOnly {
    display: inline;
  }
  .page-content {
    padding-left: 0px;
  }
  .page-inner {
    margin-left: 0px;
  }
}
@media (min-width:850px) {
  .mobileOnly {
    display: none;
  }
  .page-inner {
    margin-left: 160px;
  }
}
</style>

<script>
import Api from '@/services/Api'
import AccountServices from '@/services/AccountService'

import firebase from 'firebase'
// var db = firebase.database

export default {
  data: () => ({
    tools: false,
    document: false,
    user: [],
    signed: false,
    firebaseApp: [],
    Mdrawer2: false,
    token: [],
    feedback: false,
    FeedbackText: '',
    messages: [],
    msgNbr: 0,
    search: '',
    menu: '',
    drawer: false,
    work: 'none',
    MainImg: '/static/Shadow_Horizontal_White.png',
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
    Mdrawer: true,
    mini: true,
    right: null,
    items: [
      { display: false, icon: 'home', text: 'Home', link: '/' },
      { display: true, icon: 'reorder', text: 'Dashboard', link: '/profil' },
      { display: false, icon: 'work', text: 'Department', link: '/department' },
      { display: false, icon: 'history', text: 'App downloads', link: '/downloads' },
      { display: false, icon: 'face', text: 'Trombi', link: '/trombi' }
    ]
  }),
  methods: {
    searching () {
      this.$router.push('/SearchUser')
    },
    onSignInSuccess (googleUser) {
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
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log('cuccess')
      }).catch(function (error) {
        console.log(error)
      })
    },
    logout () {
      window.$cookies.remove('user_session')
      this.firebaseApp.auth().signOut()
      location.reload()
    },
    redirect (link) {
      if (this.signed) {
        if (link.indexOf('http') !== -1) {
          window.location.href = link
        } else {
          this.drawer = false
          this.$router.push(link)
        }
      }
    },
    sendFeedback () {
      var vue = this
      if (vue.FeedbackText !== '' && vue.FeedbackText !== ' ') {
        AccountServices.SendFeedback({text: vue.FeedbackText})
      }
    },
    checkUser () {
      var vue = this
      vue.user = vue.$store.state.user
      if (vue.$route.fullPath) {
      }
      this.work = vue.user.local.work
      if (vue.user.local) {
        vue.signed = true
        AccountServices.GetMSG(this.$store.state.user.local.mail).then((response) => {
          vue.messages = response.data.msgs
          vue.msgNbr = 0
          vue.messages.forEach(function (element) {
            if (element.asread === false) {
              vue.msgNbr += 1
            }
          })
        })
        this.$store.state.user.local.picture = this.user.local.picture
      }
    }
  },
  mounted () {
    var vue = this
    this.firebaseApp = this.$store.state.firebase
    var user = this.firebaseApp.auth().currentUser
    if (user) {
      vue.checkUser()
      vue.signed = true
    } else {
      if (vue.$route.path !== '/' && vue.$route.path !== '/login') {
        vue.$store.state.request = vue.$route.path
      }
      this.$router.push('/login')
    }
  },
  props: {
    source: String
  },
  watch: {
    $route (to, from) {
      this.$store.state.forceMenu = false
      if (!this.$store.state.firebase.auth().currentUser) {
        if (this.$route.path !== '/' && this.$route.path !== '/login') {
          this.$store.state.request = this.$route.path
        }
        this.$router.push('/login')
      } else {
        this.signed = true
        this.user = this.$store.state.user
        this.checkUser()
      }
    }
  },
  events: {
    refresh: function (data) {
      this.checkUser()
    }
  }
}
</script>

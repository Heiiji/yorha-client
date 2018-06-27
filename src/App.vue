<style scoped>
input.form-control.search-input:active {
  border-color: blue;
}
.top-menu .navbar-nav>li>a {
  padding-bottom: 6px;
}
.sidebar {
  position: fixed;
}
.sub-menu, .sidebar {
  background-color: rgb(255, 255, 255) !important;
}
.sub-menu p {
  padding: 0px !important;
}
.material-icons, .menu-name {
  color: rgb(26, 26, 26);
}
.menu-name {
  padding: 0px;
}
.menu {
  background-color: rgba(0, 0, 0, 0);
}
.page-sidebar {
  height: 100% !important;
  width: 52px !important;
  overflow-x: hidden !important;
  -webkit-transition: width 0.1s ease-in-out;
  transition: width 0.1s ease-in-out;
}
.page-sidebar::-webkit-scrollbar {
  display: none;
}
.page-sidebar:hover {
  width: 160px !important;
  -webkit-transition: width 0.1s ease-in-out;
  transition: width 0.1s ease-in-out;
}
.page-content {
  background-color: #F1F4F9;
}
.navbar {
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 0px 1px 0 rgba(0,0,0,.14), 0 2px 4px 0 rgba(0,0,0,.12);
  line-height: 8px;
}
.msg-dropdown {
  margin-right: 150px;
}
.logo-text {
  background-color: white;
  padding-left: 10px !important;
}
.logo-text img {
  vertical-align: middle;
}
.navbar-nav {
  text-align: right;
}
.navbar-nav li {
  display: inline-block;
  margin-top: 0px;
  height: 60px;
}
.profile-dropdown {
  background-color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  right: 0px;
  width: 100px;
  margin-right: 20px;
}
.dropdown-menu {
  border-radius: 12px;
}
.dropdown-lg {
  background-color: white;
  position: absolute;
  right: 0px;
}
.my-msgs {
  height: 83px !important;
  line-height: 0px;
}
.text-center {
  text-align: center;
  vertical-align: middle;
  margin-top: 10px;
}
.drop-all:hover {
  background-color: rgb(244, 244, 244);
}
.accordion-menu li {
  width: 100%;
  margin-left: 0%;
}
.accordion-menu div {
  vertical-align: middle;
}
.accordion-menu p {
  text-align: left;
  padding: 3px;
}
.accordion-menu a {
  display: grid;
  grid-template-columns: 24px 74px 24px;
  grid-gap: 14px;
  width: 100%;
  text-align: left;
  vertical-align: middle;
  padding-left: 14px;
}
.accordion-menu a:hover {
  background-color: rgb(230, 230, 230) !important;
}
.list-unstyled {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
@media (max-width:850px) {
  .page-sidebar {
    display: none;
  }
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
}
@media (min-width:851px) {
  .mobileOnly {
    display: none;
  }
  .page-inner {
    margin-left: 52px;
  }
}
</style>
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
                    <a @click="redirect('/')" class="logo-text"><img style="display: absolute;" width="100%" :src="MainImg" /></a>
                </div>
                <div v-if="signed === true">
                    <form v-on:submit.prevent="searching()" style="width: 50%; position: absolute; left: 200px; top: 13px;" action="/rechercher">
                        <input type="text" name="search" v-model="search" style="width: 100%; margin-left: 20px; border-radius: 20px;" class="form-control search-input" placeholder="Search...">
                    </form>
                </div>
                <div class="topmenu-outer">
                    <div class="top-menu">
                        <ul class="nav navbar-nav navbar-right">
                            <li v-if="signed === true" class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="material-icons" style="font-size: 24px; padding-bottom: 10px; color: rgb(255, 115, 11);">chat_bubble_outline</i><span v-if="msgNbr > 0" class="badge badge-success pull-right">{{ msgNbr }}</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg msg-dropdown" role="menu">
                                    <li class="dropdown-menu-list slimscroll messages" style="max-height: 90%;">
                                        <ul class="list-unstyled">
                                            <li class="my-msgs" v-for="(msg, index) in messages" :key="msg._id" @click="msgNbr = 0; redirect('/chat/' + msg.senderMail)">
                                                <a v-if="index == 0" style="border-radius: 12px;">
                                                    <div class="msg-img"><img style="border-radius: 20px;" class="img-circle" :src="msg.senderPic" alt="pic"></div>
                                                    <p class="msg-name">{{ msg.sender }}</p>
                                                    <p class="msg-text"> {{ msg.text }}</p>
                                                    <p class="msg-time">{{ new Date(msg.date).toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</p>
                                                </a>
                                                <a v-else-if="msg.sender != messages[index - 1].sender">
                                                    <div class="msg-img"><img style="border-radius: 20px;" class="img-circle" :src="msg.senderPic" alt="pic"></div>
                                                    <p class="msg-name">{{ msg.sender }}</p>
                                                    <p class="msg-text"> {{ msg.text }}</p>
                                                    <p class="msg-time">{{ new Date(msg.date).toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li @click="msgNbr = 0; redirect('/chat')" class="waves-effect waves-button waves-classic drop-all" style="width: 100%; text-align: center; margin: 0px; height: 40px; border-radius: 12px;"><p class="text-center">All Messages</p></li>
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
                            <li v-if="signed === true">
                              <a @click="redirect('/calendar')" class="waves-effect waves-button waves-classic"><i class="material-icons" style="font-size: 24px; padding-bottom: 10px; color: rgb(48, 120, 220);">date_range</i></a>
                            </li>
                            <li v-if="signed === true" class="dropdown" style="margin-right: 20px;">
                              <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" style="padding-bottom: 10px;" data-toggle="dropdown"><img v-if="user.local" style="width: 24px; height: 24px; border-radius: 12px;" :src="user.local.picture" alt="Profil">
                              </a>
                              <ul class="dropdown-menu profile-dropdown" role="menu">
                                <li style="height: 30px; width: 60px; margin-bottom: 10px;">
                                  <div @click="redirect('/profil')" style="height: 30px; width: 60px; height: 30px; cursor: pointer;">
                                    <p style="height: 20px; text-align: center; padding-top: 5px;">Profile</p>
                                  </div>
                                </li>
                                <li style="height: 30px; width: 60px;">
                                  <div @click="logout()" style="height: 30px; width: 60px; height: 30px; cursor: pointer;">
                                    <p style="height: 20px; text-align: center; padding-top: 5px;">Log out</p>
                                  </div>
                                </li>
                              </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </span>
            <div v-if="($route.path != '/home' || $store.state.forceMenu) && $route.path != '/login'" class="page-sidebar sidebar">
                <div class="page-sidebar-inner slimscroll">
                    <ul class="menu accordion-menu">
                        <li>
                          <a @click="redirect('/')" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(255, 26, 70);">home</i><p class="menu-name">Dashboard</p></a>
                        </li>
                        <li>
                          <a @click="redirect('/Dashboard')" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(48, 120, 220)">vertical_split</i><p class="menu-name">Discussions</p></a>
                        </li>
                        <li>
                          <a @click="redirect('/Chat')" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(255, 115, 11)">forum</i><p class="menu-name">Messages</p></a>
                        </li>
                        <li>
                          <a @click="redirect('/department')" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(121, 200, 204)">work</i><p class="menu-name">Departments</p></a>
                        </li>
                        <li class="droplink">
                          <a @click="tools = !tools" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(166, 120, 255)">build</i><p class="menu-name">Tools</p><i dark class="material-icons" style="margin-left: -22px;">keyboard_arrow_down</i></a>
                            <ul v-if="tools" class="sub-menu">
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/drhouse')" target="_blank"><p class="menu-name">Dr House</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" href="https://o-computers.atlassian.net/secure/Dashboard.jspa" target="_blank"><p class="menu-name">Jira</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/Overview')"><p class="menu-name">Version status</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/Workboard')"><p class="menu-name">Task Manager</p></a></li>
                            </ul>
                        </li>
                        <li class="droplink">
                          <a @click="document = !document" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(98, 175, 255)">folder</i><p class="menu-name">Documents</p><i dark class="material-icons" style="margin-left: -22px;">keyboard_arrow_down</i></a>
                            <ul v-if="document" class="sub-menu">
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="search = 'Live'; redirect('/SearchUser')"><p class="menu-name">Shadow Live</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/version/viewer')"><p class="menu-name">QA Report</p></a></li>
                            </ul>
                        </li>
                        <!--<li style="width: 80%;"><a @click="$router.push('/timeline')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>replay</v-icon></span><p>Timeline</p></a></li>-->
                        <li>
                          <a @click="redirect('/trombi')" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(255, 67, 175)">face</i><p class="menu-name">Trombi</p></a></li>
                        <li>
                          <a @click="feedback = true" class="waves-effect waves-button"><i class="material-icons" style="color: rgb(255, 218, 0)">feedback</i><p class="menu-name">Feedback</p></a></li>
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

<script>
import AccountServices from '@/services/AccountService'

import firebase from 'firebase'
// var db = firebase.database

export default {
  data: () => ({
    tools: false,
    navigator: {
      language: ''
    },
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
    MainImg: '/static/Shadow_Horizontal_Black.svg',
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
    right: null
  }),
  methods: {
    searching () {
      this.$router.push('/SearchUser')
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
          vue.messages.sort(function (a, b) {
            if (a.senderMail > b.senderMail) {
              if (a.date < b.date) {
                return 1
              } else {
                return -1
              }
            } else {
              if (a.date < b.date) {
                return 1
              } else {
                return -1
              }
            }
          })
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
    this.navigator.language = navigator.language
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

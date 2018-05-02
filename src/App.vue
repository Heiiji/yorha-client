<template>
  <v-app id="app" data-app>
    <div class="overlay"></div>
    <main class="page-content content-wrap">
        <div class="navbar">
            <div class="navbar-inner">
                <div v-if="signed === true" class="sidebar-pusher">
                    <a href="javascript:void(0);" class="waves-effect waves-button waves-classic push-sidebar">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <div class="logo-box">
                    <a @click="redirect('/')" class="logo-text" style="background-color: rgb(33, 110, 210);"><img style="display: absolute;" width="100%" :src="MainImg" /></a>
                </div>
                <div v-if="signed === true">
                    <form v-on:submit.prevent="searching()" style="width: 50%; position: absolute; left: 200px; top: 13px;" action="/rechercher">
                        <input type="text" name="search" v-model="search" style="width: 100%;" class="form-control search-input" placeholder="Search...">
                    </form>
                </div>
                <div class="topmenu-outer">
                    <div class="top-menu">
                        <ul class="nav navbar-nav navbar-left">
                            <li>
                                <a @click="changeIMG();" href="javascript:void(0);" class="waves-effect waves-button waves-classic sidebar-toggle"><i class="fa fa-bars"></i></a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li v-if="signed === true" class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="fa fa-envelope"></i><span v-if="msgNbr > 0" class="badge badge-success pull-right">{{ msgNbr }}</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li class="dropdown-menu-list slimscroll messages" style="max-height: 90%;">
                                        <ul class="list-unstyled">
                                            <li v-for="msg in messages" :key="msg._id" v-if="msg.asread === false" @click="redirect('/chat')">
                                                <a>
                                                    <div class="msg-img"><div class="online on"></div><img class="img-circle" :src="msg.senderPic" alt="pic"></div>
                                                    <p class="msg-name">{{ msg.sender }}</p>
                                                    <p class="msg-text"> {{ msg.text }}</p>
                                                    <p class="msg-time">{{ msg.date }}</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all"><a @click="redirect('/chat')" class="text-center">All Messages</a></li>
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
                                    <span><i class="fa fa-sign-out m-r-xs"></i>Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <div class="page-sidebar sidebar">
                <div class="page-sidebar-inner slimscroll">
                <div class="sidebar-header">
                        <div class="sidebar-profile">
                            <a id="profile-menu-link">
                                <div v-if="user.local" class="sidebar-profile-details">
                                    <span><small>{{ user.local.work }}</small></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <ul class="menu accordion-menu">
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-home"></span><p>Home</p></a></li>
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/profil')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-user"></span><p>Dashboard</p></a></li>
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/department')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-briefcase"></span><p>Departments</p></a></li>
                        <li style="width: 80%; margin-left: 10%;" class="droplink"><a href="#" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-tasks"></span><p>Tools</p><span class="arrow"></span></a>
                            <ul class="sub-menu">
                            <!--<li v-if="work === 'Test'" style="width: 85%;"><a @click="$router.push('/posts')">Version Manager</a></li>-->
                                <li style="width: 85%;"><a href="https://backoffice.pa1.blade-group.fr:2448/drhouse/status" target="_blank">Dr House</a></li>
                                <li style="width: 85%;"><a href="https://o-computers.atlassian.net/secure/Dashboard.jspa" target="_blank">Jira</a></li>
                            </ul>
                        </li>
                        <li style="width: 80%; margin-left: 10%;" class="droplink"><a href="#" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-edit"></span><p>Documents</p><span class="arrow"></span></a>
                            <ul class="sub-menu">
                                <li style="width: 85%;"><a @click="search = 'Live'; redirect('/SearchUser')">Shadow Live</a></li>
                            </ul>
                        </li>
                        <!--<li style="width: 80%;"><a @click="$router.push('/timeline')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>replay</v-icon></span><p>Timeline</p></a></li>-->
                        <li style="width: 80%; margin-left: 10%;"><a @click="redirect('/trombi')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>face</v-icon></span><p>Trombi</p></a></li>
                        <li style="width: 80%; margin-left: 10%;"><a @click="feedback = true" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>mail</v-icon></span><p>Feedback</p></a></li>
                    </ul>
                </div>
            </div>
        <router-view class="page-inner" :Search="search" v-on:refresh="checkUser()" />
          <v-dialog style="z-index:25;" v-model="feedback" scrollable max-width="800px">
            <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
              <v-card-title style="color: grey; font-size: 1.4em; text-align: center; display: block;">feedback (by default, it's anonyme)</v-card-title>
              <v-divider></v-divider>
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
.navbar {
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 0px 1px 0 rgba(0,0,0,.14), 0 2px 4px 0 rgba(0,0,0,.12);
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
    changeIMG () {
      if (this.MainImg === '/static/Shadow_Horizontal_White.png') {
        this.MainImg = '/static/Shadow_Icon_White.png'
      } else {
        this.MainImg = '/static/Shadow_Horizontal_White.png'
      }
    },
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
      var provider = new firebase.auth.GoogleAuthProvider()
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
    onSignInError (error) {
      console.log('OH NOES', error)
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
      AccountServices.SendFeedback({text: this.FeedbackText})
    },
    checkUser () {
      console.log('ch')
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
      this.$router.push('/login')
    }
  },
  props: {
    source: String
  },
  watch: {
    $route (to, from) {
      if (!this.$store.state.firebase.auth().currentUser) {
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

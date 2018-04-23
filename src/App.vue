<template>
  <v-app id="app" data-app>
    <div class="overlay"></div>
    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s1">
        <h3><span class="pull-left">Chat</span><a href="javascript:void(0);" class="pull-right" id="closeRight"><i class="fa fa-times"></i></a></h3>
        <div class="slimscroll">
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar2.png" alt=""><span>Sandra smith<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar3.png" alt=""><span>Amily Lee<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar4.png" alt=""><span>Christopher Palmer<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar5.png" alt=""><span>Nick Doe<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar2.png" alt=""><span>Sandra smith<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar3.png" alt=""><span>Amily Lee<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar4.png" alt=""><span>Christopher Palmer<small>Hi! How're you?</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="/static/assets/images/avatar5.png" alt=""><span>Nick Doe<small>Hi! How're you?</small></span></a>
        </div>
</nav>
    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
        <h3><span class="pull-left">Sandra Smith</span> <a href="javascript:void(0);" class="pull-right" id="closeRight2"><i class="fa fa-angle-right"></i></a></h3>
        <div class="slimscroll chat">
            <div class="chat-item chat-item-left">
                <div class="chat-image">
                    <img src="/static/assets/images/avatar2.png" alt="">
                </div>
                <div class="chat-message">
                    Hi There!
                </div>
            </div>
            <div class="chat-item chat-item-right">
                <div class="chat-message">
                    Hi! How are you?
                </div>
            </div>
            <div class="chat-item chat-item-left">
                <div class="chat-image">
                    <img src="/static/assets/images/avatar2.png" alt="">
                </div>
                <div class="chat-message">
                    Fine! do you like my project?
                </div>
            </div>
            <div class="chat-item chat-item-right">
                <div class="chat-message">
                    Yes, It's clean and creative, good job!
                </div>
            </div>
            <div class="chat-item chat-item-left">
                <div class="chat-image">
                    <img src="/static/assets/images/avatar2.png" alt="">
                </div>
                <div class="chat-message">
                    Thanks, I tried!
                </div>
            </div>
            <div class="chat-item chat-item-right">
                <div class="chat-message">
                    Good luck with your sales!
                </div>
            </div>
        </div>
        <div class="chat-write">
            <form class="form-horizontal" action="javascript:void(0);">
                <input type="text" class="form-control" placeholder="Say something">
            </form>
        </div>
</nav>
    <form class="search-form" v-on:submit.prevent="searching()" action="/SearchUser">
        <div class="input-group">
            <input type="text" name="search" v-model="search" style="width: 93%;" class="form-control search-input" placeholder="Search...">
            <span class="input-group-btn">
                <button class="btn btn-default close-search waves-effect waves-button waves-classic" type="button"><i class="fa fa-times"></i></button>
            </span>
        </div>
    </form>
    <main class="page-content content-wrap">
        <div class="navbar">
            <div class="navbar-inner">
                <div class="sidebar-pusher">
                    <a href="javascript:void(0);" class="waves-effect waves-button waves-classic push-sidebar">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
                <div class="logo-box">
                    <a href="/" class="logo-text" style="background-color: rgb(33, 110, 210);"><img style="display: absolute;" width="100px" src="/static/Shadow_Horizontal_White.png" /></a>
                </div>
                <div class="search-button">
                    <a href="javascript:void(0);" class="waves-effect waves-button waves-classic show-search"><i class="fa fa-search"></i></a>
                </div>
                <div class="topmenu-outer">
                    <div class="top-menu">
                        <ul class="nav navbar-nav navbar-left">
                            <li>
                                <a href="javascript:void(0);" class="waves-effect waves-button waves-classic sidebar-toggle"><i class="fa fa-bars"></i></a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="javascript:void(0);" class="waves-effect waves-button waves-classic show-search"><i class="fa fa-search"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="fa fa-envelope"></i><span v-if="msgNbr > 0" class="badge badge-success pull-right">{{ msgNbr }}</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li class="dropdown-menu-list slimscroll messages">
                                        <ul class="list-unstyled">
                                            <li v-for="msg in messages" :key="msg._id" @click="$router.push('/chat')">
                                                <a>
                                                    <div class="msg-img"><div class="online on"></div><img class="img-circle" :src="msg.senderPic" alt="pic"></div>
                                                    <p class="msg-name">{{ msg.sender }}</p>
                                                    <p class="msg-text"> {{ msg.text }}</p>
                                                    <p class="msg-time">{{ msg.date }}</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all"><a @click="$router.push('/chat')" class="text-center">All Messages</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
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
                                            <li>
                                                <a href="#">
                                                    <div class="task-icon badge badge-danger"><i class="icon-energy"></i></div>
                                                    <span class="badge badge-roundless badge-default pull-right">24min ago</span>
                                                    <p class="task-details">Database error.</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all"><a href="#" class="text-center">All Tasks</a></li>
                                </ul>
                            </li>
                            <li>
                              <div v-if="signed === true" @click="redirect('/profil')" style="padding: 20px; cursor: pointer;">
                                <span style="font-size: 0.8em; margin: 15px;">{{user.local.username}}</span>
                                <v-avatar size="32px" tile>
                                  <img style="border-radius: 20px;" :src="user.local.picture" alt="Profil">
                                </v-avatar>
                              </div>
                              <v-btn v-else @click="login()" color="primary" fab small dark>
                                  <v-icon>account_circle</v-icon>
                              </v-btn>
                            </li>
                                <li>
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
                    <li style="width: 80%;"><a @click="$router.push('/')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-home"></span><p>Home</p></a></li>
                    <li v-if="user.local" style="width: 80%;"><a @click="$router.push('/profil')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-user"></span><p>Dashboard</p></a></li>
                    <li style="width: 80%;"><a @click="$router.push('/department')" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-briefcase"></span><p>Departments</p></a></li>
                    <li style="width: 80%;" class="droplink"><a href="#" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-tasks"></span><p>Tools</p><span class="arrow"></span></a>
                        <ul class="sub-menu">
                           <!--<li v-if="work === 'Test'" style="width: 85%;"><a @click="$router.push('/posts')">Version Manager</a></li>-->
                            <li v-if="work === 'Test' || work === 'Support'" style="width: 85%;"><a href="https://backoffice.pa1.blade-group.fr:2448/drhouse/status" target="_blank">Dr House</a></li>
                            <li style="width: 85%;"><a href="https://o-computers.atlassian.net/secure/Dashboard.jspa" target="_blank">Jira</a></li>
                        </ul>
                    </li>
                    <li style="width: 80%;" class="droplink"><a href="#" class="waves-effect waves-button"><span class="menu-icon glyphicon glyphicon-edit"></span><p>Documents</p><span class="arrow"></span></a>
                        <ul class="sub-menu">
                            <li style="width: 85%;"><a @click="search = 'LiveShadow'; $router.push('/SearchUser')">Live Shadow</a></li>
                        </ul>
                    </li>
                    <!--<li style="width: 80%;"><a @click="$router.push('/timeline')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>replay</v-icon></span><p>Timeline</p></a></li>-->
                    <li style="width: 80%;"><a @click="feedback = true" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>mail</v-icon></span><p>Feedback</p></a></li>
                  </ul>
            </div>
        </div>
        <router-view class="page-inner" :Search="search" v-on:refresh="checkUser()" />
          <v-dialog style="z-index:25;" v-model="feedback" scrollable max-width="800px">
            <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
              <v-card-title style="color: blue;">feedback :</v-card-title>
              <v-divider></v-divider>
                <v-flex xs8>
                  <v-text-field v-model="FeedbackText"
                    textarea
                    name="FeedbackText"
                    id="FeedbackText"
                    style="width: 700px; margin: 5px;"
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
    sendFeedback () {
      AccountServices.SendFeedback({text: this.FeedbackText})
    },
    checkUser () {
      var vue = this
      if (vue.$route.fullPath) {
      }
      this.work = vue.user.local.work
      if (vue.user.local) {
        vue.items[3].display = false
        if (vue.user.local.work === 'Test') {
          vue.items[0].display = true
        }
        AccountServices.GetMSG(this.$store.state.user.local.mail).then((response) => {
          vue.messages = response.data.msgs
          vue.msgNbr = 0
          vue.messages.forEach(function (element) {
            if (element.asread === false) {
              vue.msgNbr += 1
            }
          })
        })
      }
    }
  },
  mounted () {
    var vue = this
    var token = window.$cookies.get('user_session')
    if (token) {
      AccountServices.QwickLog({token: token}).then((response) => {
        vue.user = response.data
        vue.user.local = response.data
        vue.$store.state.user = response.data
        vue.$store.state.user.local = response.data
        vue.signed = true
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

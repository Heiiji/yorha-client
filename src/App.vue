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
  margin-right: 214px;
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
.dropdown-color {
  width: 56px;
  right: 145px;
}
.dropdown-color::before, .dropdown-color::after {
  display: none !important;
}
@media (min-width:851px) {
  .mobileOnly {
    display: none;
  }
  .page-inner {
    margin-left: 52px;
  }
}
.topmenu-outer_dark_normal, .topmenu-outer_dark_color, .logo-text_dark_normal, .logo-text_dark_color {
  background-color: #202124;
}
.form-control_dark_normal, .form-control_dark_normal:focus, .form-control_dark_color, .form-control_dark_color:focus {
  background-color: #333333;
  border-color: black;
  color: white;
}
.msg-icon_dark_normal, .color-icon_dark_normal, .calendar-icon_dark_normal, .dashboard_dark_normal, .discussions_dark_normal, .dep_dark_normal, .tools_dark_normal, .doc_dark_normal, .trombi_dark_normal, .fb_dark_normal {
  color: #c1c1c1;
}
.msg-icon_clair_normal, .color-icon_clair_normal, .calendar-icon_clair_normal, .dashboard_clair_normal, .discussions_clair_normal, .dep_clair_normal, .tools_clair_normal, .doc_clair_normal, .trombi_clair_normal, .fb_clair_normal {
  color: #333333;
}
.msg-icon_dark_color, .msg-icon_clair_color {
  color: rgb(255, 115, 11);
}
.color-icon_dark_color, .color-icon_clair_color, .discussions_clair_color, .discussions_dark_color {
  color: rgb(48, 120, 220);
}
.calendar-icon_dark_color, .calendar-icon_clair_color, .dashboard_dark_color, .dashboard_clair_color {
  color: rgb(255, 26, 70);
}
.dep_dark_color, .dep_clair_color {
  color: rgb(121, 200, 204);
}
.tools_dark_color, .tools_clair_color {
  color: rgb(166, 120, 255);
}
.doc_dark_color, .doc_clair_color {
  color: rgb(98, 175, 255);
}
.trombi_dark_color, .trombi_clair_color {
  color: rgb(255, 67, 175);
}
.fb_dark_color, .fb_clair_color {
  color: rgb(255, 218, 0)
}
.sub-menu_clair_normal, .sub-menu_clair_color, .sidebar_clair_normal, .sidebar_clair_color, .popup_clair_color, .popup_clair_normal {
  background-color: rgb(255, 255, 255) !important;
}
.sub-menu_dark_normal, .sub-menu_dark_color, .sidebar_dark_normal, .sidebar_dark_color, .dropdown_dark_normal, .dropdown_dark_color, .popup_dark_color, .popup_dark_normal {
  background-color: #202124 !important;
}
.dropdown_clair_normal, .dropdown_clair_color {
  background-color: white !important;
}
.dropdown_dark_normal::after, .dropdown_dark_color::after {
  border-bottom: 7px solid #202124;
}
.accordion-menu_clair_normal a:hover, .accordion-menu_clair_color a:hover {
  background-color: rgb(230, 230, 230) !important;
}
.accordion-menu_dark_normal a:hover, .accordion-menu_dark_color a:hover, .dropdown_dark_normal a:hover, .dropdown_dark_color a:hover, .allmsgs_dark_normal:hover, .allmsgs_dark_color:hover {
  background-color: rgb(10, 10, 10) !important;
}
.accordion-menu_dark_normal p, .accordion-menu_dark_color p, .dropdown_dark_normal p, .dropdown_dark_color p {
  color: white !important;
}
.my-msgs_dark_normal, .my-msgs_dark_color {
  border-color: rgb(10, 10, 10) !important;
}
.key_dark_normal, .key_dark_color, .popup_dark_color, .popup_dark_normal {
  color: white !important;
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
                    <a @click="redirect('/')" class="logo-text" :class="'logo-text_' + $store.state.user.local.theme">
                      <img v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'" style="display: absolute;" width="100%" src="/static/Shadow_Horizontal_Black.svg" />
                      <img v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'" style="display: absolute;" width="100%" src="/static/Shadow_Horizontal_White.svg" />
                    </a>
                </div>
                <div v-if="signed === true">
                    <form v-on:submit.prevent="searching()" style="width: 50%; position: absolute; left: 200px; top: 13px;" action="/rechercher">
                        <input type="text" name="search" v-model="search" style="width: 100%; margin-left: 20px; border-radius: 20px;" class="form-control search-input" :class="'form-control_' + $store.state.user.local.theme" placeholder="Search...">
                    </form>
                </div>
                <div :class="'topmenu-outer_' + $store.state.user.local.theme">
                    <div class="top-menu">
                        <ul class="nav navbar-nav navbar-right">
                            <li v-if="signed === true" class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="material-icons" :class="'msg-icon_' + $store.state.user.local.theme" style="font-size: 24px; padding-bottom: 10px;">chat_bubble_outline</i><span v-if="msgNbr > 0" class="badge badge-success pull-right">{{ msgNbr }}</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg msg-dropdown" :class="'dropdown_' + $store.state.user.local.theme" role="menu">
                                    <li class="dropdown-menu-list slimscroll messages" style="max-height: 90%;">
                                        <ul class="list-unstyled" style="padding-left: 0px;">
                                            <li class="my-msgs" :class="'my-msgs_' + $store.state.user.local.theme" v-for="(msg, index) in messages" :key="msg._id" @click="msgNbr = 0; redirect('/chat/' + msg.senderMail)">
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
                                    <li @click="msgNbr = 0; redirect('/chat')" class="waves-effect waves-button waves-classic drop-all" :class="'allmsgs_' + $store.state.user.local.theme" style="width: 100%; text-align: center; margin: 0px; height: 40px; border-radius: 12px;"><p class="text-center">All Messages</p></li>
                                </ul>
                            </li>
                            <li v-if="signed === true" class="dropdown">
                                <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><i class="material-icons" :class="'color-icon_' + $store.state.user.local.theme" style="font-size: 24px; padding-bottom: 10px;">color_lens</i></a>
                                <ul class="dropdown-menu title-caret dropdown-lg dropdown-color" style="background-color: rgba(0, 0, 0, 0); border: none; box-shadow: none;" role="menu">
                                  <li class="dropdown-menu-list slimscroll change-theme" style="max-height: 90%;">
                                    <ul class="list-unstyled">
                                      <li v-if="$store.state.user.local.theme === 'dark_color'">
                                        <v-btn color="black" fab small dark @click="editTheme('clair_color')">
                                          <v-icon color="white">invert_colors</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'dark_normal'">
                                        <v-btn color="black" fab small dark @click="editTheme('clair_normal')">
                                          <v-icon color="white">invert_colors</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'clair_normal'">
                                        <v-btn color="white" fab small dark @click="editTheme('dark_normal')">
                                          <v-icon color="black">invert_colors</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'clair_color'">
                                        <v-btn color="white" fab small dark @click="editTheme('dark_color')">
                                          <v-icon color="black">invert_colors</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'dark_normal'">
                                        <v-btn color="black" fab small dark @click="editTheme('dark_color')">
                                          <v-icon color="white">format_color_fill</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'dark_color'">
                                        <v-btn color="black" fab small dark @click="editTheme('dark_normal')">
                                          <v-icon color="blue">format_color_fill</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'clair_normal'">
                                        <v-btn color="white" fab small dark @click="editTheme('clair_color')">
                                          <v-icon color="black">format_color_fill</v-icon>
                                        </v-btn>
                                      </li>
                                      <li v-if="$store.state.user.local.theme === 'clair_color'">
                                        <v-btn color="white" fab small dark @click="editTheme('clair_normal')">
                                          <v-icon color="blue">format_color_fill</v-icon>
                                        </v-btn>
                                      </li>
                                    </ul>
                                  </li>
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
                              <a @click="redirect('/calendar')" class="waves-effect waves-button waves-classic"><i class="material-icons" :class="'calendar-icon_' + $store.state.user.local.theme" style="font-size: 24px; padding-bottom: 10px;">date_range</i></a>
                            </li>
                            <li v-if="signed === true" class="dropdown" style="margin-right: 20px;">
                              <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" style="padding-bottom: 10px;" data-toggle="dropdown"><img v-if="user.local" style="width: 24px; height: 24px; border-radius: 12px;" :src="user.local.picture" alt="Profil">
                              </a>
                              <ul class="dropdown-menu profile-dropdown" :class="'dropdown_' + $store.state.user.local.theme" role="menu">
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
            <div v-if="($route.path != '/home' || $store.state.forceMenu) && $route.path != '/login'" class="page-sidebar sidebar" :class="'sidebar_' + $store.state.user.local.theme">
                <div class="page-sidebar-inner slimscroll">
                    <ul class="menu accordion-menu" :class="'accordion-menu_' + $store.state.user.local.theme">
                        <li>
                          <a @click="redirect('/')" class="waves-effect waves-button"><i class="material-icons" :class="'dashboard_' + $store.state.user.local.theme">home</i><p class="menu-name">Dashboard</p></a>
                        </li>
                        <li>
                          <a @click="redirect('/Dashboard')" class="waves-effect waves-button"><i class="material-icons" :class="'discussions_' + $store.state.user.local.theme">vertical_split</i><p class="menu-name">Discussions</p></a>
                        </li>
                        <li>
                          <a @click="redirect('/Chat')" class="waves-effect waves-button"><i class="material-icons" :class="'msg-icon_' + $store.state.user.local.theme">forum</i><p class="menu-name">Messages</p></a>
                        </li>
                        <li>
                          <a @click="redirect('/department')" class="waves-effect waves-button"><i class="material-icons" :class="'dep_' + $store.state.user.local.theme">work</i><p class="menu-name">Departments</p></a>
                        </li>
                        <li class="droplink">
                          <a @click="tools = !tools" class="waves-effect waves-button"><i class="material-icons" :class="'tools_' + $store.state.user.local.theme">build</i><p class="menu-name">Tools</p><i dark :class="'material-icons ' + 'key_' + $store.state.user.local.theme" style="margin-left: -22px;">keyboard_arrow_down</i></a>
                            <ul v-if="tools" class="sub-menu" :class="'sub-menu_' + $store.state.user.local.theme">
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/drhouse')" target="_blank"><p class="menu-name">Dr House</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" href="https://o-computers.atlassian.net/secure/Dashboard.jspa" target="_blank"><p class="menu-name">Jira</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/Overview')"><p class="menu-name">Version status</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/Workboard')"><p class="menu-name">Task Manager</p></a></li>
                            </ul>
                        </li>
                        <li class="droplink">
                          <a @click="document = !document" class="waves-effect waves-button"><i class="material-icons" :class="'doc_' + $store.state.user.local.theme">folder</i><p class="menu-name">Documents</p><i dark :class="'material-icons ' + 'key_' + $store.state.user.local.theme" style="margin-left: -22px;">keyboard_arrow_down</i></a>
                            <ul v-if="document" class="sub-menu" :class="'sub-menu_' + $store.state.user.local.theme">
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="search = 'Live'; redirect('/SearchUser')"><p class="menu-name">Shadow Live</p></a></li>
                                <li style="width: 100%; margin: 0px; padding-left: 24%;"><a style="text-align: left !important;" @click="redirect('/version/viewer')"><p class="menu-name">QA Report</p></a></li>
                            </ul>
                        </li>
                        <!--<li style="width: 80%;"><a @click="$router.push('/timeline')" class="waves-effect waves-button"><span class="menu-icon"><v-icon style="opacity: 0.6;" dark>replay</v-icon></span><p>Timeline</p></a></li>-->
                        <li>
                          <a @click="redirect('/trombi')" class="waves-effect waves-button"><i class="material-icons" :class="'trombi_' + $store.state.user.local.theme">face</i><p class="menu-name">Trombi</p></a></li>
                        <li>
                          <a @click="feedback = true" class="waves-effect waves-button"><i class="material-icons" :class="'fb_' + $store.state.user.local.theme">feedback</i><p class="menu-name">Feedback</p></a></li>
                    </ul>
                </div>
            </div>
        <router-view class="page-inner" :Search="search" v-on:refresh="checkUser()" />
          <v-dialog style="z-index:25;" v-model="feedback" scrollable max-width="800px">
            <v-card style=" text-align: center;" :class="'popup_' + $store.state.user.local.theme">
              <v-card-title style="font-size: 1.4em; text-align: center; display: block;" :class="'popup_' + $store.state.user.local.theme">feedback (by default, it's anonyme)</v-card-title>
              <hr style="margin: 0px;"/>
                <v-flex xs8 v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
                  <v-text-field v-model="FeedbackText" :class="'popup_' + $store.state.user.local.theme"
                    textarea
                    name="FeedbackText"
                    id="FeedbackText"
                    style="width: 700px; margin: 5px; margin-left: 50px;"
                    dark="true"
                  ></v-text-field>
                </v-flex>
                <v-flex xs8 v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
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
    <QwickChat v-if="$store.state.activeQwickConv !== 'null'" selectChat="$store.state.activeQwickConv"/>
  </v-app>
</template>

<script>
import AccountServices from '@/services/AccountService'
import QwickChat from './components/qwickChat'

import firebase from 'firebase'
var audio = new Audio(require('../static/notification.wav'))
// var db = firebase.database

export default {
  data: () => ({
    tools: false,
    navigator: {
      language: ''
    },
    document: false,
    isActive: false,
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
  components: {
    QwickChat
  },
  methods: {
    editTheme (newTheme) {
      let vue = this
      this.$store.state.user.local.theme = newTheme
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        AccountServices.editTheme({
          theme: newTheme,
          token: idToken
        }).then(() => {
          vue.checkUser()
          vue.$router.push('/trash')
        })
      })
    },
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
      let tp = vue.msgNbr
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
          for (let m = 0; m < vue.messages.length; m++) {
            if (vue.messages[m].asread === false) {
              vue.msgNbr += 1
            }
          }
          if (vue.isActive) {
            if (tp !== vue.msgNbr) {
              audio.play()
            }
          } else {
            vue.isActive = true
          }
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
      window.setInterval(() => {
        vue.checkUser()
      }, 5000)
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

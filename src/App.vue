<template>
  <v-app id="app" data-app>
    <v-navigation-drawer fixed
                         :clipped="$vuetify.breakpoint.lgAndUp"
                         app
                         v-model="drawer"
                         style="z-index: 30;">
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
                    label="Search Users"
                    class="hidden-sm-and-down"></v-text-field>
      <a href="http://192.168.1.208:8065/blade" target="_blank" style="text-decoration:none; color: white; padding: 10px; padding-left: 50px; display: inline-block;">
        MATTERMOST
      </a>
      <v-spacer></v-spacer>
      <v-menu offset-x
              :close-on-content-click="false"
              :nudge-width="200"
              v-model="menu">
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
        <v-badge left>
          <span slot="badge">2</span>
        </v-badge>
      </a>
      <v-btn v-if="!user.status" @click="redirect('/login')" icon large>
        <v-avatar size="32px" tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg"
               alt="Profil">
        </v-avatar>
      </v-btn>
      <v-btn v-if="user.status && user.status != 'deactivated'" @click="redirect('/profil')" icon large>
        <v-avatar size="32px" tile>
          <img src="https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
               alt="Profil">
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <br/><br/><br/>
    <v-tabs v-model="active"
            color="blue"
            dark
            slider-color="red"
            style="text-align: center;">
      <label style="color: white; font-size: 1.5em; padding-top: 10px; padding-left: 10px;" >Department </label>
      <v-tab ripple style="margin-left: 30%">
        Général
      </v-tab>
      <v-tab ripple>
        Test
      </v-tab>
      <v-tab ripple>
        R&D
      </v-tab>
      <v-tab ripple>
        Dev
      </v-tab>
      <v-tab-item v-for="n in 3"
                  :key="n">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <router-view v-on:refresh="checkUser()" />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    user: [],
    dialog: false,
    drawer: false,
    items: [
      { display: true, icon: 'phonelink', text: 'Version Manager', link: '/posts' },
      { display: true, icon: 'content_copy', text: 'Online version', link: '/overview' },
      { display: true, icon: 'contacts', text: 'Management', link: '/management' },
      { display: true, icon: 'contacts', text: 'Login', link: '/login' },
      { display: true, icon: 'history', text: 'App downloads', link: '/downloads' },
      {
        display: true,
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
      { display: true, icon: 'content_copy', text: 'Inventory', link: '/' },
      { display: true, icon: 'settings', text: 'Changelog', link: '/changelog' },
      { display: false, icon: 'contacts', text: 'N/A' }
    ]
  }),
  methods: {
    redirect (link) {
      this.drawer = false
      this.$router.push(link)
    },
    checkUser () {
      // check on router change for refresh
      console.log('user check()')
      this.user = this.$store.state.user
      this.items[0].display = false
      this.items[2].display = false
      if (this.user.status) {
        if (this.user.work === 'QA') {
          this.items[2].display = true
          this.items[0].display = true
        }
        this.items[3].display = false
        this.items[7].display = true
        this.items[7].text = this.user.work
      }
    }
  },
  mounted () {
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

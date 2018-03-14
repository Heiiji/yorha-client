<template>
  <v-app id="inspire" data-app>
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
      style="z-index: 30;"
    >
      <v-list dense>
        <template v-for="item in items">
          <span v-if="item.display" :key="item.display" >
            <v-layout
              row
              v-if="item.heading"
              align-center
              :key="item.heading"
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"

              >
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
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span style="cursor:pointer;" @click="redirect('/')" class="hidden-sm-and-down">Yorha</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search Users"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn v-if="!user.status" @click="redirect('/login')" icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
      <v-btn v-if="user.status && user.status != 'deactivated'" @click="redirect('/profil')" icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <router-view/>
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
      { display: true, icon: 'settings', text: 'Changelog', link: '/changelog' }
    ]
  }),
  methods: {
    redirect (link) {
      this.drawer = false
      this.$router.push(link)
    },
    checkUser () {
      // check on router change for refresh
      this.user = this.$store.state.user
      this.items[0].display = false
      this.items[2].display = false
      if (this.user.status) {
        if (this.user.work === 'QA') {
          this.items[2].display = true
          this.items[0].display = false
        }
        this.items[3].display = false
      }
    }
  },
  mounted () {
    this.checkUser()
  },
  props: {
    source: String
  }
}
</script>

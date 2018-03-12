<template>
  <div id="app" data-app>
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" style="position: fixed; top: 0px; z-index:20;">
      <header class="mdl-layout__header" style="background-color: rgb(4, 7, 47);">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <router-link to="/" style="color: white; text-decoration: none;"><span class="mdl-layout-title">Yorha</span></router-link>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <router-link class="mdl-navigation__link" v-if="user.status=='Hero'" to="/posts">Version Manager</router-link>
            <router-link class="mdl-navigation__link" v-if="!user.status" to="/login">Login</router-link>
            <router-link class="mdl-navigation__link" to="/overview">Online version</router-link>
            <router-link class="mdl-navigation__link" v-if="user.status=='Hero'" to="/management">Management</router-link>
            <router-link v-if="isLoggedIn" class="mdl-navigation__link" to="/">{{ user.username }} ({{user.status}})</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <router-link style="text-decoration: none; color: black;" to="/" class="mdl-layout-title">Yorha</router-link>
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" v-if="user.status=='Hero'" to="/posts">Version Manager</router-link>
          <router-link class="mdl-navigation__link" v-if="!user.status" to="/login">Login</router-link>
          <router-link class="mdl-navigation__link" to="/overview">Online version</router-link>
          <router-link class="mdl-navigation__link" to="/">{{ user.username }}</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content"><!-- Your content goes here --></div>
      </main>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      user: []
    }
  },
  mounted () {
    this.checkUser()
  },
  methods: {
    checkUser () {
      this.user = this.$store.state.user
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

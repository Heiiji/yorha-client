<template>
  <div>
    <br/><br/><br/>
    <span v-if="user.photoURL"><img width="300px" style="float: left;" :src="user.photoURL"/></span>
    <h1>Profil :</h1>
    username : <span v-if="user.displayName">{{ user.displayName }}<br/></span>
    workplace : <span v-if="user.local.work">{{ user.local.work }}<br/></span>
    website rank : <span v-if="user.status">{{ user.status }}<br/></span>
    mail : <span v-if="user.email">{{ user.email }} <br/></span>
    Home Background theme :
    <v-flex xs3>
        <v-select
          :items="background"
          v-model="e1"
          label="Theme"
          single-line
        ></v-select>
      </v-flex>
  </div>
</template>

<script>
// import AccountService from '@/services/AccountService'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: [],
      e1: null,
      background: [
        { text: 'Landscape' },
        { text: 'Cat' },
        { text: 'Urban' }
      ]
    }
  },
  mounted () {
    this.user = this.$store.state.user
  },
  methods: {
  }
}
</script>

<style type="text/css">
</style>

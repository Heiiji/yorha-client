<template>
  <div>
    <br/><br/><br/>
    <img width="300px" style="float: left;" :src="user.path"/>
    <h1>Profil :</h1>
    username : {{ user.username }}<br/>
    workplace : {{ user.work }}<br/>
    website rank : {{ user.status }}<br/>
    mail : {{ user.mail }} <br/>
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

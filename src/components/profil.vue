<template>
  <div>
    <br/><br/><br/>
    <img width="300px" style="float: left;" :src="user.path"/>
    <h1>Profil :</h1>
    username : {{ user.username }}<br/>
    workplace : {{ user.work }}<br/>
    website rank : {{ user.status }}<br/>
    mail : {{ user.mail }}
  </div>
</template>

<script>
// import AccountService from '@/services/AccountService'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: []
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

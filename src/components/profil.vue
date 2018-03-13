<template>
  <div>
    <br/><br/><br/>
    <img width="300px" style="float: left;" src="https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
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
    if (!this.user.status) {
      this.$router.push('/login')
    }
  },
  methods: {
  }
}
</script>

<style type="text/css">
</style>

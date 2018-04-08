<template>
  <div style="background-color: rgba(200, 200, 200, 0.2); min-height: 100%; width: 75%; margin-left: 12.5%">
    <br/>
    <div>
      <div style="position: relative;">
        <span id="photo" v-if="user.picture">
          <img width="300px" :src="user.picture"/>
        </span>
        <div style="display: flex; padding-top: 25px;">
          <span style="font-size: 2em; display: block;" v-if="user">{{ user.username }} <span style="font-size: 0.5em;">({{ user.mail }})</span><br/></span><br/>
        </div>
        <br/>
        workplace : <span v-if="user">{{ user.work }}</span><br/>
        workplace rank : <span v-if="user">{{ user.qualifier }}</span><br/><br/><br/>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <p style="margin: 15px;" v-if="user">{{ user.description }}</p>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'Profil',
  data () {
    return {
      user: []
    }
  },
  mounted () {
    this.getUser(this.$route.params.id)
  },
  methods: {
    async getUser (id) {
      const response = await AccountService.FindById(id)
      this.user = response.data.user
    }
  }
}
</script>

<style type="text/css">
#photo {
  float: left;
  margin: 25px;
}
</style>

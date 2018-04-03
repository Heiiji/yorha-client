<template>
  <div>
    <br/>
    <div>
    <span id="photo" v-if="user.picture">
      <img width="300px" :src="user.picture"/>
    </span>
    <h1>Profil :</h1>
    username : <span v-if="user.username">{{ user.username }}<br/></span>
    workplace : <span v-if="user.work">{{ user.work }}</span><br/>
    workplace rank : <span v-if="user.qualifier">{{ user.qualifier }}</span><br/>
    mail : <span v-if="user.mail">{{ user.mail }} </span><br/>
    </div><br/>
    <h2>Description : </h2>
    <p v-if="user.description">{{ user.description }}</p>
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
  display: inline-block;
  position: relative;
}
</style>

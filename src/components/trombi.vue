<template>
  <div class="posts">
    <br/><br/><br/>
    <h1 style="text-align: center; color: grey;" >Trombinoscope</h1>
    <br/>
    <v-card v-for="(user, i) in users" :key="i" style="margin: 10px; display: inline-block; width: 400px;">
                    <v-card-media @click="$router.push('/profil/' + user._id)" :src="user.picture" height="300px">
                    </v-card-media>
                    <v-card-title @click="$router.push('/profil/' + user._id)" primary-title>
                      <div>
                        <h3 class="headline mb-0">{{ user.username }} <br/> <span style="color: blue; font-size: 0.6em;">({{ user.mail }})</span></h3>
                        <hr/>
                        <h4>Workplace : {{ user.work }}</h4>
                        <h4>Rank : {{ user.qualifier }}</h4>
                      </div>
                    </v-card-title>
                  </v-card>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'Trombi',
  data () {
    return {
      edition: false,
      users: [],
      modif: {
        id: '',
        status: ''
      },
      rangs: [
        { text: 'Test' },
        { text: 'Marketing' },
        { text: 'Support' },
        { text: 'Dev' },
        { text: 'Web' },
        { text: 'Infra' },
        { text: 'RH' },
        { text: 'R&D' },
        { text: 'International' },
        { text: 'LIMA' }
      ]
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsersByStatus (arg) {
      const response = await AccountService.FindByStatus(arg)
      this.users = response.data.users
    },
    async getUsers (arg) {
      const response = await AccountService.FindUsers('all')
      this.users = response.data.users
    },
    ChangeStatus (id, newStatus) {
      this.modif.id = id
      this.modif.status = newStatus
      AccountService.ChangeStatus(this.modif)
    }
  }
}
</script>
<style scoped>
.card{
  margin: 10px;
  display: inline-block;
  width: 400px;
  cursor: pointer;
  -webkit-transition: box-shadow 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, transform 0.1s;
}
.card:hover {
  box-shadow: 1px 1px 12px #555;
  -webkit-transition: box-shadow 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, transform 0.1s;
}
</style>

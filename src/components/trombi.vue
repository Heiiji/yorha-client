<template>
  <div>
    <div style="text-align: left; position: relative; width: 100%; padding-bottom: 80px; margin-bottom: -80px;" class="page-title">
        <h3>Trombinoscope</h3>
    </div>
    <br/>
    <v-card v-for="(user, i) in users" :key="i" style="margin: 10px; display: inline-block; width: 380px; background-color: rgb(250, 250, 250)!important; color: black!important;" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                <v-flex xs5>
                  <v-card-media
                    :src="user.picture"
                    height="100px"
                    style="border-radius: 10px;"
                    @click="$router.push('/profil/' + user._id)"
                    contain
                  ></v-card-media>
                </v-flex>
                  <v-flex @click="$router.push('/profil/' + user._id)" xs7>
                    <div>
                      <div class="headline">{{ user.username }} </div>
                      <div>{{ user.mail }}</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
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
      this.users = response.data.users.sort(function (a, b) {
        if (a.username > b.username) {
          return 1
        } else {
          return -1
        }
      })
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

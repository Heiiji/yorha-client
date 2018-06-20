<template>
  <div class="posts">
    <br/><br/><br/>
    <h1>User Management</h1>
    <br/>
    <v-card v-for="(user, i) in users" :key="i" style="margin: 10px; display: inline-block; width: 400px;">
                    <v-card-media :src="user.picture" height="300px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{ user.username }} <br/> <span style="color: blue; font-size: 0.6em;">({{ user.mail }})</span></h3>
                        <hr/>
                        <h4>Workplace : {{ user.work }}</h4>
                        <h4>Rank : {{ user.qualifier }}</h4>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn flat @click="SetLead(user._id)" color="orange">isLeader</v-btn>
                      <v-menu bottom left>
                      <v-btn flat color="orange" slot="activator">Change</v-btn>
                      <v-list>
                        <v-list-tile style="z-index: 20; background-color: white;" v-for="(item, i) in rangs" :key="i">
                          <v-list-tile-title style="z-index: 21;" @click="ChangeStatus(user._id, item.text)">{{ item.text }}</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                      </v-menu>
                    </v-card-actions>
                  </v-card>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'UsersManager',
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
        { text: 'LIMA' },
        { text: 'Administration' }
      ]
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.getUsers()
  },
  methods: {
    async getUsersByStatus (arg) {
      const response = await AccountService.FindByStatus(arg)
      this.users = response.data.users
    },
    async getUsers () {
      const response = await AccountService.FindUsers('all')
      this.users = response.data.users
    },
    SetLead (id) {
      this.$store.state.firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        AccountService.SetQualifier({id: id, qualifier: 'SquadLeader', token: idToken})
      })
    },
    ChangeStatus (id, newStatus) {
      let vue = this
      this.$store.state.firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        vue.modif.id = id
        vue.modif.status = newStatus
        vue.modif.token = idToken
        AccountService.ChangeStatus(vue.modif)
      })
    }
  }
}
</script>

<style type="text/css">
</style>

<template>
  <div class="posts">
    <br/><br/><br/>
    <h1>User Management</h1>
    <br/>

    <v-expansion-panel style="z-index: 20;">
      <v-expansion-panel-content
        hide-actions
      >
        <v-layout style="z-index: 20;" align-center row spacer slot="header">
          <v-flex xs4 sm2 md1>
            <v-avatar size="32px" tile>
              <img style="border-radius: 20px;" src="https://www.atlantic-avitaillement.fr/wp-content/uploads/765-default-avatar.png" alt="Profil">
            </v-avatar>
          </v-flex>
          <v-flex sm5 md3 hidden-xs-only>
            <strong>Username</strong>
          </v-flex>
          <v-flex no-wrap xs5 sm3>
            <strong>email</strong>
          </v-flex>
          <v-flex
            class="grey--text"
            ellipsis
            hidden-sm-and-down
          >
            Workplace
          </v-flex>
          <v-flex
            class="grey--text"
            ellipsis
            hidden-sm-and-down
          >
            qualifier
          </v-flex>
        </v-layout>
      </v-expansion-panel-content>
      <br/><br/>
        <v-expansion-panel-content
          hide-actions
          v-for="(user, i) in users"
          :key="i"
        >
          <v-layout style="z-index: 20;" align-center row spacer slot="header">
            <v-flex xs4 sm2 md1>
              <v-avatar size="32px" tile>
                <img style="border-radius: 20px;" :src="user.picture" alt="Profil">
              </v-avatar>
            </v-flex>
            <v-flex sm5 md3 hidden-xs-only>
              <strong v-html="user.username"/>
            </v-flex>
            <v-flex no-wrap xs5 sm3>
              <strong v-html="user.mail"/>
            </v-flex>
            <v-flex
              class="grey--text"
              ellipsis
              v-if="user.work"
              hidden-sm-and-down
            >
              {{ user.work }}
            </v-flex>
            <v-flex
              class="grey--text"
              ellipsis
              hidden-sm-and-down
              v-if="user.qualifier"
            >
              {{ user.qualifier }}
            </v-flex>
            <v-menu bottom left>
              <v-btn icon slot="activator" dark>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile style="z-index: 20; background-color: white;" v-for="(item, i) in rangs" :key="i">
                  <v-list-tile-title style="z-index: 21;" @click="ChangeStatus(user._id, item.title)">{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-layout>
        </v-expansion-panel-content>
    </v-expansion-panel>
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
        { title: 'Test' },
        { title: 'QA' },
        { title: 'R&D' },
        { title: 'Dev' },
        { title: 'Market' }
      ]
    }
  },
  mounted () {
    this.getUsers('stagiaire')
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

<style type="text/css">
</style>

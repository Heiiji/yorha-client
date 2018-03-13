<template>
  <div class="posts">
    <br/><br/><br/>
    <h1>User Management</h1>
    <br/><br/>
    <h3>Users Not Activated yet : </h3>

    <v-expansion-panel style="z-index: 20;">
      <v-expansion-panel-content
        hide-actions
        v-for="(user, i) in users"
        :key="i"
      >
        <v-layout style="z-index: 20;" align-center row spacer slot="header">
          <v-flex xs4 sm2 md1>
            <v-avatar
              size="36px"
              slot="activator"
            >
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt=""
                v-if="user.avatar"
              >
              <v-icon :color="user.color" v-else>{{ user.icon }}</v-icon>
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
            hidden-sm-and-down
            v-if="user.status"
          >
            {{ user.status }}
          </v-flex>
          <v-flex
            class="grey--text"
            ellipsis
            v-if="user.work"
            hidden-sm-and-down
          >
            {{ user.work }}
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
        { title: 'QA' },
        { title: 'Proximity' },
        { title: 'R&D' },
        { title: 'Dev' }
      ]
    }
  },
  mounted () {
    this.getUsersByStatus('deactivated')
  },
  methods: {
    async getUsersByStatus (arg) {
      const response = await AccountService.FindByStatus(arg)
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

<template>
  <div>
    recherche : {{Search}}
    <v-expansion-panel style="z-index: 20;">
      <v-expansion-panel-content
        hide-actions
        v-for="(user, i) in users"
        :key="i"
      >
        <v-layout @click="$router.push('/profil/' + user._id)" style="z-index: 20;" align-center row spacer slot="header">
          <v-flex xs4 sm2 md1>
            <v-avatar
              size="36px"
              slot="activator"
            >
              <img
                :src="user.picture"
                alt=""
              />
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
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<style>
</style>
<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'SearchUser',
  data () {
    return {
      users: []
    }
  },
  props: {
    Search: ''
  },
  mounted () {
    this.users = this.takeUsers(this.Search)
  },
  methods: {
    takeUsers (arg) {
      AccountService.FindUsersByName(arg).then((response) => {
        this.users = response.data.users
      })
    }
  }
}
</script>

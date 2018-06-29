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
.page-inner_dark_color, .page-inner_dark_normal {
  background-color: #333333 !important;
}
</style>
<template>
  <div :class="'page-inner_' + $store.state.user.local.theme" style="min-height:951px !important">
    <br/>
    <v-card v-for="(user, i) in users" :key="i" dark="true" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
                    <v-card-media @click="$router.push('/profil/' + user._id)" :src="user.picture" height="300px">
                    </v-card-media>
                    <v-card-title @click="$router.push('/profil/' + user._id)" primary-title>
                      <div>
                        <h3 class="headline mb-0">{{ user.username }} <br/> <span style="font-size: 0.6em;">({{ user.mail }})</span></h3>
                        <hr/>
                        <h4>Workplace : {{ user.work }}</h4>
                      </div>
                    </v-card-title>
                  </v-card>
    <v-card v-for="(user, i) in users" :key="i" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
                    <v-card-media @click="$router.push('/profil/' + user._id)" :src="user.picture" height="300px">
                    </v-card-media>
                    <v-card-title @click="$router.push('/profil/' + user._id)" primary-title>
                      <div>
                        <h3 class="headline mb-0">{{ user.username }} <br/> <span style="font-size: 0.6em;">({{ user.mail }})</span></h3>
                        <hr/>
                        <h4>Workplace : {{ user.work }}</h4>
                      </div>
                    </v-card-title>
                  </v-card>
    <v-expansion-panel style="z-index: 20;" dark="true" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
        <v-expansion-panel-content
          hide-actions
          v-for="(doc, i) in docs"
          :key="i"
        >
          <v-layout @click="$router.push('/document/YTShadowLive/' + doc._id)" style="z-index: 20;" align-center row spacer slot="header">
            <v-flex sm5 md3 hidden-xs-only>
              <strong v-html="doc.title"/>
            </v-flex>
            <v-flex v-if="doc.date" no-wrap xs5 sm3>
              <strong v-html="doc.date"/>
            </v-flex>
            <v-flex
              class="grey--text"
              ellipsis
              v-if="doc.body"
              hidden-sm-and-down
            >
              {{ doc.body.match(/.{0,300}/g)[0] + ' ...' }}
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel style="z-index: 20;" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
        <v-expansion-panel-content
          hide-actions
          v-for="(doc, i) in docs"
          :key="i"
        >
          <v-layout @click="$router.push('/document/YTShadowLive/' + doc._id)" style="z-index: 20;" align-center row spacer slot="header">
            <v-flex sm5 md3 hidden-xs-only>
              <strong v-html="doc.title"/>
            </v-flex>
            <v-flex v-if="doc.date" no-wrap xs5 sm3>
              <strong v-html="doc.date"/>
            </v-flex>
            <v-flex
              class="grey--text"
              ellipsis
              v-if="doc.body"
              hidden-sm-and-down
            >
              {{ doc.body.match(/.{0,300}/g)[0] + ' ...' }}
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<script>
import AccountService from '@/services/AccountService'
import DocService from '@/services/docService'

export default {
  name: 'SearchUser',
  data () {
    return {
      users: [],
      docs: []
    }
  },
  props: {
    Search: ''
  },
  mounted () {
    var vue = this
    vue.takeUsers(vue.Search)
    vue.takeDoc(vue.Search)
  },
  methods: {
    takeUsers (arg) {
      AccountService.FindUsersByName(arg).then((response) => {
        this.users = response.data.users
      })
    },
    takeDoc (arg) {
      DocService.Search(arg).then((response) => {
        this.docs = response.data.docs
      })
    }
  }
}
</script>

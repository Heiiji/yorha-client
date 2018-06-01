<template>
  <div>
    <div style="text-align: left; position: relative; width: 100%; padding-bottom: 80px; margin-bottom: -80px;" class="page-title">
        <h3>Shadow's Versions</h3>
    </div>
    <div style="margin-top: 20px;">
        <div v-if="users !== 'none'" class="team">
              <div v-for="pers in users" :key="pers._id" class="team-member" @click="$router.push('/profil/' + pers._id)">
                 <img :src="pers.picture" alt="">
              </div>
          </div>
    </div><br/>
    <div style="widht: 100%; display: block; margin-top: 60px;">
    <v-flex style="cursor: pointer; display: inline-block; width: 400px; margin: 10px;" v-for="value in versions" :key="value.version" @click="$router.push('/version/id/' + value._id)">
            <v-card  color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div>
                        <div class="headline">{{ value.support }} <strong>{{ value.version }}</strong></div>
                        <span class="white--text">{{ value.state }} : <span :class="value.status">{{ value.status }}</span> : tested by {{ value.tester }}</span>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="value.picture"
                      height="125px"
                      style="border-radius: 5px;"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </div>
      <v-layout row justify-center>
  </v-layout>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'
import VersionService from '@/services/VersionService'

export default {
  name: 'VersionManager',
  data () {
    return {
      edition: false,
      Verdialog: false,
      Validator: '',
      versions: [],
      users: [],
      modules: [
        { text: 'Windows' },
        { text: 'Mac OS' },
        { text: 'Shadow Box' },
        { text: 'IOS' },
        { text: 'Android' },
        { text: 'O-Capture' },
        { text: 'O-Controller' },
        { text: 'Shadow Input' },
        { text: 'WatchDog' },
        { text: 'Updater' },
        { text: 'Shadow Serial' },
        { text: 'Shadow Intel' }
      ],
      editeable: {
        device: '',
        target: '',
        scheduled: '',
        time: '',
        version: '',
        importance: '',
        changelog: '',
        picture: '',
        tester: 'none',
        id: 0
      },
      finnished: {
        id: '',
        score: 0.01,
        status: '',
        bugs: ''
      },
      show: false,
      dialogm1: '',
      VersionDisplay: 'Version on Rail',
      dialog: false,
      dialogProxi: false,
      SetFinnished: false
    }
  },
  mounted () {
    if (this.$store.state.user.local) {
      this.getVersion('all')
      this.GetByDep()
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    async getVersion (arg) {
      if (arg === 'all') {
        this.VersionDisplay = 'Archives'
        const response = await VersionService.fetchPosts('old')
        this.versions = response.data.versions
      } else {
        this.VersionDisplay = 'Versions On Rail'
        const response = await VersionService.fetchPosts('current')
        this.versions = response.data.versions
      }
      this.versions.forEach(function (element) {
        element.changelog = element.changelog.replace(/\r?\n/g, '<br />')
      })
    },
    GetByDep () {
      var vue = this
      AccountService.FindByDep('Dev').then((response) => {
        vue.users = response.data.users
      })
    }
  }
}
</script>

<style type="text/css">
.GO {
  color: green;
}
.WIP {
  color: blue;
}
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>

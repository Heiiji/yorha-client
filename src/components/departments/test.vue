<style scoped>
  #main-wrapper {
    margin: 0px;
    z-index: 3;
  }
  .profile-cover {
    z-index: 1;
    margin-bottom: 50px;
  }
  .dep-title {
    text-align: center;
    color: white;
    height: 80px;
    width: 100%;
    font-size: 50px;
    font-weight: 600;
    padding-top: 225px;
  }
  .peoples {
    position: fixed;
    left: calc(52px + 3.33%);
    display: inline-block;
    width: calc(45% - 26px);
    min-height: 72px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  }
  .peoples-heading {
    display: block;
    padding: 24px;
    margin-left: 8px;
  }
  .peoples-title {
    font-size: 16px;
    font-weight: 600;
  }
  .peoples-body {
    display: block;
    min-height: 72px;
  }
  .peoples-pic {
    padding: 24px;
    margin-left: 8px;
    display: inline-block;
  }
  .description-panel {
    position: fixed;
    left: calc(52px + 50%);
    display: inline-block;
    width: calc(45% - 26px);
    min-height: 72px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  }
  .description-heading {
    display: block;
    padding: 24px;
    margin-left: 8px;
  }
  .description-title {
    font-size: 16px;
    font-weight: 600;
  }
  .description-body {
    padding: 24px;
    margin-left: 8px;
  }
  @media (max-width: 849px) {
    .peoples {
      position: inherit;
      margin-left: 5%;
      width: 90%;
      margin-bottom: 20px;
    }
    .description-panel {
      position: inherit;
      margin-left: 5%;
      width: 90%;
    }
  }
</style>
<template>
  <div>
    <div style="padding: 0px; width: 100%;">
      <div id="main-wrapper">
        <div class="profile-cover" style="background: url('https://www.desktopbackground.org/p/2014/04/22/750944_free-thor-hammer-wallpapers-for-iphone-y2j-wallx_1600x1200_h.jpg') center; -webkit-background-size: cover; background-size: cover;">
          <div class="dep-title"><div style="background-color: rgba(0, 0, 0, 0.4);">Le Test</div></div>
        </div>
        <div class="peoples">
          <div class="peoples-heading">
            <div class="peoples-title">Peoples : </div>
          </div>
          <div class="peoples-body">
            <div class="peoples-pic">
              <div style="width: 40px; height: 40px; display: inline-block; margin-right: 10px; margin-bottom: 10px; cursor: pointer;" v-for="pers in users" :key="pers._id" class="team-member" @click="$router.push('/profil/' + pers._id)">
                <v-tooltip style="display: inline;" bottom>
                  <img style="width: 40px; border-radius: 20px;" slot="activator" :src="pers.picture" alt="">
                  <span>{{pers.username}}</span>
                </v-tooltip>
              </div>
            </div>
          </div>
        </div>
        <div class="description-panel">
          <div class="">
            <v-btn v-if="$store.state.user.local.work === 'Test' && $store.state.user.local.qualifier === 'SquadLeader'" @click="NewDescription = description; EditDescription = true;" color="primary" style="float: right;" fab small dark>
              <v-icon>edit</v-icon>
            </v-btn>
            <div class="description-heading">
              <div class="description-title">Description :</div>
            </div>
            <div class="description-body">
              <p v-html="description.replace(/\n/g, '<br/>')" ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog style="z-index:25;" v-model="EditDescription" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-flex xs8>
          <v-text-field v-model="NewDescription"
                        name="Description"
                        label="New Description"
                        id="Description"
                        textarea
                        style="width: 990px; margin: 5px;"
          ></v-text-field>
        </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="EditDescription = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="ChangeDesc()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog style="z-index:25;" v-model="sendMSG" scrollable max-width="500px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-flex xs8>
          <v-divider></v-divider>
          <label>
            <v-text-field v-model="msg.text"
                          name="NewMSG"
                          label="Message"
                          id="NewMSG"
                          style="width: 450px; margin: 5px;"
            ></v-text-field>
          </label>
        </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="sendMSG = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="SendMSG()">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import AccountService from '@/services/AccountService'
import VersionService from '@/services/VersionService'
import DepService from '@/services/depService'

export default {
  name: 'Profil',
  data () {
    return {
      user: [],
      users: [],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      NewDescription: '',
      EditDescription: false,
      sendMSG: false,
      versions: [],
      allNews: [],
      navigator: {
        language: ''
      },
      msg: {
        target: '',
        text: '',
        sender: '',
        senderPic: ''
      }
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.navigator.language = navigator.language
    this.GetByDep()
    this.GetDep()
  },
  methods: {
    GetByDep () {
      var vue = this
      AccountService.FindByDep('Test').then((response) => {
        vue.users = response.data.users
      })
    },
    GetDep () {
      var vue = this
      this.firebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
        DepService.fetchDep(idToken, 'Test').then((response) => {
          if (response.data.department.description) {
            vue.description = response.data.department.description
          }
        })
      })
    },
    ChangeDesc () {
      var vue = this
      vue.EditDescription = false
      this.firebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
        let arg = {
          token: idToken,
          description: vue.NewDescription,
          department: vue.$store.state.user.local.work
        }
        DepService.ChangeDesc(arg).then((res) => {
          vue.GetDep()
        })
      })
    },
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
    }
  }
}
</script>

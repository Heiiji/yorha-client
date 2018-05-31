<template>
  <div>
    <div>
        <div class="profile-cover" style="background: none;">
            <v-parallax style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" src="/static/Wallpaper 7.jpg"></v-parallax>
            <div class="row">
                <div class="col-md-3 profile-image">
                    <div class="profile-image-container">
                        <img :src="user.picture" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-3 user-profile">
                    <h3 class="text-center">{{ user.username }}</h3>
                    <p class="text-center">{{ user.work }} ({{ user.qualifier }})</p>
                    <hr>
                    <ul class="list-unstyled text-center">
                        <li><p><i class="fa fa-map-marker m-r-xs"></i>Paris, France</p></li>
                        <li><p><i class="fa fa-envelope m-r-xs"></i><a href="#">{{ user.mail }}</a></p></li>
                        <li><p v-if="user.tel === 'none' || user.tel === ''"><i class="fa fa-phone m-r-xs"></i>non renseigné</p><p v-else><i class="fa fa-phone m-r-xs"></i><a :href="'tel:' + user.tel">{{user.tel}}</a></p></li>
                    </ul>
                    <hr>
                        <v-menu v-if="user.username != $store.state.user.local.username" style="background-color: rgba(0, 0, 0, 0); display: block;" dark offset-y>
                          <v-btn style="background-color: rgba(33, 110, 210, 1); width: 100%; padding-bottom: 40px;" dark slot="activator">Add To Team
                            <img src="https://www.thrivingparish.org/wp-content/uploads/2018/01/white-down-arrow-png-2.png" style="display: absolute; top: 10%; right: 10px; width: 20px; margin-left: 10px;" />
                          </v-btn>
                          <v-list v-if="$store.state.user.local">
                            <v-list-tile v-for="item in $store.state.user.local.teams" :key="item">
                              <v-list-tile-title @click="NewTeam = item; PostTeam ();" style="cursor: pointer;">{{ item }}</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                    <button v-if="user.username != $store.state.user.local.username" @click="sendMSG = true" class="btn btn-primary btn-block">Send message</button>
                </div>
                <div class="col-md-6 m-t-lg">
                    <div class="profile-timeline">
                        </div>
                </div>
                <div class="col-md-3 m-t-lg">
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Description</div>
                        </div>
                        <div class="panel-body">
                            <p>{{ user.description }}</p>
                        </div>
                    </div>
                        <div style="margin-top: 10px;" class="panel panel-white">
                            <div class="panel-heading">
                                <div class="panel-title">Department : {{ user.work }}</div>
                            </div>
                            <div class="panel-body">
                              <div class="team">
                                    <div v-for="pers in users" :key="pers._id" class="team-member">
                                      <img :src="pers.picture" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

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
import News from '@/services/NewsService'

export default {
  name: 'Profil',
  data () {
    return {
      user: [],
      Partner: [],
      allNews: [],
      navigator: {
        language: ''
      },
      sendMSG: false,
      Teams: [],
      users: [],
      msg: {
        target: '',
        text: '',
        sender: '',
        senderPic: '',
        senderMail: '',
        token: ''
      }
    }
  },
  mounted () {
    this.navigator.language = navigator.language
    this.firebaseApp = this.$store.state.firebase
    this.getUser(this.$route.params.id)
  },
  methods: {
    async getUser (id) {
      const response = await AccountService.FindById(id)
      this.user = response.data.user
      this.GetByDep()
    },
    GetByDep () {
      var vue = this
      AccountService.FindByDep(vue.user.work).then((response) => {
        console.log(response)
        vue.users = response.data.users
      })
    },
    GetByTeam () {
      var vue = this
      vue.Teams = []
      vue.user.teams.forEach((elem) => {
        AccountService.FindByTeam(elem).then((response) => {
          vue.Teams.push({name: elem, users: response.data.users})
        })
      })
    },
    async postReply (target, message) {
      var sender = this.$store.state.user.local.username
      var senderPic = this.$store.state.user.local.picture
      News.PutReply({
        target: target,
        sender: sender,
        message: message,
        senderPic: senderPic
      }).then(() => {
        this.getNews()
      })
    },
    SendMSG () {
      var vue = this
      this.msg.sender = this.$store.state.user.local.username
      this.msg.senderPic = this.$store.state.user.local.picture
      this.msg.target = this.user.mail
      this.msg.senderMail = this.$store.state.user.local.mail
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        vue.msg.token = idToken
        AccountService.SendMSG(vue.msg)
      })
      this.sendMSG = false
    },
    async getNews () {
      var vue = this
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          var tmp = response.data.news
          tmp.forEach(function (element) {
            element.date = new Date(element.date)
            News.GetReply(element._id).then((reponse) => {
              element.reply = reponse.data.reply
              element.reply.forEach(function (el) {
                el.date = new Date(el.date)
              })
              element.message = ''
              vue.allNews = ''
              vue.allNews = tmp
            })
          })
        }
      }
    },
    PostTeam () {
      AccountService.editTeam({
        team: this.NewTeam,
        mail: this.user.mail
      })
      this.user.team = this.NewTeam
      this.GetByTeam()
    }
  }
}
</script>

<style type="text/css">
#photo {
  float: left;
  margin: 25px;
}
</style>

<style scoped>
#photo {
  float: left;
  margin: 25px;
}
.rowimage {
  padding-top: 50px;
  text-align: center;
}
.userprofileimage {
  margin: auto;
  height: 200px;
  width: 100%;
}
.profile-image-container img {
  border-radius: 100px;
}
#main-wrapper {
  display: flex;
}
.infoperso {
  margin-top: 50px;
  height: 100%;
  width: 49%;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}
.mycontainer {
  position: relative;
  border-top: 1px solid rgba(0,0,0,0.12);
}
.userbtn {
  display: block;
  text-decoration: none;
  -webkit-user-drag: none;
  decoration: none;
  text-decoration: none;
}
.userbtn:hover {
  text-decoration: none;
  cursor: default;
}
.textcontainer {
  padding: 24px;
  margin-left: 8px;
  display: flex;
  align-items: baseline;
  -webkit-box-align: baseline;
  color: black;
}
.texttitle {
  width: 200px;
  padding-right: 10px;
  flex-shrink: 0;
}
.texttitle h5 {
  font-size: 16px;
  margin: 0px;
}
.texttitle h6 {
  font-size: 16px;
  margin: 0px;
}
.textdisp {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-size: 14px;
  padding-right: 24px;
}
.editicon {
  display: flex;
  -webkit-box-flex: 0;
  height: 24px;
  width: 36px;
  color: rgba(0,0,0,0.65);
  margin-left: 8px;
  text-align: right;
  flex-grow: 0;
  flex-shrink: 0;
  position: absolute;
  right: 10px;
}
.team {
  margin-left: 2%;
}
.teamcontainer {
  border: none !important;
}
.iconteam {
  width: 100% !important;
}
.formin {
  padding: 0px !important;
  width: 90%;
  padding-top: 4px !important;
}
.formdiv {
  margin-top: 0px;
  -webkit-animation-name: slidein;
  -webkit-animation-duration: 0.3s;
  -webkit-animation-delay: 0s;
  -moz-animation-name: slidein;
  -moz-animation-duration: 0.3s;
  -moz-animation-delay: 0s;
  -ms-animation-name: slidein;
  -ms-animation-duration: 0.3s;
  -ms-animation-delay: 0s;
  -o-animation-name: slidein;
  -o-animation-duration: 0.3s;
  -o-animation-delay: 0s;
  animation-name: slidein;
  animation-duration: 0.3s;
  animation-delay: 0s;
  transition : all 0.3s;
  -webkit-transition : all 0.3s;
  -moz-transition : all 0.3s;
}
.formdiv label {
 padding-left: 232px;
 width: calc(100% - 44px);
}
.formdivteam label {
 padding-left: 232px;
 width: calc(100% - 88px);
}
.check {
  position: absolute;
  color: rgba(0,0,0,0.65);
  margin-top: 10px;
}
.checkdone {
  position: absolute;
  color: rgba(0,0,0,0.65);
  margin-top: 10px;
  margin-left: 44px;
}
.teamcreate {
  height: 35px;
  margin-top: -20px;
  margin-bottom: 0px !important;
  padding-left: 2px !important;
  -webkit-animation-name: slideinleft;
  -webkit-animation-duration: 0.3s;
  -webkit-animation-delay: 0s;
  -moz-animation-name: slideinleft;
  -moz-animation-duration: 0.3s;
  -moz-animation-delay: 0s;
  -ms-animation-name: slideinleft;
  -ms-animation-duration: 0.3s;
  -ms-animation-delay: 0s;
  -o-animation-name: slideinleft;
  -o-animation-duration: 0.3s;
  -o-animation-delay: 0s;
  animation-name: slideinleft;
  animation-duration: 0.3s;
  animation-delay: 0s;
  transition : all 0.3s;
  -webkit-transition : all 0.3s;
  -moz-transition : all 0.3s;
}

.btnteamcreate {
  margin-right: 52px;
  -webkit-animation-name: slideinleftbis;
  -webkit-animation-duration: 0.3s;
  -webkit-animation-delay: 0s;
  -moz-animation-name: slideinleftbis;
  -moz-animation-duration: 0.3s;
  -moz-animation-delay: 0s;
  -ms-animation-name: slideinleftbis;
  -ms-animation-duration: 0.3s;
  -ms-animation-delay: 0s;
  -o-animation-name: slideinleftbis;
  -o-animation-duration: 0.3s;
  -o-animation-delay: 0s;
  animation-name: slideinleftbis;
  animation-duration: 0.3s;
  animation-delay: 0s;
  transition : all 0.3s;
  -webkit-transition : all 0.3s;
  -moz-transition : all 0.3s;
}
.texttitlebigedit {
  width: calc(200px + 5%);
}
.forminedit {
  padding-top: 0px !important;
  width: 100%;
}

@media (max-width: 849px) {
  #main-wrapper {
    display: block;
  }
  .team {
    margin-left: 0px;
  }
  .infoperso {
  width: 100%;
  }
  .formdiv label {
    padding-left: 162px;
  }
  .texttitle {
    width: 130px;
  }
  .texttitlebig {
    width: 160px;
  }
  .texttitlebigedit {
    width: calc(140px + 5%);
  }
  .forminedit {
    width: 60%;
  }
}

@keyframes slidein {
  from {
    margin-top: -61px;
    opacity: 0;
  }
  30% {
  opacity: 0;
  }
  71% {
  opacity: 1;
  }
  to {
    opacity: 1;
    margin-top: 0px;
  }
}
@keyframes slideinleft {
  from {
    margin-left: 150px;
    opacity: 0;
  }
  30% {
  opacity: 0;
  }
  71% {
  opacity: 1;
  }
  to {
    opacity: 1;
    margin-left: 0px;
  }
}
@keyframes slideinleftbis {
  from {
    margin-right: -44px;
    opacity: 0;
  }
  30% {
  opacity: 0;
  }
  71% {
  opacity: 1;
  }
  to {
    opacity: 1;
    margin-right: 52px;
  }
}
.buttons {
  display: block;
  margin-top: 10px;
  text-align: center;
}
.sendmsg {
  width: 200px;
  background-color: white !important;
  color: black;
  height: 48px;
}
.sendmsg:active {
  color: black !important;
}
</style>
<template>
  <div>
    <div>
      <div class="profile-cover" style="background: none;">
        <div class="row rowimage">
          <div class="userprofileimage">
            <div class="profile-image-container">
              <img height="200px" width="200px" :src="user.picture" alt="">
              <h2 class="text-center">{{ user.username }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button v-if="user.username != $store.state.user.local.username" @click="sendMSG = true" class="btn btn-primary btn-block sendmsg">Send message</button>
      </div>
      <div id="main-wrapper">
        <div class="infoperso">
          <div class="mycontainer">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle">
                  <h5>Team</h5>
                </div>
                <div class="textdisp">
                  {{ user.work }} ({{ user.qualifier }})
                </div>
              </div>
            </a>
          </div>
          <div class="mycontainer">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle">
                  <h5>Email</h5>
                </div>
                <div class="textdisp">
                  {{ user.mail }}
                </div>
              </div>
            </a>
          </div>
          <div class="mycontainer">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle">
                  <h5>Localisation</h5>
                </div>
                <div class="textdisp">
                  Paris, France
                </div>
              </div>
            </a>
          </div>
          <div class="mycontainer">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle">
                  <h5>Téléphone</h5>
                </div>
                <div class="textdisp" v-if="user.tel === 'none' || user.tel === ''">
                  Non renseigné
                </div>
                <div class="textdisp" v-else>
                  {{user.tel}}
                </div>
              </div>
            </a>
          </div>
          <div class="mycontainer">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle">
                  <h5>Descripton</h5>
                </div>
                <div class="textdisp">
                  {{user.description}}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="infoperso team" style="margin-top: 190px;">
          <v-menu v-if="user.username != $store.state.user.local.username" style="background-color: rgba(0, 0, 0, 0); display: block; margin-left: -8px; margin-top: -145px; margin-bottom: 69px;" dark offset-y>
            <v-btn style="border-radius:1px !important; background-color: rgba(255, 255, 255, 1); width: calc(100% - 8px); padding-bottom: 55px; padding-top: 12px;" dark slot="activator"><h3 style="color: black;">Add To Team</h3>
            </v-btn>
            <v-list v-if="$store.state.user.local">
              <v-list-tile v-for="item in $store.state.user.local.teams" :key="item">
                <v-list-tile-title @click="NewTeam = item; PostTeam ();" style="cursor: pointer;">{{ item }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <div class="mycontainer" style="border: none !important;">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle" style="width: 300px;">
                  <h5>Department : &emsp; {{ user.work }}</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="mycontainer teamcontainer">
            <a class="userbtn">
              <div class="textcontainer">
                <div class="texttitle iconteam">
                  <div v-for="pers in users" :key="pers._id" class="team-member">
                    <v-tooltip style="display: inline;" bottom>
                      <img slot="activator" :src="pers.picture" alt="">
                      <span>{{pers.username}}</span>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </a>
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
      if (this.user.username === this.$store.state.user.local.username) {
        this.$router.push('/profil')
      } else {
        this.GetByDep()
      }
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

<style scoped>
#photo {
  float: left;
  margin: 25px;
}
#editer {
  opacity: 0;
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  display: inline-block;
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: rgba(200, 200, 200, 0);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
#photo:hover #editer {
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  opacity: 1;
  background-color: rgba(200, 200, 200, 0.7);
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
  border-radius: 12px;
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
  grid-column: 2;
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
.formdiv-grid {
  display: grid;
  margin-left: 32px;
  grid-template-columns: 200px auto 46px;
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
  .formdiv-grid {
    display: grid;
    margin-left: 32px;
    grid-template-columns: 130px auto 46px;
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
.page-inner_dark_color, .page-inner_dark_normal {
  background-color: #333333 !important;
}
.user_dark_color, .user_dark_normal {
  color: white !important;
}
.infoperso_dark_color, .infoperso_dark_normal {
  background-color: #3c4043 !important;
}
.txt_dark_color, .txt_dark_normal {
  color: white !important;
}
.txt_dark_color input, .txt_dark_normal input {
  color: white !important;
}
</style>
<template>
  <div :class="'page-inner_' + $store.state.user.local.theme" style="min-height:951px !important">
    <div v-if="user.local" style="padding-top: 0px;">
        <div class="profile-cover" style="background: none;">
            <div class="row rowimage">
                <div class="userprofileimage">
                    <div class="profile-image-container">
                        <img height="200px" width="200px" :src="user.local.picture" alt="">
                        <h2 class="text-center" :class="'user_' + $store.state.user.local.theme">{{ user.local.username }}</h2>
                    </div>
                </div>
            </div>
        </div>
        <div id="main-wrapper">
          <div class="infoperso" :class="'infoperso_' + $store.state.user.local.theme">
            <div class="mycontainer" style="border: none;">
              <a class="userbtn">
                <div class="textcontainer" style="border-radius: 12px;">
                  <div class="texttitle">
                    <h5 :class="'txt_' + $store.state.user.local.theme">Department</h5>
                  </div>
                  <div class="textdisp" :class="'txt_' + $store.state.user.local.theme">
                    {{ user.local.work }} ({{ user.local.qualifier }})
                  </div>
                </div>
              </a>
            </div>
            <div class="mycontainer">
              <a class="userbtn">
                <div class="textcontainer">
                  <div class="texttitle">
                    <h5 :class="'txt_' + $store.state.user.local.theme">Email</h5>
                  </div>
                  <div class="textdisp" :class="'txt_' + $store.state.user.local.theme">
                    {{ user.local.mail }}
                  </div>
                </div>
              </a>
            </div>
            <div class="mycontainer">
              <a class="userbtn" @click="EditLocation = !EditLocation">
                <div class="textcontainer">
                  <div class="texttitle">
                    <h5 :class="'txt_' + $store.state.user.local.theme">Localisation</h5>
                  </div>
                  <div class="textdisp" :class="'txt_' + $store.state.user.local.theme">
                    {{ $store.state.user.local.location }}
                  </div>
                  <div class="editicon">
                    <i dark="" class="material-icons" :class="'txt_' + $store.state.user.local.theme">keyboard_arrow_right</i>
                  </div>
                </div>
              </a>
            </div>
            <div class="formdiv" v-if="EditLocation">
              <div class="formdiv-grid" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
                <v-text-field class="formin" v-model="NewLocation" name="NewLocation" :placeholder="user.local.location" dark="true">
                </v-text-field>
                <div style="grid-column: 3;"><a class="check material-icons" :class="'txt_' + $store.state.user.local.theme" @click="changeLocation()">done</a></div>
              </div>
              <div class="formdiv-grid" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
                <v-text-field class="formin" v-model="NewLocation" name="NewLocation" :placeholder="user.local.location">
                </v-text-field>
                <div style="grid-column: 3;"><a class="check material-icons" :class="'txt_' + $store.state.user.local.theme" @click="changeLocation()">done</a></div>
              </div>
            </div>
            <div class="mycontainer">
              <a class="userbtn" @click="EditTel = !EditTel">
                <div class="textcontainer">
                  <div class="texttitle">
                    <h5 :class="'txt_' + $store.state.user.local.theme">Téléphone</h5>
                  </div>
                  <div class="textdisp" v-if="user.local.tel === 'none' || user.local.tel === ''" :class="'txt_' + $store.state.user.local.theme">
                    Non renseigné
                  </div>
                  <div class="textdisp" v-else :class="'txt_' + $store.state.user.local.theme">
                    {{user.local.tel}}
                  </div>
                  <div class="editicon">
                    <i dark="" class="material-icons" :class="'txt_' + $store.state.user.local.theme">keyboard_arrow_right</i>
                  </div>
                </div>
              </a>
            </div>
            <div class="formdiv" v-if="EditTel">
              <div class="formdiv-grid" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
                <v-text-field class="formin" v-model="NewTel" name="NewTel" :placeholder="user.local.tel" dark="true">
                </v-text-field>
                <div style="grid-column: 3;"><a class="check material-icons" :class="'txt_' + $store.state.user.local.theme" @click="changeTel()">done</a></div>
              </div>
              <div class="formdiv-grid" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
                <v-text-field class="formin" v-model="NewTel" name="NewTel" :placeholder="user.local.tel">
                </v-text-field>
                <div style="grid-column: 3;"><a class="check material-icons" :class="'txt_' + $store.state.user.local.theme" @click="changeTel()">done</a></div>
              </div>
            </div>
              <div class="mycontainer">
                <a class="userbtn" @click="EditDescription = !EditDescription">
                  <div class="textcontainer" style="border-radius: 12px;">
                    <div class="texttitle">
                      <h5 :class="'txt_' + $store.state.user.local.theme">Description</h5>
                    </div>
                    <div class="textdisp" :class="'txt_' + $store.state.user.local.theme">
                      {{ user.local.description }}
                    </div>
                      <div class="editicon">
                      <i dark="" class="material-icons" :class="'txt_' + $store.state.user.local.theme">keyboard_arrow_right</i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="formdiv" v-if="EditDescription">
                <div class="formdiv-grid" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
                  <v-text-field class="formin" v-model="NewDescription" name="NewDescription" :placeholder="user.local.description" dark="true">
                  </v-text-field>
                  <div style="grid-column: 3;"><a class="check material-icons" :class="'txt_' + $store.state.user.local.theme" @click="PostDescription(NewDescription)">done</a></div>
                </div>
                <div class="formdiv-grid" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
                  <v-text-field class="formin" v-model="NewDescription" name="NewDescription" :placeholder="user.local.description">
                  </v-text-field>
                  <div style="grid-column: 3;"><a class="check material-icons" :class="'txt_' + $store.state.user.local.theme" @click="PostDescription(NewDescription)">done</a></div>
                </div>
            </div>
          </div>

          <div class="infoperso team" :class="'infoperso_' + $store.state.user.local.theme">
            <div v-for="team in Teams" :key="team.name">
              <div class="mycontainer" style="border: none;">
                <a class="userbtn">
                  <div class="textcontainer">
                    <div class="texttitle" style="width: 300px;">
                      <h5 :class="'txt_' + $store.state.user.local.theme">Team : &emsp; {{ team.name }}</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="mycontainer teamcontainer">
                <a class="userbtn">
                  <div class="textcontainer">
                    <div class="texttitle iconteam">
                      <div v-for="pers in team.users" :key="pers._id" @click="$router.push('/profil/' + pers._id)" class="team-member" style="cursor: pointer;">
                        <v-tooltip style="display: inline;" bottom>
                          <img slot="activator" :src="pers.picture" alt="">
                          <span :class="'txt_' + $store.state.user.local.theme">{{pers.username}}</span>
                        </v-tooltip>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="mycontainer teamcontainer">
                <a class="userbtn" @click="NewTeam = team.name; DelTeam ();">
                  <div class="textcontainer" style="border-bottom: 1px solid rgba(0,0,0,0.12); margin-left: 0px;">
                    <div class="texttitle">
                      <h6 :class="'txt_' + $store.state.user.local.theme">Quit team</h6>
                    </div>
                    <div class="textdisp">
                    </div>
                    <div class="editicon">
                      <i dark="" class="material-icons" :class="'txt_' + $store.state.user.local.theme">remove</i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="mycontainer" style="border: none;">
              <a class="userbtn" v-if="!CreateTeam" @click="CreateTeam = true">
                <div class="textcontainer">
                  <div class="texttitle texttitlebig">
                    <h5 :class="'txt_' + $store.state.user.local.theme">Create a new team</h5>
                  </div>
                  <div class="textdisp">
                  </div>
                  <div class="editicon">
                    <i dark="" class="material-icons" :class="'txt_' + $store.state.user.local.theme">add</i>
                  </div>
                </div>
              </a>
              <div class="userbtn" v-if="CreateTeam">
                <div class="textcontainer" style="padding-bottom: 16px;">
                  <div class="texttitle texttitlebigedit">
                    <h5 :class="'txt_' + $store.state.user.local.theme">Create a new team</h5>
                  </div>
                  <label class="textdisp teamcreate" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
                    <v-text-field class="formin forminedit" v-model="NewTeam" name="TeamName" label="" dark="true">
                    </v-text-field>
                  </label>
                  <label class="textdisp teamcreate" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
                    <v-text-field class="formin forminedit" v-model="NewTeam" name="TeamName" label="">
                    </v-text-field>
                  </label>
                  <div class="editicon btnteamcreate">
                    <a class="check material-icons" style="margin-top: 0px;" @click="CreateTeam = false;" :class="'txt_' + $store.state.user.local.theme">close</a>
                    <a class="checkdone material-icons" style="margin-top: 0px;" @click="PostTeam()" :class="'txt_' + $store.state.user.local.theme">done</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'
import Api from '@/services/Api'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: [],
      file: '',
      navigator: {
        language: ''
      },
      e1: null,
      EditDescription: null,
      NewDescription: '',
      NewLocation: '',
      NewTeam: '',
      EditTel: false,
      EditLocation: false,
      NewTel: '',
      PostNews: null,
      CreateTeam: false,
      activeTeam: '',
      selectedTeam: {
        name: '',
        pers: []
      },
      News: {
        text: '',
        title: '',
        link: '',
        department: 'General',
        visibility: true,
        sender: '',
        senderPic: ''
      },
      department: [
        { text: 'Test' },
        { text: 'Marketing' },
        { text: 'Support' },
        { text: 'Dev' },
        { text: 'Web' },
        { text: 'Infra' },
        { text: 'RH' },
        { text: 'R&D' },
        { text: 'International' }
      ],
      allNews: [],
      Partner: [],
      Teams: []
    }
  },
  mounted () {
    this.navigator.language = navigator.language
    if (!this.$store.state.user.local) {
      this.$router.push('/')
    } else {
      this.firebaseApp = this.$store.state.firebase
      this.user = this.$store.state.user
      this.GetByTeam()
    }
  },
  methods: {
    Refresh () {
      var vue = this
      this.$store.state.firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        var client = {
          displayName: vue.$store.state.user.displayName,
          username: vue.$store.state.user.displayName,
          email: vue.$store.state.user.email,
          emailVerified: vue.$store.state.user.emailVerified,
          photoURL: '/static/profil/' + vue.$store.state.user.displayName + '.png',
          isAnonymous: vue.$store.state.user.isAnonymous,
          uid: vue.$store.state.user.uid,
          providerData: vue.$store.state.user.providerData
        }
        Api().post('/account', {
          username: client.displayName,
          mail: client.email,
          picture: '/static/profil/' + vue.$store.state.user.displayName + '.png',
          Token: idToken
        }).then((response) => {
          console.log('logged')
          vue.$store.state.user = client
          vue.$store.state.user.local = response.data
          vue.GetByTeam()
        })
      })
    },
    PostDescription (desc) {
      AccountService.editDescription({
        description: desc,
        mail: this.user.local.mail
      })
      this.user.local.description = desc
      this.EditDescription = false
    },
    changeLocation (desc) {
      AccountService.editLocation({
        mail: this.user.local.mail,
        location: this.NewLocation
      })
      this.Refresh()
      this.EditLocation = false
    },
    PostTeam () {
      AccountService.editTeam({
        team: this.NewTeam,
        mail: this.user.local.mail,
        action: 'create'
      }).then((response) => {
        if (response.data.success === true) {
          this.user.local.team = this.NewTeam
          this.Refresh()
          this.CreateTeam = false
        } else {
          this.NewTeam = 'Team already exist'
        }
      })
    },
    DelTeam () {
      AccountService.editTeam({
        team: this.NewTeam,
        mail: this.user.local.mail,
        action: 'delete'
      }).then((response) => {
        if (response.data.success === true) {
          this.user.local.team = this.NewTeam
          this.Refresh()
        }
        this.CreateTeam = false
      })
    },
    GetByTeam () {
      var vue = this
      vue.Teams = []
      vue.$store.state.user.local.teams.forEach((elem) => {
        AccountService.FindByTeam(elem).then((response) => {
          vue.Teams.push({name: elem, users: response.data.users})
        }).then(() => {
          vue.activeTeam = vue.Teams[0].name
          vue.selectedTeam = vue.Teams[0]
        })
      })
    },
    changeTel () {
      AccountService.editTel({
        tel: this.NewTel,
        mail: this.user.local.mail
      })
      this.user.local.tel = this.NewTel
      this.EditTel = false
    }
  }
}
</script>

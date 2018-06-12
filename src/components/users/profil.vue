<template>
  <div>
    <div v-if="user.local" style="padding-top: 0px;">
        <div class="profile-cover" style="background: none;">
            <v-parallax style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" src="/static/Wallpaper 7.jpg"></v-parallax>
            <div class="row">
                <div class="col-md-3 profile-image">
                    <div class="profile-image-container">
                        <img :src="user.local.picture" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-3 user-profile">
                    <h3 class="text-center">{{ user.local.username }}</h3>
                    <p class="text-center">{{ user.local.work }} ({{ user.local.qualifier }})</p>
                    <hr>
                    <ul class="list-unstyled text-center">
                        <li><p><i class="fa fa-map-marker m-r-xs"></i>Paris, France</p></li>
                        <li><p><i class="fa fa-envelope m-r-xs"></i><a href="#">{{ user.local.mail }}</a></p></li>
                        <li><p v-if="user.local.tel === 'none'"><i class="fa fa-phone m-r-xs"></i>tel non renseigné</p><p v-else><i class="fa fa-phone m-r-xs"></i><a :href="'tel:' + user.local.tel">{{user.local.tel}}</a></p></li>
                    </ul>
                    <hr>

                        <div class="panel-heading">
                            <div class="panel-title">Description</div>
                        </div>
                        <div class="panel-body">
                            <p>{{ user.local.description }}</p>
                        </div>
                    <hr>
                    <button @click="EditDescription = true" class="btn btn-primary btn-block">Modify Description</button>
                    <button v-if="user.local.tel === 'none'" @click="EditTel = true" class="btn btn-primary btn-block">Add my number</button>
                    <button v-else @click="EditTel = true" class="btn btn-primary btn-block">Change my number</button>
                </div>

                <div class="col-md-3 m-t-lg">
                    <div v-for="team in Teams" :key="team.name" class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Team : {{ team.name }}</div>
                        </div>
                        <div class="panel-body">
                            <div class="team">
                                <div v-for="pers in team.users" :key="pers._id" @click="$router.push('/profil/' + pers._id)" class="team-member" style="cursor: pointer;">
                                    <v-tooltip style="display: inline;" bottom>
                                      <img slot="activator" :src="pers.picture" alt="">
                                      <span>{{pers.username}}</span>
                                    </v-tooltip>
                                </div>
                                <br/>
                                <button v-if="$store.state.user.local.work === 'R&D' || $store.state.user.local.mail === 'julien.juret@blade-group.com'" @click="$router.push('taskmanager/' + team.name);" class="btn btn-primary btn-block">Task Manager</button>
                                <button @click="NewTeam = team.name; DelTeam ();" class="btn btn-primary btn-block">Quit team</button>
                            </div>
                        </div>
                    </div>
                    <button @click="CreateTeam = true" class="btn btn-primary btn-block">Create a team</button>
                </div>
            </div>
        </div>
    </div>
    <div>
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
            <v-btn color="blue darken-1" flat @click.native="PostDescription(NewDescription)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        <v-dialog style="z-index:25;" v-model="CreateTeam" scrollable max-width="800px">
          <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
            <v-card-title style="color: blue;">Nouvelle team :</v-card-title>
            <v-divider></v-divider>
              <v-flex xs8>
                <v-text-field v-model="NewTeam"
                  name="TeamName"
                  label="Team Name"
                  id="TeamName"
                  style="width: 700px; margin: 5px;"
                ></v-text-field>
              </v-flex>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="blue darken-1" flat @click.native="CreateTeam = false;">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="PostTeam()">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

    <v-dialog style="z-index:25;" v-model="EditTel" scrollable max-width="500px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
          <v-flex xs8>
            <v-divider></v-divider>
            <label>
              <v-text-field v-model="NewTel"
                name="NewTel"
                label="Phone number"
                id="NewTel"
                style="width: 450px; margin: 5px;"
              ></v-text-field>
            </label>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="EditTel = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="changeTel()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      EditPicture: null,
      NewTeam: '',
      EditTel: false,
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
      Teams: [],
      background: [
        { text: 'Landscape' },
        { text: 'Cat' },
        { text: 'Urban' },
        { text: 'forest' },
        { text: 'abstract' }
      ]
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

<style type="text/css">
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
</style>

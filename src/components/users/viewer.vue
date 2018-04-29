<template>
  <div style="margin-top:-60px;">
    <div class="page-inner">
        <div class="profile-cover" style="background: url('/static/Wallpaper 10.jpg'); -webkit-background-size: cover; background-size: cover;">
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
                        <li><p v-if="user.tel === 'none'"><i class="fa fa-phone m-r-xs"></i>non renseigné</p><p v-else><i class="fa fa-phone m-r-xs"></i><a :href="'tel:' + user.tel">{{user.tel}}</a></p></li>
                    </ul>
                    <hr>
                        <v-menu style="background-color: rgba(0, 0, 0, 0); display: block;" dark offset-y>
                          <v-btn style="background-color: rgba(33, 110, 210, 1); width: 100%; padding-bottom: 40px;" dark slot="activator">Add To Team
                            <img src="https://www.thrivingparish.org/wp-content/uploads/2018/01/white-down-arrow-png-2.png" style="display: absolute; top: 10%; right: 10px; width: 20px; margin-left: 10px;" />
                          </v-btn>
                          <v-list>
                            <v-list-tile v-for="item in $store.state.user.local.teams" :key="item">
                              <v-list-tile-title @click="NewTeam = item; PostTeam ();" style="cursor: pointer;">{{ item }}</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                    <button @click="sendMSG = true" class="btn btn-primary btn-block">Send message</button>
                </div>
                <div class="col-md-6 m-t-lg">
                    <v-tabs style="margin: 10px;" fixed-tabs>
                      <v-tab>
                        All
                      </v-tab>
                      <v-tab>
                        Department
                      </v-tab>
                      <v-tab>
                        Team
                      </v-tab>
                    </v-tabs>
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
                    <div v-for="team in Teams" :key="team.name" class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Team : {{ team.name }}</div>
                        </div>
                        <div class="panel-body">
                              <div v-for="pers in team.users" :key="pers._id" class="team-member" style="display: block; margin: 3px;">
                                 <img width="30px" style="border-radius: 15px;" :src="pers.picture" alt="">
                                 <span>{{ pers.username }}</span>
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

export default {
  name: 'Profil',
  data () {
    return {
      user: [],
      Partner: [],
      sendMSG: false,
      Teams: [],
      msg: {
        target: '',
        text: '',
        sender: '',
        senderPic: '',
        senderMail: ''
      }
    }
  },
  mounted () {
    this.getUser(this.$route.params.id)
  },
  methods: {
    async getUser (id) {
      const response = await AccountService.FindById(id)
      this.user = response.data.user
      this.GetByTeam()
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
    SendMSG () {
      this.msg.sender = this.$store.state.user.local.username
      this.msg.senderPic = this.$store.state.user.local.picture
      this.msg.target = this.user.mail
      this.msg.senderMail = this.$store.state.user.local.mail
      AccountService.SendMSG(this.msg)
      this.sendMSG = false
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

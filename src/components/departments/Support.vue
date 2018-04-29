<template>
  <div><div class="page-inner" style="padding: 0px;">
      <div class="profile-cover" style="background: url('https://geekyapar.com/wp-content/uploads/2014/04/green-lantern-batman-dark-dc-comics-comics-superman-superheroes-justice-league-aquaman-flash-comic-hero-wonder-woman-cyborg-dc-comics-69099.jpg'); -webkit-background-size: cover; background-size: cover;">
          <div class="row">
              <div class="col-md-3 profile-image">
                  <div class="profile-image-container">
                      <img src="https://orig00.deviantart.net/71e8/f/2012/067/3/7/batman_portrait_by_tenguyari-d4s3sve.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div id="main-wrapper">
          <div class="row">
              <div class="col-md-3 user-profile">
                  <h3 class="text-center">Le Support</h3>
                  <p class="text-center">You've got a problem, we have the solution</p>
                  <hr>
                  <button @click="sendMSG = true" class="btn btn-primary btn-block">Send message</button>
              </div>
              <div class="col-md-6 m-t-lg">
                  <v-tabs style="margin: 10px;" fixed-tabs>
                    <v-tab>
                      All
                    </v-tab>
                  </v-tabs>
              </div>
              <div class="col-md-3 m-t-lg">
                  <div class="panel panel-white">
                      <div class="panel-heading">
                          <div class="panel-title">Heroes : </div>
                      </div>
                      <div class="panel-body">
                        <div class="team">
                              <div v-for="pers in users" :key="pers._id" class="team-member" @click="$router.push('/profil/' + pers._id)">
                                 <div class="online on"></div>
                                 <img :src="pers.picture" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="panel panel-white">
                      <div class="panel-heading">
                          <div class="panel-title">Description</div>
                      </div>
                      <div class="panel-body">
                          <p>{{ user.description }}</p>
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
      users: [],
      sendMSG: false,
      msg: {
        target: '',
        text: '',
        sender: '',
        senderPic: ''
      }
    }
  },
  mounted () {
    this.GetByDep()
  },
  methods: {
    GetByDep () {
      var vue = this
      AccountService.FindByDep('Support').then((response) => {
        vue.users = response.data.users
      })
    }
  }
}
</script>

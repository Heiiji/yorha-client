<template>
  <div>
    <div class="page-inner" style="padding: 0px;">
      <div class="profile-cover" style="background: url('http://www.gotechnologix.com/wp-content/uploads/2016/05/mobile-device-technology-wallpaper.jpg') center; -webkit-background-size: cover; background-size: cover; margin: 0px; padding: 0px;">
          <div class="row">
              <div class="col-md-3 profile-image">
                  <div class="profile-image-container">
                      <img src="/static/departments/lima-profil.png" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div id="main-wrapper">
          <div class="row">
              <div class="col-md-3 user-profile">
                  <h3 class="text-center">Lima</h3>
                  <p class="text-center">mobility around the world.</p>
                  <hr>
                  <button @click="sendMSG = true" class="btn btn-primary btn-block">Send message</button>
              </div>
              <div class="col-md-6 m-t-lg">
                    <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === 'LIMA'" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p>{{ item.text }}</p>
                                                <div class="timeline-options">
                                                    <a href="#"><i class="icon-share"></i> Share</a>
                                                </div>
                                                <div v-for="comm in item.reply" :key="comm._id" class="timeline-comment">
                                                    <div class="timeline-comment-header">
                                                        <img :src="comm.senderPic" alt="">
                                                        <p>{{comm.sender}} <small>{{ comm.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small></p>
                                                    </div>
                                                    <p class="timeline-comment-text">{{comm.text}}</p>
                                                </div>
                                                <textarea class="form-control" v-model="item.message" placeholder="Reply"></textarea>
                                                <button class="btn btn-default pull-right" @click="postReply(item._id, item.message)">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
              </div>
              <div class="col-md-3 m-t-lg">
                  <div class="panel panel-white">
                      <div class="panel-heading">
                          <div class="panel-title">Lima Employes : </div>
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
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
      users: [],
      sendMSG: false,
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
    this.navigator.language = navigator.language
    this.GetByDep()
    this.getNews()
  },
  methods: {
    GetByDep () {
      var vue = this
      AccountService.FindByDep('LIMA').then((response) => {
        vue.users = response.data.users
      })
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
    }
  }
}
</script>

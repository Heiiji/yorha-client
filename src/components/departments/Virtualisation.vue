<template>
  <div><div class="page-inner" style="padding: 0px;">
      <div class="profile-cover" style="background: url('https://2.bp.blogspot.com/-xzvFgugRD_g/WIFbOryxaUI/AAAAAAAAIRs/eBhmxmsTnq80ValKcwusGejmuDWtfkIYgCLcB/s640/1vir.gif'); -webkit-background-size: cover; background-size: cover;">
          <div class="row">
              <div class="col-md-3 profile-image">
                  <div class="profile-image-container">
                      <img src="http://static1.ozap.com/articles/0/45/12/90/@/4458050-kia-rend-hommage-a-matrix-avec-128x128-1.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div id="main-wrapper">
          <div class="row">
              <div class="col-md-3 user-profile">
                  <h3 class="text-center">La Virtualisation</h3>
                  <p class="text-center">Power to say no !</p>
                  <hr>
                  <div class="panel panel-white">
                      <div class="panel-heading">
                          <div class="panel-title">the overwhelmed: </div>
                      </div>
                      <div class="panel-body">
                        <div class="team">
                              <div v-for="pers in users" :key="pers._id" class="team-member" @click="$router.push('/profil/' + pers._id)">
                                 <img :src="pers.picture" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 m-t-lg">
                    <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === 'Virtualisation'" :key="item._id" class="timeline-item" style="display: block;">
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
      AccountService.FindByDep('Virtualisation').then((response) => {
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

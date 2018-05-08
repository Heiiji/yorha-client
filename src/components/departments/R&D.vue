<template>
  <div><div class="page-inner" style="padding: 0px;">
      <div class="profile-cover" style="background: url('/static/departments/R&D-wide.jpg') center; -webkit-background-size: cover; background-size: cover;">
          <div class="row">
              <div class="col-md-3 profile-image">
                  <div class="profile-image-container">
                      <img src="https://i.pinimg.com/originals/7d/cd/d5/7dcdd59d991b2a408aa8430e527944cf.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
      <div id="main-wrapper">
          <div class="row">
              <div class="col-md-3 user-profile">
                  <h3 class="text-center">La R&D</h3>
                  <p class="text-center">Research and desaster</p>
                  <hr>
                  <div class="panel panel-white">
                      <div class="panel-heading">
                          <div class="panel-title">Soldiers : </div>
                      </div>
                      <div class="panel-body">
                        <div class="team">
                              <div v-for="pers in users" :key="pers._id" class="team-member" @click="$router.push('/profil/' + pers._id)">
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
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem officia illum labore itaque iure perspiciatis alias quisquam praesentium ratione facere? A nobis iure iusto esse architecto recusandae quas maxime fuga!</p>
                      </div>
                  </div>
                  <hr>
                  <button v-if="$store.state.user.local.work === 'R&D'" class="btn btn-primary btn-block">Add a card</button>
              </div>
              <div class="col-md-5 m-t-lg">
                    <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === 'R&D'" :key="item._id" class="timeline-item" style="display: block;">
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
              <div class="col-md-4 m-t-lg">
                <span v-if="$store.state.user.local.work === 'R&D'">
                    <h2 style="text-align: center; color: grey;">Project</h2>
                  <v-card style="margin: 10px;">
                    <v-card-media src="/static/departments/R&D-wide.jpg" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">USB Login key <span style="color: orange; font-size: 0.6em;">(Waiting hardware command)</span></h3>
                        <hr/>
                        <div>This is an amazing project, no ? <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum explicabo quam mollitia suscipit illo temporibus velit facilis libero. Modi earum animi consectetur maiores vel aperiam, eveniet perferendis voluptatibus reprehenderit!<br/><br/><br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt natus provident minima saepe officiis quod excepturi voluptas ipsa, perferendis nulla vero maxime ad, numquam eveniet nobis. Facere quos ea optio?</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="orange">More</v-btn>
                    </v-card-actions>
                  </v-card>
                  <v-card style="margin: 10px;">
                    <v-card-media src="http://blog.logicalincrements.com/wp-content/uploads/2017/03/pc-master-race.jpg" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Automatic Benchmark <span style="color: green; font-size: 0.6em;">(Experiment in Shabane)</span></h3>
                        <hr/>
                        <div>This is an amazing project, no ? <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum explicabo quam mollitia suscipit illo temporibus velit facilis libero. Modi earum animi consectetur maiores vel aperiam, eveniet perferendis voluptatibus reprehenderit!<br/><br/><br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt natus provident minima saepe officiis quod excepturi voluptas ipsa, perferendis nulla vero maxime ad, numquam eveniet nobis. Facere quos ea optio?</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="orange">More</v-btn>
                    </v-card-actions>
                  </v-card>
                </span>
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
      AccountService.FindByDep('R&D').then((response) => {
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

<template>
  <div style="margin-top:-60px;">
    <div class="page-inner">
        <div class="profile-cover" style="background: url('/static/Wallpaper 10.jpg'); -webkit-background-size: cover; background-size: cover;">
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
                        <li><p v-if="user.local.tel === 'none'"><i class="fa fa-phone m-r-xs"></i>non renseigné</p><p v-else><i class="fa fa-phone m-r-xs"></i><a :href="'tel:' + user.local.tel">{{user.local.tel}}</a></p></li>
                    </ul>
                    <hr>
                    <button @click="EditDescription = true" class="btn btn-primary btn-block">Modify Description</button>
                    <button v-if="user.local.tel === 'none'" @click="EditTel = true" class="btn btn-primary btn-block">Add my number</button>
                    <button v-else @click="EditTel = true" class="btn btn-primary btn-block">Change my number</button>
                </div>
                <div class="col-md-6 m-t-lg">
                    <v-tabs style="margin: 10px;" fixed-tabs>
                      <v-tab>
                        All
                      </v-tab>
                      <v-tab-item style="margin-top: 10px;">
                        <div class="panel panel-white">
                            <div class="panel-body">
                                <div class="post">
                                    <textarea class="form-control" placeholder="Post" v-model="News.text" rows="4=6"></textarea>
                                    <div class="post-options">
                                        <a href="#"><i class="icon-camera"></i></a>
                                        <a href="#"><i class="icon-link"></i></a>
                                        <button class="btn btn-default pull-right" @click="News.department = 'General'; postNews();">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === $store.state.user.local.work || item.department === 'General' || item.department === $store.state.user.local.team" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>date</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p>{{ item.text }}</p>
                                                <div class="timeline-options">
                                                    <a href="#"><i class="icon-share"></i> Share</a>
                                                </div>
                                                <div v-for="comm in item.reply" :key="comm._id" class="timeline-comment">
                                                    <div class="timeline-comment-header">
                                                        <img :src="comm.senderPic" alt="">
                                                        <p>{{comm.sender}} <small>date</small></p>
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
                      </v-tab-item>
                      <v-tab>
                        Department
                      </v-tab>
                      <v-tab-item style="margin-top: 10px;">
                        <div class="panel panel-white">
                            <div class="panel-body">
                                <div class="post">
                                    <textarea class="form-control" placeholder="Post" v-model="News.text" rows="4=6"></textarea>
                                    <div class="post-options">
                                        <a href="#"><i class="icon-camera"></i></a>
                                        <a href="#"><i class="icon-link"></i></a>
                                        <button class="btn btn-default pull-right" @click="News.department = $store.state.user.local.work; postNews();">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === $store.state.user.local.work" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>date</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p>{{ item.text }}</p>
                                                <div class="timeline-options">
                                                    <a href="#"><i class="icon-share"></i> Share</a>
                                                </div>
                                                <div v-for="comm in item.reply" :key="comm._id" class="timeline-comment">
                                                    <div class="timeline-comment-header">
                                                        <img :src="comm.senderPic" alt="">
                                                        <p>{{comm.sender}} <small>date</small></p>
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
                      </v-tab-item>
                      <v-tab v-if="$store.state.user.local.team !== 'none'">
                        {{ $store.state.user.local.team }}
                      </v-tab>
                      <v-tab-item v-if="$store.state.user.local.team !== 'none'" style="margin-top: 10px;">
                        <div class="panel panel-white">
                            <div class="panel-body">
                                <div class="post">
                                    <textarea class="form-control" placeholder="Post" v-model="News.text" rows="4=6"></textarea>
                                    <div class="post-options">
                                        <a href="#"><i class="icon-camera"></i></a>
                                        <a href="#"><i class="icon-link"></i></a>
                                        <button class="btn btn-default pull-right" @click="News.department = $store.state.user.local.team; postNews();">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === $store.state.user.local.team" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>date</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p>{{ item.text }}</p>
                                                <div class="timeline-options">
                                                    <a href="#"><i class="icon-share"></i> Share</a>
                                                </div>
                                                <div v-for="comm in item.reply" :key="comm._id" class="timeline-comment">
                                                    <div class="timeline-comment-header">
                                                        <img :src="comm.senderPic" alt="">
                                                        <p>{{comm.sender}} <small>date</small></p>
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
                      </v-tab-item>
                    </v-tabs>
                </div>
                <div class="col-md-3 m-t-lg">
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Team : {{ user.local.team }}</div>
                        </div>
                        <div class="panel-body">
                          <button v-if="user.local.team === 'none'" @click="CreateTeam = true" class="btn btn-primary btn-block">Create a team</button>
                            <div v-else class="team">
                                <div v-for="pers in Partner" :key="pers._id" class="team-member">
                                   <div class="online on"></div>
                                   <img :src="pers.picture" alt="">
                                </div>
                                <br/>
                                <button @click="NewTeam = 'none'; PostTeam ();" class="btn btn-primary btn-block">Quit team</button>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Description</div>
                        </div>
                        <div class="panel-body">
                            <p>{{ user.local.description }}</p>
                        </div>
                    </div>
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

      <v-dialog style="z-index:25;" v-model="EditPicture" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
          <v-card-title style="color: blue;">Nouvelle image de profil :</v-card-title>
          <v-divider></v-divider>
            <v-flex xs8>
              <label>File
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
              </label>
            </v-flex>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="EditPicture = false;">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="changePhoto()">Save</v-btn>
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
import News from '@/services/NewsService'
import axios from 'axios'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: [],
      file: '',
      e1: null,
      EditDescription: null,
      NewDescription: '',
      EditPicture: null,
      NewPicture: '',
      NewTeam: '',
      EditTel: false,
      NewTel: '',
      PostNews: null,
      CreateTeam: false,
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
    this.user = this.$store.state.user
    this.getNews()
    this.GetByTeam()
  },
  methods: {
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
        mail: this.user.local.mail
      })
      this.user.local.team = this.NewTeam
      this.CreateTeam = false
      this.GetByTeam()
    },
    GetByTeam () {
      var vue = this
      AccountService.FindByTeam(this.user.local.team).then((response) => {
        vue.Partner = response.data.users
      })
    },
    async postNews () {
      this.News.sender = this.$store.state.user.local.username
      this.News.senderPic = this.$store.state.user.local.picture
      News.Post(this.News)
      this.getNews()
      this.PostNews = false
    },
    async postReply (target, message) {
      var sender = this.$store.state.user.local.username
      var senderPic = this.$store.state.user.local.picture
      News.PutReply({
        target: target,
        sender: sender,
        message: message,
        senderPic: senderPic
      })
      this.getNews()
    },
    async getNews () {
      var vue = this
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          var tmp = response.data.news
          tmp.forEach(function (element) {
            News.GetReply(element._id).then((reponse) => {
              element.reply = reponse.data.reply
              element.message = 'Reply'
              vue.allNews = tmp
            })
          })
        }
      }
      this.DiscNews = {
        msg1: {
          name: response.data.msgNo3.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo3.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        },
        msg2: {
          name: response.data.msgNo2.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo2.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        }
        /*
        msg3: {
          name: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        }
        */
      }
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    },
    changePhoto () {
      let formData = new FormData()
      formData.append('file', this.file)
      formData.append('username', this.user.local.username)
      formData.append('mail', this.user.email)
      console.log(formData.get('file'))
      axios.post('http://localhost:8081/account/photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function (error) {
          console.log('FAILURE : ' + error)
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

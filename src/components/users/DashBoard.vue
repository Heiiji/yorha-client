<template>
  <div>
    <div v-if="user.local" style="padding-top: 0px;">
        <div class="profile-cover" style="background: none;">
            <v-parallax style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" src="/static/Wallpaper 7.jpg"></v-parallax>
        </div>
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-3 user-profile">
                </div>
                <div class="col-md-6 m-t-lg">
                    <v-tabs style="margin: 10px;" fixed-tabs>
                      <v-tab>
                        General
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
                                <li v-for="item in allNews" v-if="item.department === 'General'" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p v-html="item.text"></p>
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
                                                <v-text-field
                                                  name="reply"
                                                  label="Reply"
                                                  style="position: absolute; width: 75%;"
                                                  v-model="item.message"
                                                  single-line
                                                ></v-text-field>
                                                <v-btn fab small @click="postReply(item._id, item.message); item.message = ''" color="white" style="position: relative; left: 85%;">
                                                  <v-icon dark>send</v-icon>
                                                </v-btn>
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
                                                <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p v-html="item.text"></p>
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
                                                <v-text-field
                                                  name="reply"
                                                  label="Reply"
                                                  style="position: absolute; width: 75%;"
                                                  v-model="item.message"
                                                  single-line
                                                ></v-text-field>
                                                <v-btn fab small @click="postReply(item._id, item.message); item.message = ''" color="white" style="position: relative; left: 85%;">
                                                  <v-icon dark>send</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </v-tab-item>
                      <v-tab>
                        Whatever
                      </v-tab>
                      <v-tab-item v-if="$store.state.user.local.team !== 'none'" style="margin-top: 10px;">
                        <div class="panel panel-white">
                            <div class="panel-body">
                                <div class="post">
                                    <textarea class="form-control" placeholder="Post" v-model="News.text" rows="4=6"></textarea>
                                    <div class="post-options">
                                        <a href="#"><i class="icon-camera"></i></a>
                                        <a href="#"><i class="icon-link"></i></a>
                                        <button class="btn btn-default pull-right" @click="News.department = 'Whatever'; postNews();">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === 'Whatever'" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p v-html="item.text"></p>
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
                                                <v-text-field
                                                  name="reply"
                                                  label="Reply"
                                                  style="position: absolute; width: 75%;"
                                                  v-model="item.message"
                                                  single-line
                                                ></v-text-field>
                                                <v-btn fab small @click="postReply(item._id, item.message); item.message = ''" color="white" style="position: relative; left: 85%;">
                                                  <v-icon dark>send</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </v-tab-item>
                      <v-tab v-if="Teams[0]">
                        <v-menu style="background-color: rgba(0, 0, 0, 0)" offset-y>
                          <v-btn style="background-color: rgba(0, 0, 0, 0); box-shadow: none; padding-bottom: 45px;" slot="activator">
                            {{ activeTeam }}
                            <img src="https://rockandtait.com/wp-content/uploads/2016/07/arrow-down-icon-png-4.png" style="display: absolute; top: 10%; right: 10px; width: 20px; margin-left: 10px;" />
                            </v-btn>
                          <v-list>
                            <v-list-tile v-for="item in Teams" :key="item.name">
                              <v-list-tile-title @click="activeTeam = item.name" style="cursor: pointer;">{{ item.name }}</v-list-tile-title>
                            </v-list-tile>
                          </v-list>
                        </v-menu>
                      </v-tab>
                      <v-tab-item style="margin-top: 10px;">
                        <div class="panel panel-white">
                            <div class="panel-body">
                                <div class="post">
                                    <textarea class="form-control" placeholder="Post" v-model="News.text" rows="4=6"></textarea>
                                    <div class="post-options">
                                        <a href="#"><i class="icon-camera"></i></a>
                                        <a href="#"><i class="icon-link"></i></a>
                                        <button class="btn btn-default pull-right" @click="News.department = activeTeam; postNews();">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === activeTeam" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p v-html="item.text"></p>
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
                                                <v-text-field
                                                  name="reply"
                                                  label="Reply"
                                                  style="position: absolute; width: 75%;"
                                                  v-model="item.message"
                                                  single-line
                                                ></v-text-field>
                                                <v-btn fab small @click="postReply(item._id, item.message); item.message = ''" color="white" style="position: relative; left: 85%;">
                                                  <v-icon dark>send</v-icon>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </v-tab-item><v-tab-item style="margin-top: 10px;">
                        <div class="panel panel-white">
                            <div class="panel-body">
                                <div class="post">
                                    <textarea class="form-control" placeholder="Post" v-model="News.text" rows="4=6"></textarea>
                                    <div class="post-options">
                                        <a href="#"><i class="icon-camera"></i></a>
                                        <a href="#"><i class="icon-link"></i></a>
                                        <button class="btn btn-default pull-right" @click="News.department = activeTeam; postNews();">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-timeline">
                            <ul class="list-unstyled">
                                <li v-for="item in allNews" v-if="item.department === activeTeam" :key="item._id" class="timeline-item" style="display: block;">
                                    <div class="panel panel-white">
                                        <div class="panel-body">
                                            <div class="timeline-item-header">
                                                <img :src="item.senderPic" alt="">
                                                <p>{{ item.sender }} <span>Posted for {{ item.department }}</span></p>
                                                <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                                            </div>
                                            <div class="timeline-item-post">
                                                <p v-html="item.text"></p>
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
                                                <v-text-field
                                                  name="reply"
                                                  label="Reply"
                                                  style="position: absolute; width: 75%;"
                                                  v-model="item.message"
                                                  single-line
                                                ></v-text-field>
                                                <v-btn fab small @click="postReply(item._id, item.message); item.message = ''" color="white" style="position: relative; left: 85%;">
                                                  <v-icon dark>send</v-icon>
                                                </v-btn>
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
                </div>
            </div>
        </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'
import News from '@/services/NewsService'
import Api from '@/services/Api'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      homeTheme: '',
      AvTheme: ['cat', 'city', 'landscape', 'dog', 'abstract'],
      user: [],
      file: '',
      navigator: {
        language: ''
      },
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
      this.getNews()
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
    PostTheme (target) {
      var vue = this
      vue.$store.state.user.local.homeTheme = target
      AccountService.editHomeTheme({
        newTheme: target,
        mail: vue.$store.state.user.local.mail
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
    async postNews () {
      this.News.sender = this.$store.state.user.local.username
      this.News.senderPic = this.$store.state.user.local.picture
      var New = JSON.parse(JSON.stringify(this.News))
      this.News = []
      News.Post(New).then(() => {
        this.getNews()
      })
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
      }).then(() => {
        this.getNews()
      })
    },
    async getNews () {
      var vue = this
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          var tmp = response.data.news
          tmp.sort(function (a, b) {
            if (a.date < b.date) {
              return 1
            } else {
              return -1
            }
          })
          tmp.forEach(function (element) {
            element.date = new Date(element.date)
            element.text = element.text.replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;" target="_blank">http' + '$1' + '</a>')
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
.form-control {
  width: 100%;
}
</style>

<template>
  <div class="page-inner">
            <div style="text-align: left;" class="page-title">
                <h3>Accueil</h3>
                <div class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li><a>Home</a></li>
                        <li class="active">General</li>
                    </ol>
                </div>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs8 style="max-height: 800px;">
              <a v-for="news in allNews" :key="news._id" @click="$router.push(news.link)" v-if="news.department === 'Annonce'">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <v-card-text class="px-0"><strong>{{ news.sender }} :</strong> {{ news.text }}</v-card-text>
                </v-card><br/>
              </a>
            </v-flex>
            <v-flex xs4>
              <button class="btn btn-primary btn-block" @click="PostAnn = true" style="width: 100%; margin: 0px;">Post document</button>
              <div class="socialp" v-for="news in DiscNews" :key="news._id" @click="news.show = true;">
                  <div style="margin: 15px; position: relative;" class="panel-body">
                      <img src="https://vignette.wikia.nocookie.net/central/images/6/60/Discord-logo.png/revision/latest?cb=20170621125902" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                      <div><h2 class="no-m" style="color: rgb(30, 80, 160);">{{ news.name }}</h2><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(news.text.match(/.{0,200}/g))[0] + ' ...'"></span></div>
                  </div>
              </div><br/>
              <div v-if="TwitNews[0]" class="socialp">
                  <div style="margin: 15px; position: relative;" class="panel-body"  @click="showTwit = true;">
                      <img src="http://pnd-rdc.net/wp-content/uploads/2017/12/logo-twitter-rond.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                      <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(TwitNews[0].match(/.{0,200}/g))[0] + ' ...'"></span></div>
                  </div>
              </div><br/>
              <QwickLook target="finnish">
              </QwickLook>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="col-lg-12 col-md-12" style="margin-top: 10px;">
            <div class="panel panel-white">
                <div class="panel-heading">
                    <h4 class="panel-title">Project Stats</h4>
                </div>
                <div class="panel-body">
                    <div class="table-responsive project-stats">
                       <table class="table">
                           <thead>
                               <tr>
                                   <th>#</th>
                                   <th>Project</th>
                                   <th>Status</th>
                                   <th>Manager</th>
                                   <th>Progress</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <th scope="row">452</th>
                                   <td>Mailbox Template</td>
                                   <td><span class="label label-info">Pending</span></td>
                                   <td>David Green</td>
                                   <td>
                                   <div class="btn-group">
                            <button type="button" class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Action <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">327</th>
                                   <td>Wordpress Theme</td>
                                   <td><span class="label label-primary">In Progress</span></td>
                                   <td>Sandra Smith</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">226</th>
                                   <td>Modern Admin Template</td>
                                   <td><span class="label label-success">Finished</span></td>
                                   <td>Chritopher Palmer</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">178</th>
                                   <td>eCommerce template</td>
                                   <td><span class="label label-danger">Canceled</span></td>
                                   <td>Amily Lee</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">157</th>
                                   <td>Website PSD</td>
                                   <td><span class="label label-info">Testing</span></td>
                                   <td>Nick Doe</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                               <tr>
                                   <th scope="row">157</th>
                                   <td>Fronted Theme</td>
                                   <td><span class="label label-warning">Waiting</span></td>
                                   <td>David Green</td>
                                   <td>
                                       <div class="progress progress-sm">
                                           <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                           </div>
                                       </div>
                                   </td>
                               </tr>
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <span v-if="DiscNews.msg1">
        <v-dialog style="z-index:25;" v-model="DiscNews.msg1.show" scrollable max-width="1000px">
          <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
            <v-card-title style="color: blue;">{{DiscNews.msg1.name}}</v-card-title>
            <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="DiscNews.msg1.text"></p>
          </v-card>
        </v-dialog>
        <v-dialog style="z-index:25;" v-model="DiscNews.msg2.show" scrollable max-width="1000px">
          <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
            <v-card-title style="color: blue;">{{DiscNews.msg2.name}}</v-card-title>
            <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="DiscNews.msg2.text"></p>
          </v-card>
        </v-dialog>
      </span>
      <v-dialog style="z-index:25;" v-model="showTwit" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
          <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="TwitNews[0]"></p>
        </v-card>
      </v-dialog>
      <v-dialog style="z-index:25;" v-model="PostAnn" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
          <v-card-title style="color: blue;">Post de :
            <v-select
              :items="docs"
              v-model="document.type"
              label="Select type"
              single-line
              required
            ></v-select>
          </v-card-title>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                  <v-text-field
                  name="url"
                  label="Video URL"
                  required
                  v-model="document.url"
                ></v-text-field>
              </v-flex>
              <v-flex xs6><v-date-picker required v-model="document.date" :landscape="true" :reactive="true"></v-date-picker></v-flex>
              <v-flex xs6><v-text-field required box multi-line label="Text" v-model="document.text"></v-text-field></v-flex>
            </v-layout>
          </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false; PostAnn = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="PostAnnonce()">Save</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'
import DocService from '@/services/docService'
import QwickLook from '@/components/versions/WorkingDisplay.vue'
import News from '@/services/NewsService'

export default {
  name: 'Home',
  data () {
    return {
      versions: [],
      passed: [],
      PostAnn: null,
      picker: null,
      docs: [
        { text: 'Résumé Live Shadow',
          id: 0}
      ],
      News: {
        text: '',
        title: '',
        link: '',
        department: 'Annonce',
        visibility: true,
        sender: '',
        senderPic: '',
        token: ''
      },
      document: {
        type: '',
        date: null,
        text: '',
        url: '',
        sender: '',
        senderPic: '',
        token: ''
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
      DiscNews: [],
      TwitNews: [],
      showTwit: false,
      target: 'current'
    }
  },
  mounted () {
    this.getVersion()
    this.getNews()
  },
  components: {
    QwickLook
  },
  methods: {
    async getVersion () {
      const response = await VersionService.fetchPosts('current')
      this.versions = response.data.versions
      const responses = await VersionService.fetchPosts('finnish')
      this.passed = responses.data.versions
    },
    PostAnnonce () {
      var vue = this
      this.document.sender = this.$store.state.user.local.username
      this.document.senderPic = this.$store.state.user.local.picture
      this.document.type = this.document.type.text
      this.document.token = this.$store.state.user.local.token
      DocService.PostYTShadowLive(this.document).then((response) => {
        vue.News.sender = vue.$store.state.user.local.username
        vue.News.senderPic = vue.$store.state.user.local.picture
        vue.News.title = vue.document.type
        vue.News.link = '/document/YTShadowLive/' + response.data.id
        vue.News.text = vue.document.text.match(/.{0,300}/g)[0] + ' ...'
        News.Post(this.News).then((response) => {
          vue.News.department = 'General'
          vue.News.text = 'Le bilan du dernier Shadow Live est en ligne !'
          News.Post(this.News).then((reponse) => {
            vue.PostAnn = false
            vue.getNews()
          })
        })
      })
    },
    async getNews () {
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          this.allNews = response.data.news
        }
      }
      this.TwitNews = response.data.lastTweets
      this.DiscNews = {
        msg1: {
          name: response.data.lastDiscordMsgs[2].replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.lastDiscordMsgs[2].replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4'),
          show: false
        },
        msg2: {
          name: response.data.lastDiscordMsgs[1].replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.lastDiscordMsgs[1].replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4'),
          show: false
        }
        /*
        msg3: {
          name: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.msgNo1.replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4')
        }
        */
      }
      this.DiscNews.msg1.text = this.DiscNews.msg1.text.replace(/@([^ ]*)/g, '<span style="color: blue;">@' + '$1' + '</span>')
      this.DiscNews.msg2.text = this.DiscNews.msg2.text.replace(/@([^ ]*)/g, '<span style="color: blue;">@' + '$1' + '</span>')
    }
  }
}
</script>

<style scoped>
.GO {
  color: green;
}
.NOGO {
  color: red;
}
.WIP {
  color: blue;
}
.newsFeed{
  display: block;
  position: relative;
  width: 90%;
  padding: 5%;
  margin: 5%;
  margin-top: 0px;
  padding-top: 0px;
}
.news{
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 1px 1px 12px #555;
  padding: 10px;
}
.socialp {
  color: black;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  -webkit-transition: box-shadow 1s, -webkit-transform 1s;
  transition: box-shadow 1s, transform 1s;
}
.socialp:hover {
  box-shadow: 1px 1px 12px #555;
  -webkit-transition: box-shadow 1s, -webkit-transform 1s;
  transition: box-shadow 1s, transform 1s;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

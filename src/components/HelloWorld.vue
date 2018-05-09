<template>
  <div class="page-inner">
            <div style="text-align: left; position: relative; width: 100%;" class="page-title">
                <h3>Home</h3>
                <button class="btn btn-primary btn-block" @click="PostAnn = true" style="width: 150px; position: absolute; right: 20px; top: 10px;">Post document</button>
            </div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex style="display: none;" xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs4 v-for="news in DiscNews" :key="news._id">
            <div class="socialp" @click="news.show = true;">
                  <div style="margin: 15px; position: relative;" class="panel-body">
                      <img src="/static/discord.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                      <div><h2 class="no-m" style="color: rgb(30, 80, 160);">{{ news.name }}</h2><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(news.text.match(/.{0,50}/g))[0] + ' ...'"></span></div>
                  </div>
              </div>
            </v-flex>
            <v-flex xs4>
              <div v-if="TwitNews[0]" class="socialp">
                  <div style="margin: 15px; position: relative;" class="panel-body"  @click="showTwit = true;">
                      <img src="/static/twitter.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                      <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(TwitNews[0].match(/.{0,50}/g))[0] + ' ...'"></span></div>
                  </div>
              </div>
            </v-flex>
            <v-flex xs8 style="max-height: 800px;">
              <a v-for="news in allNews" :key="news._id" @click="$router.push(news.link)" v-if="news.department === 'Annonce'">
                <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
                  <img v-if="news.title === 'Résumé Live Shadow' || news.title === 'Shadow Live Summary'" src="https://icon-icons.com/icons2/56/PNG/512/rafagayoutube_11279.png" style="float: left; width: 55px; margin-right: 15px;" />
                  <v-card-text class="px-0"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
                </v-card><br/>
              </a>
            </v-flex>
            <v-flex xs4>
              <div class="socialp" style="height: 230px; cursor: auto; background-color: rgba(250, 250, 250, 0.8);">
                  <div style="margin: 15px; position: relative;" class="panel-body">
                      <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;">Trombi-Game : What is his name ?<br/>
                          <img :src="randUser.picture" style="width: 25%; float: left;" />
                          <form v-on:submit.prevent="PlayRandUser()" ><v-text-field
                            name="Name"
                            :label="name"
                            single-line
                            v-model="randUserReponse"
                            style="position: absolute; right: 10px; top: 40%; width: 65%;"
                          ></v-text-field></form>
                        </span></div>
                  </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
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
      <v-dialog style="z-index:25;" v-model="HelpDesk" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
          <v-card-title style="color: blue;">Expliquer votre probleme :</v-card-title>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs11><v-text-field required box multi-line v-model="HDesk.text"></v-text-field></v-flex>
            </v-layout>
          </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false; PostAnn = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="PostHelpDesk()">Send</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog style="z-index:25;" v-model="randPopup" scrollable max-width="500px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center; padding: 20px;">
          <v-card-title style="color: blue; text-align: center; font-size: 1.2em; display: block;">{{randUserResult}}</v-card-title>
          <v-container grid-list-md>
            <hr/>
            <v-layout row wrap>
              <img :src="randUser.picture" style="float: left; width: 150px; height: 150px;" />
              <h2 style="text-align: center; padding: 15px;">{{ randUser.username }}<br/><br/>Workplace : {{ randUser.work }}</h2>
            </v-layout>
          </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="randPopup = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="$router.push('/profil/' + randUser._id)">Go to profil</v-btn>
          <v-btn color="blue darken-1" style="position: absolute; right: 10px;" flat @click.native="randPopup = false; getRandUser();">retry</v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'
import AccountService from '@/services/AccountService'
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
      HelpDesk: false,
      randUserReponse: '',
      randPopup: false,
      randUserResult: '',
      HDesk: {
        sender: '',
        senderMail: '',
        senderPic: '',
        text: ''
      },
      docs: [
        { text: 'Shadow Live Summary',
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
      randUser: [],
      showTwit: false,
      target: 'current'
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.getVersion()
    this.getNews()
    this.getRandUser()
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
    async getRandUser () {
      var vue = this
      AccountService.GetRand().then((response) => {
        vue.randUser = response.data.user
      })
    },
    async PlayRandUser () {
      var vue = this
      vue.randPopup = true
      if (vue.randUserReponse.toUpperCase() === vue.randUser.username.toUpperCase()) {
        vue.randUserResult = 'Success'
      } else {
        vue.randUserResult = 'Failed'
      }
    },
    PostAnnonce () {
      var vue = this
      this.document.sender = this.$store.state.user.local.username
      this.document.senderPic = this.$store.state.user.local.picture
      this.document.type = this.document.type.text
      this.document.title = vue.document.type
      this.firebaseApp.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        vue.document.token = idToken
        DocService.PostYTShadowLive(vue.document).then((response) => {
          vue.News.sender = vue.$store.state.user.local.username
          vue.News.senderPic = vue.$store.state.user.local.picture
          vue.News.title = vue.document.type
          vue.News.link = '/document/YTShadowLive/' + response.data.id
          vue.News.text = vue.document.text.match(/.{0,300}/g)[0] + ' ...'
          News.Post(vue.News).then((response) => {
            vue.News.department = 'General'
            vue.News.text = 'Last Shadow Live summary is online !'
            News.Post(vue.News).then((reponse) => {
              vue.PostAnn = false
              vue.getNews()
            })
          })
        })
      })
    },
    PostHelpDesk () {
      AccountService.SendHelpDesk()
    },
    async getNews () {
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          this.allNews = response.data.news
        }
      }
      this.TwitNews = response.data.lastTweets
      if (navigator.language === 'fr-FR') {
        this.TwitNews = response.data.lastTweets
      } else {
        this.TwitNews = response.data.lastTweetsen
      }
      this.TwitNews[0] = this.TwitNews[0].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
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
      this.DiscNews.msg1.text = this.DiscNews.msg1.text.replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      this.DiscNews.msg2.text = this.DiscNews.msg2.text.replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
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
  display: inline-block;
  width: 100%;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  -webkit-transition: box-shadow 1s, -webkit-transform 1s;
  transition: box-shadow 1s, transform 1s;
}
.socialp:hover {
  box-shadow: 1px 1px 12px #555;
  -webkit-transition: box-shadow 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, transform 0.1s;
}
@media (max-width:900px) {
  .socialp {
    display: none;
  }
  .noMobile {
    display: none;
  }
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

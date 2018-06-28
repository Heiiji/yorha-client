<style scoped>
.jumbotron {
  background-color: rgba(0, 0, 0, 0);
}
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
.card:hover {
  box-shadow: 1px 1px 12px #555;
  -webkit-transition: box-shadow 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, transform 0.1s;
}
@media (max-width:900px) {
  .noMobile {
    display: none;
  }
}
@media (min-width:900px) {
  .MobileOnly {
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
.main-container {
  padding: 18px;
  margin-left: 30px;
  margin-right: 82px;
  display: grid;
  grid-template-columns: minmax(auto, 350px) auto minmax(300px, 600px) auto minmax(auto, 350px);
  grid-column-gap: 20px;
}
.ask_trombi {
  grid-column: 1;
}
.post-container {
  grid-column: 3;
}
.social-container {
  grid-column: 5;
}
.panel-body {
  padding: 24px;
  min-width: 200px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
}
.twitter-container {
  height: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
}
.twitter-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #FFFFFF;
}
.twitter-container::-webkit-scrollbar {
  width: 6px;
  background-color: #FFFFFF;
}
.twitter-container::-webkit-scrollbar-thumb:hover {
  background-color: #888;
}
.twitter-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
  background-color: #AAA;
}
.actu {
  padding: 6px;
  padding-left: 16px;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  margin-top: 6px;
  text-align: center;
  background-color: rgb(255, 26, 70);
  color: white;
  border-radius: 20px;
  width: calc(100% - 52px);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
}
.post-solo {
  margin-bottom: 20px;
  padding: 24px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
}
.post-solo-header {
  display: grid;
  grid-template-columns: 55px auto;
  width: 100%;
}
.post-solo-header-img {
  grid-column: 1;
}
.post-solo-header-title {
  grid-column: 2;
}
.post-solo-header-title p {
  font-size: 16px;
  font-weight: 600;
  color: black;
  padding: 16px;
  margin-bottom: 0px !important;
}
.post-solo-text {
  color: black;
  margin-bottom: 0px !important;
  padding: 10px;
}
@media (max-width:1000px) {
  .main-container {
    margin-left: 0px;
    margin-right: 0px;
  }
}
.page-inner_dark_color, .page-inner_dark_normal {
  background-color: #333333 !important;
}
.actu_clair_normal, .btn-actu_clair_normal {
  background-color: white !important;
  color: black !important;
}
.actu_dark_normal, .btn-actu_dark_normal {
  background-color: #3c4043 !important;
}
.btn-actu_dark_color, .btn-actu_clair_color {
  background-color: rgb(255, 26, 70) !important;
}
.bg_dark_color, .bg_dark_normal, .bg_dark_color p, .bg_dark_normal p {
  background-color: #3c4043 !important;
  color: white !important;
}
</style>
<template>
  <div :class="'page-inner_' + $store.state.user.local.theme">
    <div class="main-container">
      <div class="ask_trombi">
        <div class="panel-body" :class="'bg_' + $store.state.user.local.theme">
          <span style="text-align: left; display: inline-block; font-size: 1.25em; word-wrap: break-word; width: 100%;">Trombi-Game : What is his name ?<br/>
            <img :src="randUser.picture" style="width: 60px; border-radius: 30px; float: left; margin-top: 16px;"/>
            <form v-on:submit.prevent="PlayRandUser()" ><v-text-field name="Name" :label="name" single-line v-model="randUserReponse" style="float: right; width: calc(100% - 70px); padding-top: 30px;"></v-text-field></form>
          </span>
        </div>
      </div>

      <div class="post-container">
        <div style="width: 100%; height: 52px; margin-top: -4px; margin-bottom: 30px; display: inline-flex;">
          <div class="actu" :class="'actu_' + $store.state.user.local.theme">Actualités</div>
          <v-btn @click="PostAnn = true" :class="'btn-actu_' + $store.state.user.local.theme" fab small dark>
            <v-icon>add</v-icon>
          </v-btn>
        </div>
        <a v-for="news in allNews" :key="news._id" @click="$router.push(news.link)" v-if="news.department === 'Annonce'">
          <div class="post-solo" :class="'bg_' + $store.state.user.local.theme">
            <div class="post-solo-header">
              <div class="post-solo-header-img"><img v-if="news.title === 'Résumé Live Shadow' || news.title === 'Shadow Live Summary'" src="https://icon-icons.com/icons2/56/PNG/512/rafagayoutube_11279.png" style="width: 55px;" /></div>
              <div class="post-solo-header-title"><p>{{ news.title }} :</p></div>
            </div>
            <p class="post-solo-text">{{ news.text }}</p>
          </div>
        </a>
      </div>

      <div class="social-container">
        <div class="twitter-container">
          <Timeline v-if="$store.state.user.local.theme === 'dark_color' || $store.state.user.local.theme === 'dark_normal'" :id="'Shadow_France'" :sourceType="'profile'" :options="{ theme: 'dark' }"/>
            <Timeline v-if="$store.state.user.local.theme === 'clair_color' || $store.state.user.local.theme === 'clair_normal'" :id="'Shadow_France'" :sourceType="'profile'"/>
        </div>
      </div>
    </div>

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
          <v-container v-if="document.type.text === 'Shadow Live Summary'" grid-list-md>
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
      <v-dialog style="z-index:25;" v-model="randPopup" scrollable max-width="500px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center; padding: 20px;">
          <div>
            <img :src="randUser.picture" style="float: left; width: 100px; height: 100px; border-radius: 50px;" />
            <h2 style="text-align: center; padding: 15px; padding-top: 5px; font-size: 1.3em;">{{ randUser.username }}<br/><br/>Workplace : {{ randUser.work }}</h2>
          </div>
          <v-card-title v-if="randUserResult === 'Failed'" style="color: red; text-align: center; font-size: 1.2em; display: block;">{{randUserResult}}</v-card-title>
          <v-card-title v-else style="color: green; text-align: center; font-size: 1.2em; display: block;">{{randUserResult}}</v-card-title>
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
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
import AccountService from '@/services/AccountService'
import DocService from '@/services/docService'
import News from '@/services/NewsService'

export default {
  name: 'Home',
  data () {
    return {
      passed: [],
      PostAnn: null,
      picker: null,
      HelpDesk: false,
      randUserReponse: '',
      randPopup: false,
      randUserResult: '',
      twittText: '',
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
      allNews: [],
      DiscNews: [],
      TwitNews: [],
      randUser: [],
      showTwit: false
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.getNews()
    this.getRandUser()
  },
  components: {
    Tweet,
    Moment,
    Timeline
  },
  methods: {
    async getRandUser () {
      var vue = this
      AccountService.GetRand().then((response) => {
        if (response.data.user.username !== vue.randUser.username) {
          vue.randUser = response.data.user
        } else {
          AccountService.GetRand().then((response) => {
            vue.randUser = response.data.user
          })
        }
      })
    },
    async PlayRandUser () {
      var vue = this
      let justName = vue.randUser.username.replace(/^([^ ]+) [a-z0-1.]+/gi, '$1')
      console.log(justName)
      vue.randPopup = true
      if (vue.randUserReponse.toUpperCase() === vue.randUser.username.toUpperCase()) {
        vue.randUserResult = 'Success'
      } else {
        if (justName.toUpperCase() === vue.randUserReponse.toUpperCase()) {
          vue.randUserResult = 'Success'
        } else {
          vue.randUserResult = 'Failed'
        }
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
    async getNews () {
      var vue = this
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          this.allNews = response.data.news
        }
      }
      if (navigator.language === 'fr-FR') {
        this.TwitNews = response.data.lastTweets
      } else {
        this.TwitNews = response.data.lastTweetsen
      }
      this.TwitNews[0] = this.TwitNews[0].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      this.TwitNews[1] = this.TwitNews[1].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      this.TwitNews[2] = this.TwitNews[2].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
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
        },
        msg3: {
          name: response.data.lastDiscordMsgs[0].replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$3'),
          text: response.data.lastDiscordMsgs[0].replace(/^([^|]*).([^|]*).([^|]*).([^|]*)/g, '$4'),
          show: false
        }
      }
      if (vue.DiscNews.msg1) {
        vue.DiscNews.msg1.text = vue.DiscNews.msg1.text.replace(/@([^ ]*)/g, '<span style="color: blue;">@' + '$1' + '</span>')
        vue.DiscNews.msg1.text = vue.DiscNews.msg1.text.replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      }
      if (vue.DiscNews.msg2) {
        vue.DiscNews.msg2.text = vue.DiscNews.msg2.text.replace(/@([^ ]*)/g, '<span style="color: blue;">@' + '$1' + '</span>')
        vue.DiscNews.msg2.text = vue.DiscNews.msg2.text.replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      }
      if (vue.DiscNews.msg3) {
        vue.DiscNews.msg3.text = vue.DiscNews.msg3.text.replace(/@([^ ]*)/g, '<span style="color: blue;">@' + '$1' + '</span>')
        vue.DiscNews.msg3.text = vue.DiscNews.msg3.text.replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      }
    }
  }
}
</script>

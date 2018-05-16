<template>
  <div style="position: relative; width: 100%; height: 100%; font-family: Roboto;">
    <div style="z-index: 0; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: url('/static/Wallpaper 10.jpg'); background-size: cover;">
    </div>
    <div :style="'z-index: 1; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: url(\''+ image +'\'); background-size: cover;'">
    </div>
    <div style="position: fixed; left: 0%; top: 2%; width: 100%; text-align: center; z-index: 2;">
      <span style="color: black; background-color: rgba(250, 250, 250, 1); padding: 20px; border-radius: 20px;">
        {{ date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}
      </span>
      <div style="position: relative; display: inline-block;">
        <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><v-icon width="57px" style="margin: 20px; padding: 10px; background-color: rgba(250, 250, 250, 1); border-radius: 20px; position: relative;">email</v-icon><span v-if="msgNbr > 0" class="badge badge-success" style="position: absolute; top: 10%; left: 20%;">{{ msgNbr }}</span></a>
        <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
            <li class="dropdown-menu-list slimscroll messages" style="max-height: 90%;">
                <ul class="list-unstyled">
                    <li v-for="msg in messages" :key="msg._id" v-if="msg.asread === false" @click="msgNbr = 0; redirect('/chat')">
                        <a>
                            <p class="msg-name">{{ msg.sender }}</p>
                            <p class="msg-text"> {{ msg.text }}</p>
                            <p class="msg-time">{{ msg.date }}</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="drop-all" style="width: 100%; text-align: center; margin: 0px;"><a @click="msgNbr = 0; redirect('/chat')" class="text-center">All Messages</a></li>
        </ul>
      </div>
      <span class="profilDot" @click="$router.push('/profil')">
        <v-avatar size="57px" style="margin: 0; padding: 0; margin-right: 10px; margin-left: -10px;" tile>
          <img style="border-radius: 27px;" :src="$store.state.user.local.picture" alt="Profil">
        </v-avatar>{{ $store.state.user.local.username }}
      </span>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      style="position: fixed;"
    >
      <v-list class="pa-1">
        <v-list-tile style="height: 100px; background: url('/static/Wallpaper 13.jpg') center; background-size: cover;">
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile @click="redirect('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="redirect('/profil')">
          <v-list-tile-action>
            <v-icon>calendar_view_day</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="redirect('/department')">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Departments</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">Tools</div>
            <v-card>
              <v-list-tile @click="redirect('https://backoffice.pa1.blade-group.fr:2448/drhouse/status')">
                <v-list-tile-action>
                  <v-icon>verified_user</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Dr House</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="redirect('https://o-computers.atlassian.net/secure/Dashboard.jspa')">
                <v-list-tile-action>
                  <v-icon>assessment</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>JIRA</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-list-tile @click="redirect('/trombi')">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>trombi</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-icon class="buttonp" @click.stop="drawer = !drawer" size="30">menu</v-icon>
    <div style="position: fixed; top: 0px; right: 0px; width: 500px; padding: 25px; z-index: 2; height: 100%; overflow-y: scroll; overflow-x: hidden;">
      <v-carousel class="socialp" hide-controls>
        <v-carousel-item  style="padding-top: 5px;">
          <div style="margin: 15px; position: relative;" class="panel-body"  @click="twittText = TwitNews[0]; showTwit = true;">
              <img src="/static/twitter.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
              <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(TwitNews[0].match(/.{0,50}/g))[0] + ' ...'"></span></div>
          </div>
        </v-carousel-item>
        <v-carousel-item style="padding-top: 5px;">
          <div style="margin: 15px; position: relative;" class="panel-body"  @click="twittText = TwitNews[1]; showTwit = true;">
              <img src="/static/twitter.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
              <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(TwitNews[1].match(/.{0,50}/g))[0] + ' ...'"></span></div>
          </div>
        </v-carousel-item>
        <v-carousel-item style="padding-top: 5px;">
          <div style="margin: 15px; position: relative;" class="panel-body"  @click="twittText = TwitNews[2]; showTwit = true;">
              <img src="/static/twitter.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
              <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(TwitNews[2].match(/.{0,50}/g))[0] + ' ...'"></span></div>
          </div>
        </v-carousel-item>
      </v-carousel>
      <v-carousel class="socialp" hide-controls>
        <v-carousel-item  style="padding-top: 5px;" v-if="DiscNews.msg1">
          <div style="margin: 15px; position: relative;" class="panel-body" @click="DiscNews.msg1.show = true;">
              <img src="/static/discord.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
              <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(DiscNews.msg1.text.match(/.{0,50}/g))[0] + ' ...'"></span></div>
          </div>
        </v-carousel-item>
        <v-carousel-item  style="padding-top: 5px;" v-if="DiscNews.msg2">
          <div style="margin: 15px; position: relative;" class="panel-body" @click="DiscNews.msg2.show = true;">
              <img src="/static/discord.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
              <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(DiscNews.msg2.text.match(/.{0,50}/g))[0] + ' ...'"></span></div>
          </div>
        </v-carousel-item>
        <v-carousel-item  style="padding-top: 5px;" v-if="DiscNews.msg3">
          <div style="margin: 15px; position: relative;" class="panel-body" @click="DiscNews.msg3.show = true;">
              <img src="/static/discord.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
              <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(DiscNews.msg3.text.match(/.{0,50}/g))[0] + ' ...'"></span></div>
          </div>
        </v-carousel-item>
      </v-carousel>
          <a v-for="news in allNews" :key="news._id" @click="$router.push(news.link)" v-if="news.department === 'Annonce'">
            <div class="socialp" style="padding: 20px;">
              <img v-if="news.title === 'Résumé Live Shadow' || news.title === 'Shadow Live Summary'" src="https://icon-icons.com/icons2/56/PNG/512/rafagayoutube_11279.png" style="float: right; width: 40px; margin-right: 15px;" />
              <v-card-text class="px-0" style="font-size: 1.3em;"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
            </div><br/>
          </a>
    </div>
    <span v-if="DiscNews.msg1">
      <v-dialog style="z-index:25;" v-model="DiscNews.msg1.show" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
          <v-card-title style="color: blue;">{{DiscNews.msg1.name}}</v-card-title>
          <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="DiscNews.msg1.text"></p>
        </v-card>
      </v-dialog>
    </span>
    <span v-if="DiscNews.msg2">
      <v-dialog style="z-index:25;" v-model="DiscNews.msg2.show" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
          <v-card-title style="color: blue;">{{DiscNews.msg2.name}}</v-card-title>
          <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="DiscNews.msg2.text"></p>
        </v-card>
      </v-dialog>
    </span>
    <span v-if="DiscNews.msg3">
      <v-dialog style="z-index:25;" v-model="DiscNews.msg3.show" scrollable max-width="1000px">
        <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
          <v-card-title style="color: blue;">{{DiscNews.msg3.name}}</v-card-title>
          <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="DiscNews.msg3.text"></p>
        </v-card>
      </v-dialog>
    </span>
    <v-dialog style="z-index:25;" v-model="showTwit" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
        <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="twittText"></p>
      </v-card>
    </v-dialog>
    <div style="z-index: 2;" class="chat">
      <div class="list">
        <div :class="selectedChannel === 'General' ? 'channel2' : 'channel'" @click="selectedChannel = 'General'">General</div>
        <div :class="selectedChannel === $store.state.user.local.work ? 'channel2' : 'channel'" @click="selectedChannel = $store.state.user.local.work">Department</div>
        <div :class="selectedChannel === 'Whatever' ? 'channel2' : 'channel'" @click="selectedChannel = 'Whatever'">Whatever</div>
        <div v-for="team in Teams" :key="team.name" :class="selectedChannel === team.name ? 'channel2' : 'channel'" @click="selectedChannel = team.name">{{ team.name }}</div>
      </div>
      <div class="posts">
        <ul class="list-unstyled">
            <li v-for="item in allNews" v-if="item.department === selectedChannel" :key="item._id" class="timeline-item" style="display: block;">
                <div class="panel" style="background-color: rgba(250, 250, 250, 0.9);">
                    <div class="panel-body">
                        <div class="timeline-item-header">
                            <img :src="item.senderPic" width="30px" style="border-radius: 15px; float: left; margin: 5px;" alt="">
                            <p>{{ item.sender }}</p>
                            <small>{{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                        </div>
                        <div class="timeline-item-post">
                            <p>{{ item.text }}</p>
                            <div v-for="comm in item.reply" :key="comm._id" class="timeline-comment">
                                <div class="timeline-comment-header">
                                    <p>{{comm.sender}} <small>| {{ comm.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small></p>
                                </div>
                                <p>{{comm.text}}</p>
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
    </div>
  </div>
</template>
<style scoped>
.timeline-comment {
  border-top: 1px solid #f1f1f1;
  border-bottom: 0px solid #f1f1f1;
}
.profilDot {
  color: black;
  background-color: rgba(250, 250, 250, 1);
  padding: 20px;
  padding-left: 0px;
  border-radius: 20px;
  cursor: pointer;
}
.profilDot:hover {
  box-shadow: 6px 6px 20px #333;
  background-color: rgba(220, 220, 220, 1);
}
.panel {
  border-radius: 3px;
}
.chat {
  color: #ffffff;
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 30px;
  border-radius: 10px;
  height: 70%;
  width: 48%;
  overflow-y: scroll;
}
.chat::-webkit-scrollbar {
  display: none;
}
.chat .posts {
  width: 100%;
  color: black;
  margin: 0px;
  padding: 20px;
}
.chat .list {
  text-align: center;
  font-family: 'Share Tech Mono', monospace;
  background-color: rgba(10, 10, 13, 0.9);
  color: #daf6ff;
  border-radius: 4px;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 11, 13, 0.9);
}
.channel2 {
  padding: 10px;
  margin: 0px;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2em;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: white;
}
.channel {
  padding: 10px;
  margin: 0px;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2em;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0);
}
.channel:hover {
  background-color: rgba(10, 11, 13, 0.8);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: white;
}
.buttonp {
  cursor: pointer;
  position: fixed;
  top: 2%;
  left: 2%;
  z-index: 2;
  background-color: rgba(250, 250, 250, 1);
  border-radius: 3px;
  padding: 10px;
  -webkit-transition: box-shadow 0.1s, background-color 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, background-color 0.1s, transform 0.1s;
}
.buttonp:hover {
  background-color: rgba(230, 230, 230, 1);
  box-shadow: 2px 2px 5px #333;
  -webkit-transition: box-shadow 0.1s, background-color 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, background-color 0.1s, transform 0.1s;
}
.socialp {
  color: black;
  display: inline-block;
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  margin: 5px;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  -webkit-transition: box-shadow 1s, background-color 0.1s, -webkit-transform 1s;
  transition: box-shadow 1s, background-color 0.1s, transform 1s;
}
.socialp:hover {
  background-color: rgba(240, 240, 240, 1);
  box-shadow: 6px 6px 20px #333;
  -webkit-transition: box-shadow 0.1s, background-color 0.1s, -webkit-transform 0.1s;
  transition: box-shadow 0.1s, background-color 0.1s, transform 0.1s;
}
.hour {
  z-index: 19;
  font-size: 8em;
  position: relative;
  top: 40%;
}
p {
  margin: 0;
  padding: 0;
}
.clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: fixed;
  bottom: 1%;
  left: 5%;
  background-color: rgba(50,50,50, 0.2);
  padding: 30px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
}
.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 24px;
  margin-bottom: 30px;
}
.text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}
@media (max-width:1300px) {
  .socialp {
    display: none;
  }
  .chat {
    width: 100%;
  }
}
@media (max-width:700px) {
  .buttonp {
    display: none;
  }
}
</style>
<script>
import News from '@/services/NewsService'
import Unsplash from 'unsplash-js'
import AccountServices from '@/services/AccountService'

// var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
// var timerID = setInterval(this.updateTime(), 1000)

const unsplash = new Unsplash({
  applicationId: '25fbeb2d337432387b3d4d69dbdbcc5e56410a5df9b6f017a0be08495462c84a',
  secret: '375226c605916b148c1b83c61474fca95ca5d1078447195f709f9e5280773715',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
})

export default {
  data: () => ({
    image: '',
    navigator: {
      language: ''
    },
    time: '',
    selectedChannel: 'General',
    allNews: [],
    TwitNews: [],
    twittText: '',
    drawer: null,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }
    ],
    Teams: [],
    messages: [],
    msgNbr: 0,
    showTwit: false,
    DiscNews: [],
    date: ''
  }),
  methods: {
    updateTime () {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2)
      this.date = new Date()
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
    redirect (link) {
      if (link.indexOf('http') !== -1) {
        window.location.href = link
      } else {
        this.$router.push(link)
      }
    },
    GetByTeam () {
      var vue = this
      vue.Teams = []
      vue.$store.state.user.local.teams.forEach((elem) => {
        AccountServices.FindByTeam(elem).then((response) => {
          vue.Teams.push({name: elem, users: response.data.users})
        }).then(() => {
          vue.activeTeam = vue.Teams[0].name
          vue.selectedTeam = vue.Teams[0]
        })
      })
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
      var tmp = []
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          tmp = response.data.news
          tmp.sort(function (a, b) {
            if (a.date < b.date) {
              return 1
            } else {
              return -1
            }
          })
        }
      }
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
      if (navigator.language === 'fr-FR') {
        this.TwitNews = response.data.lastTweets
      } else {
        this.TwitNews = response.data.lastTweetsen
      }
      this.TwitNews[0] = this.TwitNews[0].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      this.TwitNews[1] = this.TwitNews[0].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
      this.TwitNews[2] = this.TwitNews[0].replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;">http' + '$1' + '</a>')
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
  },
  mounted () {
    this.navigator.language = navigator.language
    this.updateTime()
    this.getNews()
    this.GetByTeam()
    var vue = this
    var query = 'landscape'
    if (this.$store.state.user) {
      if (this.$store.state.user.local) {
        query = this.$store.state.user.local.homeTheme
      }
      AccountServices.GetMSG(this.$store.state.user.local.mail).then((response) => {
        vue.messages = response.data.msgs
        vue.msgNbr = 0
        vue.messages.forEach(function (element) {
          if (element.asread === false) {
            vue.msgNbr += 1
          }
        })
      })
    }
    unsplash.photos.getRandomPhoto({width: 2560, height: 1380, query: query}).then((response) => {
      response.json().then((lots) => {
        this.image = lots.urls.custom
      })
    })
    this.updateTime()
    // window.setInterval(() => {
    //   this.updateTime()
    // }, 500)
    window.setInterval(() => {
      if (this.$store.state.user) {
        if (this.$store.state.user.local) {
          query = this.$store.state.user.local.homeTheme
        }
        AccountServices.GetMSG(this.$store.state.user.local.mail).then((response) => {
          vue.messages = response.data.msgs
          vue.msgNbr = 0
          vue.messages.forEach(function (element) {
            if (element.asread === false) {
              vue.msgNbr += 1
            }
          })
        })
      }
      if (query === 'city' && vue.$store.state.user.local) {
        if (vue.$store.state.user.local.homeTheme !== 'city') {
          query = this.$store.state.user.local.homeTheme
          unsplash.photos.getRandomPhoto({width: 2560, height: 1380, query: query}).then((response) => {
            response.json().then((lots) => {
              this.image = lots.urls.custom
            })
          })
        }
      }
    }, 3000)
  }
}
</script>

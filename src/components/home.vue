<template>
  <div style="position: relative; width: 100%; height: 100%; font-family: Roboto;">
    <img :src="'/static/Wallpaper 10.jpg'" style="z-index: 0; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%;" />
    <img :src="image" style="z-index: 1; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%;" />
    <div style="position: fixed; left: 40%; top: 43%; z-index: 2; cursor: pointer;">
      <a href="#" class="dropdown-toggle waves-effect waves-button waves-classic" data-toggle="dropdown"><v-icon width="57px" style="margin: 20px; padding: 10px; background-color: rgba(250, 250, 250, 1); border-radius: 20px;">email</v-icon></a>
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
      <span @click="$router.push('/profil')" style="color: black; background-color: rgba(250, 250, 250, 1); padding: 20px; padding-left: 0px; border-radius: 20px;">
        <v-avatar size="57px" style="margin: 0; padding: 0; margin-right: 10px; margin-left: -10px;" tile>
          <img style="border-radius: 27px;" :src="$store.state.user.local.picture" alt="Profil">
        </v-avatar>{{ $store.state.user.local.username }}
      </span>
    </div>
    <v-icon @click="$router.push('/')" class="buttonp" size="50">home</v-icon>
    <div style="position: fixed; top: 0px; right: 0px; width: 400px; padding: 25px; z-index: 2;">
        <div v-if="TwitNews[0]" class="socialp">
            <div style="margin: 15px; position: relative;" class="panel-body"  @click="showTwit = true;">
                <img src="/static/twitter.png" style="position: absolute; right: 5px; top: 0px; width: 30px; opacity: 0.8;" />
                <div><span style="text-align: left; display: inline-block; font-size: 1.7em; word-wrap: break-word; width: 100%;" v-html="(TwitNews[0].match(/.{0,50}/g))[0] + ' ...'"></span></div>
            </div>
        </div>
          <a v-for="news in allNews" :key="news._id" @click="$router.push(news.link)" v-if="news.department === 'Annonce'">
            <div class="socialp" style="padding: 20px;">
              <img v-if="news.title === 'Résumé Live Shadow' || news.title === 'Shadow Live Summary'" src="https://icon-icons.com/icons2/56/PNG/512/rafagayoutube_11279.png" style="float: right; width: 40px; margin-right: 15px;" />
              <v-card-text class="px-0" style="font-size: 1.3em;"><strong>{{ news.title }} :</strong> {{ news.text }}</v-card-text>
            </div><br/>
          </a>
    </div>
    <v-dialog style="z-index:25;" v-model="DiscNews.msg1.show" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
        <v-card-title style="color: blue;">{{DiscNews.msg1.name}}</v-card-title>
        <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="DiscNews.msg1.text"></p>
      </v-card>
    </v-dialog>
    <v-dialog style="z-index:25;" v-model="showTwit" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,0.95); text-align: center;">
        <p style="font-size: 1.5em; text-align: left; padding: 15px;" v-html="TwitNews[0]"></p>
      </v-card>
    </v-dialog>
    <div style="z-index: 2;" class="clock">
      <p class="date">{{ date }}</p>
      <p class="time">{{ time }}</p>
    </div>
  </div>
</template>
<style scoped>
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
  left: 15%;
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
</style>
<script>
import News from '@/services/NewsService'
import Unsplash from 'unsplash-js'
import AccountServices from '@/services/AccountService'

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
// var timerID = setInterval(this.updateTime(), 1000)

const unsplash = new Unsplash({
  applicationId: '25fbeb2d337432387b3d4d69dbdbcc5e56410a5df9b6f017a0be08495462c84a',
  secret: '375226c605916b148c1b83c61474fca95ca5d1078447195f709f9e5280773715',
  callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
})

export default {
  data: () => ({
    image: '',
    time: '',
    allNews: [],
    TwitNews: [],
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
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
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
    async getNews () {
      const response = await News.fetchNews()
      if (response.data) {
        if (response.data.news) {
          this.allNews = response.data.news
        }
      }
      console.log(navigator.language)
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
  },
  mounted () {
    this.updateTime()
    this.getNews()
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
    window.setInterval(() => {
      this.updateTime()
    }, 500)
    window.setInterval(() => {
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
    }, 1000)
  }
}
</script>

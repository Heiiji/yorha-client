<style scoped type="text/css">
#main-wrapper {
  display: grid;
  grid-template-columns: auto 250px 550px 250px auto;
  grid-gap: 20px;
  width: calc(100% - 90px);
}
.conv {
  grid-column: 2;
  background-color: none;
  text-align: center;
  display: grid;
  grid-template-rows: 52px min-content min-content auto;
  grid-gap: 20px;
  border-radius: 12px;
}
.canal {
  width: 550px;
  max-width: 550px !important;
  grid-column: 3;
  display: grid;
  grid-template-rows: 52px min-content auto;
  grid-gap: 20px;
  border-radius: 12px;
}
.dep-title {
  grid-row: 1;
  padding: 14px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  text-align: center;
  border-radius: 12px;
}
.post {
  grid-row: 2;
  background-color: white;
  padding: 16px;
  padding-bottom: 10px;
  display: grid;
  grid-gap: 6px;
  grid-template-rows: auto 36px;
  grid-template-columns: auto auto 88px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  border-radius: 12px;
}
.conv-title {
  grid-row: 1;
  padding: 14px;
  font-size: 16px;
  color: white;
  background-color: rgb(33, 110, 210);
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  border-radius: 12px;
}
.profile-timeline {
  grid-row: 3;
}
.conv-container {
  grid-row: 2;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  border-radius: 12px;
}
.conv-container-team {
  grid-row: 3;
  display: block;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  border-radius: 12px;
}
.categori {
  padding: 14px;
  text-align: left;
  background-color: white;
  width: 250px;
  border-radius: 12px;
}
.categori:hover {
  background-color: rgba(150, 150 ,150, 0.3);
  cursor: pointer;
}
.form-control {
  grid-row: 1;
  grid-column: 1/4;
}
.post-options {
  margin: 0px;
  grid-row: 2;
  grid-column: 3;
}
.post-options button {
  margin: 0px;
}
.post-options a:hover {
  background-color: rgba(150, 150 ,150, 0.3);
  color: black;
}
.panel-body {
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  display: grid;
  grid-template-rows: 40px auto auto;
  grid-template-columns: 40px auto auto 40px;
}
.timeline-item {
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  border-radius: 12px;
}
.timeline-item-header {
  grid-row: 1;
  grid-column: 1;
}
.timeline-item-header-text {
  padding-left: 16px;
  padding-right: 16px;
  grid-row: 1;
  grid-column: 2/5;
  overflow: hidden;
}
.timeline-item-header-text h3 {
  font-weight: 800px !important;
  margin-bottom: 0px !important;
}
.timeline-item-post {
  grid-row: 2;;
  grid-column: 1/5;
  border-bottom: 1px solid rgba(0,0,0,.08);
}
.timeline-comment {
  padding-top: 6px;
  grid-row: 3;
  grid-column: 2/4;
  border: none;
}
.timeline-comment-header {
  margin-top: 10px;
}
.timeline-comment-header img {
  margin-right: 0px !important;
}
.timeline-comment-header-container {
  height: 100%;
  max-width: calc(100% - 40px);
  border-radius: 15px;
  margin-left: 10px;
  background-color: rgba(0,0,0,.08);
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  display: inline-block;
  word-wrap: break-word;
}
.timeline-comment-header-container-owner {
  display: inline-block;
  width: 100%;
}
.timeline-comment-header-container-owner p {
  display: inline-block;
  font-weight: 400;
  color: #2196f3;
  word-wrap: break-word;
  word-break: break-all;
}
.timeline-comment-reply {
  display: inline-block;
  width: calc(100% - 28px);
  padding-left: 40px;
  height: 48px;
}
.input-group {
  height: 40px;
}
.timeline-comment-replybtn {
  display: inline-block;
  width: 24px;
}
@media (max-width:920px) {
  .timeline-item-header-text {
    grid-column: 2/5;
    overflow: hidden;
    line-height: 20px;
    padding-right: 2px;
  }
  .timeline-comment {
    grid-column: 1/5;
  }
  .conv  {
    grid-column: 3;
  }
  .categori {
    width: 300px;
  }
  .canal {
    width: 300px;
    max-width: 300px !important;
  }
  #main-wrapper {
    grid-gap: 0px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: auto auto 300px auto auto;
  }
}
@media (max-width:390px) {
  .timeline-item-header-text {
    grid-column: 2/5;
    overflow: hidden;
    line-height: 20px;
    padding-right: 2px;
  }
  .timeline-comment {
    grid-column: 1/5;
  }
  .conv  {
    grid-column: 3;
  }
  .categori {
    width: 250px;
  }
  .canal {
    width: 250px;
    max-width: 250px !important;
  }
  #main-wrapper {
    grid-gap: 0px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: auto auto 250px auto auto;
  }
}
</style>
<template>
  <div>
    <div v-if="user.local" style="padding-top: 0px; position: relative;">
      <div id="main-wrapper">
        <div class="conv">
          <div class="conv-title">
            <h3>Channels</h3>
          </div>
          <div class="conv-container">
            <div @click="activeTeam = 'General'" class="categori waves-effect waves-button waves-classic">GENERAL</div>
            <div @click="activeTeam = 'Whatever'" class="categori waves-effect waves-button waves-classic">WHATEVER</div>
            <div @click="activeTeam = $store.state.user.local.work" class="categori waves-effect waves-button waves-classic">{{ $store.state.user.local.work.toUpperCase() }}</div>
          </div>
          <div class="conv-container-team">
            <div v-for="(elem, index) in Teams" :key="index" @click="activeTeam = elem.name" class="categori waves-effect waves-button waves-classic">{{ elem.name }}</div>
          </div>
        </div>
        <div class="canal">
          <div class="dep-title">
            <h3>{{activeTeam}}</h3>
          </div>
          <div class="post">
            <textarea class="form-control" placeholder="Post" v-model="News.text" rows="2=4"></textarea>
            <div class="post-options">
              <v-btn class="btn btn--flat blue--text text--darken-1" @click="News.department = activeTeam; postNews();">Post</v-btn>
            </div>
          </div>
          <div class="profile-timeline">
            <ul class="list-unstyled">
              <li v-for="item in allNews" v-if="item.department === activeTeam" :key="item._id" class="timeline-item" style="display: block;">

                <div class="panel-body">
                  <div class="timeline-item-header"><img :src="item.senderPic" alt=""></div>
                  <div class="timeline-item-header-text"><h3 style="color: rgb(33, 110, 210);">{{ item.sender }}</h3><small> {{ item.date.toLocaleDateString(navigator.language, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small></div>
                  <div class="timeline-item-post">
                    <p v-html="item.text"></p>
                  </div>
                  <div class="timeline-comment">
                    <div class="timeline-comment-header" v-for="comm in item.reply" :key="comm._id">
                      <img :src="comm.senderPic" alt="">
                      <div class="timeline-comment-header-container">
                        <div class="timeline-comment-header-container-owner"><p>{{comm.sender}} :&emsp;<span style="color: black;">{{comm.text}}</span></p></div><small style="width: 100%; margin-top: -10px;">{{ comm.date.toLocaleDateString(navigator.language, {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }}</small>
                      </div>
                    </div>
                    <div class="timeline-comment-reply">
                      <v-text-field name="reply" label="Reply" v-model="item.message" single-line></v-text-field>
                    </div>
                    <div class="timeline-comment-replybtn">
                      <a @click="postReply(item._id, item.message);">
                        <i class="material-icons" style="color: rgba(0,0,0,.65);">check</i>
                      </a>
                    </div>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'
import News from '@/services/NewsService'
import Api from '@/services/Api'

export default {
  name: 'Dashboard',
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
      activeTeam: 'General',
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
          vue.$store.state.user = client
          vue.$store.state.user.local = response.data
          vue.GetByTeam()
        })
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
    GetByTeam () {
      var vue = this
      vue.Teams = []
      vue.$store.state.user.local.teams.forEach((elem) => {
        AccountService.FindByTeam(elem).then((response) => {
          vue.Teams.push({name: elem, users: response.data.users})
        }).then(() => {
          vue.selectedTeam = vue.Teams[0]
        })
      })
    },
    async postNews () {
      this.News.sender = this.$store.state.user.local.username
      this.News.senderPic = this.$store.state.user.local.picture
      var New = JSON.parse(JSON.stringify(this.News))
      this.News.text = ''
      console.log(New)
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

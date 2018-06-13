<style scoped>
.conteneur {
  position: fixed;
  padding-top: 60px;
  padding-left: 175px;
  top: 0px;
  left: 0px;
  width: 100%;
  margin: 0px;
  height: 100%;
}
h3 {
  margin: 0px;
}
.title {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  background-color: rgb(33, 110, 210);
  padding: 20px;
  color: white;
}
.userList {
  position: relative;
  width: 20%;
  height: 100%;
  margin-left: -16px;
  display: inline-block;
  border-right-color: black;
  border-right-width: 1px;
  border-right-style: solid;
  background-color: rgba(240, 240, 240, 0.9);
  margin: 0px;
  margin-left: -15px;
}
.chatPlace {
  position: relative;
  display: inline-block;
  width: 81.2%;
  height: 100%;
  margin: 0px;
  background-color: rgba(210, 210, 210, 1);
}
.flex::-webkit-scrollbar {
  display: none;
}
.list__tile--avatar {
  height: auto !important;
}
.chatPlace {
  padding-bottom: 100px;
}
.chatArea {
  overflow-y: scroll;
  height: 100%;
  vertical-align: top;
}
.Message {
  height: 100%;
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 0px;
}
.Message p {
  background-color: white;
  margin: 0px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
  border-radius: 2px 10px 10px 10px;
  display: inline-block;
  margin-left: 3%;
}
.MessageReverse {
  height: 100%;
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 0px;
  text-align: right;
}
.MessageReverse p {
  background-color: rgb(240, 240, 240);
  margin: 0px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
  border-radius: 10px 2px 10px 10px;
  display: inline-block;
  margin-right: 3%;
}
.post {
  position: absolute;
  text-align: center;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
}
.person {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(34, 35, 38, 0.1);
}
.person:hover {
  background-color: rgba(180, 180, 180, 0.5);
}
</style>
<template>
  <div>
    <v-layout class="conteneur" row>
      <div class="userList">
        <div class="title">
          <h3>Your conversations</h3>
        </div>
        <v-list-tile class="person" avatar v-for="(chat, index) in conv" :key="chat[0]._id + index" v-if="chat[0].target !== chat[0].senderMail" @click="memoire = index; displayMsg = chat; target = ((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].senderMail); chat[0].asread = true; MakeIsRead();">
          <v-list-tile-content>
            <v-list-tile-title v-html="((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].sender)"></v-list-tile-title>
          </v-list-tile-content>
          <v-icon style="text-decoration: none;" :color="chat[0].asread ? 'grey' : 'teal'">chat_bubble</v-icon>
        </v-list-tile>
      </div>
      <div class="chatPlace">
        <div v-if="memoire >= 0" id="ChatArea" class="chatArea" v-chat-scroll>
          <div style="padding-bottom: 10px; height: auto;" v-for="(item, index) in displayMsg" :key="item._id + index">
            <div v-if="item.target === $store.state.user.local.mail" class="Message">
              <span v-if="index > 0">
                <span v-if="displayMsg[index - 1].sender !== item.sender">
                  <img style="float: left; width: 40px; border-radius: 20px; margin-right: 20px;" :src="item.senderPic">
                  <h3 style="padding-top: 14px; margin-top: 0px; padding-left: 10px; margin-bottom: 10px;">{{ item.sender }}</h3>
                </span>
              </span>
              <span v-else>
                <img style="float: left; width: 40px; border-radius: 20px; margin-right: 20px;" :src="item.senderPic">
                <h3 style="padding-top: 14px; margin-top: 0px; padding-left: 10px; margin-bottom: 10px;">{{ item.sender }}</h3>
              </span>
              <p v-html="item.text"></p>
            </div>
              <div v-else class="MessageReverse">
                <span v-if="index > 0">
                  <span v-if="displayMsg[index - 1].sender !== item.sender">
                    <img style="float: right; width: 40px; border-radius: 20px; margin-left: 20px;" :src="item.senderPic">
                    <h3 style="padding-top: 14px; margin-top: 0px; padding-right: 10px; text-align: right; margin-bottom: 10px;">{{ item.sender }}</h3>
                  </span>
                </span>
                <span v-else>
                  <img style="float: right; width: 40px; border-radius: 20px; margin-left: 20px;" :src="item.senderPic">
                  <h3 style="padding-top: 14px; margin-top: 0px; padding-right: 10px; text-align: right; margin-bottom: 10px;">{{ item.sender }}</h3>
                </span>
                <p v-html="item.text"></p>
              </div>
          </div>
        </div>
            <div v-if="memoire >= 0" class="post">
              <form v-on:submit.prevent="SendMSG()">
                <input style="width: 90%; border-radius: 20px; display: inline-block;" class="form-control" type="text" placeholder="Message" v-model="msg.text"/>
              </form>
              <div class="post-options">
                <a href="#"><i class="icon-camera"></i></a>
                <a href="#"><i class="icon-link"></i></a>
              </div>
            </div>
      </div>
  </v-layout>
  </div>
</template>
<script>
import AccountServices from '@/services/AccountService'

export default {
  name: 'chat',
  data () {
    return {
      messages: [],
      displayMsg: [],
      memoire: -1,
      conv: [],
      repere: '',
      target: '',
      msg: {
        target: '',
        text: '',
        sender: '',
        senderPic: '',
        senderMail: '',
        token: ''
      }
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.getConv()
    window.setInterval(() => {
      this.getConv()
    }, 5000)
  },
  methods: {
    MakeIsRead () {
      AccountServices.MakeAsRead({target: this.target})
    },
    getConv () {
      var nbr = 0
      var vue = this
      var conv = []
      AccountServices.GetMSG(this.$store.state.user.local.mail).then((response) => {
        response.data.msgs.sort(function (a, b) {
          if (a.senderMail > b.senderMail) {
            return 1
          } else {
            return -1
          }
        })
        vue.messages = response.data.msgs
        AccountServices.getMyMsg(vue.$store.state.user.local.mail).then((value) => {
          var rep = value.data.msgs
          rep.sort(function (a, b) {
            if (a.target > b.target) {
              return 1
            } else {
              return -1
            }
          })
          for (let i = 0; i < 100; i++) {
            if (vue.messages[i]) {
              if (conv[nbr]) {
                if (conv[nbr][0].senderMail === vue.messages[i].senderMail) {
                  conv[nbr].splice(1, 0, vue.messages[i])
                } else {
                  nbr += 1
                  conv[nbr] = []
                  conv[nbr].splice(0, 0, vue.messages[i])
                  for (let j = 0; j < 100; j++) {
                    if (conv[nbr] && rep[j]) {
                      if (conv[nbr][0].senderMail === rep[j].target) {
                        conv[nbr].splice(1, 0, rep[j])
                      }
                    }
                  }
                }
              } else {
                conv[nbr] = []
                conv[nbr].splice(0, 0, vue.messages[i])
                for (let j = 0; j < 100; j++) {
                  if (conv[nbr] && rep[j]) {
                    if (conv[nbr][0].senderMail === rep[j].target) {
                      conv[nbr].splice(1, 0, rep[j])
                    }
                  }
                }
              }
            }
          }
          for (let i = 0; i < conv.length; i++) {
            conv[i].sort(function (a, b) {
              return a.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7') - b.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7')
            })
          }
          vue.conv = JSON.parse(JSON.stringify(conv))
          vue.conv.forEach((elem) => {
            elem.forEach((msg) => {
              msg.text = msg.text.replace(/\r?\n/g, '<br />').replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;" target="_blank">http' + '$1' + '</a>')
            })
          })
          if (vue.memoire >= 0) {
            vue.displayMsg = vue.conv[vue.memoire]
          } else {
            vue.messages = ''
          }
        })
      })
    },
    SendMSG () {
      var vue = this
      this.msg.sender = this.$store.state.user.local.username
      this.msg.senderPic = this.$store.state.user.local.picture
      this.msg.target = this.target
      this.msg.senderMail = this.$store.state.user.local.mail
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        vue.msg.token = idToken
        AccountServices.SendMSG(vue.msg).then((response) => {
          vue.msg.text = ''
          vue.getConv()
        })
      })
    }
  }
}
</script>

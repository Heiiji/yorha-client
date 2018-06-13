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
.title {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
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
  padding-bottom: 0px;
}
.Message p {
  background-color: white;
  margin: 0px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 2px 10px 10px 10px;
  display: inline-block;
  margin-left: 50px;
}
.MessageReverse {
  height: 100%;
  padding: 20px;
  padding-bottom: 0px;
  text-align: right;
}
.MessageReverse p {
  background-color: rgb(240, 240, 240);
  margin: 0px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px 2px 10px 10px;
  display: inline-block;
  margin-right: 50px;
}
.post {
  position: absolute;
  text-align: center;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
}
</style>
<template>
  <div>
    <v-layout class="conteneur" row>
      <div class="userList">
        <div class="title">
          <h3>Your conversations</h3>
        </div>
        <v-list-tile style="border-top-width: 1px; border-top-style: solid; border-top-color: rgba(34, 35, 38, 0.2);" avatar v-for="(chat, index) in conv" :key="chat[0]._id + index" v-if="chat[0].target !== chat[0].senderMail" @click="memoire = index; displayMsg = chat; target = ((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].senderMail); chat[0].asread = true; MakeIsRead();">
          <v-list-tile-content>
            <v-list-tile-title v-html="((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].sender)"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon :color="chat[0].asread ? 'grey' : 'teal'">chat_bubble</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </div>
      <div class="chatPlace">
        <div v-if="memoire >= 0" id="ChatArea" class="chatArea" v-chat-scroll>
          <div style="padding-bottom: 10px; height: auto;" v-for="(item, index) in displayMsg" :key="item._id + index">
            <div v-if="item.target === $store.state.user.local.mail" class="Message">
              <img style="float: left; width: 40px; border-radius: 20px; margin-right: 20px;" :src="item.senderPic">
              <h3 style="padding-top: 14px; margin-top: 0px; padding-left: 10px;">{{ item.sender }}</h3>
              <p v-html="item.text"></p>
            </div>
              <div v-else class="MessageReverse">
                <img style="float: right; width: 40px; border-radius: 20px; margin-left: 20px;" :src="item.senderPic">
                <h3 style="padding-top: 14px; margin-top: 0px; padding-right: 10px; text-align: right">{{ item.sender }}</h3>
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
        <!-- <v-flex style="height: 100%; width: 100%; position: relative; overflow-y: scroll;">
          <v-card style="position: absolute; bottom: 0px; width: 100%;">
            <v-list style="height: auto;">
              <div style="padding-bottom: 10px; height: auto;" v-for="(item, index) in displayMsg" :key="item._id + index">
                <v-list-tile
                  avatar
                  ripple
                >
                  <v-list-tile-avatar>
                    <img :src="item.senderPic">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.sender"></v-list-tile-title>
                    <v-list-tile-sub-title style="line-break: normal;" v-html="item.text"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </div>
                  <div v-if="memoire >= 0" class="panel-body">
                    <div class="post">
                      <textarea class="form-control" placeholder="Message" v-model="msg.text" rows="4=6"></textarea>
                      <div class="post-options">
                        <a href="#"><i class="icon-camera"></i></a>
                        <a href="#"><i class="icon-link"></i></a>
                        <button class="btn btn-default pull-right" @click="SendMSG()">Send</button>
                      </div>
                    </div>
                  </div>
            </v-list>
          </v-card>
        </v-flex> -->
      </div>
    <!-- <v-flex xs12 sm4>
      <v-card style="height: 90%; padding-left: 15px;">
        <v-toolbar color="teal" dark>
          <v-toolbar-title class="text-xs-center">Your conversation</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile avatar v-for="(chat, index) in conv" :key="chat[0]._id + index" v-if="chat[0].target !== chat[0].senderMail" @click="memoire = index; displayMsg = chat; target = ((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].senderMail); chat[0].asread = true; MakeIsRead();">
            <v-list-tile-content>
              <v-list-tile-title v-html="((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].sender)"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon :color="chat[0].asread ? 'grey' : 'teal'">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex style="height: 1000px; position: relative; overflow-y: scroll;" xs12 sm10>
      <v-card style="position: absolute; bottom: 10%; width: 100%;">
        <v-list two-line>
          <div v-for="(item, index) in displayMsg" :key="item._id + index">
            <v-list-tile
              avatar
              ripple
            >
              <v-list-tile-avatar>
                <img :src="item.senderPic">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.sender"></v-list-tile-title>
                <v-list-tile-sub-title style="line-break: normal;" v-html="item.text.replace(/\r?\n/g, '<br />')"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
            <div v-if="memoire >= 0" class="panel panel-white">
              <div class="panel-body">
                <div class="post">
                  <textarea class="form-control" placeholder="Message" v-model="msg.text" rows="4=6"></textarea>
                  <div class="post-options">
                    <a href="#"><i class="icon-camera"></i></a>
                    <a href="#"><i class="icon-link"></i></a>
                    <button class="btn btn-default pull-right" @click="SendMSG()">Send</button>
                  </div>
                </div>
              </div>
            </div>
        </v-list>
      </v-card>
    </v-flex> -->
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

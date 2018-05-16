<template>
  <div>
    <v-layout row>
    <v-flex xs12 sm4>
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
    </v-flex>
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

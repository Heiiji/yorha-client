<template>
  <div>
    <v-layout row>
    <v-flex xs12 sm4>
      <v-card style="height: 90%;">
        <v-toolbar color="teal" dark>
          <v-toolbar-title class="text-xs-center">Your conversation <button class="btn btn-default pull-right" style="opacity: 0.8; position: absolute; right: 10px; top: 15%; background-color: white; color: black;" @click="getConv()">Refresh</button></v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile avatar v-for="(chat, index) in conv" :key="chat[0]._id" @click="memoire = index; messages = chat; target = ((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].senderMail); chat[0].asread = true; MakeIsRead();">
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
    <v-flex style="height: 1000px; position: relative;" xs12 sm10>
      <v-card style="position: absolute; bottom: 10%; width: 100%;">
        <v-list two-line>
          <template v-for="(item) in messages">
            <v-list-tile
              avatar
              ripple
              :key="item._id"
            >
              <v-list-tile-avatar>
                <img :src="item.senderPic">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.sender"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.text.replace(/\r?\n/g, '<br />')"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
            <div class="panel panel-white">
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
      memoire: -1,
      conv: [],
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
  },
  methods: {
    MakeIsRead () {
      AccountServices.MakeAsRead({target: this.target})
    },
    getConv () {
      var nbr = 0
      var nbrd = 0
      var vue = this
      AccountServices.GetMSG(this.$store.state.user.local.mail).then((response) => {
        vue.messages = response.data.msgs
        vue.messages.sort(function (a, b) {
          return a.sender - b.sender
        })
        vue.conv = []
        vue.messages.forEach(function (element) {
          if (vue.conv[nbr]) {
            if (vue.conv[nbr][0].sender === element.sender) {
              vue.conv[nbr].splice(0, 0, element)
            } else {
              nbr += 1
              vue.conv[nbr] = []
              vue.conv[nbr].splice(0, 0, element)
            }
          } else {
            vue.conv[nbr] = []
            vue.conv[nbr].splice(0, 0, element)
          }
        })
        nbr = 0
        vue.conv.forEach(function (element) {
          AccountServices.getMyMsg(vue.$store.state.user.local.mail).then((value) => {
            value.data.msgs.forEach(function (tar) {
              var mail = ''
              if (element[0].senderMail === vue.$store.state.user.local.mail) {
                mail = element[0].target
              } else {
                mail = element[0].senderMail
              }
              if (tar.target !== mail) {
                delete value.data.msgs[nbr]
                nbrd += 1
              } else {
                tar._id += tar._id
              }
              nbr += 1
            })
            value.data.msgs.sort(function (a, b) {
              if (!a) {
                return (-1)
              }
              if (!b) {
                return (1)
              }
              return a.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7') - b.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7')
            })
            value.data.msgs.length = value.data.msgs.length - nbrd
            Array.prototype.push.apply(element, value.data.msgs)
            element.sort(function (a, b) {
              if (!a) {
                return (-1)
              }
              if (!b) {
                return (1)
              }
              return a.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7') - b.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7')
            })
          })
        })
        if (vue.memoire >= 0) {
          vue.messages = vue.conv[vue.memoire]
        } else {
          vue.messages = null
        }
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

<style scoped>
.conteneur {
  position: fixed;
  padding-top: 60px;
  padding-left: 65px;
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
  padding-top: 20px;
  padding-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
}
.userList {
  position: relative;
  width: 20%;
  height: 100%;
  margin-left: -16px;
  display: inline-block;
  border-right-color: rgb(200, 200, 200);
  border-right-width: 1px;
  border-right-style: solid;
  border-left-color: rgb(200, 200, 200);
  border-left-width: 1px;
  border-left-style: solid;
  background-color: rgba(255, 255, 255, 1);
  margin: 0px;
  margin-left: -13px;
}
.chatPlace {
  position: relative;
  display: inline-block;
  width: calc(80% + 15px);
  height: 100%;
  margin: 0px;
  background-color: rgba(255, 255, 255, 1);
  padding-bottom: 100px;
}
.flex::-webkit-scrollbar {
  display: none;
}
.list__tile--avatar {
  height: auto !important;
}
.chatArea {
  overflow-y: scroll;
  height: calc(100% + 40px);
  vertical-align: top;
  padding-top: 12px;
  padding-bottom: 70px;
}
.Message {
  height: 100%;
  padding: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.Message p {
  background-color: rgb(210, 210, 210);
  margin: 0px;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 19px 19px 19px 19px;
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  max-width: calc(99% - 44px);
  text-align: left;
}
.MessageReverse {
  height: 100%;
  padding: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: right;
}
.MessageReverse p {
  background-color: rgb(255, 115, 11);
  margin: 0px;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 0px;
  border-radius: 19px 19px 19px 19px;
  display: inline-block;
  margin-right: 10px;
  color: white;
  font-size: 14px;
  max-width: calc(99% - 44px);
  text-align: left;
}
.post {
  position: absolute;
  display: flex;
  text-align: center;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  background: linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(255,255,255,1) 50%);
}
.post form {
  width: 100%;
  text-align: left;
  margin-top: 15px;
}
.person {
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}
.person_active {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(34, 35, 38, 0.1);
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  background-color: rgb(200, 200, 200);
}
.person:hover {
  background-color: rgba(180, 180, 180, 0.5);
  cursor: pointer;
}
.personicon {
  display: block;
  margin-left: 10px;
  width: 40px;
  height: 40px;
}
.personicon img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.personname {
  display: block;
  height: 40px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
.personstatus {
  padding-top: 8px;
  padding-right: 8px;
}
.chatName {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  padding: 16px;
  color: rgb(50, 50, 50);
  border-bottom-style: solid;
  border-bottom-color: rgb(200, 200, 200);
  border-bottom-width: 1px;
}
.chatArea::-webkit-scrollbar {
  width: 0 !important;
}
@media (max-width: 849px) {
  .title {
    color: rgb(33, 110, 210);
  }
  .personicon {
    margin-left: calc(50% - 20px);
  }
  .personname {
    display: none;
  }
  .personstatus{
    display: none;
  }
  .conteneur {
    padding-left: 0px;
  }
  .userList {
    margin-left: 0px;
  }
  .chatPlace {
    width: 80%;
  }
}
.post-container {
  width: 100%;
  display: grid;
  margin-left: 56px;
  margin-right: 56px;
  grid-template-columns: auto 80px 20px 40px;
  background-color: #eceff1;
  height: 40px;
  border-radius: 20px;
  margin-top: 12px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
}
.post-input {
  grid-column: 1;
  padding-left: 12px;
  padding-right: 12px;
}
.post-input form {
  margin-top: 0px !important;
  padding-top: 4px;
}
.post-options {
  grid-column: 2;
  margin: 0px !important;
}
.post-send {
  grid-column: 4;
}
.form-control, .form-control:focus {
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
}
.bg_dark_normal, .bg_dark_color {
  background-color: #3c4043 !important;
  color: white !important;
  border-left-color: #3c4043 !important;
  border-right-color: #3c4043 !important;
}
.bg-title_dark_normal {
  background-color: #333333 !important;
  color: white !important;
  border: none;
}
.bg-title_dark_color {
  background-color: rgb(255, 115, 11) !important;
  color: white !important;
  border: none;
}
.bg-title_clair_normal {
  background-color: white !important;
  color: black !important;
}
.btn-add_clair_normal, .btn-add_clair_color {
  background-color: white !important;
  color: black !important;
}
.btn-add_dark_normal, .btn-add_dark_color {
  background-color: #5f6368 !important;
}
.chat-area_dark_normal, .chat-area_dark_color {
  background-color: #202124 !important;
}
.post_dark_normal, .post_dark_color {
  background: linear-gradient(to bottom, rgba(32,33,36,0) 20%, rgba(32,33,36,1) 50%);
}
</style>
<template>
  <div>
    <v-layout class="conteneur" row>
      <div class="userList" :class="'bg_' + $store.state.user.local.theme">
        <div class="title" :class="'bg_' + $store.state.user.local.theme">
          <h3>Conversations</h3>
        </div>
        <div class="person" avatar>
          <v-btn @click="nouvConv = true" :class="'btn-add_' + $store.state.user.local.theme" fab small dark>
            <v-icon>add</v-icon>
          </v-btn>
          <div class="personname" style="width: calc(100% - 60px);">
            <div @click="nouvConv = true" style="font-size: 15px; padding: 10px; padding-top: 14px;">
              Nouvelle conversation
            </div>
          </div>
        </div>
        <div class="person" avatar v-for="(chat, index) in conv" :key="chat[0]._id + index" v-if="chat[0].target !== chat[0].senderMail" @click="memoire = index; displayMsg = chat; target = ((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].senderMail); chat[0].asread = true; MakeIsRead();">
          <div class="personicon">
            <img :src="((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].targetPic : chat[0].senderPic)"/>
          </div>
          <div class="personname">
            <div style="font-size: 15px; padding: 10px;" v-html="((chat[0].senderMail === $store.state.user.local.mail) ? chat[0].target : chat[0].sender)">
            </div>
          </div>
          <div class="personstatus">
            <v-icon style="text-decoration: none;" :color="chat[0].asread ? 'grey' : 'teal'">fiber_manual_record</v-icon>
          </div>
        </div>
      </div>
      <div class="chatPlace" :class="'chat-area_' + $store.state.user.local.theme">
        <div class="chatName" :class="'bg-title_' + $store.state.user.local.theme">
          <h3 v-if="memoire >= 0">{{conv[memoire][0].sender}}</h3>
          <h3 v-else>Messages</h3>
        </div>
        <div v-if="memoire >= 0" id="ChatArea" class="chatArea" v-chat-scroll :class="'chat-area_' + $store.state.user.local.theme">
          <div style="padding-bottom: 4px; height: auto;" v-for="(item, index) in displayMsg" :key="item._id + index">
            <div v-if="item.target === $store.state.user.local.mail" class="Message">
              <div v-if="index > 0">
                <div v-if="displayMsg[index - 1].sender !== item.sender">
                  <img style="float: left; width: 30px; border-radius: 15px; margin-top: 4px;" :src="item.senderPic">
                  <p v-html="item.text"></p>
                </div>
                <div v-else style="margin-left: 30px;"><p v-html="item.text"></p></div>
              </div>
              <div v-else>
                <img style="float: left; width: 30px; border-radius: 15px; margin-top: 4px;" :src="item.senderPic">
                <p v-html="item.text"></p>
              </div>
            </div>
              <div v-else class="MessageReverse">
                <div v-if="index > 0">
                  <div v-if="displayMsg[index - 1].sender !== item.sender">
                    <img style="float: right; width: 30px; border-radius: 15px; margin-top: 4px;" :src="item.senderPic">
                    <p v-html="item.text"></p>
                  </div>
                  <div v-else style="margin-right: 30px;"><p v-html="item.text"></p></div>
                </div>
                <div v-else>
                  <img style="float: right; width: 30px; border-radius: 15px; margin-top: 4px;" :src="item.senderPic">
                  <p v-html="item.text"></p>
                </div>
              </div>
          </div>
        </div>
            <div v-if="memoire >= 0" class="post" :class="'post_' + $store.state.user.local.theme">
              <div class="post-container">
                <div class="post-input">
                  <form v-on:submit.prevent="SendMSG()" id="sendmsg" style="width: 100%;">
                    <input style="width: calc(100% - 20px); border-radius: 20px; display: inline-block;" class="form-control" type="text" placeholder="Message" v-model="msg.text"/>
                  </form>
                </div>
                <div class="post-options" style="display: grid; grid-template-columns: 40px 40px;">
                  <i class="material-icons" style="grid-column: 1; display: inline-block; padding: 8px; color: rgba(0,0,0,.65);">photo</i>
                  <i class="material-icons" style="grid-column: 2; display: inline-block; padding: 8px; color: rgba(0,0,0,.65);">attachment</i>
                </div>
                <div class="post-send">
                  <button type="submit" form="sendmsg" value="Submit" style="height: 24px; margin-top: 9px"><i class="material-icons" style="color: rgba(0,0,0,.65);">send</i></button>
                </div>
              </div>
            </div>
      </div>
  </v-layout>
    <v-dialog style="z-index:25; background-color: rgba(250,250,250,1);" v-model="nouvConv" scrollable max-width="800px">
      <v-card style="text-align: center;" dark="true" v-if="$store.state.user.local.theme === 'dark_normal' || $store.state.user.local.theme === 'dark_color'">
        <v-flex style="padding: 20px;" xs12>
          <v-select
            :items="usernames"
            v-model="target"
            label="target"
            autocomplete
            style="width: 100%;"
            dark="true"
          ></v-select>
          <v-text-field v-model="msg.text"
                        name="text"
                        label="text"
                        textarea
                        style="width: 100%; margin: 5px;"
          ></v-text-field>
        </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="nouvConv = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="SendMSG(); nouvConv = false;">Send</v-btn>
        </v-card-actions>
      </v-card>
      <v-card style="text-align: center;" v-if="$store.state.user.local.theme === 'clair_normal' || $store.state.user.local.theme === 'clair_color'">
        <v-flex style="padding: 20px;" xs12>
          <v-select
            :items="usernames"
            v-model="target"
            label="target"
            autocomplete
            style="width: 100%;"
          ></v-select>
          <v-text-field v-model="msg.text"
                        name="text"
                        label="text"
                        textarea
                        style="width: 100%; margin: 5px;"
          ></v-text-field>
        </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="nouvConv = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="SendMSG(); nouvConv = false;">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import AccountServices from '@/services/AccountService'

export default {
  name: 'chat',
  data: function () {
    return {
      messages: [],
      displayMsg: [],
      memoire: -1,
      conv: [],
      repere: '',
      nouvConv: false,
      target: '',
      selected: [],
      users: {},
      usernames: [],
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
    this.getUsers()
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
      var nbr2 = 0
      var vue = this
      let targ = -1
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
          let p1 = ''
          let p2 = ''
          for (let m = 0; m < 300; m++) {
            if (vue.messages[m]) {
              console.log(vue.messages[m].senderMail)
              if (conv[nbr]) {
                if (vue.messages[m].senderMail === p1) {
                  conv[nbr].splice(1, 0, vue.messages[m])
                } else {
                  nbr += 1
                }
              } else {
                conv[nbr] = []
                p1 = vue.messages[m].senderMail
                p2 = vue.messages[m].target
                conv[nbr].splice(1, 0, vue.messages[m])
              }
            }
          }
          let mem = 0
          let toggle = 0
          for (let m = 0; m < 300; m++) {
            mem = 0
            toggle = 0
            if (rep[m]) {
              if (conv[nbr2]) {
                if (conv[nbr2][0]) {
                  if (rep[m].target === conv[nbr2][0].senderMail || rep[m].target === conv[nbr2][0].target) {
                    while (rep[m] && (rep[m].target === conv[nbr2][0].senderMail || rep[m].target === conv[nbr2][0].target)) {
                      conv[nbr2].splice(1, 0, rep[m])
                      m += 1
                    }
                    m -= 1
                    nbr2 += 1
                  } else {
                    mem = nbr2
                    while (mem <= nbr && (rep[m].target !== conv[mem][0].senderMail || rep[m].target !== conv[mem][0].target)) {
                      mem += 1
                    }
                    console.log(mem)
                    if (mem > nbr2) {
                      console.log('kapue')
                      conv[mem] = []
                      p2 = rep[m].target
                      toggle = 0
                      while (rep[m]) {
                        if (rep[m].target === p2) {
                          conv[mem].splice(1, 0, rep[m])
                        } else {
                          if (toggle === 0) {
                            toggle = m
                          }
                        }
                        m += 1
                      }
                      if (toggle !== 0) {
                        m = toggle
                      }
                      m -= 1
                    } else {
                      console.log('tolyo')
                      toggle = 0
                      let tp = 0
                      while (rep[m]) {
                        tp = m
                        if (rep[m].target === conv[mem][0].senderMail || rep[m].target !== conv[mem][0].target) {
                          conv[mem].splice(1, 0, rep[m])
                        } else {
                          if (toggle === 0) {
                            toggle = m
                          }
                        }
                        m = tp + 1
                      }
                      if (toggle !== 0) {
                        m = toggle
                      }
                      m -= 1
                    }
                  }
                } else {
                  conv[nbr2] = []
                  p2 = rep[m].target
                  while (rep[m]) {
                    if (rep[m].target === p2) {
                      conv[nbr2].splice(1, 0, rep[m])
                    } else {
                      if (mem === 0) {
                        mem = m
                      }
                    }
                    m += 1
                  }
                  if (mem !== 0) {
                    m = mem
                  }
                  nbr2++
                  m -= 1
                }
              } else {
                conv[nbr2] = []
                p2 = rep[m].target
                while (rep[m]) {
                  if (rep[m].target === p2) {
                    conv[nbr2].splice(1, 0, rep[m])
                  } else {
                    if (mem === 0) {
                      mem = m
                    }
                  }
                  m += 1
                }
                if (mem !== 0) {
                  m = mem
                }
                m -= 1
                nbr2++
              }
            }
          }
          for (let i = 0; i < conv.length; i++) {
            conv[i].sort(function (a, b) {
              return a.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7') - b.date.replace(/^(....).(..).(..).(..).(..).(..).(...)./g, '$1$2$3$4$5$6$7')
            })
          }
          vue.conv = JSON.parse(JSON.stringify(conv))
          for (let i = 0; i < vue.conv.length; i++) {
            if (vue.$route.params.conv) {
              if (vue.$route.params.conv === vue.conv[i][0].senderMail || vue.$route.params.conv === vue.conv[i][0].target) {
                targ = i
              }
            }
            vue.conv[i].forEach((msg) => {
              msg.text = msg.text.replace(/\r?\n/g, '<br />').replace(/http([^ ]*)/g, '<a href="http' + '$1' + '" style="color: blue;" target="_blank">http' + '$1' + '</a>')
            })
          }
          if (vue.memoire >= 0) {
            vue.displayMsg = vue.conv[vue.memoire]
          } else {
            if (vue.$route.params.conv && targ >= 0) {
              vue.displayMsg = vue.conv[targ]
              vue.memoire = targ
              vue.target = ((vue.conv[targ][0].senderMail === vue.$store.state.user.local.mail) ? vue.conv[targ][0].target : vue.conv[targ][0].senderMail)
              vue.conv[targ][0].asread = true
            } else {
              vue.messages = ''
            }
          }
        })
      })
    },
    async getUsers (arg) {
      let vue = this
      const response = await AccountServices.FindUsers('all')
      response.data.users.forEach((el) => {
        vue.usernames.push(el.mail)
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

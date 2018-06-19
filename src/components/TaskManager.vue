<template>
  <div>
    <h2 style="text-align: center;">{{ $route.params.team }}</h2>
    <div class="container">
      <div class="right-container">
        <div class="gantt-selected-info">
          <div v-if="selectedTask">
            <h2>{{selectedTask.text}}</h2>
            <span><b>ID: </b>{{selectedTask.id}}</span><br/>
            <span><b>Progress: </b>{{selectedTask.progress|toPercent}}%</span><br/>
            <span><b>Start Date: </b>{{selectedTask.start_date|niceDate}}</span><br/>
            <span><b>End Date: </b>{{selectedTask.end_date|niceDate}}</span><br/>
          </div>
          <div v-else class="select-task-prompt">
            <h2>Click any task</h2>
          </div>
        </div>
        <ul class="gantt-messages">
          <li class="gantt-message" v-for="(message, index) in messages" :key="index">{{message}}</li>
        </ul>
      </div>
      <gantt class="left-container" :tasks="tasks" :instance="$route.params.team" @firebase="firebaseApp" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate" @task-selected="selectTask" ref="gant"></gantt>
    </div>
    <div class="cardDisplay">
      <div style="height: auto; background-color: rgba(230, 230, 230, 0.7);" class="card">
        <h2 style="background-color: rgba(230, 230, 230, 0.7);" class="elem">Task</h2>
        <h2 style="background-color: rgba(230, 230, 230, 0.7);" class="elem">Description</h2>
        <h2 style="background-color: rgba(230, 230, 230, 0.7);" class="elem">Begining</h2>
        <h2 style="background-color: rgba(230, 230, 230, 0.7);" class="elem">Duration</h2>
        <h2 style="background-color: rgba(230, 230, 230, 0.7);" class="elem">Assignement</h2>
      </div>
      <div class="card" v-for="(task, index) in dispCards" :key="index" @click="EditCard = task; selected = task.users; displayEditCard = true">
        <h3 class="elem">{{ task.title }}</h3>
        <p class="elem">{{ task.description }}</p>
        <p class="elem">{{ task.start_dateUse }}</p>
        <p class="elem">{{ task.duration }}</p>
        <p class="elem"><img v-for="(user, index) in task.users" :key="index" width="30px" style="border-radius: 15px;" :src="user.picture" /></p>
      </div>
    </div>
    <div v-if="$store.state.user.local.mail === settings.selected[0]" style="position: fixed !important; bottom: 10px; right: 70px">
      <v-btn
          color="blue"
          dark
          fab
          style="z-index: 5;"
          @click="ShowSet = true"
        >
        <v-icon>settings</v-icon>
      </v-btn>
    </div>
    <v-menu
        transition="slide-x-transition"
        bottom
        right
        style="position: fixed; bottom: 10px; right: 8px; background-color:  rgba(0, 0, 0, 0);"
      >
      <v-btn
          color="blue"
          dark
          fab
          slot="activator"
          style="z-index: 5;"
        >
        <v-icon>add</v-icon>
      </v-btn>
      <v-list style="z-index: 6;">
        <v-list-tile @click="NewCard = true">
          <v-list-tile-title>Add a task</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      <v-dialog style="z-index:25;" v-model="ShowSet" scrollable max-width="800px">
        <v-card style="background-color: rgba(247,247,250,0.98); text-align: center;">
          <v-card-title style="color: blue;">Board settings :</v-card-title>
          <v-divider></v-divider>
            <v-flex xs8>
              <v-switch
                :label="`Public board`"
                v-model="settings.public"
              ></v-switch>
            </v-flex>
            <v-flex xs12 sm6>
                    <v-select
                      :items="Teams[0]"
                      v-model="settings.selected"
                      label="Select"
                      item-text="username"
                      item-value="mail"
                      multiple
                      chips
                      max-height="auto"
                      autocomplete
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          :selected="data.selected"
                          :key="JSON.stringify(data.item)"
                          close
                          class="chip--select-multi"
                          @input="data.parent.selectItem(data.item)"
                        >
                          <v-avatar>
                            <img :src="data.item.picture">
                          </v-avatar>
                          {{ data.item.username }}
                        </v-chip>
                      </template>
                      <template slot="item" slot-scope="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-tile-content v-text="data.item"></v-list-tile-content>
                        </template>
                        <template v-else>
                          <v-list-tile-avatar>
                            <img :src="data.item.picture">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="data.item.username"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.work"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </template>
                      </template>
                    </v-select>
                  </v-flex>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="ShowSet = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="SaveSettings()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <div style="display: block;">
      <v-dialog style="z-index: 25; background-color: rgba(247,247,250,0.98) !important;" v-model="NewCard" scrollable max-width="800px">
        <v-card style="background-color: rgba(247,247,250,0.98); text-align: center;">
          <v-card-title style="color: blue;">New task :</v-card-title>
          <v-divider></v-divider>
            <v-flex style="text-align: center;" xs8>
              <v-text-field v-model="card.title"
                name="title"
                label="title"
                style="width: 700px; margin: 5px;"
              ></v-text-field>
                <v-text-field v-model="card.text"
                  name="text"
                  label="text"
                  textarea
                  id="text"
                  style="width: 700px; margin: 5px;"
                ></v-text-field>
                <h4 style="text-align: center;">Start date</h4>
                <v-date-picker v-model="picker" :landscape="true" :reactive="true"></v-date-picker>
                <v-container style="height: auto;" fluid>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <v-subheader v-text="'Selected users :'"></v-subheader>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="Teams[0]"
                      v-model="selected"
                      label="Select"
                      item-text="username"
                      item-value="username"
                      multiple
                      chips
                      max-height="auto"
                      autocomplete
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          :selected="data.selected"
                          :key="JSON.stringify(data.item)"
                          close
                          class="chip--select-multi"
                          @input="data.parent.selectItem(data.item)"
                        >
                          <v-avatar>
                            <img :src="data.item.picture">
                          </v-avatar>
                          {{ data.item.username }}
                        </v-chip>
                      </template>
                      <template slot="item" slot-scope="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-tile-content v-text="data.item"></v-list-tile-content>
                        </template>
                        <template v-else>
                          <v-list-tile-avatar>
                            <img :src="data.item.picture">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="data.item.username"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.work"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </template>
                      </template>
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="NewCard = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="PostCard()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog style="z-index: 25; background-color: rgba(247,247,250,0.98);" v-model="displayEditCard" scrollable max-width="800px">
        <v-card style="background-color: rgba(247,247,250,0.98); text-align: center;">
              <div class="headline" style="display: block;">{{ EditCard.title }}</div><br/>
              <div style="display: block;">{{ EditCard.description }}</div><br/>
              <div class="team" style="display: block;">
                  <div @click="$router.push('/profil/' + EditCard._id)" v-for="pers in EditCard.users" :key="pers._id" class="team-member" style="cursor: pointer;">
                     <img :src="pers.picture" alt="">
                  </div>
              </div>
          <v-divider></v-divider>
            <v-flex v-if="EditCard.text" xs8>
              <v-text-field v-model="EditCard.title"
                name="title"
                label="title"
                style="width: 700px; margin: 5px;"
              ></v-text-field>
                <v-text-field v-model="EditCard.description"
                  name="description"
                  label="description"
                  textarea
                  id="description"
                  style="width: 700px; margin: 5px;"
                ></v-text-field>
                <h4 style="text-align: center;">Start date</h4>
                <v-date-picker v-model="EditCard.start_dateUse" :landscape="true" :reactive="true"></v-date-picker>
                <v-container style="height: auto;" fluid>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <v-subheader v-text="'Selected users :'"></v-subheader>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      :items="Teams[0]"
                      v-model="selected"
                      label="Select"
                      item-text="username"
                      item-value="username"
                      multiple
                      chips
                      max-height="auto"
                      autocomplete
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          :selected="data.selected"
                          :key="JSON.stringify(data.item)"
                          close
                          class="chip--select-multi"
                          @input="data.parent.selectItem(data.item)"
                        >
                          <v-avatar>
                            <img :src="data.item.picture">
                          </v-avatar>
                          {{ data.item.username }}
                        </v-chip>
                      </template>
                      <template slot="item" slot-scope="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-tile-content v-text="data.item"></v-list-tile-content>
                        </template>
                        <template v-else>
                          <v-list-tile-avatar>
                            <img :src="data.item.picture">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="data.item.username"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.work"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </template>
                      </template>
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
                </v-flex>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" flat @click.native="displayEditCard = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="EditCards()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<style scoped>
.elem {
  height: auto;
  width: 20%;
  padding: 10px;
  border-right: rgba(150, 150, 150, 0.4) 1px solid;
  margin: 0px;
  margin-top: -10px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
}
.cardDisplay {
  padding: 10px;
  color: black;
  margin-bottom: 50px;
}
.editIcon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(50, 50, 50, 0.8);
  border-radius: 10px;
  opacity: 0;
}
.card:hover .editIcon {
  opacity: 1;
}
.headline {
  width: 100%;
  display: block;
}
.card {
  border-radius: 5px;
  height: auto;
  display: flex;
  padding: 10px;
  font-size: 1.2em;
  background-color: rgba(230, 230, 230, 0.4);
  -webkit-transition: width 0.1s, margin 0.1s, -webkit-transform 0.1s;
  transition: min-width 0.1s,margin 0.1s, transform 0.1s;
  box-shadow: none;
}
.card:hover {
  background-color: rgba(200, 200, 200, 0.9);
  -webkit-transition: width 0.1s, margin 0.1s, -webkit-transform 0.1s;
  transition: min-width 0.1s,margin 0.1s, transform 0.1s;
}
.coll .card:hover {
  min-width: 150px;
  position: relative;
  -webkit-transition: min-width 0.1s, margin 0.1s, -webkit-transform 0.1s;
  transition: min-width 0.1s, margin 0.1s, transform 0.1s;
}
.container {
  height: 900px;
  width: 100%;
}

.left-container {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.right-container {
  display: none;
  border-right: 1px solid #cecece;
  float: right;
  height: 100%;
  width: 340px;
  box-shadow: 0 0 5px 2px #aaa;
  position: relative;
  z-index:2;
}
.gantt-messages {
  list-style-type: none;
  color: white;
  height: 50%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 5px;
}
.gantt-messages > .gantt-message {
  background-color: #f4f4f4;
  box-shadow:inset 5px 0 #d69000;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0 8px 10px;
}
.gantt-selected-info {
border-bottom: 1px solid #cecece;
color: white;
  box-sizing: border-box;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  height: 50%;
  line-height: 28px;
  padding: 10px;
}
.gantt-selected-info h2 {
  border-bottom: 1px solid #cecece;
}
.select-task-prompt h2{
  color: white;
}
</style>
<script>
import AccountService from '@/services/AccountService'
import TaskService from '@/services/TaskService'
import Gantt from './Gantt.vue'

export default {
  name: 'TaskManager',
  components: {Gantt},
  data () {
    return {
      tasks: {
        data: [
          {id: 1, text: 'Task 1', description: 'lolilol', start_date: '15-04-2017', duration: 3, progress: 0.6}
        ],
        links: []
      },
      selectedTask: null,
      firebaseApp: null,
      ShowSet: false,
      picker: null,
      landscape: false,
      reactive: false,
      settings: {
        public: true,
        selected: ''
      },
      messages: [],
      selected: [],
      categories: [],
      projects: {},
      ProjList: [],
      colWidth: '100',
      NewCard: false,
      BackofficeDisplay: false,
      ProjectDisplay: false,
      NewCol: false,
      displayEditCard: false,
      Teams: [],
      EditCard: {
        display: false
      },
      pr1: 55,
      dragTarget: 0,
      dragProject: 0,
      NewColl: {
        title: '',
        state: 'none'
      },
      card: {
        title: '',
        text: '',
        users: {
        }
      },
      cards: [],
      dispCards: []
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.$store.state.GanttInstance = this.$route.params.team
    this.GetByTeam()
    this.GetBoard()
    this.GetCard()
  },
  filters: {
    toPercent (val) {
      if (!val) return '0'
      return Math.round((+val) * 100)
    },
    niceDate (obj) {
      return `${obj.getFullYear()} / ${obj.getMonth()} / ${obj.getDate()}`
    }
  },
  methods: {
    async GetBoard () {
      let vue = this
      this.firebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
        TaskService.GetThisBoard(idToken, vue.$route.params.team).then((response) => {
          response.data.board[0].selected = response.data.board[0].users
          vue.settings = response.data.board[0]
        })
      })
    },
    SaveSettings () {
      let vue = this
      vue.ShowSet = false
      this.firebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
        vue.settings.token = idToken
        vue.settings.board = vue.$route.params.team
        TaskService.SaveSetting(vue.settings)
      })
    },
    GetCard () {
      var vue = this
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        TaskService.GetMine(vue.$route.params.team, idToken).then((response) => {
          vue.cards = response.data.task
          vue.cards.sort(function (a, b) {
            if (a.date > b.date) {
              return 1
            } else {
              return -1
            }
          })
          /* minimum nécéssaire pour le Gantt
          {id: 1, text: 'Task 1', description: 'lolilol', start_date: '15-04-2017', duration: 3, progress: 0.6},
          {id: 2, text: 'Task 2', description: 'lolilol', start_date: '30-04-2017', duration: 6, progress: 0.4},
          {id: 3, text: 'Task custom', description: 'lolilol', start_date: '23-06-2017', duration: 20, progress: 0.2}
          {id: 1, source: 1, target: 2, type: '0'}
          */
          for (let i = 0; i < vue.cards.length; i++) {
            let startdate = vue.cards[i].start_date.replace(/^(....).(..).(..)............../g, '$1-$2-$3')
            vue.cards[i].start_dateUse = startdate
            vue.cards[i].start_date = vue.cards[i].start_date.replace(/^(....).(..).(..)............../g, '$3-$2-$1')
            vue.cards[i].id = vue.cards[i]._id
            for (let j = 0; j < vue.cards[i].users.length; j++) {
              AccountService.FindUsersByName(vue.cards[i].users[j]).then((data) => {
                vue.cards[i].users[j] = data.data.users[0]
              })
            }
          }
          vue.tasks.data = vue.cards
          vue.dispCards = vue.cards
        })
      })
    },
    PostCard () {
      var vue = this
      var newCard = {}
      newCard = vue.card
      newCard.users = vue.selected
      newCard.board = vue.$route.params.team
      newCard.start_date = vue.picker
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        newCard.token = idToken
        TaskService.Post(newCard).then((response) => {
          vue.GetCard()
          vue.NewCard = false
        })
      })
    },
    EditCards () {
      var vue = this
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        vue.EditCard.token = idToken
        vue.EditCard.users = vue.selected
        TaskService.PutTask(vue.EditCard).then((response) => {
          vue.GetCard()
        })
      })
    },
    GetByTeam () {
      var vue = this
      vue.Teams = []
      AccountService.FindUsers('all').then((response) => {
        vue.Teams.push(response.data.users)
      })
    },
    selectTask (task) {
      this.selectedTask = task
    },

    addMessage (message) {
      this.messages.unshift(message)
      if (this.messages.length > 40) {
        this.messages.pop()
      }
    },

    logTaskUpdate (id, mode, task) {
      let text = (task && task.text ? ` (${task.text})` : '')
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
    },

    logLinkUpdate (id, mode, link) {
      let message = `Link ${mode}: ${id}`
      if (link) {
        message += ` ( source: ${link.source}, target: ${link.target} )`
      }
      this.addMessage(message)
    }
  }
}
</script>

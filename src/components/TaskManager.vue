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
      <gantt class="left-container" :tasks="tasks" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate" @task-selected="selectTask" ref="gant"></gantt>
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
    <div style="display: block;">
      <v-dialog style="z-index:25;" v-model="NewCard" scrollable max-width="800px">
        <v-card style="background-color: rgba(247,247,250,0.98); text-align: center;">
          <v-card-title style="color: blue;">New card :</v-card-title>
          <v-divider></v-divider>
            <v-flex xs8>
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
      <v-dialog style="z-index:25;" v-model="displayEditCard" scrollable max-width="800px">
        <v-card v-if="EditCard.style" style="background-color: rgba(247,247,250,0.98); text-align: center;">
          <v-card color="blue-grey darken-2" class="white--text" :style="card.style">
            <v-card-title :style="card.style" primary-title>
              <div class="headline">{{ EditCard.title }}</div><br/>
              <div>{{ EditCard.text }}</div>
              <div class="team">
                  <div @click="$router.push('/profil/' + EditCard._id)" v-for="pers in EditCard.users" :key="pers._id" class="team-member" style="cursor: pointer;">
                     <img :src="pers.picture" alt="">
                  </div>
              </div>
            </v-card-title>
          </v-card>
          <v-divider></v-divider>
            <v-flex v-if="EditCard.style" xs8>
              <v-flex xs12 sm12>
                <v-subheader v-text="'linked project'"></v-subheader>
                  <v-select
                    v-model="EditCard.project"
                    :items="ProjList"
                    item-text="project name"
                    label="project name"
                    autocomplete
                  ></v-select>
              </v-flex>
              <v-text-field v-model="EditCard.title"
                name="title"
                label="title"
                style="width: 700px; margin: 5px;"
              ></v-text-field>
                <v-text-field v-model="EditCard.text"
                  name="text"
                  label="text"
                  textarea
                  id="text"
                  style="width: 700px; margin: 5px;"
                ></v-text-field>
                <v-container fluid>
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
  cursor: pointer;
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
          {id: 1, text: 'Task 1', description: 'lolilol', start_date: '15-04-2017', duration: 3, progress: 0.6},
          {id: 2, text: 'Task 2', description: 'lolilol', start_date: '30-04-2017', duration: 6, progress: 0.4},
          {id: 3, text: 'Task custom', description: 'lolilol', start_date: '23-06-2017', duration: 20, progress: 0.2}
        ],
        links: [
          {id: 1, source: 1, target: 2, type: '0'}
        ]
      },
      selectedTask: null,
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
      cards: []
    }
  },
  mounted () {
    this.firebaseApp = this.$store.state.firebase
    this.GetByTeam()
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
    GetCard () {
      var vue = this
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        TaskService.GetMine(vue.$route.params.team, idToken).then((response) => {
          vue.cards = response.data.task
          vue.categories = response.data.coll
          vue.cards.sort(function (a, b) {
            if (a.date > b.date) {
              return 1
            } else {
              return -1
            }
          })
          vue.$refs.gant.needRefresh()
          vue.cards.forEach((element) => {
            for (let j = 0; j < element.users.length; j++) {
              AccountService.FindUsersByName(element.users[j]).then((data) => {
                element.users[j] = data.data.users[0]
              })
            }
          })
        })
      })
    },
    PostCard () {
      var vue = this
      var newCard = {}
      newCard = vue.card
      newCard.users = vue.selected
      newCard.board = vue.$route.params.team
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
      AccountService.FindByTeam(vue.$route.params.team).then((response) => {
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

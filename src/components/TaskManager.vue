<template>
  <div style="background-image: url('/static/Wallpaper 11.jpg'); background-size: cover; position: relative; min-height: 800px;">
    <v-menu
        transition="slide-x-transition"
        bottom
        right
        style="position: absolute; top: 80px; right: 8px; background-color:  rgba(0, 0, 0, 0);"
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
          <v-list-tile-title>Add a card</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="NewCol = true">
          <v-list-tile-title>Add a collums</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn
        color="blue"
        dark
        absolute
        right
        fab
        style="top: 150px;"
        @click="BackofficeDisplay = !BackofficeDisplay"
      >
      <v-icon>archive</v-icon>
    </v-btn>
    <v-btn
        color="blue"
        dark
        absolute
        right
        fab
        style="top: 220px;"
        @click="ProjectDisplay = !ProjectDisplay"
      >
      <v-icon>class</v-icon>
    </v-btn>
    <v-flex v-if="BackofficeDisplay" style="background-color: rgba(200, 200, 200, 0.6); margin: 10px; margin-right: 80px;" xs12>
      <drop @drop="handleDrop('backoffice')">
          <h2>backoffice</h2><br/>
          <v-flex v-for="(card, index) in cards" :key="index" v-if="card.categorie === 'backoffice'" style="margin: 5px; display: inline-block;" xs2>
            <drag @drag="dragProject = 0; myListener(index)" style="margin: 5px;">
                <v-card color="blue-grey darken-2" class="white--text" :style="card.style">
                  <v-card-title primary-title :style="card.style">
                    <div class="headline">{{ card.title }}</div><br/>
                    <div>{{ card.text }}</div>
                    <div class="team">
                        <div @click="$router.push('/profil/' + pers._id)" v-for="pers in card.users" :key="pers._id" class="team-member" style="cursor: pointer;">
                           <img :src="pers.picture" alt="">
                        </div>
                    </div>
                  </v-card-title>
                </v-card>
            </drag>
          </v-flex>
      </drop>
    </v-flex>
    <div style="position: relative; width: 100%; padding-right: 80px;">
      <v-flex style="display: inline-block; text-align: center; height: 100%; position: relative; vertical-align: top;" :style="columns" v-for="(title, index) in categories" :key="title">
        <drop style="display: block; height: 100%; width: 100%;" @drop="handleDrop(title, index)">
            <drag @drag="dragProject = 1; myListener(index)"><h2 style="color: white">{{title}}</h2></drag><br/>
            <hr style="width: 90%;"/>
            <drag class="coll" v-for="(card, index) in cards" :key="index" v-if="card.categorie === title" @drag="dragProject = 0; myListener(index)" style="margin: 5px; text-align: left;">
                <v-card color="blue-grey darken-2" class="white--text" :style="card.style">
                  <v-card-title primary-title :style="card.style">
                    <div class="headline" @click="EditCard = card; selected = card.users; EditCard.display = true">{{ card.title }}</div><br/>
                    <div>{{ card.text }}</div>
                    <div class="team">
                        <div @click="$router.push('/profil/' + pers._id)" v-for="pers in card.users" :key="pers._id" class="team-member" style="cursor: pointer;">
                           <img :src="pers.picture" alt="">
                        </div>
                    </div>
                  </v-card-title>
                </v-card>
            </drag>
            <hr style="width: 90%;"/>
        </drop>
    </v-flex>
  </div>
  <v-flex v-if="ProjectDisplay" style="background-color: rgba(200, 200, 200, 0.6); margin: 10px; padding: 15px; border-radius: 20px;" xs12>
    <h2>Projets 1 <v-progress-linear v-model="pr1"></v-progress-linear></h2>
      <v-flex v-for="(card, index) in cards" :key="index" xs2 style="display: inline-block;">
    <drag @drag="dragProject = 0; myListener(index)" style="margin: 5px; text-align: left;">
        <v-card color="blue-grey darken-2" class="white--text" :style="card.style">
          <v-icon v-if="card.categorie === 'do'" style="position: absolute; top: 10px; right: 10px;">done</v-icon>
          <v-icon v-else style="position: absolute; top: 10px; right: 10px;">restore</v-icon>
          <v-card-title :style="card.style" primary-title>
            <div class="headline">{{ card.title }}</div><br/>
            <div>{{ card.text }}</div>
            <div class="team">
                <div @click="$router.push('/profil/' + pers._id)" v-for="pers in card.users" :key="pers._id" class="team-member" style="cursor: pointer;">
                   <img :src="pers.picture" alt="">
                </div>
            </div>
          </v-card-title>
        </v-card>
    </drag>
    </v-flex>
  </v-flex>
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
            <v-flex>
              <v-subheader>Text Color</v-subheader>
              <v-select
                :items="['black', 'white', 'cyan', 'grey']"
                v-model="card.style.color"
                label="color"
                single-line
              ></v-select>
            </v-flex>
            <v-flex>
              <v-subheader>Background Color</v-subheader>
              <v-select
                :items="['black', 'white', 'cyan', 'grey']"
                v-model="card.style['background-color']"
                label="color"
                single-line
              ></v-select>
            </v-flex>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="NewCard = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="PostCard()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog style="z-index:25;" v-model="NewCol" scrollable max-width="800px">
      <v-card style="background-color: rgba(247,247,250,0.98); text-align: center;">
        <v-card-title style="color: blue;">New collums :</v-card-title>
        <v-divider></v-divider>
          <v-flex xs8>
            <v-text-field v-model="NewColl.title"
              name="title"
              label="title"
              style="width: 700px; margin: 5px;"
            ></v-text-field>
            <v-flex>
              <v-subheader>State</v-subheader>
              <v-select
                :items="['none', 'Finnished Project']"
                v-model="NewColl.state"
                label="color"
                single-line
              ></v-select>
            </v-flex>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="NewCol = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="EditColl('new')">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog style="z-index:25;" v-model="EditCard.display" scrollable max-width="800px">
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
          <v-btn color="blue darken-1" flat @click.native="EditCard.display = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="EditColl('new')">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style scoped>
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
</style>
<script>
import AccountService from '@/services/AccountService'
import TaskService from '@/services/TaskService'

export default {
  name: 'TaskManager',
  data () {
    return {
      selected: [],
      categories: ['Todo', 'do', 'undo', 'fr', 'iouyergf', 'zerg'],
      colWidth: '100',
      NewCard: false,
      BackofficeDisplay: false,
      ProjectDisplay: false,
      NewCol: false,
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
      columns: {
        'width': 10 + '%',
        'position': 'relative'
      },
      card: {
        title: '',
        categorie: 'backoffice',
        text: '',
        style: {
          color: 'white',
          'background-color': 'grey',
          'border-radius': '5px'
        },
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
  methods: {
    myListener (myArg, transferData, nativeEvent) {
      this.dragTarget = myArg
    },
    handleDrop (data, index) {
      var vue = this
      var tmp
      console.log(vue.dragProject)
      if (vue.dragProject === 1) {
        vue.dragProject = 0
        tmp = vue.categories[vue.dragTarget]
        vue.categories[vue.dragTarget] = vue.categories[index]
        vue.categories[index] = tmp
        tmp = vue.categories
        vue.categories = []
        vue.categories = tmp
        vue.EditColl('edit')
      } else {
        vue.cards[vue.dragTarget].categorie = data
      }
    },
    GetCard () {
      var vue = this
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        TaskService.GetMine(vue.$route.params.team, idToken).then((response) => {
          vue.cards = response.data.task
          vue.categories = response.data.coll
          vue.columns.width = (100 / vue.categories.length) + '%'
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
      newCard.team = vue.$route.params.team
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        newCard.token = idToken
        TaskService.Post(newCard).then((response) => {
          vue.GetCard()
          vue.NewCard = false
        })
      })
    },
    EditColl (action) {
      var vue = this
      if (action === 'new') {
        if (!vue.categories) {
          vue.categories = []
        }
        vue.categories.push(vue.NewColl.title)
        vue.columns.width = (100 / vue.categories.length) + '%'
        vue.NewCol = false
      }
      this.firebaseApp.auth().currentUser.getIdToken(false).then(function (idToken) {
        TaskService.PutTeam({
          token: idToken,
          name: vue.$route.params.team,
          coll: vue.categories
        })
      })
    },
    GetByTeam () {
      var vue = this
      vue.Teams = []
      AccountService.FindByTeam(vue.$route.params.team).then((response) => {
        vue.Teams.push(response.data.users)
      })
    }
  }
}
</script>

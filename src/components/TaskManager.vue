<template>
  <div style="background-image: url('/static/Wallpaper 11.jpg'); background-size: cover;">
    <v-btn
        color="blue"
        dark
        absolute
        right
        fab
        style="top: 80px;"
        @click="NewCard = true"
      >
      <v-icon>add</v-icon>
    </v-btn>
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
        @click="BackofficeDisplay = !BackofficeDisplay"
      >
      <v-icon>class</v-icon>
    </v-btn>
    <v-flex v-if="BackofficeDisplay" style="background-color: rgba(200, 200, 200, 0.6); margin: 10px;" xs12>
      <drop @drop="handleDrop('backoffice')">
          <h2>backoffice</h2><br/>
          <v-flex v-for="(card, index) in cards" :key="index" v-if="card.categorie === 'backoffice'" style="margin: 5px; display: inline-block;" xs2>
            <drag @drag="myListener(index)" style="margin: 5px;">
                <v-card color="blue-grey darken-2" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">{{ card.title }}</div>
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
    <div style="position: relative; width: 100%;">
      <v-flex style="margin: 5px; display: inline-block; text-align: center; height: 100%; width: 100%; position: relative; vertical-align: top;" v-for="title in categories" :key="title" xs2>
        <drop style="display: block; height: 100%; width: 100%;" @drop="handleDrop(title)">
            <h2 style="color: white">{{title}}</h2>
            <hr/>
            <drag v-for="(card, index) in cards" :key="index" v-if="card.categorie === title" @drag="myListener(index)" style="margin: 5px; text-align: left;">
                <v-card color="blue-grey darken-2" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">{{ card.title }}</div>
                    <div>{{ card.text }}</div>
                    <div class="team">
                        <div @click="$router.push('/profil/' + pers._id)" v-for="pers in card.users" :key="pers._id" class="team-member" style="cursor: pointer;">
                           <img :src="pers.picture" alt="">
                        </div>
                    </div>
                  </v-card-title>
                </v-card>
            </drag>
        </drop>
    </v-flex>
  </div>
  <v-flex style="background-color: rgba(200, 200, 200, 0.6); margin: 10px;" xs12>
    <h2>Projets 1 <v-progress-linear v-model="pr1"></v-progress-linear></h2>
      <v-flex v-for="(card, index) in cards" :key="index" xs2 style="display: inline-block;">
    <drag @drag="myListener(index)" style="margin: 5px; text-align: left;">
        <v-card color="blue-grey darken-2" class="white--text">
          <v-icon v-if="card.categorie === 'do'" style="position: absolute; top: 10px; right: 10px;">done</v-icon>
          <v-icon v-else style="position: absolute; top: 10px; right: 10px;">restore</v-icon>
          <v-card-title primary-title>
            <div class="headline">{{ card.title }}</div>
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
              id="title"
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
                <p>{{ selected }}</p>
                <v-checkbox v-for="(user, index) in Teams[0]" :key="index" :label="user.username" v-model="selected" :value="user.username"></v-checkbox>
              </v-container>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="NewCard = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="PostTeam()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style scoped>
.card {
  border-radius: 5px;
  cursor: pointer;
}
</style>
<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'TaskManager',
  data () {
    return {
      selected: [],
      categories: ['Todo', 'do', 'undo'],
      colWidth: '100',
      NewCard: false,
      BackofficeDisplay: false,
      Teams: [],
      pr1: 55,
      dragTarget: 0,
      card: {
        title: '',
        text: ''
      },
      cards: {
        0: {
          categorie: 'do',
          title: 'test',
          users: {
            0: {
              _id: 'oejrhgioeuh',
              picture: '/static/profil/Julien Juret.png'
            }
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        1: {
          categorie: 'undo',
          title: 'seconde',
          users: {
            0: {
              _id: 'oejrhgioeuh',
              picture: '/static/profil/Julien Juret.png'
            }
          },
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      }
    }
  },
  mounted () {
    this.colWidth = screen.width / this.categories.length
    this.GetByTeam()
  },
  methods: {
    myListener (myArg, transferData, nativeEvent) {
      this.dragTarget = myArg
      console.log(myArg)
      console.log(transferData)
      console.log(nativeEvent)
    },
    handleDrop (data) {
      var vue = this
      vue.cards[vue.dragTarget].categorie = data
      console.log(data)
    },
    PostCard () {

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

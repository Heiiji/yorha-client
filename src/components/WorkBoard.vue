<template>
  <div>
    <div style="text-align: left; position: relative; width: 100%; padding-bottom: 80px; margin-bottom: -80px;" class="page-title">
        <h3>Task Manager / Board</h3>
        <button class="btn btn-primary btn-block" @click="toogleMake = true" style="width: 150px; position: absolute; right: 20px; top: 10px;">Add Project</button>
    </div>
    <div style="widht: 100%; display: block; margin-top: 60px;">
    <v-flex style="cursor: pointer; display: inline-block; width: 400px; margin: 10px;" v-for="(board, index) in currentBoard" :key="index" @click="$router.push('/taskmanager/' + board.title)">
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div>
                        <div class="headline">{{ board.title }}</div>
                        <span class="white--text">{{ board.description }}</span>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="https://www.stagephotoparis.fr/wp-content/uploads/2016/02/stage-placeholder.jpg"
                      height="125px"
                      style="border-radius: 5px;"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </div>
    <v-dialog style="z-index:25;" v-model="toogleMake" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-card-title style="color: blue;">Result :</v-card-title>
        <v-divider></v-divider>
        <v-flex xs8>
          <v-text-field v-model="newBoard.title"
                        name="name"
                        label="Project name"
                        id="name"
                        style="width: 990px; margin: 5px;"
          ></v-text-field>
          <v-text-field v-model="newBoard.description"
                        name="description"
                        label="description"
                        textarea
                        style="width: 990px; margin: 5px;"
          ></v-text-field>
        </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="toogleMake = false" >Close</v-btn>
          <v-btn color="blue darken-1" flat @click="PutBoard()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService'

export default {
  name: 'WorkingBoard',
  data: function () {
    return {
      toogleMake: false,
      newBoard: {
        token: '',
        title: '',
        description: '',
        user: ''
      },
      currentBoard: {
        0: {
          _id: 0,
          title: 'titre 1'
        },
        1: {
          _id: 1,
          title: 'test 2'
        }
      }
    }
  },
  mounted: function () {
    this.firebaseApp = this.$store.state.firebase
    this.GetBoard()
  },
  methods: {
    async GetBoard () {
      let vue = this
      this.firebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
        TaskService.GetBoard(idToken).then((response) => {
          vue.currentBoard = response.data.boards
        })
      })
    },
    PutBoard () {
      let vue = this
      vue.toogleMake = false
      this.firebaseApp.auth().currentUser.getIdToken(true).then(function (idToken) {
        vue.newBoard.token = idToken
        vue.newBoard.user = vue.$store.state.user.local.mail
        console.log(vue.newBoard)
        TaskService.PutBoard(vue.newBoard).then((response) => {
          vue.GetBoard()
        })
      })
    },
    ArchiveBoard () {
    }
  }
}
</script>

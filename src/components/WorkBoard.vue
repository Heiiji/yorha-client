<template>
  <div>
    <div style="text-align: left; position: relative; width: 100%; padding-bottom: 80px; margin-bottom: -80px;" class="page-title">
        <h3>Task Manager / Board</h3>
        <button class="btn btn-primary btn-block" @click="Verdialog = true; edition = false" style="width: 150px; position: absolute; right: 20px; top: 10px;">Add Version</button>
    </div>
    <div style="widht: 100%; display: block; margin-top: 60px;">
    <v-flex style="cursor: pointer; display: inline-block; width: 400px; margin: 10px;" v-for="board in currentBoard" :key="board._id">
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div>
                        <div class="headline">{{ board.title }}</div>
                        <span class="white--text">{{ board.title }}</span>
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
  </div>
</template>
<script>
// import TaskService from '@/services/TaskService'

export default {
  name: 'WorkingBoard',
  data () {
    return {
      newBoard: {
        title: ''
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
  methods: {
    GetBoard () {
    },
    PutBoard () {
    },
    ArchiveBoard () {
    }
  }
}
</script>

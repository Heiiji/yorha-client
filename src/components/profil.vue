<template>
  <div>
    <br/><br/><br/>
    <div>
    <span v-if="user.photoURL"><img width="300px" style="float: left;" :src="user.photoURL"/></span>
    <h1>Profil :</h1>
    username : <span v-if="user.displayName">{{ user.displayName }}<br/></span>
    workplace : <span v-if="user.local">{{ user.local.work }}</span><br/>
    workplace rank : <span v-if="user.local">{{ user.local.status }}</span><br/>
    mail : <span v-if="user.email">{{ user.email }} </span><br/>
    Home Background theme :
    <v-flex xs3>
        <v-select
          :items="e1"
          v-model="e1"
          :label="Theme"
          single-line
        ></v-select>
      </v-flex>
    </div><br/>
    <h2>Description : <v-btn flat small @click="EditDescription = true">Editer</v-btn></h2>
    <p v-if="user.local">{{ user.local.description }}</p>

    <v-dialog style="z-index:25;" v-model="EditDescription" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-card-title style="color: blue;">Result :</v-card-title>
        <v-divider></v-divider>
          <v-flex xs8>
            <v-text-field v-model="NewDescription"
              name="Description"
              label="New Description"
              id="Description"
              textarea
              style="width: 990px; margin: 5px;"
            ></v-text-field>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="EditDescription = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="PostDescription(NewDescription)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: [],
      e1: null,
      EditDescription: null,
      NewDescription: '',
      background: [
        { text: 'Landscape' },
        { text: 'Cat' },
        { text: 'Urban' }
      ]
    }
  },
  mounted () {
    this.user = this.$store.state.user
    this.e1 = this.user.local.homeTheme
  },
  methods: {
    PostDescription (desc) {
      AccountService.editDescription({
        description: desc,
        mail: this.user.local.mail
      })
      this.user.local.description = desc
      this.EditDescription = false
    }
  }
}
</script>

<style type="text/css">
</style>

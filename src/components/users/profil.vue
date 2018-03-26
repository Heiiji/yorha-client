<template>
  <div>
    <br/>
    <div>
    <span id="photo" v-if="user.local.picture">
      <div id="editer" @click="EditPicture = true">Editer</div>
      <img width="300px" :src="user.local.picture"/>
    </span>
    <h1>Profil :</h1>
    username : <span v-if="user.displayName">{{ user.local.username }}<br/></span>
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
        <v-card-title style="color: blue;">Nouvelle description :</v-card-title>
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

    <v-dialog style="z-index:25;" v-model="EditPicture" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-card-title style="color: blue;">Nouvelle image de profil :</v-card-title>
        <v-divider></v-divider>
          <v-flex xs8>
            <label>File
              <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="EditPicture = false;">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="changePhoto()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AccountService from '@/services/AccountService'
import axios from 'axios'

export default {
  name: 'Profil',
  data () {
    return {
      edition: false,
      user: [],
      file: '',
      e1: null,
      EditDescription: null,
      NewDescription: '',
      EditPicture: null,
      NewPicture: '',
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
    console.log(this.user)
  },
  methods: {
    PostDescription (desc) {
      AccountService.editDescription({
        description: desc,
        mail: this.user.local.mail
      })
      this.user.local.description = desc
      this.EditDescription = false
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    },
    changePhoto () {
      let formData = new FormData()
      formData.append('file', this.file)
      formData.append('username', this.user.local.username)
      formData.append('mail', this.user.email)
      console.log(formData.get('file'))
      axios.post( 'http://localhost:8081/account/photo',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(error){
        console.log('FAILURE : ' + error);
      })
    }
  }
}
</script>

<style type="text/css">
#photo {
  display: inline-block;
  position: relative;
}
#editer {
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(200, 200, 200, 0);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}
#photo:hover #editer {
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
  background-color: rgba(200, 200, 200, 0.7);
}
</style>

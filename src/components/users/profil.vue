<template>
  <div style="background-color: rgba(200, 200, 200, 0.2); min-height: 100%; width: 75%; margin-left: 12.5%">
    <br/>
    <div>
      <div style="position: relative;">
        <span id="photo" v-if="user.local.picture">
          <div id="editer" @click="EditPicture = true">Editer</div>
          <img width="300px" :src="user.local.picture"/>
        </span>
        <div style="display: flex; padding-top: 25px;">
          <span style="font-size: 2em; display: block;" v-if="user.local">{{ user.local.username }} <span style="font-size: 0.5em;">({{ user.local.mail }})</span><br/></span><br/>
        </div>
        <br/>
        workplace : <span v-if="user.local">{{ user.local.work }}</span><br/>
        workplace rank : <span v-if="user.local">{{ user.local.qualifier }}</span><br/><br/><br/>
        Home Background theme :<br/>
            <v-select
              :items="background"
              v-model="e1"
              @change="PostHomeTheme"
              style="display: inline-block; width: 500px;"
              single-line
            ></v-select>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/>
    <h2>Description : <v-btn flat small @click="EditDescription = true">Editer</v-btn></h2>
    <p style="margin: 15px;" v-if="user.local">{{ user.local.description }}</p>

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
        { text: 'Urban' },
        { text: 'forest' },
        { text: 'abstract' }
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
    async PostHomeTheme (event) {
      console.log(event.text)
      AccountService.editHomeTheme({
        newTheme: event.text,
        mail: this.user.local.mail
      })
      this.$store.state.user.local.homeTheme = event.text
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
      axios.post('http://localhost:8081/account/photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function (error) {
          console.log('FAILURE : ' + error)
        })
    }
  }
}
</script>

<style type="text/css">
#photo {
  float: left;
  margin: 25px;
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

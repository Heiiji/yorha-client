<template>
  <div class="posts">
    <h1>Version Manager</h1>
    <br/><br/>
    <h3>Version On Rail</h3>
      <v-card v-for="value in versions" :key="value.version" style="width: 500px; z-index: 20; margin: 20px; display: inline-block;">
        <v-card-media
          :src="value.picture"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ value.support }} {{ value.version }}</div>
            <span class="grey--text">{{ value.state }} : {{ value.status }} : tested by {{ value.tester }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn v-on:click="Edition(value)" flat>Edit</v-btn>
          <v-btn flat color="purple">Test it</v-btn>
          <v-btn flat color="purple">Set as finnished</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text style="white-space: pre; text-align: left;" v-show="show">
            Changelog :
             {{ value.changelog }}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
      <v-layout row justify-center>
    <v-dialog style="z-index:25;" v-model="dialog" scrollable max-width="1000px">
      <v-btn color="primary" dark slot="activator" style="color: black;">Add version</v-btn>
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-card-title style="color: blue;">Create a version :</v-card-title>
        <v-divider></v-divider>
          <v-flex xs8>
            <v-text-field v-model="editeable.device"
              name="device"
              label="Version device"
              id="device"
              style="width: 990px; margin: 5px;"
            ></v-text-field>
            <v-text-field v-model="editeable.importance"
              name="importance"
              label="Version imortance (hotfix,...)"
              id="importance"
              style="width: 990px; margin: 5px;"
            ></v-text-field>
            <v-text-field v-model="editeable.version"
              name="version"
              label="Version nummber"
              id="version"
              style="width: 990px; margin: 5px;"
            ></v-text-field>
            <v-text-field v-model="editeable.changelog"
                name="changelog"
                label="Changelog"
                textarea
                style="width: 990px; margin: 5px;"
              ></v-text-field>
              <v-text-field v-model="editeable.picture"
                name="picture"
                label="Version picture (url)"
                id="picture"
                style="width: 990px; margin: 5px;"
              ></v-text-field>
              <v-text-field v-model="editeable.tester"
                name="tester"
                label="Tester"
                id="tester"
                style="width: 990px; margin: 5px;"
              ></v-text-field>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false; this.edition = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="PostVersion()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
    <v-btn style="z-index: 20;" small>Archives</v-btn>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'

export default {
  name: 'VersionManager',
  data () {
    return {
      edition: false,
      versions: [],
      editeable: {
        device: '',
        version: '',
        importance: '',
        changelog: '',
        picture: '',
        tester: 'none',
        id: 0
      },
      show: false,
      dialogm1: '',
      dialog: false
    }
  },
  mounted () {
    this.getVersion('current')
  },
  methods: {
    async getVersion (arg) {
      const response = await VersionService.fetchPosts(arg)
      this.versions = response.data.versions
    },
    PostVersion () {
      if (this.edition === false) {
        const response = VersionService.addVersion(this.editeable)
        console.log(response)
      } else {
        const response = VersionService.updateVersion(this.editeable)
        console.log(response)
      }
      this.$router.push('/')
    },
    Edition (version) {
      this.edition = true
      this.editeable.device = version.support
      this.editeable.version = version.version
      this.editeable.importance = version.state
      this.editeable.changelog = version.changelog
      this.editeable.tester = version.tester
      this.editeable.id = version._id
      this.editeable.picture = version.picture
      this.dialog = true
    }
  }
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>

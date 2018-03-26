<template>
  <div class="posts">
  <br/><br/>
    <h1>Version Manager</h1>
    <br/><br/>
    <h3>{{ VersionDisplay }} : {{ $store.state.user.work }}</h3>
      <v-card v-for="value in versions" :key="value.version" style="width: 500px; z-index: 20; margin: 20px; display: inline-block;">
        <v-card-media
          :src="value.picture"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ value.support }} <strong>{{ value.version }}</strong></div>
            <span class="grey--text">{{ value.state }} : <span :class="value.status">{{ value.status }}</span> : tested by {{ value.tester }}</span>
          </div>
        </v-card-title>
        <v-card-actions v-if="VersionDisplay == 'Versions On Rail'">
          <v-btn v-on:click="Edition(value)" flat>Edit</v-btn>
          <v-btn flat color="purple" v-if="$store.state.user.work === 'QA'" @click="GoTest(value.path)">Test it</v-btn>
          <v-btn flat color="purple" v-if="$store.state.user.work === 'QA'" @click="SetFinnished = true; Validator = value._id">Set as finnished</v-btn>
          <v-btn flat color="purple" v-if="$store.state.user.work === 'Proximity'" @click="dialogProxi = true">Give to QA</v-btn>
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
    <v-dialog style="z-index:25;" v-model="dialogProxi" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-card-title style="color: blue;">Create a version :</v-card-title>
        <v-divider></v-divider>
          <v-flex xs8>
            <v-text-field v-model="editeable.changelog"
                name="Proximity-Report"
                label="Proximity Report"
                textarea
                style="width: 990px; margin: 5px;"
              ></v-text-field>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialogProxi = false; this.edition = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="giveQA(value._id)">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

    <v-dialog style="z-index:25;" v-model="SetFinnished" scrollable max-width="1000px">
      <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-card-title style="color: blue;">Result :</v-card-title>
        <v-divider></v-divider>
          <v-flex xs8>
            <v-text-field v-model="finnished.score"
              name="score"
              label="Version score"
              id="score"
              style="width: 990px; margin: 5px;"
            ></v-text-field>
            <v-text-field v-model="finnished.status"
              name="status"
              label="status (GO, NOGO,...)"
              id="status"
              style="width: 990px; margin: 5px;"
            ></v-text-field>
            <v-text-field v-model="finnished.bugs"
                name="Bugs"
                label="Bugs"
                textarea
                style="width: 990px; margin: 5px;"
              ></v-text-field>
          </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click.native="dialog = false; this.edition = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="SetAsFinnished(Validator)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
    <v-btn v-if="VersionDisplay !== 'Archives'" @click="getVersion('all');" style="z-index: 20;" small>Archives</v-btn>
    <v-btn v-else @click="getVersion('current');" style="z-index: 20;" small>Current</v-btn>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'

export default {
  name: 'VersionManager',
  data () {
    return {
      edition: false,
      Validator: '',
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
      finnished: {
        id: '',
        score: 0.01,
        status: '',
        bugs: ''
      },
      show: false,
      dialogm1: '',
      VersionDisplay: 'Version On Rail',
      dialog: false,
      dialogProxi: false,
      SetFinnished: false
    }
  },
  mounted () {
    this.getVersion(this.$store.state.user.work)
  },
  methods: {
    async getVersion (arg) {
      if (arg === 'all') {
        this.VersionDisplay = 'Archives'
        const response = await VersionService.fetchPosts('old')
        this.versions = response.data.versions
      } else {
        this.VersionDisplay = 'Versions On Rail'
        if (arg === 'QA') {
          const response = await VersionService.fetchPosts('current')
          this.versions = response.data.versions
        } else {
          const response = await VersionService.fetchPosts(this.$store.state.user.work)
          this.versions = response.data.versions
        }
      }
    },
    async giveQA (id) {
      VersionService.changeStatus({id: id, status: 'WIP'})
      this.$router.push('/home')
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
    },
    GoTest (url) {
      window.location.assign(url)
    },
    SetAsFinnished (id) {
      this.finnished.id = id
      const response = VersionService.SetAsFinnished(this.finnished)
      console.log(response)
      this.$router.push('/')
    }
  }
}
</script>

<style type="text/css">
.GO {
  color: green;
}
.WIP {
  color: blue;
}
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
.posts {
  margin: 30px;
}
</style>

<template>
  <div class="posts">
  <br/><br/>
    <h1>Version Manager</h1>
    <br/><br/>
    <h3>{{ VersionDisplay }}</h3>
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
          <v-btn flat color="purple" v-if="$store.state.user.work === 'Test'" @click="GoTest(value.path)">Test it</v-btn>
          <v-btn flat color="purple" v-if="$store.state.user.work === 'Test'" @click="SetFinnished = true; Validator = value._id; Edition(value)">Set as finnished</v-btn>
          <v-btn flat color="purple" v-if="$store.state.user.work === 'Proximity'" @click="dialogProxi = true">Give to QA</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn v-on:click="$router.push('/version/id/' + value._id)" flat>Details</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text style="text-align: left; word-wrap: break-word;" v-html="value.changelog" v-show="show">
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
  <v-dialog style="z-index:25;" v-model="dialog" scrollable max-width="800px">
    <button class="btn btn-default pull-right" slot="activator" @click="this.edition = false">Add version</button>
    <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
      <v-card-title style="color: blue;">Create a version :</v-card-title>
      <v-divider></v-divider>
        <v-flex style="padding-left: 40px;" xs11>
          <v-select
            :items="modules"
            v-model="editeable.device"
            label="Devices"
            single-line
          ></v-select>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="editeable.importance"
            name="importance"
            label="Version importance (hotfix,...)"
            id="importance"
            style="width: 300px; margin: 10px; display: inline-block;"
          ></v-text-field>
          <v-text-field v-model="editeable.version"
            name="version"
            label="Version number"
            id="version"
            style="width: 300px; margin: 10px; display: inline-block;"
          ></v-text-field><br/>
          <v-text-field v-model="editeable.changelog"
              name="changelog"
              label="Changelog"
              textarea
              style="width: 620px; margin: 5px; margin: 10px; display: inline-block;"
            ></v-text-field><br/>
            <v-text-field v-model="editeable.tester"
              name="tester"
              label="Tester"
              id="tester"
              style="width: 300px; margin: 10px; display: inline-block;"
            ></v-text-field>
            <v-text-field v-model="editeable.target"
              name="target"
              label="release target"
              id="target"
              style="width: 300px; margin: 10px; display: inline-block;"
            ></v-text-field><br/>
            <v-text-field v-model="editeable.scheduled"
              name="scheduled"
              label="Testcase volume"
              id="scheduled"
              style="width: 300px; margin: 10px; display: inline-block;"
            ></v-text-field>
            <v-text-field v-model="editeable.time"
              name="time"
              label="estimated time"
              id="time"
              style="width: 300px; margin: 10px; display: inline-block;"
            ></v-text-field>
        </v-flex>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click.native="dialog = false; edition = false">Close</v-btn>
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
import NewsService from '@/services/NewsService'

export default {
  name: 'VersionManager',
  data () {
    return {
      edition: false,
      Validator: '',
      versions: [],
      modules: [
        { text: 'Windows' },
        { text: 'Mac OS' },
        { text: 'Shadow Box' },
        { text: 'IOS' },
        { text: 'Android' },
        { text: 'O-Capture' },
        { text: 'O-Controller' },
        { text: 'Shadow Input' },
        { text: 'WatchDog' },
        { text: 'Updater' },
        { text: 'Shadow Serial' },
        { text: 'Shadow Intel' }
      ],
      editeable: {
        device: '',
        target: '',
        scheduled: '',
        time: '',
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
      VersionDisplay: 'Version on Rail',
      dialog: false,
      dialogProxi: false,
      SetFinnished: false
    }
  },
  mounted () {
    if (this.$store.state.user.local) {
      this.getVersion(this.$store.state.user.local.work)
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    async getVersion (arg) {
      if (arg === 'all') {
        this.VersionDisplay = 'Archives'
        const response = await VersionService.fetchPosts('old')
        this.versions = response.data.versions
      } else {
        this.VersionDisplay = 'Versions On Rail'
        const response = await VersionService.fetchPosts('current')
        this.versions = response.data.versions
      }
      this.versions.forEach(function (element) {
        element.changelog = element.changelog.replace(/\r?\n/g, '<br />')
      })
    },
    async giveQA (id) {
      VersionService.changeStatus({id: id, status: 'WIP'})
      this.$router.push('/home')
    },
    PostVersion () {
      this.editeable.device = this.editeable.device.text
      if (this.editeable.device === 'Windows' || this.editeable.device === 'Updater' || this.editeable.device === 'Shadow Serial' || this.editeable.device === 'Shadow Intel') {
        this.editeable.picture = '/static/Windows.jpg'
      } else {
        if (this.editeable.device === 'Mac OS') {
          this.editeable.picture = '/static/MacOS.jpg'
        } else {
          if (this.editeable.device === 'Shadow Box') {
            this.editeable.picture = '/static/shadow-box.jpg'
          } else {
            if (this.editeable.device === 'IOS') {
              this.editeable.picture = '/static/IOS.jpg'
            } else {
              if (this.editeable.device === 'Android') {
                this.editeable.picture = '/static/Google.jpg'
              } else {
                if (this.editeable.device === 'O-Capture') {
                  this.editeable.picture = '/static/O-Capture.jpg'
                } else {
                  if (this.editeable.device === 'O-Controller' || this.editeable.device === 'Shadow Input') {
                    this.editeable.picture = '/static/O-Controler.jpg'
                  }
                }
              }
            }
          }
        }
      }
      if (this.edition === false) {
        const response = VersionService.addVersion(this.editeable)
        console.log(response)
      } else {
        const response = VersionService.updateVersion(this.editeable)
        console.log(response)
      }
      NewsService.Post({
        text: this.editeable.importance + ' : ' + this.editeable.device + ' arrive on ' + this.editeable.version,
        title: 'New version on QA',
        link: '',
        department: 'Test'
      })
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
      this.editeable.target = version.target
      this.editeable.scheduled = version.scheduled
      this.editeable.time = version.time
      if (this.SetFinnished === false) {
        this.dialog = true
      }
    },
    GoTest (url) {
      window.location.assign(url)
    },
    SetAsFinnished (id) {
      this.finnished.id = id
      VersionService.SetAsFinnished(this.finnished)
      if (this.finnished.status === 'GO') {
        NewsService.Post({
          text: this.editeable.device + ' : ' + this.editeable.importance + ' ready on ' + this.editeable.version,
          title: 'New version ready to published',
          link: '',
          department: 'General'
        })
      }
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

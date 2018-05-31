<template>
  <div>
      <div class="profile-cover" style="background: none;">
          <v-parallax style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" :src="version.picture"></v-parallax>
      </div>
      <div style="text-align: center;">
        <v-btn @click="SetAsFinnished = true" outline color="indigo">Set As Finnished</v-btn>
      </div>
  <v-container
    fluid
    grid-list-lg
  >
  <v-layout row justify-center>
    <v-flex style="backgroundColor: rgba(250, 250, 250, 0.5); border-radius: 6px;" xs5>
      <graph :chartData="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></graph>
    </v-flex>
    <v-flex style="padding-top: 0px; margin-top: 0px; border-radius: 6px;" xs5>
      <div style="backgroundColor: rgba(250, 250, 250, 0.9); box-shadow: 1px 1px 1px #555; padding: 5px; padding-left: 20px;">
        <p style="float: right; font-size: 1.2em;">{{ version.date.replace(/T............./g, ' ') }}</p>
        <h2>{{ version.support }}</h2>
        <p>{{ version.version }} ({{ version.state }})</p>
        <v-text-field
              v-model="version.version"
              :rules="[() => version.version.length > 0 || 'This field is required']"
              label="version number"
              class="mt-5"
              required
            ></v-text-field>
            <v-text-field
                  v-model="version.scheduled"
                  :rules="[() => version.scheduled.length > 0 || 'This field is required']"
                  label="scheduled tests"
                  class="mt-5"
                  required
                ></v-text-field>
            <v-text-field
                  v-model="version.time"
                  :rules="[() => version.time.length > 0 || 'This field is required']"
                  label="scheduled time estimated"
                  class="mt-5"
                  required
                ></v-text-field>
        <v-layout row wrap>
          <v-flex xs12 sm12>
            <v-select
              :items="Teams[0]"
              v-model="selected"
              label="Select testers"
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
      </div>
        <div style="backgroundColor: rgba(250, 250, 250, 0.9); padding: 5px; padding-left: 20px; margin-top: 10px; text-align: center; border-radius: 50px;">
          <v-btn @click="ChangeSeverity('remove')" fab dark color="blue" style="float: left;">
            <v-icon dark>remove</v-icon>
          </v-btn>
          <v-btn @click="ChangeSeverity('add')" fab dark color="blue" style="float: right;">
            <v-icon dark>add</v-icon>
          </v-btn>
          <h2><span v-if="version.impact === 'LOW IMPACT'" style="color: green;">{{ version.impact }}</span><span v-if="version.impact === 'MEDIUM IMPACT'" style="color: orange;">{{ version.impact }}</span><span v-if="version.impact === 'HIGH IMPACT'" style="color: red;">{{ version.impact }}</span><span v-if="version.impact === 'PUSH TO PROD'" style="color: purple;">{{ version.impact }}</span></h2>
        </div>
        <div style="backgroundColor: rgba(250, 250, 250, 0.9); box-shadow: 1px 1px 1px #555; padding: 5px; padding-left: 20px; margin-top: 10px; text-align: center; border-radius: 50px;">
          <h2 :class="version.status">{{ version.status }}</h2>
        </div>
    </v-flex>
    <v-flex style="backgroundColor: rgba(250, 250, 250, 0.9); border-radius: 6px;" xs8>
      <h2>Changelogs</h2>
      <v-text-field
        name="changelog"
        v-model="version.changelog"
        multi-line
      ></v-text-field>
    </v-flex>
  </v-layout>
  <v-layout style="margin-top: 50px;" row justify-center>
    <v-flex style="backgroundColor: rgba(250, 250, 250, 0.9); box-shadow: 1px 1px 1px #555; border-radius: 6px;" xs10>
      <h2 style="color: orange;">Warnings</h2>
      <p v-for="(bug, index) in version.Bugs" v-if="bug.status === 'Warning'" :key="index">{{bug.text}}</p>
    </v-flex>
  </v-layout>
  <v-layout style="margin-top: 50px;" row justify-center>
    <v-flex style="backgroundColor: rgba(250, 250, 250, 0.9); box-shadow: 1px 1px 1px #555; border-radius: 6px;" xs10>
      <h2 style="color: red;">Red flags</h2>
      <p v-for="(bug, index) in version.Bugs" v-if="bug.status === 'Red Flag'" :key="index">{{bug.text}}</p>
    </v-flex>
  </v-layout>
  <v-layout style="margin-top: 50px;" row justify-center>
    <v-flex style="backgroundColor: rgba(250, 250, 250, 0.9); box-shadow: 1px 1px 1px #555; border-radius: 6px;" xs10>
      <h2 style="color: black;">Defect</h2>
      <p v-for="(bug, index) in version.Bugs" v-if="bug.status === 'Defect'" :key="index">{{bug.text}}</p>
    </v-flex>
  </v-layout>
  </v-container>
  <v-dialog style="z-index:25;" v-model="AddBug" scrollable max-width="500px">
    <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-flex xs12>
          <v-divider></v-divider>
          <v-select
            :items="['Warning', 'RedFlag', 'Defect']"
            v-model="severity"
            label="severity"
            single-line
          ></v-select>
            <v-text-field
              v-model="Bug"
              name="Bug"
              label="Bug description"
              id="Bug"
              style="width: 100%;"
              textarea
            ></v-text-field>
        </v-flex>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" @click="AddBugf()" flat>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog style="z-index:25;" v-model="SetAsFinnished" scrollable max-width="500px">
    <v-card style="background-color: rgba(250,250,250,1); text-align: center;">
        <v-flex xs12>
          <v-divider></v-divider>
            <v-select
              :items="['GO', 'NOGO', 'CANCELED']"
              v-model="goal.status"
              label="Status"
              single-line
            ></v-select>
            <div style="display: inline-block; width: 45%;">
          <v-text-field
            v-model="goal.passed"
            label="Passed test"
            class="mt-5"
          ></v-text-field>
        </div>
        <div style="display: inline-block; width: 45%;">
          <v-text-field
            v-model="goal.error"
            label="Errored test"
            class="mt-5"
          ></v-text-field>
        </div>
        <div style="display: inline-block; width: 45%;">
          <v-text-field
            v-model="goal.failed"
            label="failed test"
            class="mt-5"
          ></v-text-field>
        </div>
        <div style="display: inline-block; width: 45%;">
          <v-text-field
            v-model="goal.defect"
            label="Defect test"
            class="mt-5"
          ></v-text-field>
        </div>
        <div style="display: inline-block; width: 45%;">
          <v-text-field
            v-model="goal.oth"
            label="OTH test"
            class="mt-5"
          ></v-text-field>
        </div>
        </v-flex>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" @click="AddBugf()" flat>Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn @click="Save()" fab dark color="blue" style="position: fixed; bottom: 10px; right: 10px; ">
    <v-icon dark>save</v-icon>
  </v-btn>
  <v-btn @click="AddBug = true" fab dark color="blue" style="position: fixed; bottom: 10px; right: 75px; ">
    <v-icon dark>bug_report</v-icon>
  </v-btn>
  </div>
</template>
<script>
/* eslint-disable */
import VersionService from '@/services/VersionService'
import AccountService from '@/services/AccountService'

import graph from './QARG.js'

export default {
  name: 'Displayer',
  components: {
    graph
  },
  data () {
    return {
      goal: {
        status: '',
        passed: 0,
        failed: 0,
        error: 0,
        oth: 0,
        defect: 0
      },
      AddBug: false,
      SetAsFinnished: false,
      Bug: '',
      severity: '',
      version: [],
      Warning: [],
      RedFlag: [],
      Defect: [],
      Teams: [],
      selected: [],
      severity: ['LOW IMPACT', 'MEDIUM IMPACT', 'HIGH IMPACT', 'PUSH TO PROD'],
      datacollection: {
        labels: ['OK', 'Error', 'KO', 'Defect', 'Other outcome'],
        datasets: [{
          data: [50, 20, 20, 1, 3],
          backgroundColor: ['green', 'orange', 'red', 'black', 'purple']
        }]
      }
    }
  },
  mounted () {
    this.getVersion(this.$route.params.id)
    this.GetByTeam()
  },
  methods: {
    async getVersion (id) {
      const response = await VersionService.getById(id)
      this.version = response.data.versions
      // let data = [response.data.versions.rPassed, response.data.versions.rError, response.data.versions.rFailed, response.data.versions.rDefect, response.data.versions.rOth]
      this.datacollection.datasets[0].data[0] = response.data.versions.rPassed
      this.datacollection.datasets[0].data[1] = response.data.versions.rError
      this.datacollection.datasets[0].data[2] = response.data.versions.rFailed
      this.datacollection.datasets[0].data[3] = response.data.versions.rDefect
      this.datacollection.datasets[0].data[4] = response.data.versions.rOth
      this.selected = response.data.versions.tester
    },
    ChangeSeverity (action) {
      let vue = this
      if (vue.version.impact === 'LOW IMPACT') {
        if (action === 'add') {
          vue.version.impact = 'MEDIUM IMPACT'
        }
      }
      else if (vue.version.impact === 'MEDIUM IMPACT') {
        if (action === 'add') {
          vue.version.impact = 'HIGH IMPACT'
        } else {
          vue.version.impact = 'LOW IMPACT'
        }
      }
      else if (vue.version.impact === 'HIGH IMPACT') {
        if (action === 'add') {
          vue.version.impact = 'PUSH TO PROD'
        } else {
          vue.version.impact = 'MEDIUM IMPACT'
        }
      }
      else if (vue.version.impact === 'PUSH TO PROD') {
        if (action === 'remove') {
          vue.version.impact = 'HIGH IMPACT'
        }
      }
    },
    Publish () {
      let vue = this
      vue.version.tester = vue.selected
      VersionService.updateVersion(this.version)
      VersionService.SetAsFinnished(vue.goal)
    },
    Save () {
      let vue = this
      vue.version.tester = vue.selected
      VersionService.updateVersion(this.version)
    },
    AddBugf () {
      let vue = this
      console.log(vue.version)
      if (vue.version.Bugs) {
        vue.version.Bugs.push({status: vue.severity, text: Bug.value})
      } else {
        vue.version.Bugs = [{status: vue.severity, text: Bug.value}]
      }
    },
    GetByTeam () {
      var vue = this
      vue.Teams = []
      AccountService.FindByDep('Test').then((response) => {
        vue.Teams.push(response.data.users)
      })
    }
  }
}
</script>
<style>
.GO {
  color: green;
}
.NOGO {
  color: red;
}
.WIP {
  color: blue;
}
</style>

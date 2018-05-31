<template>
  <div>
      <div class="profile-cover" style="background: none;">
          <v-parallax style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px;" :src="version.picture"></v-parallax>
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
        <p>{{ version.scheduled }} tests for {{ version.time }}</p>
        <v-chip v-for="(pers, index) in version.tester" :key="index">
        <v-avatar class="teal">
          <img :src="'./static/profil/' + pers + '.png'" alt="trevor">
        </v-avatar>
          {{ pers }}
        </v-chip>
      </div>
        <div style="backgroundColor: rgba(250, 250, 250, 0.9); padding: 5px; padding-left: 20px; margin-top: 10px; text-align: center; border-radius: 50px;">
          <h2><span v-if="version.impact === 'LOW IMPACT'" style="color: green;">{{ version.impact }}</span><span v-if="version.impact === 'MEDIUM IMPACT'" style="color: orange;">{{ version.impact }}</span><span v-if="version.impact === 'HIGH IMPACT'" style="color: red;">{{ version.impact }}</span><span v-if="version.impact === 'PUSH TO PROD'" style="color: purple;">{{ version.impact }}</span></h2>
        </div>
        <div style="backgroundColor: rgba(250, 250, 250, 0.9); box-shadow: 1px 1px 1px #555; padding: 5px; padding-left: 20px; margin-top: 10px; text-align: center; border-radius: 50px;">
          <h2 :class="version.status">{{ version.status }}</h2>
        </div>
    </v-flex>
    <v-flex style="backgroundColor: rgba(250, 250, 250, 0.9); border-radius: 6px;" xs8>
      <h2>Changelogs</h2>
      <p v-html="version.changelog"></p>
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
  </div>
</template>
<script>
import VersionService from '@/services/VersionService'

import graph from './QARG.js'

export default {
  name: 'Displayer',
  components: {
    graph
  },
  data () {
    return {
      version: [],
      Warning: [],
      RedFlag: [],
      Defect: [],
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

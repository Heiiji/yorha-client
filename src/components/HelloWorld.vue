<template>
  <div class="newsFeed">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex style="display: none;" xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">12</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs8>
          <v-card dark color="secondary">
            <v-card-text class="px-0">Actu</v-card-text>
          </v-card>
          <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
            <v-card-text class="px-0"><strong>Datacenter Burning :</strong> Data 4 a brulé dans un grand feu de joie. L'équipe a cependant super bien géré la période de crise. </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">Working version</v-card-text>
          </v-card>
          <v-list>
            <v-list-group v-model="item.active"
                          v-for="item in versions"
                          :key="item._id"
                          style="display: block"
                          no-action>
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.support }} <strong>{{ item.version }}</strong> recieved : {{ item.date.replace(/T............./g, ' ') }} => <span :class="item.status">{{ item.status }}</span></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <p style="white-space: pre; text-align: left;">{{ item.changelog }}</p>
              <v-avatar style="position: absolute; right: 2px; top: 2px;" size="50px" tile>
                <img :src="item.picture" style=" border-radius: 25px" />
              </v-avatar>
            </v-list-group>
          </v-list>
        </v-flex>
        <v-flex style="opacity: 0;" xs8>
          <v-card dark color="secondary">
            <v-card-text class="px-0">Actu</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">Passed version</v-card-text>
          </v-card>
          <v-list>
            <v-list-group v-model="item.active"
                          v-for="item in passed"
                          :key="item._id"
                          style="display: block"
                          no-action>
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.support }} <strong>{{ item.version }}</strong> recieved : {{ item.date.replace(/T............./g, ' ') }} => <span :class="item.status">{{ item.status }}</span></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <p style="white-space: pre; text-align: left;">{{ item.changelog }}</p>
              <v-avatar style="position: absolute; right: 2px; top: 2px;" size="50px" tile>
                <img :src="item.picture" style=" border-radius: 25px" />
              </v-avatar>
            </v-list-group>
          </v-list>
        </v-flex>
        <v-flex xs8>
          <v-card dark color="secondary">
            <v-card-text class="px-0">Feedback</v-card-text>
          </v-card>
          <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
            <v-card-text class="px-0">Une pluie de donuts serait super sur la homepage !! </v-card-text>
            <label style="color: green; position: absolute; top: 10px; right: 10px;">14 up</label>
            <label style="color: red; position: absolute; bottom: 10px; right: 10px;">33 down</label>
          </v-card>
          <v-divider></v-divider>
          <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
            <v-card-text class="px-0">Une ovation pour le president lors de sa connexion :) </v-card-text>
            <label style="color: green; position: absolute; top: 10px; right: 10px;">89 up</label>
            <label style="color: red; position: absolute; bottom: 10px; right: 10px;">2 down</label>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      versions: [],
      passed: []
    }
  },
  mounted () {
    this.getVersion()
  },
  methods: {
    async getVersion () {
      const response = await VersionService.fetchPosts('current')
      this.versions = response.data.versions
      const responses = await VersionService.fetchPosts('old')
      this.passed = responses.data.versions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.GO {
  color: green;
}
.WIP {
  color: blue;
}
.newsFeed{
  display: block;
  position: relative;
  width: 90%;
  padding: 5%;
  margin: 5%;
  margin-top: 0px;
  padding-top: 0px;
}
.news{
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 1px 1px 12px #555;
  padding: 10px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

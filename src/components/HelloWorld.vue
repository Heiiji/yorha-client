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
            <v-card-text class="px-0">Actu (inactive)</v-card-text>
          </v-card>
          <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
            <v-card-text class="px-0"><strong>Datacenter Burning :</strong> Data 4 a brulé dans un grand feu de joie. L'équipe a cependant super bien géré la période de crise. </v-card-text>
          </v-card>
          <v-divider></v-divider>
          <v-card dark style="color: black; text-align: left; padding: 20px;" color="white">
              <v-card-text class="px-0" style="color:rgb(200, 200, 60);"><strong>Windows Update :</strong> La Spring creator update a été publiée, attention a la casse ! </v-card-text>
          </v-card>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs4>
          <QwickLook target="current">
          </QwickLook>
        </v-flex>
        <v-flex xs8>
          <v-card dark color="secondary">
            <v-card-text class="px-0">Feedback (inactive)</v-card-text>
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
        <v-flex xs4>
          <QwickLook target="finnish">
          </QwickLook>
        </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'
import QwickLook from '@/components/versions/WorkingDisplay.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      versions: [],
      passed: [],
      target: 'current'
    }
  },
  mounted () {
    this.getVersion()
  },
  components: {
    QwickLook
  },
  methods: {
    async getVersion () {
      const response = await VersionService.fetchPosts('current')
      this.versions = response.data.versions
      const responses = await VersionService.fetchPosts('finnish')
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
.NOGO {
  color: red;
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

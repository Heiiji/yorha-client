<template>
  <div class="newsFeed">

    <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card style="z-index: 20;">
        <v-toolbar color="blue" dark>
          <v-toolbar-title>Working Version</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list>
          <v-list-group
            v-model="item.active"
            v-for="item in versions"
            :key="item._id"
            style="display: block"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.support }} {{ item.version }} recieved : {{ item.date.replace(/T............./g, ' ') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-tile style="white-space: pre;">{{ item.changelog }}</v-tile>
            <v-avatar style="position: absolute; right: 2px; top: 2px;" size="50px" tile>
              <img :src="item.picture" style=" border-radius: 25px"/>
            </v-avatar>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
<br/>
  <v-layout row>
  <v-flex xs12 sm10 offset-sm1>
    <v-card style="z-index: 20;">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>Actu</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
  </v-flex>
</v-layout>
  </div>
</template>

<script>
import VersionService from '@/services/VersionService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      versions: []
    }
  },
  mounted () {
    this.getVersion('current')
  },
  methods: {
    async getVersion (arg) {
      const response = await VersionService.fetchPosts(arg)
      this.versions = response.data.versions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsFeed{
  display: block;
  position: relative;
  width: 90%;
  padding: 5%;
  margin: 5%;
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

<template>
  <div>
    <span v-if="target === 'current'" >
      <v-card dark color="primary">
        <v-card-text class="px-0">Working version</v-card-text>
      </v-card>
      <v-list>
        <v-list-group v-model="item.active"
                      v-for="item in versions"
                      :key="item._id"
                      style="display: block;  overflow: hidden;"
                      no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.support }} <strong>{{ item.version }}</strong> recieved : {{ item.date.replace(/T............./g, ' ') }} => <span :class="item.status">{{ item.status }}</span></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <p style="text-align: left; word-wrap: break-word; width: 100%;">{{ item.changelog }}</p>
        </v-list-group>
      </v-list>
    </span>
    <span v-else >
      <v-card dark color="primary">
        <v-card-text class="px-0">Passed version</v-card-text>
      </v-card>
      <v-list>
        <v-list-group v-model="item.active"
                      v-for="item in versions"
                      :key="item._id"
                      style="display: block;  overflow: hidden;"
                      @click="$router.push('/version/id/' + item._id)">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title><v-icon v-if="item.status === 'GO'">check circle</v-icon><v-icon v-if="item.status === 'NOGO'">error</v-icon>{{ item.support }} <strong>{{ item.version }}</strong> => <span :class="item.status">{{ item.score }}% : {{ item.status }}</span></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </span>
  </div>
</template>
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
<script>
import VersionService from '@/services/VersionService'

export default {
  name: 'QuickDisplay',
  data () {
    return {
      versions: []
    }
  },
  mounted () {
    this.getVersion()
  },
  props: {
    target: ''
  },
  methods: {
    async getVersion () {
      const response = await VersionService.fetchPosts(this.target)
      this.versions = response.data.versions
      this.versions.forEach(function (element) {
        element.changelog.replace(/\n/g, '<br />')
      })
    }
  }
}
</script>

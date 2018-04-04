<template>
  <div>
    <div style="background-color: rgba(200, 200, 200, 0.2); min-height: 100%; width: 75%; margin-left: 12.5%; padding: 20px;">
      <br/>
      <img :src="version.picture" style="float: right; width: 400px; margin: 15px;" />
      <h2 style="text-align:center; padding: 5px;">{{ version.support }} - {{ version.version }} ({{ version.state }})</h2>
      <h4 style="text-align:center; padding: 10px;">{{ version.date.replace(/T............./g, ' ') }}</h4>
      <h3 :class="version.status" style="text-align: center;" >{{ version.status }}</h3>
      <div style="display: inline-block;">
        <span>tested by : {{ version.tester }}</span>
        <br/><br/>
        <h4>Changelog : </h4>
        <p style="white-space: pre; text-align: left;">{{ version.changelog }}</p>
      </div>
      <h3>Bug on this release : </h3>
      <p>{{ version.Bugs }}</p>
    </div>
  </div>
</template>
<script>
import VersionService from '@/services/VersionService'

export default {
  name: 'Displayer',
  data () {
    return {
      version: []
    }
  },
  mounted () {
    this.getVersion(this.$route.params.id)
  },
  methods: {
    async getVersion (id) {
      console.log(id)
      const response = await VersionService.getById(id)
      this.version = response.data.versions
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

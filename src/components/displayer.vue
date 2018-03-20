<template>
  <div>
    <img :src="version.picture" style="display: inline-block;" />
    <div style="display: inline-block;">
      <h2>{{ version.support }} - {{ version.version }}</h2>
      <p>{{ version.state }}<p>
      <h4>{{ version.date.replace(/T............./g, ' ') }}</h4>
      <h3 :class="version.status" >{{ version.status }}</h3>
      <span>tested by : {{ version.tester }}</span>
      <br/><br/>
      <h4>Changelog : </h4>
      <p style="white-space: pre; text-align: left;">{{ version.changelog }}</p>
    </div>
    <h3>Bug on this release : </h3>
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

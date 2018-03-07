<template>
  <div>
<br/><br/>
    <div style="position: relative; width: 40%; display: inline-block; padding: 0px; margin: 4%;">
      <h3>Zotac</h3>
      <hr/>
      <h5>PROD:valid</h5>
      <span style="white-space: pre;">{{ version.prodvalid.zotac }}</span>
      <h5>PREPROD:valid</h5>
      <span style="white-space: pre;">{{ version.preprodvalid.zotac }}</span>
      <h5>PROD</h5>
      <span style="white-space: pre;">{{ version.prod.zotac }}</span>
      <h5>PREPROD</h5>
      <span style="white-space: pre;">{{ version.preprod.zotac }}</span>
    </div>
    <div style="position: relative; width: 40%; display: inline-block; padding: 0px; margin: 4%;">
      <h3>Online</h3>
      <hr/>
      <h5>PROD:valid</h5>
      <span style="white-space: pre;">{{ version.prodvalid.normal }}</span>
      <h5>PREPROD:valid</h5>
      <span style="white-space: pre;">{{ version.preprodvalid.normal }}</span>
      <h5>PROD</h5>
      <span style="white-space: pre;">{{ version.prod.normal }}</span>
      <h5>PREPROD</h5>
      <span style="white-space: pre;">{{ version.preprod.normal }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'overview',
  data () {
    return {
      version: {
        preprodvalid: {
          zotac: [],
          normal: []
        },
        preprod: {
          zotac: [],
          normal: []
        },
        prodvalid: {
          zotac: [],
          normal: []
        },
        prod: {
          zotac: [],
          normal: []
        }
      }
    }
  },
  mounted () {
    this.getVersion()
  },
  methods: {
    async getVersion () {
      axios.get('http://localhost:8081/overview/gap/preprodvalid').then((response) => {
        this.version.preprodvalid.normal = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/zotac/preprodvalid').then((response) => {
        this.version.preprodvalid.zotac = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/gap/prodvalid').then((response) => {
        this.version.prodvalid.normal = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/zotac/prodvalid').then((response) => {
        this.version.prodvalid.zotac = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/gap/preprod').then((response) => {
        this.version.preprod.normal = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/zotac/preprod').then((response) => {
        this.version.preprod.zotac = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/gap/prod').then((response) => {
        this.version.prod.normal = response.data
        console.log(response.data)
      })
      axios.get('http://localhost:8081/overview/zotac/prod').then((response) => {
        this.version.prod.zotac = response.data
        console.log(response.data)
      })
    }
  }
}
</script>

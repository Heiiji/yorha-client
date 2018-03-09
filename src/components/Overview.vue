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
      <h3>GAP</h3>
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
import Api from '@/services/Api'

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
      Api().get('overview/gap/preprodvalid').then((response) => {
        this.version.preprodvalid.normal = response.data.replace(/\/windows-toolbox\/preprod:valid\//g, '-')
        this.version.preprodvalid.normal = this.version.preprodvalid.normal.replace(/\/windows-toolbox\/prod:valid\//g, '-')
        this.version.preprodvalid.normal = this.version.preprodvalid.normal.replace(/{(.*?)}/g, ' ')
        this.version.preprodvalid.normal = this.version.preprodvalid.normal.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/zotac/preprodvalid').then((response) => {
        this.version.preprodvalid.zotac = response.data.replace(/\/windows-toolbox\/preprod:valid\//g, '-')
        this.version.preprodvalid.zotac = this.version.preprodvalid.zotac.replace(/\/windows-toolbox\/prod:valid\//g, '-')
        this.version.preprodvalid.zotac = this.version.preprodvalid.zotac.replace(/{(.*?)}/g, ' ')
        this.version.preprodvalid.zotac = this.version.preprodvalid.zotac.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/gap/prodvalid').then((response) => {
        this.version.prodvalid.normal = response.data.replace(/\/windows-toolbox\/preprod:valid\//g, '-')
        this.version.prodvalid.normal = this.version.prodvalid.normal.replace(/\/windows-toolbox\/prod:valid\//g, '-')
        this.version.prodvalid.normal = this.version.prodvalid.normal.replace(/{(.*?)}/g, ' ')
        this.version.prodvalid.normal = this.version.prodvalid.normal.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/zotac/prodvalid').then((response) => {
        this.version.prodvalid.zotac = response.data.replace(/\/windows-toolbox\/preprod:valid\//g, '-')
        this.version.prodvalid.zotac = this.version.prodvalid.zotac.replace(/\/windows-toolbox\/prod:valid\//g, '-')
        this.version.prodvalid.zotac = this.version.prodvalid.zotac.replace(/{(.*?)}/g, ' ')
        this.version.prodvalid.zotac = this.version.prodvalid.zotac.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/gap/preprod').then((response) => {
        this.version.preprod.normal = response.data.replace(/\/windows-toolbox\/preprod\//g, '-')
        this.version.preprod.normal = this.version.preprod.normal.replace(/\/windows-toolbox\/prod\//g, '-')
        this.version.preprod.normal = this.version.preprod.normal.replace(/{(.*?)}/g, ' ')
        this.version.preprod.normal = this.version.preprod.normal.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/zotac/preprod').then((response) => {
        this.version.preprod.zotac = response.data.replace(/\/windows-toolbox\/preprod\//g, '-')
        this.version.preprod.zotac = this.version.preprod.zotac.replace(/\/windows-toolbox\/prod\//g, '-')
        this.version.preprod.zotac = this.version.preprod.zotac.replace(/{(.*?)}/g, ' ')
        this.version.preprod.zotac = this.version.preprod.zotac.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/gap/prod').then((response) => {
        this.version.prod.normal = response.data.replace(/\/windows-toolbox\/preprod\//g, '-')
        this.version.prod.normal = this.version.prod.normal.replace(/\/windows-toolbox\/prod\//g, '-')
        this.version.prod.normal = this.version.prod.normal.replace(/{(.*?)}/g, ' ')
        this.version.prod.normal = this.version.prod.normal.replace(/-[0-9](.*?) /g, ' ')
      })
      Api().get('overview/zotac/prod').then((response) => {
        this.version.prod.zotac = response.data.replace(/\/windows-toolbox\/preprod\//g, '-')
        this.version.prod.zotac = this.version.prod.zotac.replace(/\/windows-toolbox\/prod\//g, '-')
        this.version.prod.zotac = this.version.prod.zotac.replace(/{(.*?)}/g, ' ')
        this.version.prod.zotac = this.version.prod.zotac.replace(/-[0-9](.*?) /g, ' ')
      })
    }
  }
}
</script>

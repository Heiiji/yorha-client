<template>
  <div>
<br/><br/>
    <div style="position: relative; width: 40%; display: inline-block; padding: 0px; margin: 4%;">
      <h3>Zotac (Local)</h3>
      <hr/>
      <h5 :class="prodvalid" >PROD:valid</h5>
      <span :class="prodvalid" style="white-space: pre;">{{ version.prodvalid.zotac }}</span>
      <h5 :class="preprodvalid">PREPROD:valid</h5>
      <span :class="preprodvalid" style="white-space: pre;">{{ version.preprodvalid.zotac }}</span>
      <h5 :class="prod">PROD</h5>
      <span :class="prod" style="white-space: pre;">{{ version.prod.zotac }}</span>
      <h5 :class="preprod">PREPROD</h5>
      <span :class="preprod" style="white-space: pre;">{{ version.preprod.zotac }}</span>
    </div>
    <div style="position: relative; width: 40%; display: inline-block; padding: 0px; margin: 4%;">
      <h3>Oblivion (Online)</h3>
      <hr/>
      <h5 :class="prodvalid">PROD:valid</h5>
      <span :class="prodvalid" style="white-space: pre;">{{ version.prodvalid.normal }}</span>
      <h5 :class="preprodvalid">PREPROD:valid</h5>
      <span :class="preprodvalid" style="white-space: pre;">{{ version.preprodvalid.normal }}</span>
      <h5 :class="prod">PROD</h5>
      <span :class="prod" style="white-space: pre;">{{ version.prod.normal }}</span>
      <h5 :class="preprod">PREPROD</h5>
      <span :class="preprod" style="white-space: pre;">{{ version.preprod.normal }}</span>
    </div>
  </div>
</template>

<script>
import Api from '@/services/ApiLocal'

export default {
  name: 'overview',
  data () {
    return {
      prod: '',
      preprod: '',
      prodvalid: '',
      preprodvalid: '',
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
        this.version.preprodvalid.normal = response.data
        Api().get('overview/zotac/preprodvalid').then((response) => {
          this.version.preprodvalid.zotac = response.data
          if (this.version.preprodvalid.normal === this.version.preprodvalid.zotac) {
            this.preprodvalid = 'good'
          } else {
            this.preprodvalid = 'notsync'
          }
          console.log(this.version.preprodvalid.normal)
          // /windows-toolbox/prod:valid/Watchdog-1.12.16.msi {CD07A4D1-FE8F-4B19-9B39-8E2BF1E32104} 1.12.16
          this.version.preprodvalid.normal = this.version.preprodvalid.normal.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.preprodvalid.zotac = this.version.preprodvalid.zotac.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
        })
      })

      Api().get('overview/gap/prodvalid').then((response) => {
        this.version.prodvalid.normal = response.data
        Api().get('overview/zotac/prodvalid').then((response) => {
          this.version.prodvalid.zotac = response.data
          if (this.version.prodvalid.normal === this.version.prodvalid.zotac) {
            this.prodvalid = 'good'
          } else {
            this.prodvalid = 'notsync'
          }

          this.version.prodvalid.normal = this.version.prodvalid.normal.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.prodvalid.zotac = this.version.prodvalid.zotac.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
        })
      })

      Api().get('overview/gap/preprod').then((response) => {
        this.version.preprod.normal = response.data
        Api().get('overview/zotac/preprod').then((response) => {
          this.version.preprod.zotac = response.data
          if (this.version.preprod.normal === this.version.preprod.zotac) {
            this.preprod = 'good'
          } else {
            this.preprod = 'notsync'
          }

          this.version.preprod.normal = this.version.preprod.normal.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.preprod.zotac = this.version.preprod.zotac.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
        })
      })

      Api().get('overview/gap/prod').then((response) => {
        this.version.prod.normal = response.data
        Api().get('overview/zotac/prod').then((response) => {
          this.version.prod.zotac = response.data
          if (this.version.prod.normal === this.version.prod.zotac) {
            this.prod = 'good'
          } else {
            this.prod = 'notsync'
          }

          this.version.prod.normal = this.version.prod.normal.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.prod.zotac = this.version.prod.zotac.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
        })
      })
    }
  }
}
</script>

<style>
h5 {
  margin: 10px;
}
.good {
  color: green;
}
.notsync {
  color: red;
}
</style>

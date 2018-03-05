<template>
  <div>
    <div style="position: relative; width: 40%; display: inline-block; padding: 0px; margin: 4%;">
      <h3>Zotac</h3>
      <hr/>
      <h5>PROD:valid</h5>
      {{ version.prodvalid.zotac }}
      <h5>PREPROD:valid</h5>
      {{ version.preprodvalid.zotac }}
      <h5>PROD</h5>
      {{ version.prod.zotac }}
      <h5>PREPROD</h5>
      {{ version.preprod.zotac }}
    </div>
    <div style="position: relative; width: 40%; display: inline-block; padding: 0px; margin: 4%;">
      <h3>Online</h3>
      <hr/>
      <h5>PROD:valid</h5>
      {{ version.prodvalid.normal }}
      <h5>PREPROD:valid</h5>
      {{ version.preprodvalid.normal }}
      <h5>PROD</h5>
      {{ version.prod.normal }}
      <h5>PREPROD</h5>
      {{ version.preprod.normal }}
    </div>
  </div>
</template>

<script>
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
      this.$http.get('http://gap.blade-group.fr/windows-toolbox/preprod:valid/foreign').then((response) => {
        this.version.preprodvalid.normal = response
      })
      this.$http.get('http://192.168.0.50/windows-toolbox/preprod:valid/foreign').then((response) => {
        this.version.preprodvalid.zotac = response
      })
      this.$http.get('http://gap.blade-group.fr/windows-toolbox/prod:valid/foreign').then((response) => {
        this.version.prodvalid.normal = response
      })
      this.$http.get('http://192.168.0.50/windows-toolbox/prod:valid/foreign').then((response) => {
        this.version.prodvalid.zotac = response
      })

      this.$http.get('http://gap.blade-group.fr/windows-toolbox/preprod/foreign').then((response) => {
        this.version.preprod.normal = response
      })
      this.$http.get('http://192.168.0.50/windows-toolbox/preprod/foreign').then((response) => {
        this.version.preprod.zotac = response
      })
      this.$http.get('http://gap.blade-group.fr/windows-toolbox/prod/foreign').then((response) => {
        this.version.prod.normal = response
      })
      this.$http.get('http://192.168.0.50/windows-toolbox/prod/foreign').then((response) => {
        this.version.prod.zotac = response
      })
    }
  }
}
</script>

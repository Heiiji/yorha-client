<template>
  <div>
            <div style="text-align: left; position: relative; width: 100%; padding-bottom: 90px; margin-bottom: -90px;" class="page-title">
                <h3>Overview</h3>
                <button class="btn btn-primary btn-block" @click="getVersion()" style="width: 150px; position: absolute; right: 20px; top: 10px;">Refresh</button>
            </div>
            <v-layout style="margin-top: 10px; padding: 40px; padding-top: 0px;" row wrap>
              <v-flex xs6 style="z-index: 1;"><h2 style="text-align: center;">Prod</h2></v-flex>
              <v-flex xs6 style="z-index: 1;"><h2 style="text-align: center;">PreProd</h2></v-flex>
              <v-flex xs6>
                <v-flex
                  v-for="(str, index) in version.prod.normal"
                  :key="index"
                  v-if="str !== ''"
                  style="padding: 5px; width: 50%; display: inline-block;"
                >
                  <v-card>
                    <v-card-media
                      src="/static/O-Controler.jpg"
                      height="150px"
                      v-if="getName(str) === 'oController' || getName(str) === 'OPadInput' || getName(str) === 'ShadowInput'"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-media
                      src="/static/O-Capture.jpg"
                      height="150px"
                      v-else-if="getName(str) === 'OCapture'"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-media
                      src="/static/Windows.jpg"
                      height="150px"
                      v-else
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-actions v-if="version.prod.normal[index] === version.prod.zotac[index]">
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>check</v-icon>
                      </v-btn>
                      <span style="font-size: 1.2em; padding-top: 10px; color: green;">Synced</span>
                    </v-card-actions>
                    <v-card-actions v-else>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>check</v-icon>
                      </v-btn>
                      <span style="font-size: 1.2em; padding-top: 10px; color: red;">Not Synced</span>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-flex>
              <v-flex xs6 style="border-left-style: solid; border-color: black; border-width: 1px;">
                <v-flex
                  v-for="(str, index) in version.preprod.normal"
                  :key="index"
                  v-if="str !== ''"
                  style="padding: 5px; width: 50%; display: inline-block;"
                >
                  <v-card>
                    <v-card-media
                      src="/static/O-Controler.jpg"
                      height="150px"
                      v-if="getName(str) === 'oController' || getName(str) === 'OPadInput' || getName(str) === 'ShadowInput'"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-media
                      src="/static/O-Capture.jpg"
                      height="150px"
                      v-else-if="getName(str) === 'OCapture'"
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-media
                      src="/static/Windows.jpg"
                      height="150px"
                      v-else
                    >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-actions v-if="version.preprod.normal[index] === version.preprod.zotac[index]">
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>check</v-icon>
                      </v-btn>
                      <span style="font-size: 1.2em; padding-top: 10px; color: green;">Synced</span>
                    </v-card-actions>
                    <v-card-actions v-else>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>check</v-icon>
                      </v-btn>
                      <span style="font-size: 1.2em; padding-top: 10px; color: red;">Not Synced</span>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-flex>
              </v-layout>
              <v-layout style="margin-top: 10px; padding: 40px; padding-top: 0px;" row wrap>
                <v-flex xs6 style="z-index: 1;"><h2 style="text-align: center;">Prod:valid</h2></v-flex>
                <v-flex xs6 style="z-index: 1;"><h2 style="text-align: center;">PreProd:valid</h2></v-flex>
                <v-flex xs6>
                  <v-flex
                    v-for="(str, index) in version.prodvalid.normal"
                    :key="index"
                    v-if="str !== ''"
                    style="padding: 5px; width: 50%; display: inline-block;"
                  >
                    <v-card>
                      <v-card-media
                        src="/static/O-Controler.jpg"
                        height="150px"
                        v-if="getName(str) === 'oController' || getName(str) === 'OPadInput' || getName(str) === 'ShadowInput'"
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-media
                        src="/static/O-Capture.jpg"
                        height="150px"
                        v-else-if="getName(str) === 'OCapture'"
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-media
                        src="/static/Windows.jpg"
                        height="150px"
                        v-else
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-actions v-if="version.prodvalid.normal[index] === version.prodvalid.zotac[index]">
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>check</v-icon>
                        </v-btn>
                        <span style="font-size: 1.2em; padding-top: 10px; color: green;">Synced</span>
                      </v-card-actions>
                      <v-card-actions v-else>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>check</v-icon>
                        </v-btn>
                        <span style="font-size: 1.2em; padding-top: 10px; color: red;">Not Synced</span>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-flex>
                <v-flex xs6 style="border-left-style: solid; border-color: black; border-width: 1px;">
                  <v-flex
                    v-for="(str, index) in version.preprodvalid.normal"
                    :key="index"
                    v-if="str !== ''"
                    style="padding: 5px; width: 50%; display: inline-block;"
                  >
                    <v-card>
                      <v-card-media
                        src="/static/O-Controler.jpg"
                        height="150px"
                        v-if="getName(str) === 'oController' || getName(str) === 'OPadInput' || getName(str) === 'ShadowInput'"
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-media
                        src="/static/O-Capture.jpg"
                        height="150px"
                        v-else-if="getName(str) === 'OCapture'"
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-media
                        src="/static/Windows.jpg"
                        height="150px"
                        v-else
                      >
                        <v-container fill-height fluid>
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <span style="background-color: rgba(10, 11, 18, 0.3); border-radius: 5px; padding: 5px;" class="headline white--text" v-text="str"></span>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-media>
                      <v-card-actions v-if="version.preprodvalid.normal[index] === version.preprodvalid.zotac[index]">
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>check</v-icon>
                        </v-btn>
                        <span style="font-size: 1.2em; padding-top: 10px; color: green;">Synced</span>
                      </v-card-actions>
                      <v-card-actions v-else>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                          <v-icon>check</v-icon>
                        </v-btn>
                        <span style="font-size: 1.2em; padding-top: 10px; color: red;">Not Synced</span>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-flex>
                </v-layout>
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
    getName (str) {
      let tmp = str.replace(/^([^ ]+) ([0-9.]{5,})/gi, '$1')
      console.log(str)
      console.log(tmp)
      return tmp
    },
    async getVersion () {
      Api().get('overview/gap/preprodvalid').then((response) => {
        let normal = ''
        let zotac = ''
        normal = response.data
        Api().get('overview/zotac/preprodvalid').then((response) => {
          zotac = response.data
          normal = normal.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          zotac = zotac.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.preprodvalid.normal = normal.split('\n')
          this.version.preprodvalid.zotac = zotac.split('\n')
        })
      })

      Api().get('overview/gap/prodvalid').then((response) => {
        let normal = ''
        let zotac = ''
        normal = response.data
        Api().get('overview/zotac/prodvalid').then((response) => {
          zotac = response.data
          normal = normal.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          zotac = zotac.replace(/\/windows-toolbox\/[perod]+:valid\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.prodvalid.normal = normal.split('\n')
          this.version.prodvalid.zotac = zotac.split('\n')
        })
      })

      Api().get('overview/gap/preprod').then((response) => {
        let normal = ''
        let zotac = ''
        normal = response.data
        Api().get('overview/zotac/preprod').then((response) => {
          zotac = response.data
          normal = normal.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          zotac = zotac.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.preprod.normal = normal.split('\n')
          this.version.preprod.zotac = zotac.split('\n')
        })
      })

      Api().get('overview/gap/prod').then((response) => {
        let normal = ''
        let zotac = ''
        normal = response.data
        Api().get('overview/zotac/prod').then((response) => {
          zotac = response.data
          normal = normal.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          zotac = zotac.replace(/\/windows-toolbox\/[perod]+\/([A-Z0-9]+)-([0-9.]{5,})\..*/gi, '$1 $2')
          this.version.prod.normal = normal.split('\n')
          this.version.prod.zotac = zotac.split('\n')
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

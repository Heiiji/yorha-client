<style scoped>
  .iframeYT {
    display: inline;
    border: none;
  }
  .iframeYTmedia {
    display: none;
    border: none;
  }
  .containerYT {
    text-align: center;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .containerYT span {
    text-align: center;
  }
  .YTtitle {
    padding-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    max-width: 640px;
  }
  .YTdescriptor {
    text-align: left;
    padding-top: 50px;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    max-width: 640px;
  }
@media (max-width: 960px) {
  .iframeYT {
    display: none;
  }
  .iframeYTmedia {
    display: inline;
  }
}
.page-inner_dark_color, .page-inner_dark_normal {
  background-color: #333333 !important;
  color: white !important;
}
</style>

<template>
  <div class="containerYT" :class="'page-inner_' + $store.state.user.local.theme" style="min-height:951px !important">
    <span v-if="Doc">
      <h2 class="YTtitle">Shadow Live Summary<span v-if="Doc.date">{{' - ' + Doc.date.replace(/..............$/g, '')}}</span></h2>
      <iframe class="iframeYT" width="640" height="360" :src="Doc.link"></iframe>
      <iframe class="iframeYTmedia" width="320" height="180" :src="Doc.link"></iframe>
      <p class="YTdescriptor" v-html="Doc.body.replace(/\r?\n/g, '<br />')"></p>
    </span>
    <span v-else>
      <h1>Chargement</h1>
    </span>
  </div>
</template>
<script>
import DocService from '@/services/docService'

export default {
  name: 'YTShadowLive',
  data () {
    return {
      Doc: []
    }
  },
  mounted () {
    this.getData(this.$route.params.id)
  },
  methods: {
    async getData (id) {
      const response = await DocService.getYTShadowLive(id)
      this.Doc = response.data.doc
      var array = this.Doc.link.split('watch?v=')
      this.Doc.link = array[0] + 'embed/' + array[1]
      this.Doc.date = this.Doc.date.replace(/-/g, '/')
    }
  }
}
</script>

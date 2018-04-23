<template>
  <div style="padding: 100px;">
    <span v-if="Doc">
      <h2>{{Doc.title}} - <span v-if="Doc.date">{{Doc.date.replace(/..............$/g, '.')}}</span></h2>
      <a :href="Doc.link" target="_blank">regarder la video</a>
      <p v-html="Doc.body.replace(/\r?\n/g, '<br />')"></p>
    </span>
    <span v-else>
      <h2>Chargement</h2>
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
    }
  }
}
</script>

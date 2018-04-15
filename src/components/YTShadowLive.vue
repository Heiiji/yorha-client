<template>
  <div>
    <h2 v-if="Doc">{{Doc.title}} - {{Doc.date.replace(/..............$/g, '.')}}</h2>
    <a :href="Doc.link" target="_blank">regarder la video</a>
    <p v-html="Doc.body.replace(/\r?\n/g, '<br />')"></p>
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

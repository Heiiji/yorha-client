import Api from '@/services/Api'

export default {
  PostYTShadowLive (params) {
    return Api().post('/document/YTLiveShadow', params)
  },
  getYTShadowLive (params) {
    return Api().get('/document/YTLiveShadow/' + params)
  }
}

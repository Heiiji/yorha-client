import Api from '@/services/Api'

export default {
  Post (params) {
    return Api().post('/news', params)
  },

  fetchNews () {
    return Api().get('/news')
  }
}

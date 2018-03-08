import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('account/signin', params)
  },

  LogUser (params) {
    return Api().post('account/signup', params)
  }
}

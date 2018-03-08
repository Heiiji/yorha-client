import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('account/login', params)
  },

  LogUser (params) {
    return Api().post('account/signup', params)
  },
}

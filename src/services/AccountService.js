import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('account/signup', params)
  },

  LogUser (params) {
    return Api().post('account/signin', params)
  },

  FindByStatus (params) {
    return Api().get('account/status/' + params)
  },

  ChangeStatus (params) {
    return Api().post('account/status/', params)
  },

  FindUsers (params) {
    return Api().get('account/', params)
  },

  editDescription (params) {
    return Api().put('account/description', params)
  }
}

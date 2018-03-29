import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('account/signup', params)
  },

  LogUser (params) {
    return Api().post('account/signin', params)
  },

  QwickLog (params) {
    console.log(params)
    return Api().put('QwickLogin', params)
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

  FindById (id) {
    return Api().get('/account/' + id)
  },

  editDescription (params) {
    return Api().put('account/description', params)
  },
  editHomeTheme (params) {
    return Api().put('account/homeTheme', params)
  },
  editPhoto (params) {
    console.log(params.file)
    return Api().post('account/photo', params)
  }
}

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

  FindUsersByName (params) {
    return Api().get('accountName/' + params)
  },

  FindByTeam (params) {
    return Api().get('accountTeam/' + params)
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
    return Api().post('account/photo', params)
  },
  editTeam (params) {
    return Api().put('account/team', params)
  }
}

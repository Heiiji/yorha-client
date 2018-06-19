import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('account/signup', params)
  },

  LogUser (params) {
    return Api().post('account/signin', params)
  },

  QwickLog (params) {
    return Api().put('QwickLogin', params)
  },

  GetRand () {
    return Api().get('accountRand')
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

  FindUsersByMail (params) {
    return Api().get('accountMail/' + params)
  },

  FindByTeam (params) {
    return Api().get('accountTeam/' + params)
  },

  FindByDep (params) {
    return Api().get('accountDep/' + params)
  },

  FindByDepartment (params) {
    return Api().get('accountDep/' + params)
  },

  FindById (id) {
    return Api().get('/account/' + id)
  },

  SendMSG (params) {
    return Api().put('SendMSG', params)
  },
  MakeAsRead (param) {
    return Api().put('MakeAsRead', param)
  },

  GetMSG (param) {
    return Api().get('GetMSG/' + param)
  },
  getMyMsg (param) {
    return Api().get('GetMyMsg/' + param)
  },
  SendFeedback (feedback) {
    return Api().put('feedback', feedback)
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
  },
  SetQualifier (param) {
    return Api().put('account/qualifier', param)
  },
  editTel (params) {
    return Api().put('account/tel', params)
  }
}

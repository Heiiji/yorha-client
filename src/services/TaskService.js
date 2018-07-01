import Api from '@/services/Api'

export default {
  GetBoard (token) {
    return Api().get('/GetBoard/' + token)
  },
  GetThisBoard (token, board) {
    return Api().get('/GetThisBoard/' + token + '/' + board)
  },
  PutBoard (params) {
    return Api().put('/PutBoard', params)
  },
  SaveSetting (params) {
    return Api().put('/BoardSet', params)
  },
  GetMine (team, token) {
    return Api().get('/task/' + token + '/' + team)
  },
  Post (params) {
    return Api().post('/task/', params)
  },
  PutTeam (params) {
    return Api().put('/CollTask/', params)
  },
  PutTask (params) {
    return Api().put('/task', params)
  },
  DeleteCard (params) {
    return Api().delete('/task/' + params.token + '/' + params.target)
  },
  DeleteBoard (params) {
    return Api().delete('/board/' + params.token + '/' + params.target)
  },
  SetAsFinnished (params) {
    return Api().put('/FinnishedTask', params)
  }
}

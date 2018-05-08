import Api from '@/services/Api'

export default {
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
  SetAsFinnished (params) {
    return Api().put('/FinnishedTask', params)
  }
}

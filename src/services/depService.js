import Api from '@/services/Api'

export default {
  ChangeDesc (params) {
    return Api().put('/departments/desc', params)
  },
  fetchDep (token, param) {
    return Api().get('/get/dep/' + token + '/' + param)
  }
}

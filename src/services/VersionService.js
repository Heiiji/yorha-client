import Api from '@/services/Api'

export default {
  fetchPosts (arg) {
    return Api().get('version/' + arg)
  },

  addVersion (params) {
    return Api().post('version', params)
  },

  updateVersion (params) {
    return Api().post('version/modify', params)
  },

  SetAsFinnished (params) {
    return Api().post('version/finnished', params)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}

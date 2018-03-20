import axios from 'axios'

export default() => {
  return axios.create({
    // baseURL: 'http://192.168.1.208:8081'
    baseURL: 'http://localhost:8081'
    // baseURL: 'http://vps526554.ovh.net'
  })
}

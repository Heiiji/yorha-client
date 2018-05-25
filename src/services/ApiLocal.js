import axios from 'axios'

/*
  Ici on a l'adresse du scout local dans le batiment
*/

export default() => {
  return axios.create({
    baseURL: 'https://192.168.1.208:8081'
    // baseURL: 'http://localhost:8081'
    // baseURL: 'http://vps526554.ovh.net'
  })
}

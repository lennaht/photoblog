import axios from 'axios'
import config from '../../../server/config' // don't do this in production!

export default () => {
  return axios.create({
    baseURL: 'http://localhost:' + config.port
  })
}

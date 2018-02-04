import axios from 'axios'
import config from '../../../server/config'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:' + config.port
  })
}

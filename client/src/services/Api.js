import axios from 'axios'
import config from '../../../server/config'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:' + config.port // TODO: change port to 8081 again
  })
}

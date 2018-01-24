import Api from '@/services/Api'

export default {
  register (params) {
    return Api().post('register', params)
  },
  login (params) {
    return Api().post('login', params)
  },
  confirmToken (params) {
    return Api().post('confirmToken', params)
  }
}

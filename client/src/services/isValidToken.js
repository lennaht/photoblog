import Vue from 'vue'
import store from '@/store/store'
import router from '@/router/'
import Authentication from './Authentication'

/**
 * Checks if the token stored in vuex store is valid
 */
export default async function () {
  if (store.state.isLoggedIn) {
    try {
      const { token } = store.state
      //eslint-disable-next-line
      const res = await Authentication.confirmToken({ token });
      store.dispatch('setUser', { username: res.data.username, userId: res.data.userId, email: res.data.email })
    } catch (err) {
      blockUnauthenticatedUser()
    }
  } else {
    blockUnauthenticatedUser()
  }
}

function blockUnauthenticatedUser () {
  store.dispatch('setToken', null)
  store.dispatch('setUser', null)

  router.push({
    name: 'Login',
    query: {
      from: 'unauthenticated',
      msg: 'You have to be logged in to access this page.'
    }
  })
}

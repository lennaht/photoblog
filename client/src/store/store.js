import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    userId: null,
    isLoggedIn: false,
    email: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    },
    setUser (state, user) {
      if (user) {
        state.user = user.username
        state.userId = user.userId
        state.email = user.email
      } else {
        state.user = null
        state.userId = null
        state.email = null
      }
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})

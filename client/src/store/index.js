import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    isLoggedIn: false,
    currentUser: {},
    currentLanguage: 'en'
  },
  mutations: {
    setCurrentUser(state, value) {
      state.currentUser = value
    },
    setCurrentLanguage(state, value) {
      state.currentLanguage = value
    },
    logout(state) {
      state.isLoggedIn = false
      state.currentUser = {}
    }
  },
  getters: {
    currentUser: state => state.currentUser,
    isLoggedIn: state => state.isLoggedIn,
    currentLanguage: state => state.currentLanguage
  }
})

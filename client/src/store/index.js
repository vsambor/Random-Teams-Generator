import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    isLoggedIn: false,
    user: {},
    currentLanguage: 'en',
    isAppInitialized: false
  },
  mutations: {
    login(state, authentication) { },
    logout(state) {
      state.isLoggedIn = false
      state.user = {}
    },
    setAppInitialized(state) {
      state.isAppInitialized = true
    },

    setCurrentLanguage(state, data) {

    },
    initCurrentLanguage(state, lang) {
      state.currentLanguage = lang
    }
  },
  getters: {
    isUserLoggedIn: state => {
      return state.user.authentication && state.user.authentication.authenticated
    },

    getCurrentLanguage: state => () => state.currentLanguage
  }
})

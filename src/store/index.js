import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactData: null,
  },

  mutations: {
    CONTACT_DATA(state, payload) {
      alert('Data')
      console.log('VUEX: ', payload)
      state.contactData = payload
    }
  },

  actions: {
  },
  modules: {
  }
})

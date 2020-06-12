import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFilterType: 0,
    essays: [
      {
        id: 1,
        title: 'Finish Vue Screencast',
        status: 1,
        editing: false
      },
      {
        id: 2,
        title: 'Take over world',
        status: 1,
        editing: false
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    remaining (state) {
      /* Check Filter Type = 0 case (no filter) */
      if (state.currentFilterType === 0) {
        return state.essays.length
      }
      return state.essays.filter(essay => essay.status === state.currentFilterType && essay.status !== 4).length
    },
    completed (state) {
      return state.essays.filter(essay => essay.completed).length
    },
    essaysFiltered (state) {
      /* Check Filter Type = 0 case (no filter) before applying filter */
      if (state.currentFilterType === 0) {
        return state.essays
      }
      return state.essays.filter(essay => essay.status === state.currentFilterType)
    }
  }
})

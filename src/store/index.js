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
    addEssay (state, essay) {
      state.essays.push({
        id: essay.id,
        title: essay.title,
        status: 1,
        editing: false
      })
    },
    changeFilter (state, filterNumber) {
      state.currentFilterType = filterNumber
    },
    applyDropdown (state, payload) {
      state.essays.find(essay => essay.id === payload.essayID).status = payload.key
    },
    deleteEssay (state, removeEssayID) {
      this.removeEssayIndex = state.essays.findIndex(essay => essay.id === removeEssayID)
      state.essays.splice(this.removeEssayIndex, 1)
    },
    finishedEdit (state, essay) {
      state.essays.splice(this.index, 1, {
        id: essay.id,
        title: essay.title,
        status: essay.status,
        editing: false
      })
    }
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

import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    currentFilterType: 0,
    essays: [],
    idForEssay: 0
  },
  computed: {
    userID () {
      var user = firebase.auth().currentUser
      alert(user.email)
      if (user != null) {
        return user.email
      } else {
        return null
      }
    }
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
    },
    retrieveEssays (state, essays) {
      state.essays = essays
    }
  },
  actions: {
    addEssay (context, essay) {
      // Add essay with Document ID as essay.id.toString()
      db.collection('userdata').doc(firebase.auth().currentUser.email).collection('essays').doc(essay.id.toString()).set({
        id: essay.id,
        title: essay.title,
        status: 1,
        editing: false,
        timestamp: new Date()
      })
        .then(docRef => {
          context.commit('addEssay', {
            id: essay.id,
            title: essay.title,
            // should i be setting status to essay.status or 1? a bit confused
            status: 1
          })
        })
    },
    changeFilter (context, filterNumber) {
      context.commit('changeFilter', filterNumber)
    },
    applyDropdown (context, payload) {
      db.collection('userdata').doc(firebase.auth().currentUser.email).collection('essays').doc(payload.essayID.toString()).set({
        status: payload.key
      }, { merge: true })
        .then(() => {
          context.commit('applyDropdown', payload)
        })
    },
    deleteEssay (context, removeEssayID) {
      db.collection('userdata').doc(firebase.auth().currentUser.email).collection('essays').doc(removeEssayID.toString()).delete()
        .then(() => {
          context.commit('deleteEssay', removeEssayID)
        })
    },
    finishedEdit (context, essay) {
      // type cast from int to str
      // const id = '' + essay.id
      db.collection('userdata').doc(firebase.auth().currentUser.email).collection('essays').doc(essay.id.toString()).set({
        id: essay.id,
        title: essay.title,
        status: essay.status,
        editing: false,
        timestamp: new Date()
      })
        .then(() => {
          context.commit('finishedEdit', essay)
        })
    },
    retrieveEssays (context) {
      context.state.loading = true
      alert(firebase.auth().currentUser.email)
      db.collection('userdata').doc(firebase.auth().currentUser.email).collection('essays').get()
        .then(querySnapshot => {
          var tempEssays = []
          querySnapshot.forEach(doc => {
            console.log(doc.data())
            const data = {
              key: doc.id,
              // using our ID rather than Google Firebase's ID... good idea?
              id: doc.data().id,
              title: doc.data().title,
              status: doc.data().status,
              editing: doc.data().editing,
              timestamp: doc.data().timestamp
            }
            tempEssays.push(data)
          })
          // this.idForEssay = tempEssays.length
          context.state.loading = false
          // here's the code if we want to srot by timestamp instead
          var tempEssaysSorted = tempEssays.sort((a, b) => {
            return a.timestamp.seconds - b.timestamp.seconds
          })
          context.commit('retrieveEssays', tempEssaysSorted)
          // context.commit('retrieveEssays', tempEssays)
        })
    }
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

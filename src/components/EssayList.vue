<template>
  <div>
    <input
      type="text"
      class="essay-input"
      placeholder="Input your essays here! You got this!"
      v-model="newEssay"
      @keyup.enter="addEssay"
    />
    <div class="extra-container">
      <div class="filter-bar">
        <button :class="{ active: $store.state.currentFilterType == 0 }" @click="changeEssayListFilter(0)">All</button>
        <button :class="{ active: $store.state.currentFilterType == 1 }" @click="changeEssayListFilter(1)">Ready to Start</button>
        <button :class="{ active: $store.state.currentFilterType == 2 }" @click="changeEssayListFilter(2)">In Progress</button>
        <button :class="{ active: $store.state.currentFilterType == 3 }" @click="changeEssayListFilter(3)">In Review</button>
        <button :class="{ active: $store.state.currentFilterType == 4 }" @click="changeEssayListFilter(4)">Completed</button>
      </div>
    </div>
    <div v-if="$store.state.loading" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
    <transition-group name="fade" enter-active-class="animated slideInRight" leave-active-class="animated fadeOutRight">
      <essay v-for="(essay, index) in essaysFiltered" :key="essay.id" :essay="essay" :index="index"></essay>
    </transition-group>

    <div class="extra-container">
      <div class="count-left">{{ this.$store.getters.remaining }} items left</div>
    </div>
  </div>

</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Essay from './Essay.vue'
export default {
  name: 'essay-list',
  components: {
    Essay
  },
  data () {
    return {
      newEssay: '',
      idForEssay: this.$store.state.essays.length,
      beforeEditCache: '',
      currentFilterType: 0,
      removeEssayIndex: 0,
      essays: []
    }
  },
  created () {
    // this.$eventBus.$on('removeEssay', (removeEssayID) => this.removeEssay(removeEssayID))
    // this.$eventBus.$on('finishedEdit', (data) => this.finishedEdit(data))
    // this.$eventBus.$on('changeStatus', (correspondingTaskID, statusNumber) => this.changeStatus(correspondingTaskID, statusNumber))
    this.$store.dispatch('retrieveEssays')
  },
  beforeDestroy () {
    // eventBus.$off('removeEssay')
    // this.$eventBus.$off('finishedEdit')
    // this.$eventBus.$off('changeStatus')
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
    },
    remaining () {
      /* Check Filter Type = 0 case (no filter) */
      return this.$store.getters.remaining
    },
    completed () {
      return this.$store.getters.completed
    },
    essaysFiltered () {
      /* Check Filter Type = 0 case (no filter) before applying filter */
      return this.$store.getters.essaysFiltered
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    changeEssayListFilter (filterNumber) {
      this.$store.dispatch('changeFilter', filterNumber)
      // this.$store.state.currentFilterType = filterNumber
    },
    // finishedEdit (data) {
    //   this.$store.state.essays.splice(data.index, 1, data.essay)
    // },
    // removeEssay (removeEssayID) {
    //   alert(removeEssayID)
    //   this.removeEssayIndex = this.$store.state.essays.findIndex(essay => essay.id === removeEssayID)
    //   this.$store.state.essays.splice(this.removeEssayIndex, 1)
    // },
    addEssay () {
      this.idForEssay = this.$store.state.essays.length
      if (this.newEssay.trim().length === 0) {
        return
      }
      this.$store.dispatch('addEssay', {
        id: this.idForEssay,
        title: this.newEssay,
        status: 1,
        editing: false
      })

      // this.$store.state.essays.push({
      //   id: this.idForEssay,
      //   title: this.newEssay,
      //   status: 1,
      //   editing: false
      // })

      this.newEssay = ''
      this.idForEssay++
    }
    // changeStatus (correspondingTaskID, statusNumber) {
    //   this.$store.state.essays.find(essay => essay.id === correspondingTaskID).status = statusNumber
    // }
  }
}
</script>

<style lang="scss">

 @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.essay-input {
  width: 100%;
  padding: 10px 18px;
  background-color: #f2efef;
  font-size: 18px;
  border: none;
  margin-bottom: 16px;
  font-weight: bold;

  &:focus {
    outline: 0;
  }
}
.essay-input::placeholder{
  color: #918f8f;
}
.essay-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}

.count-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}

.essay-item-left {
  display: flex;
  align-items: center;
}
.essay-item-edit {
  font-size: 20px;
  color: #2c3e50;
//   margin-left: 12px;
//   width: 100%;
//   padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  &:focus {
    outline: none;
  }
}

button {
  border-radius: 12px;
  padding: 10px;
  outline-width: 0px;
  width: 100px;
  margin-right: 10px;
  text-align: center;
}

.status {
  width: 110px;
  text-align: center;
  font-size: 16px;
  background-color: pink;
}

.filter-bar {
    margin-bottom: 15px;
    display: flex;
    align-items: left;
    flex-flow: wrap;
}

.active {
  background: lightgreen;
  outline-width: 0px;
}

//CSS Transitions
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

// CSS for loading animation
.lds-roller {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #41b883;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
.filter-bar button {
    border: none;
    padding: 8px 25px;
    font-size: 18px;
    font-weight: bold;
    width: auto;
    border-radius: 0;
    margin-right: 20px;
    margin-bottom: 15px;
}
.filter-bar button:first-child{
    background-color: #C2C2C240;
}
.filter-bar button:nth-child(2){
    background-color: #f4b6bb40;
}
.filter-bar button:nth-child(3){
    background-color: #fcecc040;
}
.filter-bar button:nth-child(4){
    background-color: #c1e0fc40;
}
.filter-bar button:nth-child(5){
    background-color: #c9fccd40;
}
.filter-bar button.active:first-child{
    background-color: #C2C2C2;
}
.filter-bar button.active:nth-child(2){
    background-color: #f4b6bb;
}
.filter-bar button.active:nth-child(3){
    background-color: #fcecc0;
}
.filter-bar button.active:nth-child(4){
    background-color: #c1e0fc;
}
.filter-bar button.active:nth-child(5){
    background-color: #c9fccd;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

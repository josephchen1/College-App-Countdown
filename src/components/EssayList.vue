<template>
  <div>
    <input
      type="text"
      class="essay-input"
      placeholder="What needs to be done"
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
    <transition-group name="fade" enter-active-class="animated slideInRight" leave-active-class="animated fadeOutRight">
      <essay v-for="(essay, index) in essaysFiltered" :key="essay.id" :essay="essay" :index="index"></essay>
    </transition-group>

    <div class="extra-container">
      <div class="count-left">{{ this.$store.getters.remaining }} items left</div>
    </div>
  </div>

</template>

<script>
import Essay from './Essay.vue'
export default {
  name: 'essay-list',
  components: {
    Essay
  },
  data () {
    return {
      newEssay: '',
      idForEssay: 3,
      beforeEditCache: '',
      currentFilterType: 0,
      removeEssayIndex: 0,
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
    }
  },
  created () {
    // this.$eventBus.$on('removeEssay', (removeEssayID) => this.removeEssay(removeEssayID))
    this.$eventBus.$on('finishedEdit', (data) => this.finishedEdit(data))
    this.$eventBus.$on('changeStatus', (correspondingTaskID, statusNumber) => this.changeStatus(correspondingTaskID, statusNumber))
  },
  beforeDestroy () {
    // eventBus.$off('removeEssay')
    this.$eventBus.$off('finishedEdit')
    this.$eventBus.$off('changeStatus')
  },
  computed: {
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
      this.$store.state.currentFilterType = filterNumber
    },
    // finishedEdit (data) {
    //   this.$store.state.essays.splice(data.index, 1, data.essay)
    // },
    // removeEssay (removeEssayID) {
    //   this.removeEssayIndex = this.$store.state.essays.findIndex(essay => essay.id === removeEssayID)
    //   this.$store.state.essays.splice(this.removeEssayIndex, 1)
    // },
    addEssay () {
      if (this.newEssay.trim().length === 0) {
        return
      }
      this.$store.state.essays.push({
        id: this.idForEssay,
        title: this.newEssay,
        status: 1,
        editing: false
      })

      this.newEssay = ''
      this.idForEssay++
    },
    changeStatus (correspondingTaskID, statusNumber) {
      this.$store.state.essays.find(essay => essay.id === correspondingTaskID).status = statusNumber
    }
  }
}
</script>

<style lang="scss">

 @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

#checkbox {
  padding: 50px;
}

.essay-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: 0;
  }
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
</style>

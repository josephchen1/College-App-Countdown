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
        <button :class="{ active: currentFilterType == 0 }" @click="changeEssayListFilter(0)">All</button>
        <button :class="{ active: currentFilterType == 1 }" @click="changeEssayListFilter(1)">Ready to Start</button>
        <button :class="{ active: currentFilterType == 2 }" @click="changeEssayListFilter(2)">In Progress</button>
        <button :class="{ active: currentFilterType == 3 }" @click="changeEssayListFilter(3)">In Review</button>
        <button :class="{ active: currentFilterType == 4 }" @click="changeEssayListFilter(4)">Completed</button>
      </div>
    </div>
    <transition-group name="fade" enter-active-class="animated slideInRight" leave-active-class="animated fadeOutRight">
      <essay v-for="(essay, index) in essaysFiltered" :key="essay.id" :essay="essay" :index="index"></essay>
    </transition-group>

    <div class="extra-container">
      <div class="count-left">{{ remaining }} items left</div>
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
    this.$eventBus.$on('removeEssay', (index) => this.removeEssay(index))
    this.$eventBus.$on('finishedEdit', (data) => this.finishedEdit(data))
    this.$eventBus.$on('changeStatus', (correspondingTaskID, statusNumber) => this.changeStatus(correspondingTaskID, statusNumber))
  },
  computed: {
    remaining () {
      return this.essays.filter(essay => !essay.completed).length
    },
    completed () {
      return this.essays.filter(essay => !essay.completed).length
    },
    readytostart () {
      return this.essays.filter(essay => essay.readytostart).length
    },
    inprogress () {
      return this.essays.filter(essay => essay.inprogress).length
    },
    inreview () {
      return this.essays.filter(essay => essay.inreview).length
    },
    essaysFiltered () {
      if (this.filter === 'all') {
        return this.essays
      }
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
      this.currentFilterType = filterNumber
    },
    finishedEdit (data) {
      this.essays.splice(data.index, 1, data.essay)
    },
    removeEssay (index) {
      this.essays.splice(index, 1)
    },
    addEssay () {
      if (this.newEssay.trim().length === 0) {
        return
      }
      this.essays.push({
        id: this.idForEssay,
        title: this.newEssay,
        status: 1,
        editing: false
      })

      this.newEssay = ''
      this.idForEssay++
    },
    changeStatus (correspondingTaskID, statusNumber) {
      this.essays.find(essay => essay.id === correspondingTaskID).status = statusNumber
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

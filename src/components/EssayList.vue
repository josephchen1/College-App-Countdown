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
      <essay v-for="(essay, index) in essaysFiltered" :key="essay.id" :essay="essay" :index="index"
      >
        <!-- <div class="essay-item-left">
          <Dropdown class="status" title="Ready to Start" :items="statuses" />
          <input type="checkbox" v-model="essay.completed" />
          <div v-if="!essay.editing" @dblclick="editEssay(essay)" class="essay-item-label">
            {{essay.title }}
          </div>
            <input v-else class="essay-item-edit" type="text" v-model="essay.title" @blur="doneEdit(essay)" @keyup.enter="doneEdit(essay)" v-focus/>
          </div>
          <div class="remove-item" @click="removeEssay(index)">
            &times;
        </div> -->
      </essay>
    </transition-group>

    <div class="extra-container">
      <div class="count-left">{{ remaining }} items left</div>
    </div>
  </div>

</template>

<script>
import Essay from './Essay.vue'
let indexOfTargetEssay
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
      filter: 'all',
      essays: [
        {
          id: 1,
          title: 'Finish Vue Screencast',
          readytostart: true,
          inprogress: false,
          inreview: false,
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: 'Take over world',
          readytostart: true,
          inprogress: false,
          inreview: false,
          completed: false,
          editing: false
        }
      ],
      statuses: [
        {
          title: 'Ready to Start',
          id: '0'
        },
        {
          title: 'In Progress',
          id: '1'
        },
        {
          title: 'In Review',
          id: '2'
        },
        {
          title: 'Completed',
          id: '3'
        }
      ]
    }
  },
  created () {
    this.$eventBus.$on('removedEssay', (index) => this.removeEssay(index))
    this.$eventBus.$on('finishedEdit', (data) => this.finishedEdit(data))
    this.$eventBus.$on('readyToStartStatus', (taskID) => this.readyToStartStatus(taskID))
    this.$eventBus.$on('inProgressStatus', (taskID) => this.inProgressStatus(taskID))
    this.$eventBus.$on('inReviewStatus', (taskID) => this.inReviewStatus(taskID))
    this.$eventBus.$on('completedStatus', (taskID) => this.completedStatus(taskID))
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
      } else if (this.filter === 'ready') {
        return this.essays.filter(essay => essay.readytostart)
      } else if (this.filter === 'progress') {
        return this.essays.filter(essay => essay.inprogress)
      } else if (this.filter === 'review') {
        return this.essays.filter(essay => essay.inreview)
      } else if (this.filter === 'completed') {
        return this.essays.filter(essay => essay.completed)
      } else {
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
    finishedEdit (data) {
      this.essays.splice(data.index, 1, data.essay)
    },
    readyToStart (essay) {
      essay.readytostart = true
      essay.inprogress = false
      essay.inreview = false
      essay.completed = false
    },
    inProgress (essay) {
      essay.readytostart = false
      essay.inprogress = true
      essay.inreview = false
      essay.completed = false
    },
    inReview (essay) {
      essay.readytostart = false
      essay.inprogress = false
      essay.inreview = true
      essay.completed = false
    },
    completion (essay) {
      essay.readytostart = false
      essay.inprogress = false
      essay.inreview = false
      essay.completed = true
    },
    changeFilter (id) {
      if (id === 0) {
        this.filter = 'all'
      }
      if (id === 1) {
        this.filter = 'ready'
      }
      if (id === 2) {
        this.filter = 'progress'
      }
      if (id === 3) {
        this.filter = 'review'
      }
      if (id === 4) {
        this.filter = 'completed'
      }
    },
    addEssay () {
      if (this.newEssay.trim().length === 0) {
        return
      }
      this.essays.push({
        id: this.idForEssay,
        title: this.newEssay,
        readytostart: true,
        inprogress: false,
        inreview: false,
        completed: false,
        editing: false
      })

      this.newEssay = ''
      this.idForEssay++
    },
    editEssay (essay) {
      this.beforeEditCache = essay.title
      essay.editing = true
    },
    doneEdit (essay) {
      if (essay.title.trim().length === 0) {
        essay.title = this.beforeEditCache
      }
      essay.editing = false
    },
    removeEssay (index) {
      this.essays.splice(index, 1)
    },
    readyToStartStatus (taskID) {
      indexOfTargetEssay = this.essays.findIndex(essay => essay.id === taskID)
      this.essays[indexOfTargetEssay].readytostart = true
      this.essays[indexOfTargetEssay].inprogress = false
      this.essays[indexOfTargetEssay].inreview = false
      this.essays[indexOfTargetEssay].completed = false
    },
    inProgressStatus (taskID) {
      indexOfTargetEssay = this.essays.findIndex(essay => essay.id === taskID)
      this.essays[indexOfTargetEssay].readytostart = false
      this.essays[indexOfTargetEssay].inprogress = true
      this.essays[indexOfTargetEssay].inreview = false
      this.essays[indexOfTargetEssay].completed = false
    },
    inReviewStatus (taskID) {
      indexOfTargetEssay = this.essays.findIndex(essay => essay.id === taskID)
      this.essays[indexOfTargetEssay].readytostart = false
      this.essays[indexOfTargetEssay].inprogress = false
      this.essays[indexOfTargetEssay].inreview = true
      this.essays[indexOfTargetEssay].completed = false
    },
    completedStatus (taskID) {
      indexOfTargetEssay = this.essays.findIndex(essay => essay.id === taskID)
      this.essays[indexOfTargetEssay].readytostart = false
      this.essays[indexOfTargetEssay].inprogress = false
      this.essays[indexOfTargetEssay].inreview = false
      this.essays[indexOfTargetEssay].completed = true
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

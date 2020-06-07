<template>
  <div>
    <input
      type="text"
      class="essay-input"
      placeholder="What needs to be done"
      v-model="newEssay"
      @keyup.enter="addEssay"
    />
    <div v-for="(essay, index) in essays" :key="essay.id" class="essay-item">
      <div class="essay-item-left">
        <div>
          <Dropdown status="Ready to Start" :items="statuses" />
        </div>
        <input type="checkbox" v-model="essay.completed" />
        <div
          v-if="!essay.editing"
          @dblclick="editEssay(essay)"
          class="essay-item-label"
        >{{essay.title }}</div>
        <input
          v-else
          class="essay-item-edit"
          type="text"
          v-model="essay.title"
          @blur="doneEdit(essay)"
          @keyup.enter="doneEdit(essay)"
          v-focus
        />
      </div>
      <div class="remove-item" @click="removeEssay(index)">&times;</div>
    </div>
    <div>
      <div class="count-left">{{ remaining }} items left</div>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
  name: 'essay-list',
  components: {
    Dropdown
  },
  data () {
    return {
      newEssay: '',
      idForEssay: 3,
      essays: [
        {
          id: 1,
          title: 'Finish Vue Screencast',
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: 'Take over world',
          completed: false,
          editing: false
        }
      ]
    }
  },
  computed: {
    remaining () {
      return this.essays.filter(essay => !essay.completed).length
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
    addEssay () {
      if (this.newEssay.trim().length === 0) {
        return
      }
      this.essays.push({
        id: this.idForEssay,
        title: this.newEssay,
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
    }
  }
}
</script>

<style lang="scss">
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
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  &:focus {
    outline: none;
  }
}
</style>

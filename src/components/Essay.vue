<template>
  <div class="essay-item">
    <div class="essay-item-left">
      <Dropdown class="status" title="Ready to Start" :items="statuses" />
      <input type="checkbox" v-model="completed" />
      <div v-if="!editing" @dblclick="editEssay()" class="essay-item-label">
        {{ title }}
      </div>
      <input v-else class="essay-item-edit" type="text" v-model="title" @blur="doneEdit()" @keyup.enter="doneEdit()" v-focus/>
    </div>
    <div class="remove-item" @click="removeEssay(index)">
      &times;
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
  name: 'essay-item',
  components: {
    Dropdown
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  props: {
    essay: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      id: this.essay.id,
      title: this.essay.title,
      completed: this.essay.completed,
      editing: this.essay.editing,
      beforeEditCache: '',
      statuses: [
        {
          title: 'Ready to Start'
        },
        {
          title: 'In Progress'
        },
        {
          title: 'In Review'
        },
        {
          title: 'Completed'
        }
      ]
    }
  },
  methods: {
    removeEssay (index) {
      this.$emit('removedEssay', index)
    },
    editEssay () {
      this.beforeEditCache = this.title
      this.editing = true
    },
    doneEdit () {
      if (this.title.trim() === '') {
        this.title = this.beforeEditCache
      }
      this.editing = false
      this.$emit('finishedEdit', {
        index: this.index,
        essay: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing
        }
      })
    }
  }
}
</script>

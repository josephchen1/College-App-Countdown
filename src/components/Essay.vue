<template>
    <div class="essay-item">
      <div class="essay-item-left">
        <Dropdown class="status" :title="this.statusDictionary[status]" :statusDictionary="statusDictionary" :correspondingEssayID="this.id"/>
        <div v-if="!editing" @dblclick="editEssay()" class="essay-item-label">
          {{ title }}
        </div>
        <input v-else class="essay-item-edit" type="text" v-model="title" @blur="doneEdit()" @keyup.enter="doneEdit()" v-focus/>
      </div>
      <div class="remove-item" @click="removeEssay(id)">
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
      status: this.essay.status,
      editing: this.essay.editing,
      beforeEditCache: '',
      statusDictionary: {
        1: 'Ready to Start',
        2: 'In Progress',
        3: 'In Review',
        4: 'Completed'
      }
    }
  },
  created () {
    // what is this for?
    // this.$eventBus.$on(this.inProgress)
  },
  methods: {
    removeEssay (removeEssayID) {
      this.$store.dispatch('deleteEssay', removeEssayID)
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
      this.$store.dispatch('finishedEdit', {
        id: this.id,
        title: this.title,
        status: this.status,
        editing: false
      })
      // this.$store.state.essays.splice(this.index, 1, {
      //   id: this.id,
      //   title: this.title,
      //   status: this.status,
      //   editing: false
      // })
      // this.$eventBus.$emit('finishedEdit', {
      //   index: this.index,
      //   essay: {
      //     id: this.id,
      //     title: this.title,
      //     status: this.status,
      //     editing: false
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">

.status {
  margin-right: 10px;
}
</style>

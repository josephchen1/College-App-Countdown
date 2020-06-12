<template>
  <div class="status-item" @mousedown="isOpen = !isOpen" @mouseleave="blur()">
    <a href="#">
      {{ title }}
    </a>
    <transition name="fade" appear>
      <div class="sub-menu"
      v-if="isOpen">
        <div v-for="(dropdownTitle, dropdownKey) in statusDictionary"
        :key="parseInt(dropdownKey)"
        @mousedown="applyDropdownProperty(parseInt(dropdownKey))"
        class="status-choice">
          <a> {{ dropdownTitle }} </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'statusDictionary', 'correspondingTaskID'],
  data () {
    return {
      isOpen: false
    }
  },
  created () {
  },
  methods: {
    applyDropdownProperty (dropdownKey) {
      this.title = this.statusDictionary[dropdownKey]
      // this.$eventBus.$emit('changeStatus', this.correspondingTaskID, dropdownKey)
      this.$store.state.essays.find(essay => essay.id === this.correspondingTaskID).status = dropdownKey
    },
    blur () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss">

.status-item .sub-menu {
  font-size: 13px;
  position: absolute;
  background-color: #f1f1f1;
  padding: 13px;
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}

.status-choice {
  margin-bottom: 3px;
  text-align: left;
}

.status-choice :hover {
  color: red;
  cursor: pointer
}

.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

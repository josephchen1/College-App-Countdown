<template>
  <div class="status-item" @mousedown="isOpen = !isOpen" @mouseleave="blur()">
    <a href="#">
      {{ title }}
    </a>
    <transition name="fade" appear>
      <div
      class="sub-menu"
      v-if="isOpen">
        <div
        v-for="(item, i) in items"
        :key="i"
        @mousedown="test(item)"
        class="status-choice">
          <a> {{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data () {
    return {
      isOpen: false
    }
  },
  created () {
  },
  methods: {
    test (a) {
      this.title = a.title
      if (a.id === '0') {
        this.$eventBus.$emit('readyToStartStatus')
      } else if (a.id === '1') {
        this.$eventBus.$emit('inProgressStatus')
      } else if (a.id === '2') {
        this.$eventBus.$emit('inReviewStatus')
      } else if (a.id === '3') {
        this.$eventBus.$emit('completedStatus')
      }
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

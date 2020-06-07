<template>
  <div class="status-item" id='4' @click="isOpen = !isOpen">
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
        @click="test(item)"
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
  methods: {
    test (a) {
      this.title = a.title
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

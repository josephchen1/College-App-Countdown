<template>
  <div class="status-item" :data-item="title" @mousedown="isOpen = !isOpen" @mouseleave="blur()">
    <span class="item">
      {{ title }}
    </span>
    <transition name="fade" appear>
      <div class="sub-menu"
      v-if="isOpen">
        <div v-for="(dropdownTitle, dropdownKey) in statusDictionary"
        :key="parseInt(dropdownKey)"
        @mousedown="applyDropdownProperty(parseInt(dropdownKey))"
        class="status-choice">
          <a :data-item="dropdownTitle"> {{ dropdownTitle }} </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'statusDictionary', 'correspondingEssayID'],
  data () {
    return {
      isOpen: false
    }
  },
  created () {
  },
  methods: {
    applyDropdownProperty (dropdownKey) {
      this.$parent.status = dropdownKey
      this.$store.dispatch('applyDropdown', { essayID: this.correspondingEssayID, key: dropdownKey })
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
  background-color: #fff;
  padding: 10px;
  width: max-content;
  border-radius: 0px 0px 16px 16px;
  border-radius: 8px;
  left: 0;
  width: 100%;
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
.sub-menu .status-choice a{
  display: inline-block;
  padding: 2px 10px;
  border-radius: 8px;
  width: 100%;
  text-transform: lowercase;
  color: #000;
  margin-bottom: 5px;
  text-align: center;
}
.essay-item-left .status-item.status[data-item="In Progress"],.sub-menu .status-choice a[data-item="In Progress"]{
background-color: #fcecc0;
}
.essay-item-left .status-item.status[data-item="Ready to Start"],.sub-menu .status-choice a[data-item="Ready to Start"]{
background-color: #f4b6bb;
}
.essay-item-left .status-item.status[data-item="In Review"],.sub-menu .status-choice a[data-item="In Review"]{
background-color: #c1e0fc;
}
.essay-item-left .status-item.status[data-item="Completed"],.sub-menu .status-choice a[data-item="Completed"]{
background-color: #c9fccd;
}
.essay-item-left .status-item.status[data-item="In Progress"]:hover,.sub-menu .status-choice a[data-item="In Progress"]:hover{
background-color: #fcecc040;
}
.essay-item-left .status-item.status[data-item="Ready to Start"]:hover,.sub-menu .status-choice a[data-item="Ready to Start"]:hover{
background-color: #f4b6bb40;
}
.essay-item-left .status-item.status[data-item="In Review"]:hover,.sub-menu .status-choice a[data-item="In Review"]:hover{
background-color: #c1e0fc40;
}
.essay-item-left .status-item.status[data-item="Completed"]:hover,.sub-menu .status-choice a[data-item="Completed"]:hover{
background-color: #c9fccd40;
}

</style>

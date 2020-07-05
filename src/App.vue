<template>
  <div id="app" class="container">
    <div class="count-left">{{ this.$store.getters.readytostart }} Ready to Start</div>
    <div class="count-left">{{ this.$store.getters.inprogress }} In Progress</div>
    <div class="count-left">{{ this.$store.getters.inreview }} In Review</div>
    <div class="count-left">{{ this.$store.getters.completed }} Completed</div>
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <essay-list></essay-list>
  </div>
</template>

<script>
import EssayList from './components/EssayList.vue'

export default {
  name: 'App',
  components: {
    EssayList
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-size: 20px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>

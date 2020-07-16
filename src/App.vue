<template>
  <div id="app" class="container">
    <div class="stat_all columns is-3">
    <div class="column"><div class="read_stat count-left"><span class="stat_count">{{ this.$store.getters.readytostart }}</span> <br/> Ready to Start</div></div>
    <div class="column"><div class="prog_stat count-left"><span class="stat_count">{{ this.$store.getters.inprogress }} </span> <br/>In Progress</div></div>
    <div class="column"><div class="rev_stat count-left"><span class="stat_count">{{ this.$store.getters.inreview }} </span> <br/> In Review</div></div>
    <div class="column"><div class="compl_stat count-left"><span class="stat_count">{{ this.$store.getters.completed }} </span> <br/> Completed</div></div>
    </div>
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
.stat_all{
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
}
.compl_stat{
  background-color: #c9fccd;;
}
.read_stat{
  background-color: #f4b6bb;
}
.prog_stat{
  background-color: #fcecc0;
}
.rev_stat{
  background-color: #c1e0fc;
}
.count-left{
  padding: 20px 10px;
  text-align: center;
  display: block;
  border: none;
  font-weight: bold;
  font-size: 20px;
}
.stat_count {
    font-size: 46px;
    line-height: normal;
}
</style>

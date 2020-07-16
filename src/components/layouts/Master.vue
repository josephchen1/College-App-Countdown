<template>
    <div id="app">
<b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
<h2 class="title is-4">ESSAYTRACK</h2>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">Home</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'essay' }">App</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ name: 'about' }">About</b-navbar-item>
                            <top-header></top-header>
        </template>
    </b-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import TopHeader from './top-header'
export default {
  components: { 'top-header': TopHeader }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 24px;
    height: 100vh;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .navbar {
    border-bottom: 1px solid lightgrey;
    width: 100%;
  }
  .navbar a {
    color: #636b6f;
    padding: 20px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
  .navbar-end{
  display: none;
}
.navbar-start{
  width: 100%;
  -webkit-box-pack: end !important;
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
}
.container{
  padding: 0 15px;
}
</style>

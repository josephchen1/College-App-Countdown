<template>
    <div id="app">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div class="main_menu">
        <div class="container">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
      <h2 class="title is-4">ESSAYTRACK</h2>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'essay' }">Dashboard</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'about' }">About</b-navbar-item>
            <!-- <b-navbar-item tag="router-link" :to="{ name: 'about' }">About</b-navbar-item> -->
                            <top-header></top-header>
        </template>
    </b-navbar>
    </div>
    </div>
        <router-view></router-view>
        <footer v-show="!(this.$route.name==='essay')" class="footer-distributed">
      <div class="container">
    <div class="footer-right">
      <a href="https://www.facebook.com/sephhiiee/" target="_blank">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="https://twitter.com/sephhiiee" target="_blank">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/josephchen214/" target="_blank">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/josephchen1/" target="_blank">
        <i class="fa fa-github"></i>
      </a>
    </div>

    <div class="footer-left">
      <p class="footer-links">
        <a @click="$router.push('/')">Home</a>
        ·
        <a @click="$router.push('about')">About</a>
        ·
        <a @click="$router.push('faq')">FAQ</a>
         ·
        <a @click="$router.push('privacy')">Privacy</a>
        ·
        <a @click="$router.push('contact')">Contact</a>
      </p>

      <p>Joseph Chen &copy; 2020</p>
      </div>
    </div>
  </footer>
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
  .main_menu {
    border-bottom: 1px solid lightgrey;
    width: 100%;
  }
.navbar .navbar-brand a{
    padding-left: 10px;
  }
.buttons .auth-status{
    padding: 0;
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
  .footer-distributed {
    background-color: #c4aeeb;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: normal 16px sans-serif;

    padding: 45px 50px;
    margin-top: 0px;
  }

  .footer-distributed .footer-left p {
    color: #ffffff;
    font-size: 14px;
    margin: 0;
  }

  /* Footer links */

  .footer-distributed p.footer-links {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 10px;
    padding: 0;
  }

  .footer-distributed p.footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
  }

  .footer-distributed .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
  }

  .footer-distributed .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #714fa9;
    border-radius: 2px;

    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;

    margin-left: 3px;
  }

  /* If you don't want the footer to be responsive, remove these media queries */

  @media (max-width: 600px) {
    .footer-distributed .footer-left,
    .footer-distributed .footer-right {
      text-align: center;
    }

    .footer-distributed .footer-right {
      float: none;
      margin: 0 auto 20px;
    }

    .footer-distributed .footer-left p.footer-links {
      line-height: 1.8;
    }
  }
</style>

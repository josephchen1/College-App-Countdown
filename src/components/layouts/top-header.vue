<template slot="end">
  <b-navbar-item tag="div">
                <div class="buttons">
                      <b-navbar-item v-if='!loggedIn' tag="router-link" :to="{ name: 'login' }" class="button is-light">Login</b-navbar-item>
                      <b-navbar-item v-if='!loggedIn' tag="router-link" :to="{ name: 'register' }" class="button is-primary btn_reg">Register</b-navbar-item>
            <div class="auth-status">
    <b-navbar-item v-if="loggedIn" class="button is-success" @click='signOut'>Sign out</b-navbar-item>
  </div>
  </div>
            </b-navbar-item>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'top-header',
  mounted () {
    this.setupFirebase()
  },
  methods: {
    setupFirebase () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          this.loggedIn = true
        } else {
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' })
        })
    }
  },
  data () {
    return {
      loggedIn: false
    }
  }
}
</script>

<style lang='scss' scoped>
div {
  color: inherit
}
.auth-status {
  color: #636b6f;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .1rem;
  text-decoration: none;
  text-transform: uppercase;
}
.navbar-item.button{
  padding: 0 20px;
  height: 42px;
  line-height: 40px;
}
.navbar .btn_reg{
  margin-right: 0 !important;
}
.button.is-success {
  background-color:#7957d5;
  color: white;
}
.button.is-success:hover {
  background-color:#4928a2;
    opacity: 100;
}
.button.is-primary.btn_reg:focus {
  background-color:#7957d5;
  color: white;
}
.button.is-primary.btn_reg:hover {
  background-color:#4928a2;
  opacity: 100;
}
</style>

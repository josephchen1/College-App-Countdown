<template>
  <div class="nav2">
  <li><router-link v-if='!loggedIn' :to="{ name: 'login' }">Login</router-link></li>
  <li><router-link v-if='!loggedIn' :to="{ name: 'register' }">Register</router-link></li>
  <div class="auth-status">
    <button v-if="loggedIn" class='but' @click='signOut'>Sign out</button>
  </div>
  </div>
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
.not-logged {

}

.nav2 {
  display: flex;
  justify-content: flex-end;
}
</style>

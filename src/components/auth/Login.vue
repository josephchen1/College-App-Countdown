<template>
  <div class="flex-center">
    <div>
      <form @submit.prevent='pressed'>
       Login
      <div class='login'>
        <input type='text' placeholder='login' v-model='email' />
      </div>
      <div class='password'>
        <input type='password' placeholder='password' v-model='password' />
      </div>
      <button>Login</button>
      </form>
    </div>
    <div>
      <span>Need an account? Click here to <router-link to="register">Register</router-link></span>
    </div>
    <div class='error' v-if='error'>{{error.message}}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
          this.$router.replace({ name: 'essay' })
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style lang='scss' scoped>
div {
  color: inherit;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-link {
  display: inline-block;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}

.error {
  color: red;
}
</style>

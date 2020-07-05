<template>
    <div class="flex-center">
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            Register
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  methods: {
    pressed () {
      try {
        const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$router.replace({ name: 'essay' })
      } catch (err) {
        console.log(err)
      }
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
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
</style>

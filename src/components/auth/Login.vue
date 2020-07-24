<template>
  <div class="flex-center pg_wrap_lg">
    <div class="container">
      <div class="columns login_pg">
        <div class="column log_sec is-half">
            <h3 class="title">Welcome back!</h3>
      <form @submit.prevent='pressed'>
      <div class='login'>
        <b-field>
        <b-input type='text' placeholder='Login' v-model='email' icon="account" size="is-medium" > </b-input>
        </b-field>
      </div>
      <div class='password'>
        <b-field>
        <b-input type='password' placeholder='Password' v-model='password' icon="key" size="is-medium" password-reveal> </b-input>
        </b-field>
      </div>
       <button class="">Login</button>
      </form>
      <div class='resetPassword'>
            <h6 class="reg_txt subtitle"><b-navbar-item tag="router-link" :to="{ name: 'forgetpassword' }" class="for_password">Forget Password</b-navbar-item></h6>
      </div>
    <div>
      <h6 class="reg_txt subtitle">Need an account?<br/> Click here to <b-navbar-item tag="router-link" :to="{ name: 'register' }" class="reg_log_btn">Register</b-navbar-item></h6>
    </div>
    <div class='error' v-if='error'>{{error.message}}</div>
        </div>
        <div class="column is-half img_sec"><img src="./../../assets/login_img.jpg" /> </div>
        </div>
    </div>
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
    },
    resetPassword () {
      console.log('Hello')
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
.login,.password {
  margin-bottom: 20px;
}
button {
background-color: #ffc5c7;
    border: none;
    border-radius: 65px;
    font-size: 20px;
    padding: 8px 55px 11px 55px;
    width: auto;
    line-height: normal;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 10px;
}
.error {
  color: red;
}
.log_sec{
    background-color: #fff4f4;
    padding: 60px 40px;
}
.login_pg .img_sec{
  background-color: #ffc5c7;
  justify-content: center;
    display: flex;
}
img{
  align-self: center;
}
.login_pg{
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0px 11px 8px -9px #afafaf;
}
.reg_txt{
  margin-top: 15px;
  font-size: 16px;
}
.pala input{
  padding: 20px !important;
}
.pg_wrap_lg{
  background-image: url(./../../assets/pg_bg1.jpg);
  padding: 100px 0px;
    background-size: cover;
    background-position: top center;
        height: 100vh;
}
.log_sec .title{
  margin-bottom: 35px;
}
.reg_log_btn{
  display: inline-block;
    padding: 0;
    font-weight: bold;
    text-decoration: underline;
}
button:hover{
  cursor: pointer;
  background-color: #ff9296;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active{
  background-color: transparent;
}
</style>

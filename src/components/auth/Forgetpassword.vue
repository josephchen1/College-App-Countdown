<template>
    <div class="flex-center pg_wrap_lg">
      <div class="container">
              <div class="columns login_pg">
                <div class="column is-half img_sec"><img src="./../../assets/reg_log.png" /> </div>
                <div class="column log_sec is-half">
                  <h4 class="title">FORGOT PASSWORD?</h4>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
              <b-field label="email address">
                <b-input type="email" v-model="email" placeholder="Enter Registered Email" size="is-medium"> </b-input>
              </b-field>
            </div>
            <button type="submit">Reset Password</button>
        </form>
                </div>
    </div>
    </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  methods: {
    pressed () {
      var auth = firebase.auth()
      var emailAddress = this.email
      auth.sendPasswordResetEmail(emailAddress).then(function () {
        alert('Please check your email for reset password link.')
      })
        .catch(function (error) {
          // Error occurred. Inspect error.code.
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          if (errorCode === 'auth/user-not-found') {
            alert('User not found', errorMessage)
          } else {
            console.error(error)
          }
        })
    }
  },
  data () {
    return {
      error: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-link {
  display: inline-block;
}
.email,.password {
  margin-bottom: 20px;
}
button {
background-color: #fff4f4;
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
    background-color: #ffc5c7;
    padding: 60px 20px;
}
.login_pg .img_sec{
  background-color:  #fff4f4;
  justify-content: center;
    display: flex;
    padding: 40px;
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
  margin-bottom: 15px;
}
h4.title{
  font-size: 26px;
  text-align: center;
}
button:hover{
  cursor: pointer;
  background-color: #f5e4e4;
}
</style>

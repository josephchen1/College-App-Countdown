<template>
    <div class="flex-center pg_wrap_lg">
      <div class="container">
              <div class="columns login_pg">
                <div class="column is-half img_sec"><img src="./../../assets/reg_log.png" /> </div>
                <div class="column log_sec is-half">
                  <h4 class="title">CREATE AN ACCOUNT</h4>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent="pressed">
            <div class="email">
              <b-field label="Email address">
                <b-input type="email" required v-model="email" placeholder="Email" size="is-medium"> </b-input>
              </b-field>
            </div>
            <div class="password">
              <b-field label="Password">
                <b-input type="password" required v-model="password" placeholder="Password" size="is-medium" password-reveal> </b-input>
              </b-field>
            </div>

            <div class="repeatpassword">
              <b-field label="Confirm password" :type="{
                'is-danger':$v.repeatpassword.$error, 'is-success': (password != '') ?
                !$v.repeatpassword.$invalid : '' }">
                <b-input type="password" required v-model.trim="$v.repeatpassword.$model" size="is-medium" placeholder="Confirm password">
                </b-input>
              </b-field>
                <!--<div class="valid-feedback">Your passwords is identical!</div>
<div class="invalid-feedback">
<span v-if="!$v.repeatpassword.sameAsPassword">Passwords must be identical.</span>
</div>-->
            </div>
            <button class="submit" type="submit">Register</button>
        </form>
                </div>
    </div>
    </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { sameAs } from 'vuelidate/lib/validators'
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
      repeatpassword: '',
      error: ''
    }
  },
  validations: {
    repeatpassword: {
      sameAsPassword: sameAs('password')
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
.submit{
  margin-top: 30px;
}
</style>

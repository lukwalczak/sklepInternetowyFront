<template>
  <div class="wrapper">
    <div class="loginBox">
      <h3 class="text title">Zaloguj</h3>
      <hr class="loginHr">
      <input class="input" type="text" placeholder="email" v-model="email">
      <input class="input" type="password" placeholder="hasło" v-model="password">
      <btn class="btn" :functionn="logIn">Zaloguj</btn>
      <p v-if="this.error" class="error">Wystąpił błąd podczas logowania</p>
      <div class="registerBox">
        <p class="text">Nie masz konta?</p>
        <router-link to="/register"><btn class="btn">Zarejestruj się!</btn></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import axios from "axios";

export default {
  name: "loginForm",
  data() {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  components: {Btn},
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    logIn(){
      this.$store.dispatch("LOGIN",{
        username: this.email,
        password: this.password
      })
      .then(success => {
        this.$router.push('/')
      })
      .catch(error => {
        this.error = true;
      })
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
.wrapper{
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn, .input, .text{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.text{
  font-weight: 600;
  margin: 20px 20px 5px;
  color: #f3f3c9;
}
.title
{
  margin-bottom: 25px;
}
.registerBox{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.loginBox{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3f3f3f;
  border-radius: 32px;
  height: 400px;
  width: 375px;
}
.input{
  box-sizing: border-box;
  padding: 15px;
  margin: 10px;
  height: 40px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 16px;
}
.loginHr{
  width: 80%;
  border: #292929 solid 1px;
}
.btn{
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 5px;
  height: 35px;
  width: 125px;
  border-radius: 16px;
  background-color: #036D19;
}
.btn:hover{
  background-color: #025413;
}
</style>
<template>
  <div class="wrapper">
    <div class="loginBox">
      <h3 class="text title">Zaloguj</h3>
      <hr class="loginHr">
      <input class="input" type="text" placeholder="email" v-model="email">
      <input class="input" type="password" placeholder="hasło" v-model="password">
      <router-link to="/resetPassword" class="routerLink"><p class="text link">Nie pamiętam hasła</p></router-link>
      <btn class="btn" :functionn="logIn">Zaloguj</btn>
      <p v-if="this.error" class="error">Wystąpił błąd podczas logowania</p>
      <div class="registerBox">
        <p class="text">Nie masz konta?</p>
        <router-link to="/register" class="btn routerLink">Zarejestruj się!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";

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
.routerLink{
  text-decoration: none;
}
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
.link{
  margin: 0;
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
  margin: 5px;
  box-sizing: border-box;
  outline: none;
  border: none;
  padding: 5px;
  height: 35px;
  width: 125px;
  border-radius: 16px;
  background-color: #036D19;
  text-decoration: none;
  color: black;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  text-indent: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover{
  background-color: #025413;
}
</style>
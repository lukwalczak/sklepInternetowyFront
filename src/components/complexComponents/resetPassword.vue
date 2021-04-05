<template>
  <div class="wrapper">
    <div class="loginBox">
      <h3 class="text title">Zmień hasło</h3>
      <hr class="loginHr">
      <input class="input" type="email" placeholder="email" v-model="email" @input="checkData">
      <input class="input" type="password" placeholder="Nowe hasło" v-model="password" @input="checkData">
      <input class="input" type="password" placeholder="Powtórz hasło" v-model="passwordCheck" @input="checkData">
      <p v-if="error" class="notification error">Wystąpił błąd</p>
      <btn class="btn" :disable="disable" @click.native="changePassword">Zmień hasło</btn>
      <div class="registerBox">
        <router-link to="/profile" class="btn routerLink">Powrót do logowania</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";

const emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export default {
  name: "resetPassword",
  data() {
    return {
      email: '',
      password: '',
      passwordCheck: '',
      error: false,
      disable: true
    }
  },
  components: {Btn},
  computed:{
      validate() {
        this.disable = !this.disable;
      },
  },
  methods: {
    checkEmail() {
      if (emailRegex.test(this.email)){
        document.querySelectorAll('.input')[0].classList.remove('badInput');
        return true;
      }
      document.querySelectorAll('.input')[0].classList.add('badInput');
      return false;
    },
    checkPassword() {
      if ((this.password === this.passwordCheck) && this.password.length >= 8){
        document.querySelectorAll('.input')[1].classList.remove('badInput');
        document.querySelectorAll('.input')[2].classList.remove('badInput');
        this.validate;
        return true;
      }
      document.querySelectorAll('.input')[1].classList.add('badInput');
      document.querySelectorAll('.input')[2].classList.add('badInput');
      return false;
    },
    checkData() {
      if (this.checkEmail() && this.checkPassword()) {
        this.validate;
        return true;
      }
      return false;
    },
    changePassword(){
      this.$store
          .dispatch('CHANGE_PASSWORD',{
            username: this.email,
            password: this.password
          })
          .then(success=>{
            router.push('/profile')
          })
          .catch(error => {
            this.error = true;
          });
    },
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
.badInput {
  border: #932a2a solid 2px;
}
</style>
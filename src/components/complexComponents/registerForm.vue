<template>
  <div class="wrapper">
    <div class="loginBox">
      <h3 class="text title">Rejestracja</h3>
      <hr class="loginHr">
      <input class="input" type="email" placeholder="email" v-model="email" @input="checkData">
      <input class="input" type="password" placeholder="hasło" v-model="password" @input="checkData">
      <input class="input" type="password" placeholder="hasło" v-model="passwordCheck" @input="checkData">
      <btn class="btn" :disable="disable" :functionn="register">Zarejestruj się!</btn>
      <p v-if="registered" class="notification success">Zarejestrowano nowego użytkownika!</p>
      <p v-if="userExists" class="notification error">Taki użytkownik już istnieje</p>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";

let emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export default {
  name: "registerForm",
  components: {Btn},
  data() {
    return {
      email: '',
      password: '',
      passwordCheck: '',
      disable: true,
      registered: false,
      userExists: false,
    }
  },
  computed: {
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
    register() {
      if (this.checkData()){
        this.$store.dispatch('REGISTER', {
          email: this.email,
          password: this.password
        })
        .then(success => {
          this.registered = true;
          setInterval(()=>{this.$router.push("/profile")},1000);
        })
        .catch(error => {
          this.userExists = true;
        })
      }
    }
  },
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn, .input, .text, .notification{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.notification {
  margin: 10px;
  font-weight: 400;
}
.error {
  color: red;
}
.success {
  color: #06e935;
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
.badInput {
  border: #932a2a solid 2px;
}
.loginHr{
  width: 80%;
  border: #292929 solid 1px;
}
.btn{
  margin: 15px 0 0;
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
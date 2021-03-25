<template>
  <div class="wrapper">
    <div class="loginBox">
      <h3 class="text">Zaloguj</h3>
      <hr class="loginHr">
      <input class="input" type="text" placeholder="login">
      <input class="input" type="password" placeholder="hasło">
      <btn class="btn">Zaloguj</btn>
      <div class="registerBox">
        <p class="text">Nie masz konta?</p>
        <router-link to="/"><btn class="btn">Zarejestruj się!</btn></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
export default {
  name: "loginForm",
  components: {Btn}
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
.btn, .input, .text{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.text{
  font-weight: 600;
  margin: 20px 20px 5px;
  color: #f3f3c9;
}
.registerBox{
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
}
.loginBox{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3f3f3f;
  border-radius: 32px;
  height: 400px;
  width: 400px;
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
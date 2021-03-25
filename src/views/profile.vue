<template>
  <div v-if="1">
    <nav-bar :nav="false"/>
    <login-form/>
  </div>
  <div v-else>
  </div>
</template>

<script>
import NavBar from "@/components/complexComponents/navBar";
import LoginForm from "@/components/complexComponents/loginForm";
export default {
  name: "profile",
  components: {LoginForm, NavBar}
}
</script>

<style scoped>

</style>
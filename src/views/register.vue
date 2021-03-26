<template>
  <div>
  <nav-bar :nav="false"/>
  <register-form/>
  </div>
</template>

<script>
import NavBar from "@/components/complexComponents/navBar";
import RegisterForm from "@/components/complexComponents/registerForm";
export default {
name: "register",
  components: {RegisterForm, NavBar}
}
</script>

<style scoped>

</style>
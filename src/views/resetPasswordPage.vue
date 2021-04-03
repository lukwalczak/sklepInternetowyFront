<template>
  <div>
    <nav-bar :nav="false"></nav-bar>
    <reset-password></reset-password>
  </div>
</template>

<script>
import NavBar from "@/components/complexComponents/navBar";
import ResetPassword from "@/components/complexComponents/resetPassword";
export default {
  name: "resetPasswordPage",
  components: {ResetPassword, NavBar}
}
</script>

<style scoped>

</style>
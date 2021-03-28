<template>
  <div v-if="!isLoggedIn">
    <nav-bar :nav="false"/>
    <login-form/>
  </div>
  <div v-else>
    <nav-bar :nav="false"/>
    <button style="height: 200px; width: 200px;"/>
    <user-profile/>
  </div>
</template>

<script>
import NavBar from "@/components/complexComponents/navBar";
import LoginForm from "@/components/complexComponents/loginForm";
import UserProfile from "@/components/complexComponents/userProfile";
export default {
  name: "profile",
  components: {UserProfile, LoginForm, NavBar},
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
}
</script>

<style scoped>

</style>
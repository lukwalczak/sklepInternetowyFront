<template>
  <div class="main">
    <nav-bar v-model="searched"/>
    <link-bar/>
    <Main-Body/>
  </div>
</template>

<script>
import NavBar from "@/components/complexComponents/navBar";
import LinkBar from "@/components/complexComponents/linkBar";
import MainBody from "@/components/complexComponents/mainBody";
export default {
  name: "mainPage",
  data() {
    return{
      searched: ''
    }
  },
  components: {MainBody, LinkBar, NavBar}
}
</script>

<style>
</style>
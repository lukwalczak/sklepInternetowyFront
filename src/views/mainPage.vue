<template>
  <div class="main">
    <nav-bar/>
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
  components: {MainBody, LinkBar, NavBar}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap');
*{
  margin: 0;
  padding: 0;
}
.main{
  height: 100vh;
  background-color: #1f1f1f;
}
</style>
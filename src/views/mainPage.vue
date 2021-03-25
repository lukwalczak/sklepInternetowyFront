<template>
  <div class="main">
    <nav-bar v-model="searched"/>
    <link-bar/>
    <Main-Body/>
    <p>{{searched}}</p>
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
    }
  },
  components: {MainBody, LinkBar, NavBar}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap');
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #1f1f1f;
  overflow-x: hidden;
}
.nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
</style>
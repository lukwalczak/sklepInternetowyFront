<template>
  <div>
    <nav-bar :nav="false"></nav-bar>
    <cart></cart>
  </div>
</template>

<script>
import NavBar from "@/components/complexComponents/navBar";
import Cart from "@/components/complexComponents/cart";
export default {
name: "cartPage",
  components: {Cart, NavBar}
}
</script>

<style scoped>
</style>
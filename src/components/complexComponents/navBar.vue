<template>
  <div class="wrapper">
    <div class="iconBox">
      <btn class="btn" href="/profile"><human class="icon"/></btn>
      <btn class="logo" href="/"><logo/></btn>
      <router-link class="btn" to="/cart"><cart class="icon"/></router-link>
    </div>
    <div class="searchBox" v-if="nav">
      <mainSearchBar></mainSearchBar>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import mainSearchBar from "@/components/complexComponents/mainSearchBar";
import Cart from "@/components/simpleComponents/icons/cart";
import Human from "@/components/simpleComponents/icons/human";
import Logo from "@/components/simpleComponents/icons/logo";

export default {
  name: "navBar",
  components: {Logo, Human, Cart, mainSearchBar, Btn},
  props: {
    nav: {
      type: Boolean,
      default: true,
    },
  }
}
</script>

<style scoped>
.wrapper {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1f1f1f;
}
.icon {
  fill: #f3f3c9;
}
.searchBox{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.btn {
  width: 48px;
  height: 48px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconBox{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 300px;
}
</style>
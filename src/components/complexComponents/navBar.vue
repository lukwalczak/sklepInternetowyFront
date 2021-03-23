<template>
  <div class="wrapper">
    <div class="iconBox">
      <btn class="btn" href="/profile"><human class="icon"/></btn>
      <logo></logo>
      <btn class="btn" href="/cart"><cart class="icon"/></btn>
    </div>
    <div class="searchBox">
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
  components: {Logo, Human, Cart, mainSearchBar, Btn}
}
</script>

<style scoped>
.wrapper {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #292929;
}
.icon {
  fill: #f3f3c9;
  margin: 0 35px 0;
}
.searchBox{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.btn {
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconBox{
 display: flex;
  flex-direction: row;
}
</style>
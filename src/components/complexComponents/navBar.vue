<template>
  <div class="wrapper">
    <div class="iconBox">
      <btn class="btn" href="/profile"><human class="icon"/></btn>
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

export default {
  name: "navBar",
  components: {Human, Cart, mainSearchBar, Btn}
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #292929;
}
.icon {
  background: #292929;
}
.searchBox{
  display: flex;
  flex-direction: row;
}
.btn {
  outline: none;
  border: none;
}
.iconBox{
 display: flex;
  flex-direction: row;
}
</style>
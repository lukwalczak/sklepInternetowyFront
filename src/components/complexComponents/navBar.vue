<template>
  <div class="wrapper">
    <div>
    <btn></btn>
      <img src="">
      <btn></btn>
      <mainSearchBar></mainSearchBar>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import mainSearchBar from "@/components/complexComponents/mainSearchBar";

export default {
  name: "navBar",
  components: {mainSearchBar, Btn}
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
}
</style>
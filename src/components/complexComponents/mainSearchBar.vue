<template>
  <div class="wrapper">
    <btn><img src=""></btn>
    <input type="text" class="searchBar">
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
export default {
  name: "searchBar",
  components: {Btn}
}
</script>

<style scoped>
.searchBar{
  display: inline-block;
  padding: 0.1vh 0.3vw;
  width: 20vw;
  height: 3.5vh;
  outline: none;
}
</style>
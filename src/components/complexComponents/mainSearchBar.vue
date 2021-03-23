<template>
  <div class="box">
    <btn class="btn"><magnifying-glass class="magGlass"></magnifying-glass></btn>
    <input type="text" class="searchBar">
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import MagnifyingGlass from "@/components/simpleComponents/icons/magnifyingGlass";
export default {
  name: "searchBar",
  components: {MagnifyingGlass, Btn}
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.searchBar{
  display: inline-block;
  padding: 0.1vh 0.3vw;
  width: 20vw;
  height: 3.5vh;
  outline: none;
  border: none;
}
.btn{
  outline: none;
  border: 0;
  -webkit-appearance: none;
}
.magGlass{
  display: inline-block;
  padding: 0.1vh 0.3vw;
  width: 1vw;
  height: 3vh;
  outline: none;
  border: 0;
  background: #fff;
}
</style>
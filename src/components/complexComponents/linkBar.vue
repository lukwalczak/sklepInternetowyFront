<template>
  <div class="linkBar">
      <btn class="btn" href="/">Bestsellery</btn>
      <btn class="btn" href="/">Co nowego</btn>
      <btn class="btn" href="/">Wyprzedaż</btn>
      <btn class="btn" href="/">Kategorie</btn>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
export default {
  name: "linkBar",
  components: {Btn}
}
</script>

<style scoped>
.linkBar{
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #036D19;
}
.btn{
  color: #f3f3c9;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 24px;
  text-decoration: none;
}
</style>
<template>
  <div class="box">
    <input type="text"
           class="searchBar"
           placeholder="szukaj"
           :value="search"
           @input="$emit('input',$event.target.value)">
    <btn class="btn" type="submit"><magnifying-glass class="g"/></btn>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import MagnifyingGlass from "@/components/simpleComponents/icons/magnifyingGlass";
export default {
  name: "searchBar",
  components: {MagnifyingGlass, Btn},
  props: ['search'],
  watch: {
    changeSearched(){
      this.$emit('input',this.search);
    }
  }
}
</script>

<style scoped>
.box{
  height: 32px;
  width: 325px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: #292929 solid;
  border-radius: 10px;
}
.g{
  height: 100%;
  width: 100%;
  fill: #292929;
}
.btn:hover > .g:hover {
  fill: #000;
}
.btn{
  z-index: 1;
  height: 50%;
  width: 16px;
  border: none;
  outline: none;
  margin: 5px;
}
.searchBar{
  box-sizing: border-box;
  height: 100%;
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
}
.box,.g,.searchBar{
  background-color: #f3f3c9;
}
</style>
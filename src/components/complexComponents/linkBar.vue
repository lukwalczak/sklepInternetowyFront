<template>
  <div class="linkBar">
      <btn class="btn" @click.native="bestsellers">Bestsellery</btn>
      <btn class="btn" @click.native="newProducts">Co nowego</btn>
      <btn class="btn" @click.native="saleProducts">Wyprzedaż</btn>
      <btn class="btn" :disable="true">Kategorie</btn>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
export default {
  name: "linkBar",
  components: {Btn},
  data(){
    return{
      'salesClicked': false
    }
  },
  methods:{
    bestsellers(){

    },
    newProducts(){

    },
    saleProducts(){
      this.salesClicked = !this.salesClicked;
      console.log(this.salesClicked);
      let games = document.querySelectorAll('.orderPrice');
      games.forEach(g=>{
        let parent = g.parentElement.parentElement.parentElement;
        if (this.salesClicked===true){
          let gamePrice = parseFloat(g.innerText.slice(0,-3));
          if(gamePrice>55){
            parent.classList.add('hide');
          }
        }
        else {
          parent.classList.remove('hide');

        }
      })
    },
  }
}
</script>

<style scoped>
.linkBar{
  height: 50px;
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
  background-color: #036D19;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
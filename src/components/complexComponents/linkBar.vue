<template>
  <div class="linkBar">
      <btn class="btn" @click.native="bestsellers">Bestsellery</btn>
      <btn class="btn" @click.native="newProducts">Co nowego</btn>
      <btn class="btn" @click.native="saleProducts">Wyprzedaż</btn>
      <div class="categories">
        <p class="btn categoriesButton">Kategorie</p>
        <div class="categoriesBox hidden">
          <p class="category" v-for="category in getCategories">{{category}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
export default {
  name: "linkBar",
  components: {Btn},
  data(){
    return{
      'salesClicked': false,
      'categories': []
    }
  },
  computed:{
    getCategories(){
      return this.$store.getters.getCategoriesArray;
    },
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
  justify-content: space-evenly;
  background-color: #036D19;
  text-align: center;
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
  height: 100%;
}
.categories{
  position: static;
  align-self: auto;
}
.categories:hover > .categoriesBox{
  display: flex;
  flex-flow: column;
}
.categoriesButton{
}
.categoriesBox{
 display: none;
}
.category{
  width: inherit;
  background-color: #036D19;
  color: #f3f3c9;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  z-index: 1;
}
</style>
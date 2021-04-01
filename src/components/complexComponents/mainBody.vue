<template>
  <div class="wrapper">
    <game-component v-for='game in games'
                    :key='game.id'
                    :id="game.id"
                    :image-u-r-l="game.imageURL"
                    :price="game.price"
                    :product-name="game.productName"
                    :developer="game.developer"
                    :genre="displayGenres(game.genre)"
                    :description="game.description"
    />
  </div>
</template>

<script>
import GameComponent from "@/components/complexComponents/gameComponent";

export default {
  name: "mainBody",
  components: {GameComponent},
  data() {
    return{
      'games': [],
    }
  },
  computed: {
    getProducts(){
    return this.games = this.$store.getters.getProducts;
    },
  },
  methods: {
    displayGenres(array){
      console.log(this.games);
      let str = '';
      let i = array.length;
      array.forEach( a=>{
        if(i === 1){
          str+=`${a}`;
        }
        else {
          str+=`${a}, `;
          i--;
        }
      })
      return str;
    }
  },
  async mounted(){
    await this.$store.dispatch('GET_PRODUCT_LIST');
    this.games = this.getProducts;
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
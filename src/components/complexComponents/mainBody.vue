<template>
  <div class="wrapper">
    <div class="half-circle-spinner" v-if="!checkProductState">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
    <game-component
                    v-for='game in games'
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
    checkProductState(){
      return this.$store.getters.getProductsState;
    }
  },
  methods: {
    displayGenres(array){
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
  async beforeMount(){
    await this.$store.dispatch('GET_PRODUCT_LIST');
    this.games = this.getProducts;
  },
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.half-circle-spinner, .half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  top: 175%;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #06e935;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #06e935;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);

  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div class="orderWrapper">
    <div class="orderInformation">
      <p class="orderID">{{orderID}}</p>
    </div>

    <div class="orderProducts">
      <div v-if="this.gamesLoaded">
        <img  class="orderProduct"
              v-for="game in games"
              v-bind:src="getGamePhoto(game)"
              :id="game"

        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  props: {
    orderID: Number/String,
    games: Array,
    gamePic: Array,
    cart: false,
  },
  data(){
    return{
      hoveredGame: '',
    }
  },
  computed:{
    gamesLoaded(){
      return this.$store.getters.getProductsState;
    },
  },
  methods:{
    getGamePhoto(id){
      return this.$store.getters.getGameUrl(id);
    },
    getHoveredGame(game){
      this.hoveredGame = game;
      console.log(game);
    }
  },
  async mounted() {
    await this.$store.dispatch('GET_PRODUCT_LIST');
  }
}
</script>

<style scoped>
.orderWrapper{
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin: 16px;
  border: #1f1f1f solid;
  border-radius: 32px;
  padding-right: 16px;
  min-height: 300px;
}
.orderInformation{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin-right: 32px;
  background-color: #4f4f4f;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}
.orderID{
  font-family: 'Roboto', sans-serif;
  color: #f3f3c9;
}
.orderProducts{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  padding: 10px;
}
.orderProduct{
  width: 150px;
  height: 200px;
  margin: 10px;
  box-shadow: 0 0 2px 0 #FFF;
}
</style>
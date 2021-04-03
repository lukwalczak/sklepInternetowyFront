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
  },
  computed:{
    gamesLoaded(){
      return this.$store.getters.getProductsState;
    }
  },
  methods:{
    getGamePhoto(id){
      return this.$store.getters.getGameUrl(id);
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
  height: 100%;
  width: 75%;
}
.orderProduct{
  width: 125px;
  height: 175px;
  margin: 10px;
}
</style>
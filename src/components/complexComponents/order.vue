<template>
  <div class="orderWrapper">
    <div class="orderInformation">
      <p class="orderID">{{orderID}}</p>
    </div>

    <div class="orderProducts">
      <img  class="orderProduct"
            v-for="game in games"
            :src="game"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  props: {
    orderID: Number/String,
    games: [],
  },
  computed:{
    getGamePhoto(){
      this.$store.getters.ge
    }
  }
}
</script>

<style scoped>
.orderWrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: #1f1f1f solid;
  border-radius: 32px;
  height: 200px;
}
.orderInformation{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
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
  width: 100px;
  height: 150px;
  margin: 10px;
}
</style>
<template>
  <div class="orderWrapper">
    <div class="orderInformation">
      <p class="orderID">{{orderID}}</p>
    </div>

    <div class="orderProducts">
      <div v-if="this.gamesLoaded" class="orderProductWrapper">
        <div v-for="game in games" class="orderProductBox">
          <img  v-if="cart"
                class="orderProduct"
                v-bind:src="getGamePhoto(game)"
                v-bind:alt="getGameAltName(game)"
                :id="'cartimg'+game"
                v-on:mouseenter="removeGamePopup($event,game)"
          />
          <img  v-else
                class="orderProduct"
                v-bind:src="getGamePhoto(game)"
                v-bind:alt="getGameAltName(game)"
                :id="'orderimg'+game"
          />
          <div v-if="cart"
               class="orderProductPopup displayNone"
               v-on:mouseleave="removeGamePopup($event,game)"
               :id="'cartpopup'+game">
            <p>AAAAAA</p>
            <btn @click.native="removeGame(game)">Usuń grę z koszyka</btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
export default {
  name: "order",
  components: {Btn},
  props: {
    orderID: Number/String,
    games: Array,
    gamePic: Array,
    cart: false,
  },
  computed:{
    gamesLoaded(){
      return this.$store.getters.getProductsState;
    },
  },
  methods:{
    getGameAltName(id){
      return this.$store.getters.getGameName(id);
    },
    getGamePhoto(id){
      return this.$store.getters.getGameUrl(id);
    },
    removeGamePopup(event,id){
      const target = event.target
      if (target.tagName==='IMG'){
        document.querySelector(`#cartimg${id}`).classList.add('displayNone');
        document.querySelector(`#cartpopup${id}`).classList.remove('displayNone');
      }
      if (target.tagName==='DIV'){
        document.querySelector(`#cartimg${id}`).classList.remove('displayNone');
        document.querySelector(`#cartpopup${id}`).classList.add('displayNone');
      }
    },
    removeGame(id){
      this.$store.dispatch('REMOVE_FROM_CART',id);
      document.querySelector(`#cartpopup${id}`).remove();
      document.querySelector(`#cartimg${id}`).remove();
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
  border-right: #1f1f1f solid;
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
.displayNone{
  display: none;
}
.orderProductPopup{
  width: 150px;
  height: 200px;
  margin: 10px;
  background-color: #1f1f1f;
  transition: width 2s;
}
.orderProductWrapper{
  display: flex;
  flex-wrap: wrap;
}
</style>
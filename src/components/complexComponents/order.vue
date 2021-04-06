<template>
  <div class="orderWrapper">
    <div class="orderInformation">
      <div v-if="cart" class="orderInformationDetails">
        <p class="orderID">Koszyk</p>
        <btn class="orderButton"><small-cart class="svg"/><p class="orderID">Złóż zamówienie</p></btn>
      </div>
      <div v-else>
        <p class="orderID">Zamówienie nr.{{orderID}}</p>
      </div>
    </div>

    <div class="orderProducts">
      <div v-if="this.gamesLoaded" class="orderProductWrapper">
        <div v-for="game in games" class="orderProductBox">
          <img  v-if="cart"
                class="orderProduct cartProduct"
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
            <btn class="btnCartRemove" @click.native="removeGame(game)"><div><minus class="removeFromCartIcon"/></div></btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import Minus from "@/components/simpleComponents/icons/minus";
import SmallCart from "@/components/simpleComponents/icons/smallCart";
export default {
  name: "order",
  components: {SmallCart, Minus, Btn},
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
  font-size: 22px;
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
  display: none !important;
}
.orderProductPopup{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 200px;
  margin: 10px;
}
.orderProductWrapper{
  display: flex;
  flex-wrap: wrap;
}
.btnCartRemove{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: rgba(0,0,0,0);
}
.orderProductBox{
  display: flex;
  align-items: center;
  justify-content: center;
}
.removeFromCartIcon{
  fill: #932a2a;
  height: 80px;
  width: 80px;
}
.orderButton::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #3f3f3f;
  border-radius: 16px;
  z-index: -1;
  transition: transform 300ms ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
}
.orderButton:hover::before{
  transform: scaleX(1);
}
.orderButton{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 50px;
  outline: none;
  border:none;
  margin-top: 20px;
  padding: 10px;
  z-index: 1;
  background-color: #4f4f4f;
}
.orderInformationDetails{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.svg{
  height: 30px;
  width: 30px;
  margin-right: 5px;
}
</style>
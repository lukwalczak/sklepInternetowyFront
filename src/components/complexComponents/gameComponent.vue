<template>
  <div class="gameBox">
    <div class="gameDescImgBox">
      <img class="gameImg" :src="imageURL">
      <p class="gameDescription">{{description}}</p>
    </div>
    <div class="gameInfo">
      <div class="gameDetails">
        <h3 class="gameText">{{productName}}</h3>
        <div class="gameDetailedInfoBox">
          <div class="gameDetailedInfo">
            <h3 class="gameDetailedTitle">Developer:&nbsp</h3>
            <p class="gameDetailedInformations">{{developer}}</p>
          </div>
          <div class="gameDetailedInfo">
            <h3 class="gameDetailedTitle">tags: </h3>
            <p class="gameText gameTags">{{genre}}</p>
          </div>
        </div>
      </div>
      <div class="orderBox">
        <p class="orderPrice">{{price}} zł</p>
          <btn class="orderBtn" :functionn="addToCart">
            <cart class="orderImage"/>
          </btn>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/simpleComponents/btn";
import Cart from "@/components/simpleComponents/icons/cart";
export default {
  name: "gameComponent",
  components: {Cart, Btn},
  props: {
    id: Number,
    gamePic: String,
    productName: String,
    imageURL: {
      type: String,
      default: '',
    },
    description: String,
    price: Number,
    genre: String,
    developer: String,
  },
  methods: {
    addToCart(){
      console.log(this.$store.getters.userCart);
      console.log(this.id);
      this.$store.dispatch('ADD_TO_CART',this.id);
      console.log(this.$store.getters.userCart);
    }
  }
}
</script>

<style scoped>
.gameBox{
  margin: 40px;
  display: flex;
}
.gameInfo{
  background-color: #3f3f3f;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border-bottom-right-radius: 32px;
  border-top-right-radius: 32px;
}
.gameDetails{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  margin: 16px 16px 0;
}
.gameImg{
  height: 300px;
  width: 200px;
  -webkit-user-drag: none;
  border-top-left-radius: 32px;
}
.gameText,.gameDetailedTitle,.gameDetailedInformations,.gameDescription{
  color: #f3f3c9;
  font-family: 'Roboto', sans-serif;
}
.orderBox{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.orderBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #036D19;
  height: 64px;
  width: 64px;
  border-radius: 32px;
  margin: 0 8px 8px 0;
  outline: none;
  border: none;
  cursor: pointer;
}
.orderBtn:hover{
  background-color: #025413;
}
.orderBtn:hover > .orderImage{
  fill: #05b72a;
}
.orderImage{
  fill: #06e935;
  height: 32px;
  width: 32px;
}
.orderPrice{
  font-family: 'Roboto', sans-serif;
  margin: 16px;
  color: #f3f3c9;
  font-size: 24px;
}
.gameDetailedInfo{
  display: flex;
  align-items: flex-start;
  margin: 10px 0 0;
  height: 200px;
}
.gameDetailedTitle{
  font-size: 16px;
  margin: 0px 5px 0 0;
  font-weight: 400;
}
.gameDetailedInfoBox{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  flex-wrap: nowrap;
  justify-content: center;
}
.gameDescription{
  display: none;
  height: 300px;
  width: 400px;
  -webkit-user-drag: none;
  border-radius: 32px;
  background-color: #3f3f3f;
  box-sizing: border-box;
  padding: 16px;
}
.gameDescImgBox{
  width: 200px;
  height: 300px;
}
.gameDescImgBox:hover > .gameDescription{
  display: flex;
  justify-content: center;
  align-items: center;
}
.gameDescImgBox:hover > .gameImg{
  display: none;
}
.gameDescImgBox:hover + .gameInfo{
  visibility: hidden;
}
</style>
<template>
  <div class="gameBox">
    <img class="gameImg" :src="imageURL">
    <div class="gameInfo">
      <div class="gameDetails">
        <h3 class="gameText">{{productName}}</h3>
        <p class="gameText description">{{tags}}</p>
        <p class="gameText">{{tags}}</p>
      </div>
      <div class="orderBox">
        <p class="orderPrice">{{price}} zł</p>
        <p class="orderBtn"><btn href="/"><cart class="orderImage"/></btn></p>
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
    gamePic: String,
    productName: String,
    imageURL: {
      type: String,
      default: ''
    },
    description: String,
    price: Number,
    tags: Array,
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
  align-items: center;
  height: 300px;
  margin: 16px 16px 0;
}
.gameImg{
  height: 300px;
  width: 200px;
  -webkit-user-drag: none;
  border-top-left-radius: 32px;
}
.gameText {
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
</style>
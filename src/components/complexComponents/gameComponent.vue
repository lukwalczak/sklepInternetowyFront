<template>
  <div class="gameBox">
    <div class="imgBox">
      <img class="img" :src="imageURL">
    </div>
    <div class="gameInfo">
      <p>{{productName}}</p>
      <p>{{description}}</p>
      <p>{{price}}</p>
      <p>{{tags}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "gameComponent",
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
  margin: 20px 20px;
  display: flex;
  flex-wrap: wrap;
}
.gameInfo{
  display: flex;
  flex-direction: column;
}
img{
  height: 300px;
  width: 200px;
}
p {
  color: #f3f3c9;
}
</style>
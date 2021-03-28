<template>
  <div class="wrapper" >
    <game-component v-for='game in games'
                    :key='game.id'
                    :description="game.description"
                    :image-u-r-l="game.imageURL"
                    :price="game.price"
                    :product-name="game.productName"
    />
  </div>
</template>

<script>
import GameComponent from "@/components/complexComponents/gameComponent";
import axios from 'axios';


export default {
  name: "mainBody",
  components: {GameComponent},
  data() {
    return{
      'games': []
    }
  },
  methods: {
  },
  beforeMount() {
    axios.get(`products/get`, {withCredentials: false}).then((response) => (this.games = response.data));
  }
}
</script>

<style scoped>
.wrapper{
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
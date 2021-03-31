<template>
  <div class="wrapper">
    <game-component
                    v-for='game in games'
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
  },
  methods: {
  },
  async mounted(){
    await this.$store.dispatch('GET_PRODUCT_LIST');
    this.games = this.getProducts;
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
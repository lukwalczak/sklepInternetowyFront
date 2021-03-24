<template>
  <div class="wrapper" >
    <div>
      <ol>
        <game-component v-for='game in games' :key='game.id'>
          {{game.id}}
          {{game.productName}}
        </game-component>
      </ol>
    </div>
  </div>
</template>

<script>
import GameComponent from "@/components/complexComponents/gameComponent";
import axios from 'axios';

const api = 'http://127.0.0.1:2115';

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
    axios.get(`${api}/products/get`).then((response) => (this.games = response.data));
  }
}
</script>

<style scoped>
.wrapper{
  width: 100vw;

}
</style>
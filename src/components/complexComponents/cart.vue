<template>
  <div class="wrapper">
    <div class="cartWrapper">
      <order :order-i-d="`Aktualne Zamówienie`">
      </order>
      <order v-for="(order,index) in orders"
             :order-i-d="'Zamówienie nr. '+index"
             :games="order"

      />
    </div>
  </div>
</template>

<script>
import Order from "@/components/complexComponents/order";
export default {
  name: "cart",
  components: {Order},
  computed: {

  },
  data(){
    return {
      'narr': [],
      'orders': {
        "6": [
          24
        ],
        "7": [
          27,
          28
        ],
        "14": [
          24,
          27,
          28
        ],
        "15": [
          24,
          27,
          28
        ],
        "16": [
          24,
          27,
          28
        ]
      }
    }
  },
}
</script>

<style scoped>
.cartWrapper{
  background-color: #3f3f3f;
  width: 1000px;
  margin: 10px;
  border-radius: 32px;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
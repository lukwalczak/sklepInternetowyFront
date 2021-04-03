<template>
  <div class="wrapper">
    <div class="cartWrapper">
      <order class="order"
             :order-i-d="`Aktualne Zamówienie`"
             :games="getUserCart"
             :cart="true"
      />
      <div class="confirmOrder">AAAA</div>
      <order v-for="(order,index) in getUserOrders"
             :order-i-d="'Zamówienie nr. '+index"
             :games="order"
             :cart="false"

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
    getUserCart(){
      return this.$store.getters.getCart;
    },
    getUserOrders(){
      this.orders = this.$store.getters.userOrders;
      return this.$store.getters.userOrders;
    }
  },
  methods:{
  },
  data(){
    return {
      'orders': {}
    }
  },
}
</script>

<style scoped>
.cartWrapper{
  background-color: #3f3f3f;
  width: 60%;
  margin: 10px;
  border-radius: 32px;
}
.confirmOrder{
  display: none;
}
.wrapper:hover > .order{
  display: none;
}
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
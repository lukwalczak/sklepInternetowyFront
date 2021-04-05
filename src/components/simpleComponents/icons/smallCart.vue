<template>
  <img :src="svg" />
</template>

<script>
export default {
  name: 'smallCart',
  data(){
    return {
      svg: require('@/assets/icons/shopping-cart-empty-side-view.svg')
    }
  }
}
</script>
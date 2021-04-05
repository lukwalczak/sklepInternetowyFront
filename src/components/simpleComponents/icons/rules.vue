<template>
  <img :src="svg" />
</template>

<script>
export default {
  name: 'Rules',
  data(){
    return {
      svg: require('@/assets/icons/document.svg')
    }
  }
}
</script>
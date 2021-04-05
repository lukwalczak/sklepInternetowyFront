<template>
  <img :src="svg" />
</template>

<script>
export default {
  name: 'Settings',
  data(){
    return {
      svg: require('@/assets/icons/settings.svg')
    }
  }
}
</script>
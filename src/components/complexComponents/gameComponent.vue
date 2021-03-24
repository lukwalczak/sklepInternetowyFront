<template>
  <div>
    <div class="gamePic">
      <slot/>
    </div>
    <div class="gameInfo">

    </div>
  </div>
</template>

<script>
export default {
  name: "gameComponent",
  props: {
    gamePic: String,
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <a v-if="href" :href="href">
      <slot/>
    </a>
    <button v-else>
      <slot/>
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>

</style>
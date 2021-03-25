<template>
    <a v-if="href" :href="href">
      <slot/>
    </a>
    <button v-else>
      <slot/>
    </button>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    }
  }
}
</script>
<style scoped>
</style>
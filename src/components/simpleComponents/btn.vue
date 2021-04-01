<template>
    <a v-if="href" :href="href">
      <slot/>
    </a>
    <button v-else v-on:click="functionn" :disabled="disable">
      <slot/>
    </button>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    functionn: {
      type: Function,
      default: null
    },
    disable : Boolean,
  },
}
</script>
<style scoped>
</style>
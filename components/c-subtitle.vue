<template>
  <p
    class="subtitle"
    :class="{ 'subtitle--index': index }"
  >
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    index: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.subtitle {
  margin: 0;
  font-size: 2vmin;
}

.subtitle--index {
  font-size: 6vmin;
  text-align: center;
}
</style>

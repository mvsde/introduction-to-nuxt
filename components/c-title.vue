<template>
  <h1
    class="title"
    :class="{ 'title--index': index }"
  >
    <slot />
  </h1>
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
.title {
  margin: 0;

  font-size: 8vmin;
  font-weight: 700;
  line-height: 1.1;
}

.title--index {
  font-size: 12vmin;
  text-align: center;
}
</style>

<template>
  <ol
    v-if="ordered"
    class="list list--ordered"
  >
    <slot />
  </ol>

  <ul
    v-else
    class="list list--unordered"
  >
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    ordered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.list {
  margin: 0 0 var(--vertical-space);
  padding-left: 1em;
}
</style>

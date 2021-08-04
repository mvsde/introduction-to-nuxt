<template>
  <img
    :src="require(`@/assets/icons/${icon}.svg`)"
    alt=""
    class="icon"
    width="54"
    height="54"
  >
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>

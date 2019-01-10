<template>
  <figure class="figure">
    <img
      :alt="alt"
      class="image"
      :height="height"
      :src="src"
      :width="width"
    >

    <figcaption
      v-if="$slots.default"
      class="caption"
    >
      <slot />
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: undefined
    },
    height: {
      type: Number,
      default: undefined
    }
  }
}
</script>

<style scoped>
.figure {
  text-align: center;
  margin: 0 0 var(--vertical-space);
}

.image {
  vertical-align: middle;
  margin-bottom: calc(var(--vertical-space) / 2);
}

.caption {
  font-size: 0.7em;
  font-style: italic;
  color: rgb(var(--color-dark));
}
</style>

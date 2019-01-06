<template>
  <figure class="figure">
    <img
      class="image"
      :alt="alt"
      :src="src"
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
    }
  }
}
</script>

<style scoped>
.figure {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 0 var(--vertical-space);
}

.image {
  flex-grow: 1;
  object-fit: contain;
  margin-bottom: calc(var(--vertical-space) / 2);
}

.caption {
  font-size: 0.7em;
  font-style: italic;
  text-align: center;
  color: rgb(var(--color-dark));
}
</style>

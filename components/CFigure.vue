<template>
  <figure
    class="figure"
    :class="{ 'is-side-by-side': sideBySide }"
  >
    <img
      :alt="alt"
      class="image"
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
    },
    sideBySide: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.figure {
  display: grid;
  grid-template: max-content 1fr;
  grid-template-areas:
    "image"
    "caption";
  justify-items: center;
  gap: var(--vertical-space);
  margin: 0 0 var(--vertical-space);
}

.image {
  grid-area: image;
  height: 61vh;
}

.caption {
  grid-area: caption;

  font-size: 0.6em;
  color: rgb(var(--color-dark));
}

@media (min-width: 60rem) {
  .figure.is-side-by-side {
    grid-template: 1fr / 1fr max-content 1fr;
    grid-template-areas: ". image caption";
    justify-items: start;
    align-items: end;
  }

  .is-side-by-side .image {
    height: 69vh;
  }
}
</style>

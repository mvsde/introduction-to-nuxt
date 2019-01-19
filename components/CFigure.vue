<template>
  <figure
    class="figure"
    :class="{ 'stacked': stacked }"
  >
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
    },
    stacked: {
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

.stacked {
  grid-template: 1fr / 1fr max-content 1fr;
  grid-template-areas: ". image caption";
  justify-items: start;
  align-items: end;

  text-align: left;
}

.image {
  grid-area: image;
}

.caption {
  grid-area: caption;

  font-size: 0.6em;
  color: rgb(var(--color-dark));
}
</style>

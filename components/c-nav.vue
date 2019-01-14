<template>
  <nav class="nav">
    <nuxt-link
      v-if="previous"
      aria-label="Previous slide"
      class="button previous"
      :to="previous"
    >
      ←
    </nuxt-link>

    <nuxt-link
      to="/toc"
      class="button toc"
      aria-label="Table of contents"
    >
      ☰
    </nuxt-link>

    <nuxt-link
      v-if="next"
      aria-label="Next slide"
      class="button next"
      :to="next"
    >
      →
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    previous: {
      type: String,
      default: undefined
    },
    next: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  position: fixed;
  left: calc(var(--frame-width) * 2);
  bottom: calc(var(--frame-width) * 2);
}

.button {
  font-size: 0.7em;

  width: 1.3em;
  margin-right: 0.2em;
  padding: 0.15em;

  line-height: 1;
  text-align: center;
  text-decoration: none;
  color: #fff;

  background: rgb(var(--color-dark));
  border-radius: 0.1em;

  opacity: 0.7;

  transition: opacity 0.3s;
}

.button:hover,
.button:focus {
  opacity: 1;
}
</style>

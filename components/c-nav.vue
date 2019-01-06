<template>
  <nav class="nav">
    <button
      aria-label="Previous slide"
      class="button previous"
      @click="previousSlide"
    >
      ◄
    </button>

    <nuxt-link
      to="/toc"
      class="button toc"
      aria-label="Table of contents"
    >
      ☰
    </nuxt-link>

    <button
      aria-label="Next slide"
      class="button next"
      @click="nextSlide"
    >
      ►
    </button>
  </nav>
</template>

<script>
import EventBus from '@/event-bus'

export default {
  methods: {
    previousSlide () {
      EventBus.$emit('previousSlide')
    },
    nextSlide () {
      EventBus.$emit('nextSlide')
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  position: absolute;
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
  border: 0;

  opacity: 0.7;

  transition: opacity 0.3s;
}

.button:hover,
.button:focus {
  opacity: 1;
}
</style>

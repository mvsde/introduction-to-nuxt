<template>
  <nav class="nav">
    <nuxt-link
      v-if="previous"
      aria-label="Previous slide"
      class="button"
      :to="previous"
    >
      <img
        alt=""
        class="icon"
        src="@/assets/icons/left.svg"
      >
    </nuxt-link>

    <nuxt-link
      to="/agenda"
      class="button"
      aria-label="Agenda"
    >
      <img
        alt=""
        class="icon"
        src="@/assets/icons/agenda.svg"
      >
    </nuxt-link>

    <nuxt-link
      v-if="next"
      aria-label="Next slide"
      class="button"
      :to="next"
    >
      <img
        alt=""
        class="icon"
        src="@/assets/icons/right.svg"
      >
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
  margin-right: 0.2em;
  padding: 0.15em;

  font-size: 0.5em;
  line-height: 0;
  text-decoration: none;
  color: #fff;

  background: rgb(var(--color-dark));
  border: 0;
  border-radius: 0.1em;

  opacity: 0.6;

  transition: opacity 0.3s;
}

.button:hover,
.button:focus {
  opacity: 1;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>

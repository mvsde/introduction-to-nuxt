<template>
  <main
    class="main"
    :class="{ 'main--index': index }"
  >
    <div
      v-if="$slots.header"
      class="header"
    >
      <slot name="header" />
    </div>

    <slot />
  </main>
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
.main {
  display: grid;
  grid-template-rows: min-content 1fr;
  min-height: 100vh;
  padding: 4vmin 5vmin;

  border: var(--frame-width) solid rgb(var(--color-light));
}

.main > :first-child {
  margin-top: 0;
}

.main > :last-child {
  margin-bottom: 0;
}

.main--index {
  grid-template-rows: repeat(2, min-content);
  align-content: center;

  color: #fff;

  background: rgb(var(--color-light));
}

.header {
  margin-bottom: 8vmin;
  padding-bottom: 4vmin;

  border-bottom: 0.4vmin solid rgba(var(--color-dark), 0.2);
}
</style>

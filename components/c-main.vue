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
  min-height: 100vh;
  padding: 4vmin 5vmin;

  border: 1.2vmin solid #42b883;
}

.main--index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  background: #42b883;
}

.header {
  padding-bottom: 4vmin;
  margin-bottom: 8vmin;

  border-bottom: 0.4vmin solid rgba(53, 73, 94, 0.2);
}
</style>

<template>
  <main class="main">
    <div
      v-if="$slots.header"
      class="header"
    >
      <slot name="header" />
    </div>

    <div class="content">
      <slot />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 4vmin 5vmin;

  border: var(--frame-width) solid rgb(var(--color-light));
}

.header {
  margin-bottom: 8vmin;
  padding-bottom: 4vmin;

  border-bottom: 0.4vmin solid rgba(var(--color-dark), 0.2);
}

.content {
  flex-grow: 1;
}

.content > :first-child {
  margin-top: 0;
}

.content > :last-child {
  margin-bottom: 0;
}
</style>

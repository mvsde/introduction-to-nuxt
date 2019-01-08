<template>
  <main class="main">
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="subtitle">
      Server side rendering made easy
    </p>
  </main>
</template>

<script>
import EventBus from '@/event-bus'

export default {
  head () {
    return {
      titleTemplate: '%s',
      title: this.title
    }
  },

  data () {
    return {
      title: 'Introduction to Nuxt.js'
    }
  },

  created () {
    EventBus.$on('nextSlide', () => this.$router.push('/server-side-rendering'))
  },

  destroyed () {
    EventBus.$off('nextSlide')
  }
}
</script>

<style scoped>
.main {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  color: #fff;

  background: rgb(var(--color-light));
}

.title {
  font-size: 12vmin;
}

.subtitle {
  margin: 0.5em 0 0;
  font-size: 6vmin;
}
</style>

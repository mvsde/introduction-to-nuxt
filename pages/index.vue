<template>
  <c-main center>
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="subtitle">
      Server side rendering made easy
    </p>
  </c-main>
</template>

<script>
import CMain from '@/components/CMain'

export default {
  components: {
    CMain
  },

  data () {
    return {
      title: 'Introduction to Nuxt.js'
    }
  },

  head () {
    return {
      titleTemplate: '%s',
      title: this.title
    }
  }
}
</script>

<style scoped>
.main {
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

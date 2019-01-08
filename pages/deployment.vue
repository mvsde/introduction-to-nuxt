<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>
  </c-main>
</template>

<script>
import CMain from '@/components/c-main'

import EventBus from '@/event-bus'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CMain
  },

  data () {
    return {
      title: 'Deployment'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/vuex-store'))
    EventBus.$on('nextSlide', () => this.$router.push('/resources'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

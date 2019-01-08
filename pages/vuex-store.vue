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
      title: 'Vuex Store'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/asynchronous-data'))
    EventBus.$on('nextSlide', () => this.$router.push('/deployment'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

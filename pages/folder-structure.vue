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
      title: 'Folder Structure'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/installation'))
    EventBus.$on('nextSlide', () => this.$router.push('/asynchronous-data'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

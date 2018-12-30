<template>
  <c-main>
    <c-title slot="header">
      {{ title }}
    </c-title>
  </c-main>
</template>

<script>
import CMain from '@/components/c-main'
import CTitle from '@/components/c-title'

import EventBus from '@/event-bus'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CMain,
    CTitle
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

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
      title: 'Asynchronous Data'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/folder-structure'))
    EventBus.$on('nextSlide', () => this.$router.push('/vuex-store'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

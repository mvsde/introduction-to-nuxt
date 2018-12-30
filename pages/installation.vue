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
      title: 'Installation'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/what-is-nuxt'))
    EventBus.$on('nextSlide', () => this.$router.push('/folder-structure'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

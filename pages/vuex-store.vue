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

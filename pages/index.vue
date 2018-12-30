<template>
  <c-main index>
    <c-title index>
      {{ title }}
    </c-title>

    <c-subtitle index>
      Server side rendering made easy
    </c-subtitle>
  </c-main>
</template>

<script>
import CMain from '@/components/c-main'
import CSubtitle from '@/components/c-subtitle'
import CTitle from '@/components/c-title'

import EventBus from '@/event-bus'

export default {
  head () {
    return {
      titleTemplate: '%s',
      title: this.title
    }
  },

  components: {
    CMain,
    CSubtitle,
    CTitle
  },

  data () {
    return {
      title: 'Introduction to Nuxt.js'
    }
  },

  created () {
    EventBus.$on('nextSlide', () => this.$router.push('/toc'))
  },

  destroyed () {
    EventBus.$off('nextSlide')
  }
}
</script>

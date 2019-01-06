<template>
  <c-main>
    <c-title slot="header">
      {{ title }}
    </c-title>

    <c-figure
      :src="require('@/assets/img/schema.png')"
      alt="Schema of the Nuxt.js request and navigation flow."
    >
      Source: <a
        href="https://nuxtjs.org/guide#schema"
        target="_blank"
        rel="noopener"
      >
        Nuxtjs.org
      </a>
    </c-figure>
  </c-main>
</template>

<script>
import CFigure from '@/components/c-figure'
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
    CFigure,
    CMain,
    CTitle
  },

  data () {
    return {
      title: 'Schema'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/what-is-nuxt'))
    EventBus.$on('nextSlide', () => this.$router.push('/installation'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

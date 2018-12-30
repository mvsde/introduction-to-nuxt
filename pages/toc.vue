<template>
  <c-main>
    <c-title slot="header">
      {{ title }}
    </c-title>

    <c-toc :entries="entries" />
  </c-main>
</template>

<script>
import CMain from '@/components/c-main'
import CTitle from '@/components/c-title'
import CToc from '@/components/c-toc'

import EventBus from '@/event-bus'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CMain,
    CTitle,
    CToc
  },

  data () {
    return {
      title: 'Table of Contents',
      entries: [
        {
          link: '/what-is-nuxt',
          title: 'What is Nuxt.js?'
        },
        {
          link: '/installation',
          title: 'Installation'
        },
        {
          link: '/folder-structure',
          title: 'Folder structure'
        },
        {
          link: '/asynchronous-data',
          title: 'Asynchronous Data'
        },
        {
          link: '/vuex-store',
          title: 'Vuex Store'
        },
        {
          link: '/deployment',
          title: 'Deployment'
        },
        {
          link: '/resources',
          title: 'Resources'
        }
      ]
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/'))
    EventBus.$on('nextSlide', () => this.$router.push('/what-is-nuxt'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

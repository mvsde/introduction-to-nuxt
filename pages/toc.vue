<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <ol>
      <li
        v-for="entry in entries"
        :key="entry.link"
      >
        <nuxt-link :to="entry.link">
          {{ entry.title }}
        </nuxt-link>
      </li>
    </ol>
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
    EventBus.$on('previousSlide', () => this.$router.push('/server-side-rendering'))
    EventBus.$on('nextSlide', () => this.$router.push('/what-is-nuxt'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

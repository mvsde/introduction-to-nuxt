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
          link: '/server-side-rendering',
          title: 'Server Side Rendering'
        },
        {
          link: '/what-is-nuxt',
          title: 'What is Nuxt.js?'
        },
        {
          link: '/installation',
          title: 'Installation'
        },
        {
          link: '/file-tree-routing',
          title: 'File Tree-based Routing'
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
  }
}
</script>

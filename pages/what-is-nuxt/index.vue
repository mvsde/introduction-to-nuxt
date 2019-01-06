<template>
  <c-main>
    <c-title slot="header">
      {{ title }}
    </c-title>

    <c-list>
      <c-list-item>
        “Meta framework” for Vue.js
      </c-list-item>

      <c-list-item>
        Abstraction for vue-server-renderer
      </c-list-item>

      <c-list-item>
        Built-in packages:

        <c-list>
          <c-list-item>
            <a
              href="https://router.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Vue Router
            </a>
          </c-list-item>

          <c-list-item>
            <a
              href="https://vuex.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Vuex
            </a>
          </c-list-item>

          <c-list-item>
            <a
              href="https://github.com/declandewet/vue-meta"
              target="_blank"
              rel="noopener"
            >
              vue-meta
            </a>
          </c-list-item>
        </c-list>
      </c-list-item>

      <c-list-item>
        Bonus feature: Static Site Generator
      </c-list-item>
    </c-list>
  </c-main>
</template>

<script>
import CList from '@/components/c-list'
import CListItem from '@/components/c-list-item'
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
    CList,
    CListItem,
    CMain,
    CTitle
  },

  data () {
    return {
      title: 'What is Nuxt.js?'
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/toc'))
    EventBus.$on('nextSlide', () => this.$router.push('/what-is-nuxt/schema'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

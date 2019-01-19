<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <ul>
      <li>“Meta framework” for Vue.js</li>
      <li>Abstraction for vue-server-renderer</li>

      <li>
        Built-in packages:

        <ul>
          <li>
            <a
              href="https://router.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Vue Router
            </a>
          </li>

          <li>
            <a
              href="https://vuex.vuejs.org"
              target="_blank"
              rel="noopener"
            >
              Vuex
            </a>
          </li>

          <li>
            <a
              href="https://github.com/declandewet/vue-meta"
              target="_blank"
              rel="noopener"
            >
              vue-meta
            </a>
          </li>
        </ul>
      </li>

      <li>Static Site Generator</li>
    </ul>
  </c-main>
</template>

<script>
import CMain from '@/components/CMain'

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
      title: 'What is Nuxt.js?'
    }
  }
}
</script>

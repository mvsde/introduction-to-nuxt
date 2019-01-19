<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <h2>Slides</h2>
    <ul>
      <li>
        <a href="https://nuxt.mvsde.com">
          nuxt.mvsde.com
        </a>
      </li>
      <li>
        <a
          href="https://github.com/mvsde/introduction-to-nuxt"
          target="_blank"
          rel="noopener"
        >
          github.com/mvsde/introduction-to-nuxt
        </a>
      </li>
    </ul>

    <h2>Documentation</h2>
    <ul>
      <li>
        <a
          href="https://nuxtjs.org"
          target="_blank"
          rel="noopener"
        >
          nuxtjs.org
        </a>
      </li>
      <li>
        <a
          href="https://zendev.com/2018/09/17/frontend-architecture-lessons-from-nuxt-js.html"
          target="_blank"
          rel="noopener"
        >
          zendev.com/2018/09/17/frontend-architecture-lessons-from-nuxt-js.html
        </a>
      </li>
      <li>
        <a
          href="https://github.com/nuxt-community/awesome-nuxt#projects-using-nuxtjs"
          target="_blank"
          rel="noopener"
        >
          github.com/nuxt-community/awesome-nuxt#projects-using-nuxtjs
        </a>
      </li>
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
      title: 'Resources'
    }
  }
}
</script>

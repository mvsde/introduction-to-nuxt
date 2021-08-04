<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>Deployment</small>
    </h1>

    <h2><code>generate</code></h2>
    <ul>
      <li>Generates HTML files</li>
      <li>Static file hosting</li>
    </ul>

    <h2>Recipes</h2>
    <ul>
      <li>
        <a
          href="https://nuxtjs.org/faq/github-pages"
          target="_blank"
          rel="noopener"
        >
          nuxtjs.org/faq/github-pages
        </a>
      </li>
      <li>
        <a
          href="https://nuxtjs.org/faq/netlify-deployment"
          target="_blank"
          rel="noopener"
        >
          nuxtjs.org/faq/netlify-deployment
        </a>
      </li>
      <li>
        <a
          href="https://nuxtjs.org/faq/now-deployment"
          target="_blank"
          rel="noopener"
        >
          nuxtjs.org/faq/now-deployment
        </a>
      </li>
    </ul>
  </c-main>
</template>

<script>
import CMain from '@/components/CMain'

export default {
  components: {
    CMain
  },

  data () {
    return {
      title: 'Static Generated'
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

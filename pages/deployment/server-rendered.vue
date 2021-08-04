<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>Deployment</small>
    </h1>

    <h2><code>build</code></h2>
    <ul>
      <li>Creates production-ready files</li>
      <li>Minifies JavaScript and CSS</li>
    </ul>

    <h2><code>start</code></h2>
    <ul>
      <li>Starts server in production mode</li>
      <li>Handles server side rendering</li>
      <li>
        <a
          href="https://nuxtjs.org/faq/nginx-proxy"
          target="_blank"
          rel="noopener"
        >
          nuxtjs.org/faq/nginx-proxy
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
      title: 'Server Rendered'
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

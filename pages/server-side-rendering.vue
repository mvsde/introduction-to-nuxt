<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <h2>SPA</h2>
    <ul>
      <li>Single HTML file</li>
      <li>Client-side rendering and routing</li>
    </ul>

    <h2>SSR</h2>
    <ul>
      <li>Server responds with entry HTML file</li>
      <li>JavaScript hydrates SPA</li>
    </ul>
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
      title: 'Server Side Rendering'
    }
  }
}
</script>

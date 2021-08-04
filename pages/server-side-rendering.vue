<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <h2>
      <abbr title="Single Page Application">
        SPA
      </abbr>
    </h2>
    <ul>
      <li>Single HTML file</li>
      <li>Client-side rendering and routing</li>
    </ul>

    <h2>
      <abbr title="Server Side Rendering">
        SSR
      </abbr>
    </h2>
    <ul>
      <li>Server responds with entry HTML file</li>
      <li>JavaScript hydrates SPA</li>
      <li>Subsequent pages load asynchronously</li>
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
      title: 'Server Side Rendering'
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <c-figure
      alt="Schema of the Nuxt.js view layer structure."
      :height="730"
      :src="require('@/assets/img/views.svg')"
      :width="1460"
    >
      Source: <a
        href="https://nuxtjs.org/guide/views"
        rel="noopener"
        target="_blank"
      >
        Nuxtjs.org
      </a>
    </c-figure>
  </c-main>
</template>

<script>
import CFigure from '@/components/c-figure'
import CMain from '@/components/c-main'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CFigure,
    CMain
  },

  data () {
    return {
      title: 'View Layers'
    }
  }
}
</script>

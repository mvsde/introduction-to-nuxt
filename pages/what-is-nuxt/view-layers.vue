<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>What is Nuxt.js?</small>
    </h1>

    <c-figure
      :src="require('@/assets/img/views.svg')"
      alt="Schema of the Nuxt.js view layer structure."
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
import CFigure from '@/components/CFigure'
import CMain from '@/components/CMain'

export default {
  components: {
    CFigure,
    CMain
  },

  data () {
    return {
      title: 'View Layers'
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

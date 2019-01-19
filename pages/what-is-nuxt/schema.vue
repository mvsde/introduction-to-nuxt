<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>What is Nuxt.js?</small>
    </h1>

    <c-figure
      alt="Schema of the Nuxt.js request and navigation flow."
      :height="823"
      :src="require('@/assets/img/schema.svg')"
      :width="560"
      stacked
    >
      Source: <a
        href="https://nuxtjs.org/guide#schema"
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
      title: 'Schema'
    }
  }
}
</script>

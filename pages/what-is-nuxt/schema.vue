<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>What is Nuxt.js?</small>
    </h1>

    <c-figure
      :src="require('@/assets/img/schema.svg')"
      alt="Schema of the Nuxt.js request and navigation flow."
      side-by-side
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
  components: {
    CFigure,
    CMain
  },

  data () {
    return {
      title: 'Schema'
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

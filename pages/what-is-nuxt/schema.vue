<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <c-figure
      alt="Schema of the Nuxt.js request and navigation flow."
      :height="750"
      :src="require('@/assets/img/schema.svg')"
      :width="510"
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
      title: 'Schema'
    }
  }
}
</script>

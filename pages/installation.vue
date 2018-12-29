<template>
  <c-main>
    <global-events
      @keyup.left="previousSlide"
      @keyup.right="nextSlide"
    />

    <c-title slot="header">
      {{ title }}
    </c-title>
  </c-main>
</template>

<script>
import CMain from '@/components/c-main'
import CTitle from '@/components/c-title'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CMain,
    CTitle
  },

  data () {
    return {
      title: 'Installation'
    }
  },

  methods: {
    previousSlide () {
      this.$router.push('/what-is-nuxt')
    },
    nextSlide () {
      this.$router.push('/folder-structure')
    }
  }
}
</script>

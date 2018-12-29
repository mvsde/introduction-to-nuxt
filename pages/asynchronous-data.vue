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
      title: 'Asynchronous Data'
    }
  },

  methods: {
    previousSlide () {
      this.$router.push('/folder-structure')
    },
    nextSlide () {
      this.$router.push('/vuex-store')
    }
  }
}
</script>

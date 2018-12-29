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
      title: 'Deployment'
    }
  },

  methods: {
    previousSlide () {
      this.$router.push('/vuex-store')
    },
    nextSlide () {
      this.$router.push('/resources')
    }
  }
}
</script>

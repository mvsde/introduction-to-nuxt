<template>
  <c-main>
    <global-events
      @keyup.left="previousSlide"
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
      title: 'Resources'
    }
  },

  methods: {
    previousSlide () {
      this.$router.push('/deployment')
    }
  }
}
</script>

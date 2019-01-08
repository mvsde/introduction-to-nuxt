<template>
  <c-main
    previous="/vuex-store"
    next="/resources"
  >
    <h1 slot="header">
      {{ title }}
    </h1>
  </c-main>
</template>

<script>
import CMain from '@/components/c-main'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CMain
  },

  data () {
    return {
      title: 'Deployment'
    }
  }
}
</script>

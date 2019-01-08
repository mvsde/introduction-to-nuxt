<template>
  <c-main
    previous="/file-tree-routing"
    next="/vuex-store"
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
      title: 'Asynchronous Data'
    }
  }
}
</script>

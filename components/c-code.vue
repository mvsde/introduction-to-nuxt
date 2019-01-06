<template>
  <!-- eslint-disable vue/no-v-html -->
  <pre class="code"><code v-html="html" /></pre>
</template>

<script>
import Prism from 'prismjs'

export default {
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'javascript'
    }
  },

  computed: {
    html () {
      return Prism.highlight(this.code, Prism.languages[this.language], this.language)
    }
  }
}
</script>

<style scoped>
.code {
  margin: 0 0 var(--vertical-space);
}
</style>

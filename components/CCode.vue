<template>
  <!-- eslint-disable vue/no-v-html -->
  <pre><code v-html="html" /></pre>
</template>

<script>
import Prism from 'prismjs'

Prism.languages.folders = {
  punctuation: /^([-|+`'\s]+)/gm,
  string: /([a-zA-Z0-9._].+)/g
}

export default {
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: undefined
    }
  },

  computed: {
    html () {
      if (!this.language) {
        return this.code
      }

      return Prism.highlight(this.code, Prism.languages[this.language], this.language)
    }
  }
}
</script>

<style>
.token.comment {
  font-style: italic;
}

.token.operator {
  background: none;
}
</style>

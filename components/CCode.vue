<template>
  <!-- eslint-disable vue/no-v-html -->
  <pre class="code"><code v-html="html" /></pre>
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

<style scoped>
.code {
  margin: 0 0 var(--vertical-space);
  padding: 0.4em 0.6em;

  background: rgb(var(--color-code-bg));
  border-radius: 0.1em;
}

.code >>> .token.operator {
  background: none;
}
</style>

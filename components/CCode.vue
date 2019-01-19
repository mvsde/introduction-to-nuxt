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

Prism.languages.bash['function-extend'] = {
  pattern: /(^|[\s;|&])(?:npx|yarn)(?=$|[\s;|&])/,
  lookbehind: true,
  alias: 'function'
}

Prism.languages.bash['keyword-extend'] = {
  pattern: /(^|[\s;|&])(?:create|run)(?=$|[\s;|&])/,
  lookbehind: true,
  alias: 'keyword'
}

const supported = [
  'bash',
  'folders',
  'javascript',
  'twig'
]

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
      if (!supported.includes(this.language)) {
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

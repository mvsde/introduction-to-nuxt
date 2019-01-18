<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <c-code
      :code="codeFileTree"
      language="folders"
    />

    <p class="center">
      ↓
    </p>

    <c-code
      :code="codeRouterJs"
      language="javascript"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/c-code'
import CMain from '@/components/c-main'

const codeFileTree = `pages/about-us/
'-- index.vue`

const codeRouterJs = `{
  name: 'about-us',
  path: '/about-us',
  component: 'pages/about-us/index.vue'
}`

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CCode,
    CMain
  },

  data () {
    return {
      title: 'router.js'
    }
  },

  computed: {
    codeFileTree () {
      return codeFileTree
    },
    codeRouterJs () {
      return codeRouterJs
    }
  }
}
</script>

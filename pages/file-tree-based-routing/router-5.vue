<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>File Tree-based Routing</small>
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
import CCode from '@/components/CCode'
import CMain from '@/components/CMain'

const codeFileTree = `pages/products/
'-- _slug.vue`

const codeRouterJs = `{
  name: 'products-slug',
  path: '/products/:slug?',
  component: 'pages/products/_slug.vue'
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

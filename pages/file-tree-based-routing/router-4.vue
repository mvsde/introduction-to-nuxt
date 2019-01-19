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
      <c-icon icon="arrow-down" />
    </p>

    <c-code
      :code="codeRouterJs"
      language="javascript"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/CCode'
import CIcon from '@/components/CIcon'
import CMain from '@/components/CMain'

const codeFileTree = `pages/products/
'-- index.vue`

const codeRouterJs = `{
  name: 'products',
  path: '/products',
  component: 'pages/products/index.vue'
}`

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CCode,
    CIcon,
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

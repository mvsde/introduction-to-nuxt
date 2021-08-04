<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <div class="split">
      <c-code :code="codeFileTree" />
      →
      <c-code :code="codeRouterConfig" />
    </div>
  </c-main>
</template>

<script>
import CCode from '@/components/CCode'
import CMain from '@/components/CMain'

const codeFileTree = `pages/
  | user/
    | index.vue
    | a.vue
  | index.vue`

const codeRouterConfig = `[{
  name: 'index', path: '/',
  component: 'pages/index.vue'
}, {
  name: 'user', path: '/user',
  component: 'pages/user/index.vue'
}, {
  name: 'user-a', path: '/user/a',
  component: 'pages/user/a.vue'
}]`

export default {
  components: {
    CCode,
    CMain
  },

  data () {
    return {
      title: 'File Tree-based Routing'
    }
  },

  head () {
    return {
      title: this.title
    }
  },

  computed: {
    codeFileTree () {
      return codeFileTree
    },
    codeRouterConfig () {
      return codeRouterConfig
    }
  }
}
</script>

<style scoped>
.split {
  display: grid;
  grid-gap: 3vmin;
  grid-template-columns: 1fr min-content 2fr;
  align-items: center;
}

.split > * {
  margin-bottom: 0;
}
</style>

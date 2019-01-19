<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <c-code
      :code="codeFileTree"
      language="folders"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/CCode'
import CMain from '@/components/CMain'

const codeFileTree = `pages/
|-- about-us/
|   |-- index.vue
|   '-- jobs.vue
|-- products/
|   |-- index.vue
|   '-- _slug.vue
'-- index.vue`

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
      title: 'File Tree-based Routing'
    }
  },

  computed: {
    codeFileTree () {
      return codeFileTree
    }
  }
}
</script>

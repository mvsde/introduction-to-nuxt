<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <ul>
      <li>Automatic Vue Router setup</li>
      <li>Support for dynamic routes</li>
    </ul>

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
    }
  }
}
</script>

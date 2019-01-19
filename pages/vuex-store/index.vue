<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <ul>
      <li>Automatic Vuex setup with namespacing</li>
      <li>Separate <code>.js</code> files per module</li>
      <li>Available as <code>this.$store</code></li>
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

const codeFileTree = `store/
|-- cart.js
|-- products.js
|-- user.js
'-- …`

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
      title: 'Vuex Store'
    }
  },

  computed: {
    codeFileTree () {
      return codeFileTree
    }
  }
}
</script>

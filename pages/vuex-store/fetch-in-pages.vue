<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>Vuex Store</small>
    </h1>

    <ul>
      <li>Pre-fill store before rendering</li>
      <li>Similar to <code>asyncData</code></li>
    </ul>

    <c-code
      :code="codeScript"
      language="javascript"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/CCode'
import CMain from '@/components/CMain'

const codeScript = `export default {
  async fetch ({ store }) {
    const data = await get('/api/products')
    store.commit('products/add', data)
  }
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
      title: 'Fetch in Pages'
    }
  },

  computed: {
    codeScript () {
      return codeScript
    }
  }
}
</script>

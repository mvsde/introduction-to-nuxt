<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>Vuex Store</small>
    </h1>

    <c-code
      :code="codeStoreModule"
      language="javascript"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/CCode'
import CMain from '@/components/CMain'

const codeStoreModule = `// Function allows multiple state instances
export const state = () => ({
  items: []
})

export const mutations = {
  add (state, item) {
    state.items.push(item)
  }
}`

export default {
  components: {
    CCode,
    CMain
  },

  data () {
    return {
      title: 'Modules'
    }
  },

  head () {
    return {
      title: this.title
    }
  },

  computed: {
    codeStoreModule () {
      return codeStoreModule
    }
  }
}
</script>

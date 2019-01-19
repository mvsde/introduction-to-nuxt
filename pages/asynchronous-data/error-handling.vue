<template>
  <c-main>
    <h1 slot="header">
      {{ title }} <small>Asynchronous Data</small>
    </h1>

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
  async asyncData ({ params, error }) {
    try {
      const data = await get(\`/api/\${params.slug}\`)
      return { title: data.title }
    } catch (e) {
      error({ statusCode: 404, message: 'Not found' })
    }
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
      title: 'Error Handling'
    }
  },

  computed: {
    codeScript () {
      return codeScript
    }
  }
}
</script>

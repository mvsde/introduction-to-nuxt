<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <c-code
      :code="codeTemplate"
      language="twig"
    />

    <c-code
      :code="codeScript"
      language="javascript"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/c-code'
import CMain from '@/components/c-main'

const codeTemplate = `<template>
  <h1>{{ title }}</h1>
</template>`

const codeScript = `export default {
  async asyncData ({ params }) {
    const data = await get(\`/api/\${params.slug}\`)
    return { title: data.title }
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
      title: 'Asynchronous Data'
    }
  },

  computed: {
    codeTemplate () {
      return codeTemplate
    },
    codeScript () {
      return codeScript
    }
  }
}
</script>

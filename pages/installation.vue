<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <h2>npm</h2>
    <c-code
      :code="codeNpm"
      language="bash"
    />

    <h2>Yarn</h2>
    <c-code
      :code="codeYarn"
      language="bash"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/CCode'
import CMain from '@/components/CMain'

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
      title: 'Installation'
    }
  },

  computed: {
    codeNpm () {
      return 'npx create-nuxt-app project-name'
    },
    codeYarn () {
      return 'yarn create nuxt-app project-name'
    }
  }
}
</script>

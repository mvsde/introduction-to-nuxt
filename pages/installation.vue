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

const codeNpm = `npx create-nuxt-app <project-name>
cd <project-name>
npm run dev`

const codeYarn = `yarn create nuxt-app <project-name>
cd <project-name>
yarn run dev`

export default {
  components: {
    CCode,
    CMain
  },

  data () {
    return {
      title: 'Installation'
    }
  },

  head () {
    return {
      title: this.title
    }
  },

  computed: {
    codeNpm () {
      return codeNpm
    },
    codeYarn () {
      return codeYarn
    }
  }
}
</script>

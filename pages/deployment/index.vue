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

const codeNpm = `npm run build
npm run start
npm run generate`

const codeYarn = `yarn run build
yarn run start
yarn run generate`

export default {
  components: {
    CCode,
    CMain
  },

  data () {
    return {
      title: 'Deployment'
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

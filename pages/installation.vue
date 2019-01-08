<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <c-code
      :code="installationCode"
      language="bash"
    />
  </c-main>
</template>

<script>
import CCode from '@/components/c-code'
import CMain from '@/components/c-main'

import EventBus from '@/event-bus'

const installationCode = `# With npx
npx create-nuxt-app project-name

# With Yarn
yarn create nuxt-app project-name`

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
    installationCode () {
      return installationCode
    }
  },

  created () {
    EventBus.$on('previousSlide', () => this.$router.push('/what-is-nuxt/schema'))
    EventBus.$on('nextSlide', () => this.$router.push('/folder-structure'))
  },

  destroyed () {
    EventBus.$off('previousSlide')
    EventBus.$off('nextSlide')
  }
}
</script>

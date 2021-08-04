<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <div>
      <p>This slide could not be found. Maybe start at the beginning?</p>

      <ul>
        <li>
          <nuxt-link to="/">
            Introduction to Nuxt.js
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/agenda">
            Agenda
          </nuxt-link>
        </li>
      </ul>
    </div>
  </c-main>
</template>

<script>
import CMain from '@/components/CMain'

export default {
  components: {
    CMain
  },

  data () {
    return {
      title: 'Slide Not Found'
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

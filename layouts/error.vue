<template>
  <c-main>
    <c-title slot="header">
      {{ title }}
    </c-title>

    <div>
      <p>This slide could not be found. Maybe start at the beginning?</p>

      <c-list>
        <c-list-item>
          <nuxt-link to="/">
            Introduction to Nuxt.js
          </nuxt-link>
        </c-list-item>
        <c-list-item>
          <nuxt-link to="/toc">
            Table of Contents
          </nuxt-link>
        </c-list-item>
      </c-list>
    </div>
  </c-main>
</template>

<script>
import CList from '@/components/c-list'
import CListItem from '@/components/c-list-item'
import CMain from '@/components/c-main'
import CTitle from '@/components/c-title'

export default {
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CList,
    CListItem,
    CMain,
    CTitle
  },

  data () {
    return {
      title: 'Slide Not Found'
    }
  }
}
</script>

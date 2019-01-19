<template>
  <div>
    <global-events
      @keydown.left="previousSlide"
      @keydown.right="nextSlide"
      @mousemove="autohide"
      @mousedown="autohide"
    />

    <nuxt />

    <transition name="fade">
      <c-nav
        v-show="!autohideEnabled"
        :previous="previous"
        :next="next"
      />
    </transition>
  </div>
</template>

<script>
import CNav from '@/components/CNav'
import GlobalEvents from 'vue-global-events'

import config from '@/config'

export default {
  components: {
    CNav,
    GlobalEvents
  },

  data () {
    return {
      autohideEnabled: true,
      autohideTimer: null
    }
  },

  computed: {
    routeIndex () {
      return config.sequence.indexOf(this.$route.path)
    },
    previous () {
      if (this.routeIndex === 0) {
        return
      }

      return config.sequence[this.routeIndex - 1]
    },
    next () {
      if (this.routeIndex === config.sequence.length - 1) {
        return
      }

      return config.sequence[this.routeIndex + 1]
    }
  },

  created () {
    this.autohide()
  },

  methods: {
    autohide () {
      if (!process.client) {
        return
      }

      if (this.autohideTimer) {
        clearTimeout(this.autohideTimer)
      }

      this.autohideEnabled = false

      document.documentElement.style.cursor = ''
      document.body.style.pointerEvents = ''

      this.autohideTimer = setTimeout(() => {
        this.autohideEnabled = true
        this.autohideTimer = null

        document.documentElement.style.cursor = 'none'
        document.body.style.pointerEvents = 'none'
      }, 2000)
    },
    previousSlide () {
      if (!this.previous) {
        return
      }

      this.$router.push(this.previous)
    },
    nextSlide () {
      if (!this.next) {
        return
      }

      this.$router.push(this.next)
    }
  }
}
</script>

<template>
  <div>
    <global-events
      @keyup.left="previousSlide"
      @keyup.right="nextSlide"
      @keyup.33="previousSlide"
      @keyup.34="nextSlide"
      @keyup.116="enterFullscreen"
      @keyup.66="toggleBlank"
      @keydown.116.prevent
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
      autohideTimer: null,
      isBlanked: false
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
    },
    enterFullscreen () {
      document.documentElement.requestFullscreen()
    },
    toggleBlank () {
      if (this.isBlanked) {
        document.body.style.opacity = ''
        this.isBlanked = false
      } else {
        document.body.style.opacity = '0'
        this.isBlanked = true
      }
    }
  }
}
</script>

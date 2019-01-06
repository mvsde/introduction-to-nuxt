<template>
  <div :style="{ 'cursor': autohideEnabled ? 'none' : undefined }">
    <global-events
      @keyup.left="previousSlide"
      @keyup.right="nextSlide"
      @mousemove="autohide"
      @mousedown="autohide"
    />

    <nuxt />

    <transition name="fade">
      <c-nav v-show="!autohideEnabled" />
    </transition>
  </div>
</template>

<script>
import CNav from '@/components/c-nav'

import EventBus from '@/event-bus'

export default {
  components: {
    CNav
  },

  data () {
    return {
      autohideEnabled: true,
      autohideTimer: null
    }
  },

  created () {
    this.autohide()
  },

  methods: {
    previousSlide () {
      EventBus.$emit('previousSlide')
    },
    nextSlide () {
      EventBus.$emit('nextSlide')
    },
    autohide () {
      if (this.autohideTimer) {
        clearTimeout(this.autohideTimer)
      }

      this.autohideEnabled = false
      this.autohideTimer = setTimeout(() => {
        this.autohideEnabled = true
        this.autohideTimer = null
      }, 2000)
    }
  }
}
</script>

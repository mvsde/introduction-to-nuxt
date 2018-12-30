<template>
  <div :class="{ 'autohide': autohideEnabled }">
    <global-events
      @keyup.left="previousSlide"
      @keyup.right="nextSlide"
      @mousemove="autohide"
      @mousedown="autohide"
    />

    <nuxt />
  </div>
</template>

<script>
import EventBus from '@/event-bus'

export default {
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

<style scoped>
.autohide {
  cursor: none;
}
</style>

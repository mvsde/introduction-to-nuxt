<template>
  <main
    class="main"
    :class="{ 'autohide': autohideEnabled }"
  >
    <global-events
      @keyup.left="previousSlide"
      @keyup.right="nextSlide"
      @mousemove="autohide"
      @mousedown="autohide"
    />

    <div
      v-if="$slots.header"
      class="header"
    >
      <slot name="header" />
    </div>

    <div
      class="content"
      :class="{ 'content--center': center }"
    >
      <slot />
    </div>

    <transition name="fade">
      <c-nav
        v-show="!autohideEnabled"
        :previous="previous"
        :next="next"
      />
    </transition>
  </main>
</template>

<script>
import CNav from '@/components/c-nav'
import GlobalEvents from 'vue-global-events'

import config from '@/config'

export default {
  components: {
    CNav,
    GlobalEvents
  },

  props: {
    center: {
      type: Boolean,
      default: false
    }
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
      if (this.autohideTimer) {
        clearTimeout(this.autohideTimer)
      }

      this.autohideEnabled = false
      this.autohideTimer = setTimeout(() => {
        this.autohideEnabled = true
        this.autohideTimer = null
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

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 4vmin 5vmin;

  border: var(--frame-width) solid rgb(var(--color-light));
}

.autohide {
  cursor: none;
}

.header {
  margin-bottom: 8vmin;
  padding-bottom: 4vmin;

  border-bottom: 0.4vmin solid rgba(var(--color-dark), 0.2);
}

.content {
  flex-grow: 1;
}

.content--center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content > :first-child {
  margin-top: 0;
}

.content > :last-child {
  margin-bottom: 0;
}
</style>

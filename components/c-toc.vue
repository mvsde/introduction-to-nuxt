<template>
  <c-list ordered>
    <c-list-item
      v-for="entry in entries"
      :key="entry.link"
    >
      <nuxt-link :to="entry.link">
        {{ entry.title }}
      </nuxt-link>
    </c-list-item>
  </c-list>
</template>

<script>
import CList from '@/components/c-list'
import CListItem from '@/components/c-list-item'

export default {
  components: {
    CList,
    CListItem
  },

  props: {
    entries: {
      type: Array,
      required: true
    }
  }
}
</script>

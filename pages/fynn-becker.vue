<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <p class="occupation">
      Website and blog at
      <a
        href="https://fynn.be"
        target="_blank"
      >
        fynn.be
      </a>
    </p>

    <h2>Social Stuff</h2>

    <ul class="social">
      <li
        v-for="(item, name) in social"
        :key="name"
        class="social__item"
      >
        <a
          :href="item.url"
          class="social__link"
          target="_blank"
        >
          <img
            :alt="name"
            :src="require(`@/assets/img/${name}.svg`)"
          >
          {{ item.text }}
        </a>
      </li>
    </ul>
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
      title: 'Fynn Becker',
      social: {
        twitter: {
          url: 'https://twitter.com/mvsde',
          text: 'mvsde'
        },
        github: {
          url: 'https://github.com/mvsde',
          text: 'mvsde'
        },
        gitlab: {
          url: 'https://gitlab.com/mvsde',
          text: 'mvsde'
        },
        linkedin: {
          url: 'https://www.linkedin.com/in/fynn',
          text: 'fynn'
        }
      }
    }
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped>
.social__link {
  display: inline-grid;
  grid-template-columns: 7vmin 1fr;
  gap: 2vmin;
}

.occupation {
  margin: 0;
}

.social {
  list-style: none;
  padding: 0;
}

.social__item {
  padding: 0;
}

.social__link {
  color: inherit;
}

.social__link:hover,
.social__link:focus {
  color: rgb(var(--color-light));
}
</style>

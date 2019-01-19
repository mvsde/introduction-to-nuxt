<template>
  <c-main>
    <h1 slot="header">
      {{ title }}
    </h1>

    <p>
      Front-end developer at <a
        href="https://lfda.de"
        rel="noopener"
        target="_blank"
      >
        LfdA – Labor für digitale Angelegenheiten
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
          class="social__link"
          :href="item.url"
          rel="noopener"
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
  head () {
    return {
      title: this.title
    }
  },

  components: {
    CMain
  },

  data () {
    return {
      title: 'Fynn Becker',
      social: {
        twitter: {
          url: 'https://twitter.com/mvsde',
          text: '@mvsde'
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
          text: 'in/fynn'
        }
      }
    }
  }
}
</script>

<style scoped>
.social {
  list-style: none;
  padding: 0;
}

.social__item {
  padding: 0;
}

.social__link {
  display: inline-grid;
  grid-template-columns: 7vmin 1fr;
  gap: 2vmin;

  color: inherit;
}

.social__link:hover,
.social__link:focus {
  color: rgb(var(--color-light));
}
</style>

<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="main-grid">
      <div class="sidebar sidebar--left">
        <Menu />
      </div>
      <Section class="doc-content">
        <slot></slot>
        <!-- <nav class="docs-nav">
          <div class="docs-nav__previous">
            <g-link v-if="previousPage" exact class="button  button--small docs-nav__link" :to="previousPage.link">
              &larr; {{ previousPage.title }}
            </g-link>
          </div>
          <div class="docs-nav__next">
            <g-link v-if="nextPage" exact class="button  button--small docs-nav__link" :to="nextPage.link">
              {{ nextPage.title }} &rarr;
            </g-link>
          </div>
        </nav> -->
      </Section>
      <PageNav v-if="subtitles.length > 0 && subtitles[0].depth !== 3 && currentPath !== '/'" :links="subtitles" />
    </div>
  </Layout>
</template>

<script>
import Menu from '@/components/Menu.vue';
import PageNav from '@/components/PageNav.vue';

export default {
  components: {
    Menu,
    PageNav,
  },
  props: {
    subtitles: { type: Array, default: () => [] },
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path;
    },
    isSubSection () {
      if (this.$route.path === '/') {
        return false;
      } else {
        return true;
      }
    },
    pagesPerCategory () {
      let categoriesObject = {};
      let allPages = this.$static.docpages.edges.concat(this.$static.clipages.edges);
      allPages.forEach( p => {
        let categories = p.node.categories;
        categories.forEach( c => {
          if (categoriesObject[c]) {
            categoriesObject[c]++;
          } else {
            categoriesObject[c] = 1;
          }
        });
      });
      return categoriesObject;
    },
    currentIndex () {
      return this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '');
      })
    },
    nextPage () {
      let i = 1;
      let next = this.items[this.currentIndex + i];
      return this.items[this.currentIndex + 1];
    },
    previousPage () {
      return this.items[this.currentIndex - 1];
    }
  }
}
</script>

<style lang="scss">
.main-grid {
  display: grid;
  grid-template-columns: 100%;

  @media screen and (min-width: 57rem) {
    grid-template-columns: calc(50vw - 75rem)
                           25rem
                           minmax(0, 1fr)
                           calc(50vw - 75rem);
 
    &::before {
      content: '';
      grid-column-start: 1;

      background-color: var(--blue-100);
    }
  }

  @media screen and (min-width: 80rem) {
    grid-template-columns: calc(50vw - 75rem) 
                           30rem 
                           minmax(0, 1fr)
                           30rem
                           calc(50vw - 75rem) ;
  }
}

.sidebar {
  position: sticky;
  top: 4.8rem;
  order: 0;
  z-index: 10;

  height: calc(100vh - 4.8rem);
  overflow: auto;
  padding: 9.5rem 0 0;

  transition: border-color .3s;

  -webkit-overflow-scrolling: touch;

  &--left {
    grid-column-start: 1;
    grid-row-start: 2;

    background-color: var(--blue-100);

    @media screen and (min-width: 57rem) {
      grid-column-start: 2;
      grid-row-start: 1;
    }
  }

  &--right {
    display: none;
    padding-right: 2rem;
    
    @media screen and (min-width: 80rem) {
      grid-column-start: 4;
      display: block;
    }
  }
}
</style>
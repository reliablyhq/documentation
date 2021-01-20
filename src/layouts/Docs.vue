<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container flex flex-align-top">
      <div class="sidebar">
        <template v-if="links">
            <g-link v-if="isSubSection" class="sidebar-backlink" to="/docs/">&larr; Docs</g-link>
            <nav class="sidebar-nav">
              <div class="sidebar-nav__header">
                <template v-if="currentPath.startsWith('/docs/getting-started/')">
                  <div class="menu-item">
                    Getting Started
                    <span class="count">{{ pagesPerCategory["getting-started"] }}</span>
                  </div>
                  <g-link to="/docs/getting-started" class="menu-link">Overview</g-link>
                </template>
                <template v-if="currentPath.startsWith('/docs/guides/')">
                  <div class="menu-item">
                    Guides
                    <span class="count">{{ pagesPerCategory.guides }}</span>
                  </div>
                  <g-link to="/docs/guides" class="menu-link">Overview</g-link>
                </template>
                <template v-if="currentPath.startsWith('/docs/reference/')">
                  <div class="menu-item">
                    Reference
                    <span class="count">{{ pagesPerCategory.reference }}</span>
                  </div>
                  <g-link to="/docs/reference" class="menu-link">Overview</g-link>
                </template>
              </div>
              <template v-for="(group, i1) in links">
                <MenuSection v-if="group.items" :key="i1" :group="group" :index="i1" :counts="pagesPerCategory" />
                <g-link v-else :key="i1" :to="group.link" class="menu-link">{{ group.title }}</g-link>
              </template>
              
            </nav>
          <!-- <template v-else>



              <div class="menu-item" :key="`title-${i1}`">
                {{ group.title }}
              </div>
              <template v-for="(item, i2) in group.items">
                <g-link :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
                  {{ item.title }}
                </g-link>
              </template>
            </template>
          </template> -->
        </template>
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
      <div v-if="subtitles.length > 0 && subtitles[0].depth !== 3 && currentPath !== '/docs'" class="sidebar sidebar--right hide-for-small">
        <h3>On this page</h3>
        <ul v-if="subtitles.length" class="menu-item submenu">
          <li class="submenu__item" :class="'submenu__item-depth-' + subtitle.depth" v-for="subtitle in subtitles" :key="subtitle.value">
            <a class="submenu__link" :href="subtitle.anchor">
              {{ subtitle.value }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query Pages {
  pages: allDocPage(filter: { type: { eq: "doc" }, status: { eq: "published" }}) {
		edges {
    	node {
      	id
      	title
        path
        type
        categories
    	}
    }
  }
}
</static-query>

<script>
import MenuSection from '@/components/MenuSection.vue';

export default {
  components: {
    MenuSection,
  },
  props: {
    subtitles: { type: Array, default: () => [] },
    allLinks: { type: Object },
    // rootLinks: { type: Array, default: () => [] },
    // guideLinks: { type: Array, default: () => [] }
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path;
    },
    isSubSection () {
      if (this.$route.path === '/docs/') {
        return false;
      } else {
        return true;
      }
    },
    links () {
      if (this.$route.path.startsWith('/docs/guides')) {
        return this.allLinks.guideLinks;
      } else if (this.$route.path.startsWith('/docs/getting-started')) {
        return this.allLinks.gettingStartedLinks;
      } else if (this.$route.path.startsWith('/docs/reference')) {
        return this.allLinks.referenceLinks;
      }else {
        return this.allLinks.rootLinks;
      }
    },
    pagesPerCategory () {
      // let Object = {
      //   prologue: 0,
      //   gettingStarted: 0,
      //   guides: {
      //     total: 0,
      //     runAsYouCode: 0,
      //     CIPipeline: 0,
      //     runContinuously: 0,
      //     metrics: 0,
      //   },
      //   reference: {
      //     total: 0,
      //     cli: 0
      //   }
      // };
      let categoriesObject = {};
      this.$static.pages.edges.forEach( p => {
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
    items () {
      // const flat = []; 
      // this.links.forEach(group => {
      //   group.items.forEach(item => {
      //     if (item.link) {
      //       flat.push(item);
      //     } else if (item.items) {
      //       item.items.forEach(sub => {
      //         if (sub.link) {
      //           flat.push(sub);
      //         }
      //       })
      //     }
      //   });
      // });
      // return flat;

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
.sidebar {
  &-backlink {
    display: inline-block;
    margin-bottom: 4em;
  }

  &-nav {
    &__header {
      a {

      }
    }
    .menu-item {
      // margin-bottom: .7rem;
      // padding-left: 2rem;


    }
  }
}
</style>
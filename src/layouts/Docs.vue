<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="main-grid">
      <div class="sidebar sidebar--left">
        <template v-if="links">
          <g-link v-if="isSubSection" class="sidebar-backlink" to="/">&larr; Docs</g-link>
          <nav class="sidebar-nav">
            <div class="sidebar-nav__header">
              <template v-if="currentPath.startsWith('/getting-started')">
                <div class="menu-item">
                  Getting Started
                  <span class="count">{{ pagesPerCategory["getting-started"] }}</span>
                </div>
                <g-link to="/getting-started/" class="menu-link">Overview</g-link>
              </template>
              <template v-if="currentPath.startsWith('/guides')">
                <div class="menu-item">
                  Guides
                  <span class="count">{{ pagesPerCategory.guides }}</span>
                </div>
                <g-link to="/guides/" class="menu-link">Overview</g-link>
              </template>
              <template v-if="currentPath.startsWith('/reference')">
                <div class="menu-item">
                  Reference
                  <span class="count">{{ pagesPerCategory.reference }}</span>
                </div>
                <g-link to="/reference/" class="menu-link">Overview</g-link>
              </template>
            </div>
            <template v-for="(group, i1) in links">
              <MenuSection v-if="group.items" :key="i1" :group="group" :index="i1" :counts="pagesPerCategory" />
              <g-link v-else :key="i1" :to="group.link" class="menu-link">{{ group.title }}</g-link>
            </template>
          </nav>
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
      <div v-if="subtitles.length > 0 && subtitles[0].depth !== 3 && currentPath !== '/'" class="sidebar sidebar--right hide-for-small">
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
query {
  docpages: allDocPage(filter: { type: { eq: "doc" }, status: { eq: "published" }}) {
		edges {
    	node {
      	id
      	title
        path
        type
        categories
    	}
    }
  },
  clipages: allCliPage(filter: { type: { eq: "doc" }, status: { eq: "published" }}) {
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
      if (this.$route.path === '/') {
        return false;
      } else {
        return true;
      }
    },
    links () {
      if (this.$route.path.startsWith('/guides')) {
        return this.allLinks.guideLinks;
      } else if (this.$route.path.startsWith('/getting-started')) {
        return this.allLinks.gettingStartedLinks;
      } else if (this.$route.path.startsWith('/reference')) {
        return this.allLinks.referenceLinks;
      }else {
        return this.allLinks.rootLinks;
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
.main-grid {
  display: grid;
  grid-template-columns: 100%;

  @media screen and (min-width: 57rem) {
    grid-template-columns: calc(50vw - 80rem)
                           25rem
                           minmax(0, 1fr)
                           calc(50vw - 80rem);
 
    &::before {
      content: '';
      grid-column-start: 1;

      background-color: var(--blue-light);
    }
  }

  @media screen and (min-width: 80rem) {
    grid-template-columns: calc(50vw - 80rem) 
                           30rem 
                           minmax(0, 1fr)
                           30rem
                           calc(50vw - 80rem) ;
  }
}

.sidebar {
  @media screen and (max-width: 57rem) {
    display: none;
  }

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
    grid-column-start: 2;

    background-color: var(--blue-light);
  }

  &--right {
    display: none;
    
    @media screen and (min-width: 80rem) {
      grid-column-start: 4;
      display: block;
    }
  }
  
  &-backlink {
    display: inline-block;
    margin-bottom: 4em;

    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .menu-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    // margin: 1rem 0 1rem;
    padding: 1rem;

    // border-top: 1px solid var(--border-color);
    cursor: pointer;

    font-size: 1em;
    font-weight: 400;
	  // text-transform: uppercase;
    letter-spacing: 1px;

    &.active {
      font-weight: 700;
      svg {
        transform: rotate(90deg);
      }
    }

    &:hover {
      background-color: transparentize(#b5d1cc, .6);
    }

    svg {
      vertical-align: -.2rem;
    }

    .count-wrapper {
      margin-left: auto;
    }

    .count {
      display: inline-block;
      
      padding: 0 .75em;

      background-color: white;
      border: .1rem solid var(--blue);
      border-radius: 1rem;

      color: var(--brown);
      font-size: .75em;
      font-weight: 400;
    }
  }

  &-nav {
    padding: 0 2rem;
    &__header {
      .menu-item {
        margin-bottom: 3em;
        margin-left: 2rem;

        text-transform: uppercase;
      }
    }
  }

  .menu-link {
    margin: 0;
    padding: 1rem 1rem 1rem 2rem;

    // border-left: 1px solid var(--body-color);
    opacity: 1;

    color: currentColor;
    // font-size: .95rem;
    font-weight: 400;
    text-decoration: none;

    &.maincommand,
    &.subcommand {
      padding-top: .2rem;
      padding-bottom: .2rem;
    }

    // &.maincommand {
    //   // margin-top: .8rem;
    // }

    &.subcommand {
      // margin-top: -2rem;
      // padding-top: .2rem;
      // padding-bottom: .2rem;

      // opacity: .7;
      // color: transparentize(var(--body-color), .3);
      color: var(--body-color-light);
      // + .item-link {
      //   margin-top: .8rem;
      // }
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &.active--exact {
      color: var(--brown);

      // color: var(--primary-color);
      // border-left-color: var(--primary-color);
    }

    &:hover {
      // background-color: var(--blue-light);
    }

    &.active--exact {
      position: relative;

      // padding-left: 1.2rem;
      // background-color: var(--blue);
      outline-width: 1px;

      color: var(--red);
      font-weight: 700;
    }
  }

  .menu-item {
    &--sub {
      position: relative;

      margin: 0;

      cursor: pointer;

      font-weight: 400;

      &:hover {
        color: var(--primary-color)
      }

      &::after {
        content: "";

        position: absolute;
        top: .2em;
        right: 0;

        display: block;
        height: 1em;
        width: 1em;

        background-color: currentColor;
        mask-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z\"/></svg>");

        transform: rotate(0);
        transition: all .2s ease-in-out;
      }

      & + .menu-item--submenu {
        display: none;
        margin-left: 1em;
      }
      &.open {
        &::after {
          transform: rotate(90deg);
        }
        + .menu-item--submenu {
          display: block;
        }
      }
    }
  }

  .submenu {
    margin: 0;
    padding: 1em;

    background-color: var(--grey-900);
    list-style: none;
    opacity: 1;

    > li.submenu__item-depth-2 + li.submenu__item-depth-2 {
      border-top: 1px solid var(--grey-700);
    }

    // font-size: 1.4rem;

    &__item-depth-2 {
      margin-bottom: 0;
      padding: .7em 0 0;

      transition: border-color .3s;

      &:not(:first-child) {
        margin-top: .7em;
      }
    }

    &__item-depth-3 {
      margin-top: -.4em;
      margin-bottom: 0;
      padding: .2em .4em;

      opacity: .8;

      font-size: .95em;
    }

    &__link {
      color: currentColor;
      text-decoration: none;

      &:hover {
        color: var(--primary-color)
      }
    }
  }
}
</style>
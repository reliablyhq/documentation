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
<script>
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
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

    background-color: var(--blue-100);

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

      &:hover {
        background-color: transparentize(#b5d1cc, .6);
      }

      svg {
        align-self:  flex-start;
        margin-right: .2em;
        transform: translateY(.2em);
      }

      .count-wrapper {
        align-self: flex-start;
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
  }

  &--right {
    display: none;
    padding-right: 2rem;

    h3 {
      margin-top: 0;
    }
    
    @media screen and (min-width: 80rem) {
      grid-column-start: 4;
      display: block;
    }
  }
  
  &-backlink {
    display: inline-block;
    margin-bottom: 4em;
    margin-left: 3rem;

    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &-nav {
    padding: 0 2rem;
    &__header {
      .menu-item {
        margin-bottom: 3em;
        margin-left: 1rem;

        background-color: var(--yellow);
        border-radius: var(--border-radius);
        cursor: default;

        text-transform: uppercase;

        &:hover {
          background-color: var(--yellow);
        }

        .count {
          background-color: var(--yellow-light);
          border-color: var(--yellow-dark);
        }
      }

      .menu-link {
        display: flex;
        margin-left: .5em;
        padding-left: .5em;

        &:hover {
          background-color: transparentize(#b5d1cc, .6);
        }

        &::before {
          content: "•";

          margin-right: .25em;

          transform: translateY(-.1em);
        }
      }
    }

    > .menu-item {
      margin-left: .5em;
      padding-left: .5em;

      &::before {
        content: "•";

        margin-right: .25em;

        transform: translateY(-.1em);
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

    &.active {
      color: var(--red);
    }

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
      margin-left: 1.25em;
      color: var(--body-color-light);
      
      &::before {
        display: none;
      }
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

    

    &.active--exact {
      position: relative;

      // padding-left: 1.2rem;
      // background-color: var(--blue);
      outline-width: 1px;

      // color: var(--red);
      // font-weight: 700;
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

    background-color: var(--grey-100);
    list-style: none;
    opacity: 1;

    > li.submenu__item-depth-2:not(:first-child) {
      border-top: 1px solid var(--grey-300);
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
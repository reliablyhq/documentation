<template>
  <Layout class="has-sidebar docs-page" :footer="false">
    <div class="container flex flex-align-top">
      <div class="sidebar">
        <template v-if="links">
          <template v-for="(group, i1) in links">
            <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
            <template v-for="(item, i2) in group.items">
              <g-link v-if="item.link" :exact="item.link == '/docs/'" class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
                {{ item.title }}
              </g-link>
              <template v-else>
                <h4 class="menu-item menu-item--sub" :key="`title-${i1}-${i2}`" @click.prevent="e => e.target.classList.toggle('open')">
                  {{ item.title }}
                </h4>
                <div class="menu-item menu-item--submenu" :key="`menu-${i1}-${i2}`">
                  <template v-for="(subitem, i3) in item.items">
                    <g-link v-if="subitem.link" :exact="subitem.link == '/docs/'" class="menu-item menu-link" :to="subitem.link" :key="`link-${i1}-${i2}-${i3}`">
                      {{ subitem.title }}
                    </g-link>
                  </template>
                </div>
              </template>

            </template>
          </template>
        </template>
      </div>
      <Section class="doc-content" container="base">
        <slot></slot>
        <nav class="docs-nav">
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
        </nav>
      </Section>
      <div v-if="subtitles.length > 0 && subtitles[0].depth !== 3" class="sidebar sidebar--right hide-for-small">
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

export default {
  components: {},
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] }
  },
  computed: {
    currentPath () {
      return this.$route.matched[0].path
    },
    items () {
      const flat = []; 
      this.links.forEach(group => {
        group.items.forEach(item => {
          if (item.link) {
            flat.push(item);
          } else if (item.items) {
            item.items.forEach(sub => {
              if (sub.link) {
                flat.push(sub);
              }
            })
          }
        });
      });
      return flat;
    },
    currentIndex () {
      return this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
    },
    nextPage () {
      let i = 1;
      let next = this.items[this.currentIndex + i]
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
    }
  }
}
</script>

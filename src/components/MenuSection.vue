<template>
  <div class="sidebar-section" :data-section="group.items[0].link">
    <div class="menu-item" :class="{active: showSubElements}" :key="`title-${index}`" @click.prevent="showSubElements = !showSubElements">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
      {{ group.title }}
      <div class="count-wrapper">
        <span class="count">{{ counts[group.slug] }}</span>
      </div>
    </div>
    <div v-if="showSubElements" class="sidebar-section__content">
      <g-link
        v-for="(item, i2) in group.items"
        :to="item.link"
        :exact="item.link == '/'"
        class="menu-item menu-link"
        :class="{'subcommand': item.subcommand, 'maincommand': item.maincommand}"
        :key="`link-${index}-${i2}`"
      >
        {{ item.title }}
        <div class="count-wrapper">
          <span v-if="counts[item.slug]" class="count">{{ counts[item.slug] }}</span>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    group: {type: Object},
    counts: {type: Object},
    index: {type: Number},
  },
  data () {
    return {
      showSubElements: false
    }
  },
  mounted () {
    this.maybeOpenSection();
  },
  watch:{
    $route (to, from){
      this.maybeOpenSection();
    }
  },
  methods: {
    maybeOpenSection() {
      this.showSubElements = false;
      let path = this.$route.matched[0].path + '/';
      let link = this.group.items[0].link;
      if (path.startsWith(link)) {
        this.showSubElements = true;
      }
    }
  }
} 
</script>

<style lang="scss">
.sidebar {
  .sidebar-section {
    // margin-bottom: 2em;
    // padding: .5em 0;
    padding: 1rem 0;

    // border-bottom: .1rem solid transparentize(#371722, .7);

    > .menu-item {
      &.active {
        font-weight: 700;
        svg {
          transform: translateY(.2em) rotate(90deg);
        }
      }
    }

    &__content {
      margin-left: 1em;

      border-left: 1px solid var(--grey-700);
      > .menu-item {
        margin-left: .5em;
        padding-left: .5em;

        &::before {
          content: "•";

          align-self: flex-start;
          margin-right: .25em;

          transform: translateY(-.1em);
        }
      }
    }
  }
}

</style>

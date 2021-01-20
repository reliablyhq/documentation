<template>
  <div class="sidebar-section" :data-section="group.items[0].link">
    <div class="menu-item" :class="{active: showSubElements}" :key="`title-${index}`" @click.prevent="showSubElements = !showSubElements">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
      {{ group.title }} <span class="count">{{ counts[group.slug] }}</span>
    </div>
    <div v-if="showSubElements" class="sidebar-section__content">
      <g-link
        v-for="(item, i2) in group.items"
        :exact="item.link == '/docs/'"
        class="menu-item menu-link"
        :to="item.link"
        :key="`link-${index}-${i2}`"
        :count="counts[item.slug]"
      >
        {{ item.title }}
        <span v-if="counts[item.slug]" class="count">{{ counts[item.slug] }}</span>
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
    console.log("mounted");
    this.maybeOpenSection();
  },
  methods: {
    maybeOpenSection() {
      this.showSubElements = false;
      let path = this.$route.matched[0].path + '/';
      let link = this.group.items[0].link;
      console.log(path);
      console.log(link);
      if (path.startsWith(link)) {
        console.log(true);
        this.showSubElements = true;
      }
    }
  }
} 
</script>

<style lang="scss">
.sidebar-section {
  margin-bottom: 2em;
}
</style>

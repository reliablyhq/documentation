<template>
  <ul class="other-articles">
    <li v-for="(item, index) in links" :key="index">
      <g-link :to="item.link">{{ item.label }}</g-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {type: Array}
  },
}
</script>

<style lang="scss">
.other-articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  column-gap: 4rem;
  row-gap: 2rem;

  padding-left: 0;

  list-style-type: none;

  li {
    margin-bottom: .5em;

    &::before {
      content: "\2192";

      margin-right: .5em;
    }
  }

  a {
    color: var(--red);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
<template>
  <div class="page-nav sidebar sidebar--right">
    <h3>On this page</h3>
    <nav>
      <a
        v-for="(l, index) in links"
        :key="index"
        :href="l.anchor"
        class="page-nav__item"
        :class="`page-nav__item--depth-${l.depth}`"
      >
        {{ l.value }}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    links: { type: Array, default: () => [] },
  }
} 
</script>

<style lang="scss">
.page-nav {
  h3 {
    margin-top: 0;
  }

  nav {
    padding: 1rem;

    background-color: var(--blue-100);
  }

  &__item {
    display: block;
    padding: 1rem;

    color: var(--body-color);
    text-decoration: none;

    &--depth-2 {
      font-weight: 600;
      &:not(:first-child) {
        margin-top: 1em;
      }
    }
  }
}
</style>

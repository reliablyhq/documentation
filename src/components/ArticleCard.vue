<template>
  <g-link :to="link" class="article-card">
    <h3 class="card__title">{{ title }}</h3>
    <p v-html="description"></p>
  </g-link>
</template>

<script>
export default {
  props: {
    title: {type: String},
    description: {type: String},
    link: {type: String},
  },
} 
</script>

<style lang="scss">
.post .article-card {
  position: relative;

  overflow: hidden;
  padding: 1.5em;

  background-color: var(--blue-200);
  border-radius: var(--border-radius);
  box-shadow: 0 .3rem 1.2rem rgba(0, 0, 0, .32);

  color: currentColor;
  text-decoration: none;

  transition: all .3s ease-in-out;

  &:hover {
    background-color: var(--blue);
    box-shadow: 0 .6rem 2.4rem rgba(0, 0, 0, .24);

    color: var(--brown);
    text-decoration: none;

    transform: translateY(-.3rem);
  }

  h3, p {
    color: var(--body-color);
    text-decoration: none;
  }

  h3 {
    margin-top: 0;
    padding-top: 0;
    margin-bottom: .5rem;
  }
}
</style>

<template>
  <Layout class="not-found" :footer="false">
    <div class="not-found__content-wrapper">
      <div class="not-found__content">
        <AstroDog />
        <h1>Page not found</h1>
        <p>This page does not exist, or has been moved.</p>
        <p><g-link to="/">Go back to Documentation home</g-link></p>
      </div>
    </div>
  </Layout>
</template>

<script>
import AstroDog from '@/assets/images/astro-dog.svg';

export default {
  components: {
    AstroDog,
  },
  metaInfo: {
    title: 'Page not found.'
  }
}
</script>

<style lang="scss">
.not-found {
  &__content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 58px);
  }
  &__content {
    padding: 1em;
    max-width: 50rem;
    width: 100%;

    text-align: center;

    svg {
      width: 20rem;
    }

    a {
      color: var(--red);
    }
  }
}
</style>
<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
     <a href="/docs/"><g-image alt="Example image" src="~/favicon.png" width="135" /></a>

    <p class="home-links">
      <a href="/docs/">Reliably Docs</a>
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

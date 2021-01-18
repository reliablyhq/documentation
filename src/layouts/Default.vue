<template>
  <div class="layout">
    <Header />
    <slot/>
  </div>
</template>

<script>
import Header from './partials/Header'
export default {
  // props: ['footer', 'primary-bg'],
  components: {
    Header,
  }
}
</script>
<template>
  <div class="markdown-two-columns">
    <slot></slot>
  </div>
</template>

<script>
export default {} 
</script>

<style lang="scss">
.markdown-two-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4rem;
}
</style>

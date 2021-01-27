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
  grid-template-columns: repeat(auto-fit, minmax(270px, calc(50% - 2rem)));
  grid-gap: 4rem;
}
</style>

<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner" :class="sectionClassInner">
      <slot></slot>
    </div>
    <div v-if="dots" class="section__dots-bg dots-bg" />
    <slot name="outer" />
  </section>
</template>

<script>
export default {
  props: ['dark', 'dots', 'container', 'framed', 'secondary'],
  computed: {
    sectionClass() {
      let classes = []
      if(this.secondary) classes.push('section--secondary')
      if(this.dark) classes.push('section--dark')
      return classes
    },
    sectionClassInner() {
      let classes = []
      if(this.framed) {
        classes.push('container--framed')
      }
      if(this.container) {
        classes.push('container-' + this.container)
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
.section {
  position: relative;
  width: 100%;
  flex: 1;

  &--secondary {
    background-color: var(--blue-300);
    border-top: 1px solid var(--blue-500);
    border-bottom: 1px solid var(--blue-500);

    + .section--secondary {
      border-top-color: transparent;
      margin-top: -1px;
    }
  }


  &__dots-bg {
    height: 700px;
    max-width: 1500px;
    max-height: 100%;
    margin: 0 auto;
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    z-index: 1;
    opacity: 1;
  }


  &--inner {
    position: relative;
    z-index: 2;

    max-width: calc(100vw - 30rem - 25px - 220px);
  }

  &--dark {
    color: var(--text-color-dark);
    background: var(--blue-800);

    p {
      color: currentColor;
    }

    h1, h2, h3, h4, a {
      color: var(--heading-color-dark);
    }
  }
}
</style>

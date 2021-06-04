<template>
  <a v-if="external" :href="to" rel="noopener noreferer" class="big-link" :class="{ 'big-link--dark': dark }">
    <div class="big-link__header">
      <slot name="icon"></slot>
      <strong>
        <slot name="header"></slot>
      </strong>
    </div>
    <slot></slot>
  </a>
  <g-link v-else :to="to" class="big-link" :class="{ 'big-link--dark': dark }">
    <div class="big-link__header">
      <slot name="icon"></slot>
      <strong>
        <slot name="header"></slot>
      </strong>
    </div>
    <slot></slot>
  </g-link>
</template>

<script>
export default {
  components: {},
  name: "BigLink",
  props: {
    to: {
      type: String,
      default: "",
    },
    external: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.big-link {
  display: block;
  padding: 3rem;
  max-width: 60rem;

  background-color: var(--blue-100);
  border-radius: 1rem;
  box-shadow: 0 .2em .3em rgba(0,0,0,.32);

  color: var(--text-color) !important;
  font-size: 2rem;
  text-decoration: none !important;

  transition: all .3s ease-in-out;

  &:hover {
    box-shadow: 0 .7em .9em rgba(0,0,0,.24);
    transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) rotateZ(.4deg);
  }

  &__header {
    color: var(--link-color);
    font-size: 2.4rem;
    font-weight: 700;

    svg {
      height: 2.4rem;
      width: 2.4rem;
      
      opacity: .8;
    }

    strong {
      vertical-align: text-bottom;
    }
  }

  &--dark {
    background-color: var(--blue-900);

    color: var(--text-color-dark) !important;

    .big-link__header {
      color: var(--link-color-dark) !important;
    }
  }
}
</style>
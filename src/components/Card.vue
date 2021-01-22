<template>
  <div class="card" :data-color="color">
    <div class="card__content">
      <h2 class="card__title">{{ title }}</h2>
      <p v-html="description"></p>
      <div class="card__links">
        <ul v-if="links">
          <li v-for="(link, index) in links" :key="index">
            <g-link :to="link.link">{{ link.title }}</g-link>
          </li>
        </ul>
        <g-link v-if="button" :to="button.link" class="button">{{ button.label }}</g-link>
      </div>
    </div>
    <div v-if="svg" class="card__illustration" v-html="svg">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String},
    description: {type: String},
    links: {type: Array},
    button: {type: Object},
    color: {type: String},
    svg: {type: String},
    // Use https://jqplay.org/ with filter "-Rs"
    // to encode your SVG file
  },
} 
</script>

<style lang="scss">
.card {
  position: relative;

  overflow: hidden;

  border-radius: var(--border-radius);
  box-shadow: 0 .3rem 1.2rem rgba(0, 0, 0, .32);

  &[data-color="blue"] {
    background-color: var(--blue);
  }

  &[data-color="yellow"] {
    background-color: var(--yellow);
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    padding: 1.5em;
  }

  h2 {
    margin-top: 0;
    padding-top: 0;
    margin-bottom: .5rem;
  }

  &__links {
    margin-top: auto;
    padding-top: 1em;
    ul {
      display: flex;
      margin: 0;
      padding: 0;

      list-style-type: none;
      li {
        &:not(:last-child) {
          margin-right: 1em;
        }
        a {
          color: currentColor;
          font-weight: 700;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .button {
    background-color: rgba(0, 0, 0, .5);

    color: white;

    &:hover {
      background-color: rgba(0, 0, 0, .6);

      color: white;
    }
  } 

  &__illustration {
    position: absolute;
    top: 30%;
    left: 75%;

    height: 80%;

    svg {
      height: 100%;

      opacity: .2;

    }
  }
}
</style>

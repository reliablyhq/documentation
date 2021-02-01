<template>
  <header class="header">
    <div class="container">
      <a href="/" class="header-logo">
        <ReliablyLogo />
        <span class="screen-reader-text">Reliably</span>
      </a>
      <g-link class="header-docs-home" to="/">docs</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/getting-started/">Getting Started</g-link>
        <g-link class="nav__link" to="/guides/">Guides</g-link>
        <g-link class="nav__link" to="/reference/">Reference</g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ReliablyLogo from '@/assets/images/reliably-logo.svg';

export default {
  components: {
    ReliablyLogo,
  }
}
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 20;

  display: flex;
  align-items: center;
  height: auto;
  padding: .5em 0;

  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);

  @media screen and (min-width: 60rem) {
    height: var(--header-height);
    padding: 0;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &-logo {
    svg {
      width: 10em;
    }
  }

  &-docs-home {
    position: relative;

    display: inline-block;
    margin-right: 2em;
    margin-left: .4em;
    padding: .4em .3em;

    color: var(--brown);
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;

    transform: translateY(.2rem);

    &::before {
      content: '/';

      display: inline-block;
      margin-right: .4em;

      transform: translateY(-.1em);
    }

    &::after {
      content: '';

      position: absolute;
      top: calc(100% - .55em);
      left: 1.2em;

      display: block;
      height: .3rem;
      width: calc(100% - 1.4em);

      background-color: transparent;
    }

    &:hover {
      &::after {
        background-color: var(--red);
      }
    }
  }

  nav {
    a {
      position: relative;

      margin: 0 .5em;

      color: var(--brown);
      font-weight: 700;
      text-decoration: none;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover,
      &.active {
        &::after {
          content: '';

          position: absolute;
          bottom: -.3rem;
          left: 0;

          display: block;
          height: .3rem;
          width: 100%;

          background-color: var(--red);
        }
      }
    }
  }
}
</style>
<template>
  <header class="header">
    <div class="container">
      <g-link class="header-logo" to="/">
        <ReliablyLogo />
        <span class="screen-reader-text">Reliably</span>
      </g-link>
      <g-link class="header-docs-home" to="/">docs</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/getting-started/">Getting Started</g-link>
        <g-link class="nav__link" to="/guides/">Guides</g-link>
        <g-link class="nav__link" to="/reference">Reference</g-link>
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
  height: var(--header-height);

  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);

  .container {
    display: flex;
    align-items: center;
  }

  &-logo {
    svg {
      width: 10em;
    }
  }

  &-docs-home {
    display: inline-block;
    margin-left: .4em;
    padding: .4em .3em;

    color: var(--brown);
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;

    &::before {
      content: '/';

      display: inline-block;
      margin-right: .4em;

      transform: translateY(-.1em);
    }
  }

  nav {
    margin-left: 1em;

    a {
      position: relative;

      margin: 0 1em;

      color: var(--brown);
      font-weight: 700;
      text-decoration: none;

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
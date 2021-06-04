<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <a href="/" class="header-logo">
          <ReliablyLogo />
          <span class="screen-reader-text">Reliably</span>
        </a>
        <g-link class="header-docs-home" to="/">docs</g-link>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/getting-started/">Getting Started</g-link>
        <g-link class="nav__link" to="/guides/">Guides</g-link>
        <g-link class="nav__link" to="/reference/">Reference</g-link>
      </nav>
      <div class="header__github">
        <a href="https://github.com/reliablyhq/cli" class="button button--icon button--small">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          Star us on GitHub!
        </a>
      </div>
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
  padding: .2em 0;

  background-color: var(--blue-800);

  // @media screen and (min-width: 39.5rem) {
  //   padding-bottom: 0;
  // }

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    max-width: 124rem;
    padding-right: 2rem;
    padding-left: 2rem;

    @media (min-width: 50em) {
      flex-direction: row;
    }
  }
  &__logo {
    display: flex;
    align-items: center;

    .header-logo {
      display: flex;
      align-items: center;

      svg {
        height: 2em;
      }
    }

    .header-docs-home {
      position: relative;

      display: inline-block;
      height: 1.8rem;
      margin-left: .4em;
      padding: 0 .3em;

      background-color: var(--yellow-500);
      border-radius: .2rem;

      color: var(--heading-color);
      font-size: 1.2rem;
      // font-family: 'Agrandir', sans-serif;
      // font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;

      transform: translateY(.2rem);
      transition: all .1s ease-in-out;

      &:hover {
        transform: scale(1.1) translateY(.2rem);
      }
    }
  }

  nav {
    margin-right: auto;
    margin-left: auto;
    @media screen and (min-width: 40rem) {
      // margin-left: 0;
    }
    a {
      position: relative;

      display: inline-block;
      padding: 1.2rem;

      color: white;
      font-weight: 700;
      text-decoration: none;

      @media (min-width: 30rem) {
        margin: 0 .5em;
        padding: 1em;
      }

      &:hover,
      &.active {
        &::after {
          content: '';

          position: absolute;
          top: calc(100% - .5em);
          left: 1em;

          display: block;
          height: .3rem;
          width: calc(100% - 2em);

          background-color: var(--yellow-500);
        }
      }
    }
  }

  &__github {
    display: none;

    @media (min-width: 60em) {
      display: block;
    }
  }
}
</style>
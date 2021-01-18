<template>
  <header class="header">
    <div class="container">
      <g-link class="header-logo" to="/">
        <ReliablyLogo />
        <span class="screen-reader-text">{{ $static.metadata.siteName }}</span>
      </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/product">Product</g-link>
        <g-link class="nav__link" to="/docs/">Docs</g-link>
        <g-link class="nav__link" to="/resources/">Resources</g-link>
        <g-link class="nav__link" to="/company/">Company</g-link>
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
import ReliablyLogo from '@/assets/images/reliably-logo.svg'

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

  .header-logo {
    svg {
      width: 10em;
    }
  }
}
</style>
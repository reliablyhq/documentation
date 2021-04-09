<template>
  <div class="sidebar-menu">
    <div class="sidebar-dropdown" @keyup.esc.prevent="close">
      <button class="sidebar-dropdown__button" @click.stop="openMenu = !openMenu">
        {{ current }}
        <SelectIcon />
      </button>
      <div v-if="openMenu" class="sidebar-dropdown__options" v-click-outside="close">
        <g-link to="/">Docs</g-link>
        <g-link to="/getting-started/">Getting Started</g-link>
        <g-link to="/guides/">Guides</g-link>
        <g-link to="/reference/">Reference</g-link>
      </div>
    </div>
    <nav class="new-sidebar-nav">
      <template v-if="current === 'Getting Started'">
        <template v-for="(l, index) in gettingStartedLinks" >
          <g-link v-if="l.sub" :to="l.link" :key="index">
            {{ l.title }}
          </g-link>
          <h5 v-else :key="index">
            <g-link :to="l.link">
              {{ l.title }}
            </g-link>
          </h5>
        </template>
      </template>
      <template v-if="current === 'Guides'">
        <template v-for="(l, index) in guidesLinks" >
          <g-link v-if="l.sub" :to="l.link" :key="index">
            {{ l.title }}
          </g-link>
          <h5 v-else :key="index">
            <g-link :to="l.link">
              {{ l.title }}
            </g-link>
          </h5>
        </template>
      </template>
      <template v-if="current === 'Reference'">
        <template v-for="(l, index) in referenceLinks" >
          <g-link v-if="l.sub" :to="l.link" :key="index">
            {{ l.title }}
          </g-link>
          <h5 v-else :key="index">
            <g-link :to="l.link">
              {{ l.title }}
            </g-link>
          </h5>
        </template>
      </template>
    </nav>
  </div>
</template>

<script>
import gettingStartedLinks from '@/data/menu-getting-started.yaml';
import guidesLinks from '@/data/menu-guides.yaml';
import referenceLinks from '@/data/menu-reference.yaml';

import SelectIcon from '@/assets/images/menu-select-icon.svg';

export default {
  components: {
    SelectIcon,
  },
  watch:{
    $route (to, from){
      this.openMenu = false;
    }
  },
  data() {
    return {
      openMenu: false,
    }
  },
  computed: {
    current() {
      if (this.$route.path.startsWith('/getting-started')) {
        return "Getting Started";
      } else if (this.$route.path.startsWith('/guides')) {
        return "Guides";
      } else if (this.$route.path.startsWith('/reference')) {
        return "Reference";
      } else {
        return "Docs";
      }
    },
    gettingStartedLinks() {
      return gettingStartedLinks;
    },
    guidesLinks() {
      return guidesLinks;
    },
    referenceLinks() {
      return referenceLinks;
    },
  },
  methods:{
    close() {
      if (this.$data.openMenu === true) {
        this.$data.openMenu = false;
      }
    }
  },
} 
</script>

<style lang="scss">
.sidebar-menu {
  margin-bottom: 4em;
  padding: 0 2rem;

  .sidebar-dropdown {
    position: relative;

    &__button {
      position: relative;

      padding: 1rem;
      width: 100%;

      background-color: var(--blue-300);
      border: 1px solid var(--blue-400);
      border-radius: var(--border-radius);
      cursor: pointer;

      color: var(--brown);
      text-align: left;

      > svg {
        position: absolute;
        top: 50%;
        right: 1rem;

        height: 1em;

        transform: translateY(-50%);
      }
    }
    &__options {
      position: absolute;
      top: 0;
      z-index: 2;

      width: 100%;

      background: white;
      border: 1px solid var(--blue-300);
      border-radius: var(--border-radius);
      box-shadow: 0 .3rem 1.2rem rgba(0, 0, 0, .32);

      a {
        position: relative;

        display: block;
        padding: 1rem;

        color: var(--brown);
        text-decoration: none;

        &.active--exact,
        &:not(:first-child).active {
          background-color: var(--blue-100);

          &::before,
          &::after {
            content: "";

            position: absolute;

            display: block;
            width: .2rem;

            background-color: var(--brown);
          }

          &::before {
            top: 2rem;
            right: 1.6rem;

            height: .8rem;

            transform: rotate(-50deg);
          }

          &::after {
            top: 1.65rem;
            right: 1rem;

            height: 1.2rem;
            transform: rotate(40deg);
          }
        }

        &:hover {
          background-color: var(--blue-200) !important;
        }
      }
    }
  }

  .new-sidebar-nav {
    h5 {
      margin-top: 2em;
      margin-bottom: 0;

      font-size: 1em;
      // font-weight: 400;
    }

    a {
      display: block;
      padding: 1rem;

      color: var(--brown);
      text-decoration: none;

      &:hover, {
        background-color: var(--blue-200);
      }

      &.active--exact {
        background-color: var(--blue-400);
      }
    }

  }
}
</style>

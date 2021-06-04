<template>
  <div class="sidebar-menu">
    <div class="sidebar-dropdown" @keyup.esc.prevent="close" v-if="false">
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
    <h4 class="sidebar-title" v-if="$route.path !== '/'">{{ current }}</h4>
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
        <!-- YAML file links -->
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
        <!-- GraphQL links -->
        <template v-for="l in cliRefLinks">
          <g-link v-if="l.sub" :to="l.path" :key="l.id">
            {{ l.title }}
          </g-link>
          <h5 v-else :key="l.id">
            <g-link :to="l.path">
              {{ l.title }}
            </g-link>
          </h5>
        </template>
      </template>
    </nav>
  </div>
</template>

<static-query>
query {
  clipages: allCliPage(sortBy: "title", order: ASC, filter: { type: { eq: "doc" }, status: { eq: "published" }}) {
		edges {
    	node {
      	id
      	title
        path
        type
        categories
    	}
    }
  }
}
</static-query>

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
    cliRefLinks() {
      let edges = this.$static.clipages.edges;
      // let tmp = [];
      let links = [];
      edges.forEach( l => {
        let title = l.node.title;
        if (title.startsWith("reliably ")) { // All except root command
          title = title.substring("reliably ".length);
          if (title.indexOf(" ") === -1) {
            // No space character in title. It is not a subcommand.
            links.push({
              "title": title,
              "path": l.node.path,
              "id": l.node.id,
              "sub": false,
            });
          } else {
            // It's a subcommand
            // Remove the first word: it's the parent command
            title = title.substring(title.indexOf(" ") + 1);
            links.push({
              "title": title,
              "path": l.node.path,
              "id": l.node.id,
              "sub": true,
            });
          }
        } else {
          links.push({
            "title": title,
            "path": l.node.path,
            "id": l.node.id,
            "sub": false,
          });
        }
      });
      return links;
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

      color: var(--body-color);
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

        color: var(--body-color);
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

            background-color: var(--body-color);
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

  .sidebar-title {
    margin-top: .2em;
    padding-left: .5em;

    font-size: 1.2em;
    font-family: 'Filson Pro';
  }

  .new-sidebar-nav {
    display: flex;
    flex-direction: column;

    h5 {
      margin-top: 2em;
      margin-bottom: 1rem;

      font-size: 1em;
      font-weight: 600;
    }

    a {
      position: relative;

      // display: block;
      // padding: 1rem;
      margin: 1rem;

      color: var(--body-color);
      text-decoration: none;

      &:hover,
      &.active--exact {
        // background-color: var(--blue-200);
        color: var(--yellow-600);
      }

      &.active--exact {
        // background-color: var(--blue-200);
        &::before {
          content: '';

          position: absolute;
          top: -.2rem;
          left: -1rem;

          display: block;
          height: calc(100% + .4rem);
          width: .4rem;

          background-color: var(--yellow-600);
          // border-radius: .3rem;
        }

      }
    }

  }
}
</style>

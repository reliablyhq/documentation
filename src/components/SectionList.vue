<template>
  <div class="section-list">
    <h2>{{ title }}</h2>
    <div class="section-list__content">
      <p v-html="description"></p>
      <div class="section-list__list">
      <ul v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index">
          <g-link :to="item.link">{{ item.title }}</g-link>
        </li>
      </ul>
      <g-link :to="link">All {{ pagesPerCategory[categoryName] }} articles</g-link>
    </div>
    </div>
  </div>
</template>

<static-query>
query {
  docpages: allDocPage(filter: { type: { eq: "doc" }, status: { eq: "published" }}) {
		edges {
    	node {
      	id
      	title
        path
        type
        categories
    	}
    }
  },
  clipages: allCliPage(filter: { type: { eq: "doc" }, status: { eq: "published" }}) {
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
export default {
  props: {
    title: {type: String},
    categoryName: {type: String},
    description: {type: String},
    link: {type: String},
    list: {type: Array},
  },
  computed: {
    pagesPerCategory () {
      let categoriesObject = {};
      let allPages = this.$static.docpages.edges.concat(this.$static.clipages.edges);
      allPages.forEach( p => {
        let categories = p.node.categories;
        categories.forEach( c => {
          if (categoriesObject[c]) {
            categoriesObject[c]++;
          } else {
            categoriesObject[c] = 1;
          }
        });
      });
      return categoriesObject;
    },
  }
} 
</script>

<style lang="scss">
.section-list {
  margin-bottom: 4em;

  h2 {
    margin-bottom: 0;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 8rem;
  }

  &__list {
    ul {
      padding-left: 0;

      list-style-type: none;

      li {
        margin-bottom: .5em;

        &::before {
          content: "\2192";

          margin-right: .5em;
        }
      }

      a {
        color: var(--red);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    > a:last-child {
      color: currentColor;
      text-decoration: underline dotted;
      &:hover {
        color: var(--red);
      }
    }
  }
}
</style>

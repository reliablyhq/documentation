<template>
  <div class="section-list">
    <div class="section-list__content">
      <h2>{{ title }}</h2>
      <p v-html="description"></p>
    </div>
    <div class="section-list__list">
      <ul v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index">
          <g-link :to="item.link">{{ item.title }}</g-link>
        </li>
      </ul>
      <g-link :to="link">All {{ pagesPerCategory[categoryName] }} articles</g-link>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 8rem;
  margin-top: 3em;
  margin-bottom: 1em;
  padding-bottom: 3em;

  border-bottom: 1px solid var(--grey-200);

  &__content {
    h2 {
      margin: 0;
      padding: 0;
    }
  }

  &__list {
    padding: 1em;

    background-color: var(--grey-100);
    border-radius: 5px;
    ul {
      margin-top: 0;
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

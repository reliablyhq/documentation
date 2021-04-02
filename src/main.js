// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
import '~/assets/scss/main.scss'

import DefaultLayout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'
import Section from '~/components/Section.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('Section', Section)
}

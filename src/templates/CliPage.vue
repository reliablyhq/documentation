<template>
  <DocsLayout :subtitles="subtitles">
    <div class="post mb" v-html="$page.doc.content" />
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: cliPage (id: $id) {
    title
    path
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
    content
  }
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</page-query>

<script>
export default {
  computed: {
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
        return [2,3].includes(value.depth)
      })
      return subtitles
    }
  },
  metaInfo () {
    const siteUrl = this.$page.metadata.siteUrl
    const postPath = this.$page.doc.path
    const image = "this.$page.doc.image?.path"
    const imagePath = `${this.$static.metadata.siteUrl}/docs/images/reliably.png`
    const description = `Reliably reference page for the ${this.$page.doc.title} CLI command.`

    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: description },
        { key: 'og:url', property: 'og:url', content: `${siteUrl}${postPath}` },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.doc.title
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: '1200'
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: '627'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: image ? 'summary_large_image' : 'summary'
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: imagePath
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.doc.title
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.doc.description,
            headline: this.$page.doc.title,
            image: imagePath
          }
        }
      ]
    }
  }
}
</script>
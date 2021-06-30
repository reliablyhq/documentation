<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
export default {
  metaInfo () {
    const siteUrl = this.$static.metadata.siteUrl
    const postPath = this.$page.doc.path
    const image = "this.$page.doc.image?.path"
    const imagePath = `${this.$static.metadata.siteUrl}/docs/images/reliably.png`

    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.doc.excerpt },
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
          content: this.$page.doc.excerpt
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
          content: this.$page.doc.excerpt
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
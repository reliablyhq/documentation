<template>
  <DocsLayout :subtitles="subtitles">
    <div class="post mb" v-html="$page.doc.content" />
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: cliPage (id: $id) {
    title
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
    const { title, headings } = this.$page.doc
    return {
      title: title || (headings.length ? headings[0].value : undefined)
    }
  }
}
</script>
<template>
  <DocsLayout :subtitles="subtitles">
    <VueRemarkContent class="post mb"></VueRemarkContent>
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: docPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    links() {
      return {
        rootLinks: rootLinks,
        guideLinks: guideLinks,
        gettingStartedLinks: gettingStartedLinks,
        referenceLinks: referenceLinks,
      };
    },
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
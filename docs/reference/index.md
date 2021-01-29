---
title: Reference
excerpt: Lorem Ipsum is simply dummy text.
categories: ["reference"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import SectionList from '~/components/SectionList.vue'

import data from '~/data/reference-index-data.json'

# Reference

<PageIntroduction>
  The reference part of Reliably Documentation is a detailed guide to all the aspects of Reliably.
</PageIntroduction>

<SectionList
    title="CLI"
    categoryName="cli"
    description="Complete reference guide for the Reliably CLI"
    link="/reference/cli/"
    :list="data.cli.links"
/>

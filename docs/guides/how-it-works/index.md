---
title: How Reliably works
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "how-it-works"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import OtherArticles from '~/components/OtherArticles.vue'

import data from '~/data/how-it-works-index-data.json'

# How Reliably Works

<PageIntroduction>
  This guides will help you understand what the various parts of
  Reliably do and how they work together.
</PageIntroduction>

## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="CLI"
    description="How does the Reliably CLI works?"
    link="/guides/how-it-works/cli/"
  />
  <ArticleCard
    title="API"
    description="How the Reliably API works, and what we use it for."
    link="/guides/how-it-works/api/"
  />
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />
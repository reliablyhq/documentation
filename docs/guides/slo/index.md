---
title: Service Level Objective
excerpt: Lorem Ipsum is simply dummy text.
categories:  ["guides", "slo"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import OtherArticles from '~/components/OtherArticles.vue'
import AsciiPlayer from '~/components/AsciiPlayer.vue'

import data from '~/data/slo-index-data.json'

# Service Level Objectives with Reliably

<PageIntroduction>

  Service Level Objectives are a core element of your reliability effort.
  They're a signal of your services health, allowing you to make decisions about
  what you should focus on next.

  Discover how the Reliably CLI allows to define and measure SLOs.

</PageIntroduction>

Define your SLOs in the terminal with the Reliably CLI.
<AsciiPlayer id="409008" />

Generate actionable reports.
<AsciiPlayer id="409053" />
## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="Define your Service Level Objectives"
    description="Learn how to define and measure your SLOs."
    link="/guides/slo/define-slos/"
  />
  <ArticleCard
    title="Generate SLO reports"
    description="Fetch data from your cloud provider and generate comprehensive SLO reports."
    link="/guides/slo/slo-reports/"
  />
  <ArticleCard
    title="Live SLO reports"
    description="Monitor your SLO's live and generate near realtime reports."
    link="/guides/slo/live-reporting/"
  />
</MarkdownTwoColumns>





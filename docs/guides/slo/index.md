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

## What are SLOs again?

SLOs are one of the three Service Level concepts that power the SRE practice,
alongside Service Level Indicators and Service Level Agreements.

### Service Level Indicator

An SLI is a measurement of your service's behaviour.

Error rate, latency, etc.
are SLIs.

### Service Level Objective

With SLIs in mind, an SLO is a target for your SLIs.

Example SLOs:

- 99% of successful requests on a service
- 98% of requests on a service fulfilled in less than 100 ms

### Service Level Agreements

Service Level Agreements are contracts with the client and so represent the minimum that can be provided, below which the customer will be more than unhappy.


:::tip
If you want to read more about SRE terminology, the Google Cloud Blog
article <a href="https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos" target="_blank" rel="noopener noreferer">SRE fundamentals: SLIs, SLAs and SLOs</a> is a good starting point.
:::

## Managing your SLOs with the Reliably CLI

The Reliably CLI supports a number of [commands](./slo-commands/) to allow you to manage and define your SLOs.


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

  <ArticleCard
    title="Reliably SLO commands"
    description="Define and report on you Service Levels Objectives."
    link="/guides/slo/slo-commands/"
  />
</MarkdownTwoColumns>





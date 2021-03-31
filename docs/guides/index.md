---
title: Guides
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import SectionList from '~/components/SectionList.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import ArticleCard from '~/components/ArticleCard.vue'

import data from '~/data/guides-index-data.json'

# Guides

<PageIntroduction>
  Practical and actionable guides to get the best out of Reliably.
</PageIntroduction>


<MarkdownTwoColumns>
  <ArticleCard
    title="Scan a Kubernetes Manifest"
    description="Use the Reliably CLI to scan a Kubernetes manifest and make your infrastructure more reliable in minutes."
    link="/guides/scan-infrastructure/kubernetes-manifest/"
  />
  <ArticleCard
    title="Define and Measure SLOs"
    description="Use the Reliably CLI to define Service Level Objectives and measure your System's indicators."
    link="/guides/slo/"
  />

</MarkdownTwoColumns>

<SectionList
    title="Scan your Infrastructure"
    categoryName="scan-infrastructure"
    description="Scans your manifests and clusters with the Reliably CLI."
    link="/guides/scan-infrastructure/"
    :list="data['scan-infrastructure'].links"
/>

<SectionList
    title="Service Level Objectives"
    categoryName="slo"
    description="Declare and measure SLOs in the CLI."
    link="/guides/slo/"
    :list="data['slo-links'].links"
/>

<SectionList
    title="CI Pipeline"
    categoryName="ci-pipeline"
    description="Run Reliably as part of your CI pipeline."
    link="/guides/ci-pipeline/"
    :list="data['ci-pipeline'].links"
/>

<SectionList
    title="How It Works"
    categoryName="how-it-works"
    description="Discover how Reliably works under the hood."
    link="/guides/how-it-works/"
    :list="data['how-it-works'].links"
/>
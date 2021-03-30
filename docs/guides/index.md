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
    description="The Reliably CLI scans your manifests and clusters."
    link="/guides/scan-infrastructure/"
    :list="data['scan-infrastructure'].links"
/>

<SectionList
    title="CI Pipeline"
    categoryName="ci-pipeline"
    description="Run Reliably as part of your CI pipeline"
    link="/guides/ci-pipeline/"
    :list="data['ci-pipeline'].links"
/>

<SectionList
    title="Running with Kubernetes"
    categoryName="kubectl-plugin"
    description="Run Reliably with Kunernetes"
    link="/guides/"
    :list="data['kubernetes-links'].links"
/>


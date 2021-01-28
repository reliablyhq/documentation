---
title: Guides
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import SectionList from '~/components/SectionList.vue'

import data from '~/data/guides-index-data.json'

# Guides

<PageIntroduction>
  The Guides section of the documentation explores different ways of running Reliably. You can run  <g-link to="/guides/run-as-you-code/">Reliably locally</g-link> on your machine or as part of a <g-link to="/guides/ci-pipeline/">CI Pipeline</g-link>.
</PageIntroduction>

<SectionList
    title="Run As You Code"
    categoryName="run-as-you-code"
    description="Get Reliably suggestions as you write your Kubernetes manifests."
    link="/guides/run-as-you-code"
    :list="data['run-as-you-code'].links"
/>

<SectionList
    title="CI Pipeline"
    categoryName="ci-pipeline"
    description="Run Reliably as part of your CI pipeline"
    link="/guides/ci-pipeline"
    :list="data['ci-pipeline'].links"
/>

<SectionList
    title="Metrics"
    categoryName="metrics"
    description="Import Reliably metrics in your monitoring platform."
    link="/guides/metrics"
    :list="data.metrics.links"
/>
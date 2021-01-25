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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus efficitur velit eget malesuada. Proin tempor odio in justo tempor, vel venenatis eros faucibus. Cras imperdiet arcu aliquet tellus rutrum, at facilisis lectus fringilla. Pellentesque accumsan tempus ex. Suspendisse quis consectetur felis. Vestibulum pellentesque pharetra ante eget tincidunt.
</PageIntroduction>

<SectionList
    title="Run As You Code"
    categoryName="run-as-you-code"
    description="Get Reliably suggestions as you write your Kubernetes manifests."
    link="/docs/guides/run-as-you-code"
    :list="data['run-as-you-code'].links"
/>

<SectionList
    title="CI Pipeline"
    categoryName="ci-pipeline"
    description="Run Reliably as part of your CI pipeline"
    link="/docs/guides/ci-pipeline"
    :list="data['ci-pipeline'].links"
/>

<SectionList
    title="Run Continuously"
    categoryName="run-continuously"
    description="Let Reliably continuously check your Kubernetes manifests for potential reliability weaknesses."
    link="/docs/guides/run-continuously"
    :list="data['run-continuously'].links"
/>

<SectionList
    title="Metrics"
    categoryName="metrics"
    description="Import Reliably metrics in your monitoring platform."
    link="/docs/guides/metrics"
    :list="data.metrics.links"
/>
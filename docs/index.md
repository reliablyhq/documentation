---
title: Reliably Documentation
excerpt: Reliably is a set of tools helping teams improve the reliability of the products they deliver.
categories: []
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import Card from '~/components/Card.vue'
import SectionList from '~/components/SectionList.vue'

import data from '~/data/docs-index-data.json'

# Welcome to Reliably!

<PageIntroduction>
We're here to lend a helping hand. Reliably will automatically surface and respond to reliability issues while you code, build, and run your applications. It's that simple.

Reliably works wherever you do – connecting seamlessly to GitHub and GitLab Continuous Integration and Delivery (CI/CD) workflows and pipelines. We also offer a handy CLI for local use.
</PageIntroduction>

<MarkdownTwoColumns>
  <Card
    title="Reliable Kubernetes Clusters"
    description="Install the Reliably CLI to scan your Kubernetes manifests and clusters, and make them more reliable in minutes."
    color="blue"
    :button="data['card-1'].button"
    :svg="data['card-1'].svg"
  />
  <Card
    title="Introducing SLOs"
    description="We're adding SLO support to the Reliably CLI. Declare your SLOs and dependencies and start monitoring what you care about."
    color="yellow"
    :links="data['card-2'].links"
    :svg="data['card-2'].svg"
  />
</MarkdownTwoColumns>


<SectionList
    title="Getting Started"
    categoryName="getting-started"
    description="Start using Reliably in minutes and make your Kubernetes deployments more reliable."
    link="/getting-started/"
    :list="data['getting-started'].links"
/>

<SectionList
    title="Guides"
    categoryName="guides"
    description="Practical guides show you how to get Reliably running in your favorite environments."
    link="/guides/"
    :list="data.guides.links"
/>

<SectionList
    title="Reference"
    categoryName="reference"
    description="Technical description of how the Reliably API works, as well as a full documentation for the CLI."
    link="/reference/"
    :list="data.reference.links"
/>

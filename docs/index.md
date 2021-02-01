---
title: Reliably Documentation
excerpt: Lorem ipsum dolor sit amet.
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
    title="Better Kubernetes Manifests"
    description="Install the Reliably CLI and make your first Kubernetes manifest more reliable in minutes."
    color="blue"
    :button="data['card-1'].button"
    :svg="data['card-1'].svg"
  />
  <Card
    title="Reliably in your CI pipeline"
    description="Try Reliably wherever your code lives, or at build time in your favorite CI/CD platform."
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
    description="Practical guides show you how to get Reliably running in your favorite CI environment."
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

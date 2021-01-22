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

# Unleash a reliability superpower

<PageIntroduction>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus efficitur velit eget malesuada. Proin tempor odio in justo tempor, vel venenatis eros faucibus. Cras imperdiet arcu aliquet tellus rutrum, at facilisis lectus fringilla. Pellentesque accumsan tempus ex. Suspendisse quis consectetur felis. Vestibulum pellentesque pharetra ante eget tincidunt.
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
    link="/docs/getting-started"
    :list="data['getting-started'].links"
/>

<SectionList
    title="Guides"
    categoryName="guides"
    description="Practical guides show you how to get Reliably running in your favorite CI environment."
    link="/docs/guides"
    :list="data.guides.links"
/>

<SectionList
    title="Reference"
    categoryName="reference"
    description="Technical description of how the Reliably API works, as well as a full documentation for the CLI."
    link="/docs/reference"
    :list="data.reference.links"
/>
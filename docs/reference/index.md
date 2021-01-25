---
title: Reference
excerpt: Lorem Ipsum is simply dummy text.
categories: ["reference"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import SectionList from '~/components/SectionList.vue'

import data from '~/data/reference-index-data.json'

# Reference


<PageIntroduction>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus efficitur velit eget malesuada. Proin tempor odio in justo tempor, vel venenatis eros faucibus. Cras imperdiet arcu aliquet tellus rutrum, at facilisis lectus fringilla. Pellentesque accumsan tempus ex. Suspendisse quis consectetur felis. Vestibulum pellentesque pharetra ante eget tincidunt.
</PageIntroduction>

<SectionList
    title="CLI"
    categoryName="cli"
    description="Complete reference guide for the Reliably CLI"
    link="/docs/reference/cli/"
    :list="data.cli.links"
/>

<SectionList
    title="REST API"
    categoryName="rest-api"
    description="Reference for the Reliably REST API"
    link="/docs/reference/rest-api"
    :list="data['rest-api'].links"
/>

<SectionList
    title="How it works"
    categoryName="how-it-works"
    description="Discover how Reliably helps you surface potential reliability weaknesses in your Kubernetes manifests."
    link="/docs/reference/how-it-works"
    :list="data['how-it-works'].links"
/>
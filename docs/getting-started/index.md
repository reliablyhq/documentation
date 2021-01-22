---
title: Getting started
excerpt: Lorem Ipsum is simply dummy text.
categories: ["getting-started"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import OtherArticles from '~/components/OtherArticles.vue'

import data from '~/data/getting-started-index-data.json'

# Get started with Reliably

<PageIntroduction>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus efficitur velit eget malesuada. Proin tempor odio in justo tempor, vel venenatis eros faucibus. Cras imperdiet arcu aliquet tellus rutrum, at facilisis lectus fringilla. Pellentesque accumsan tempus ex. Suspendisse quis consectetur felis. Vestibulum pellentesque pharetra ante eget tincidunt.
</PageIntroduction>

## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="Install Reliably"
    description="Install the Reliably CLI and make your first Kubernetes manifest more reliable in minutes."
    link="/docs/getting-started/install/"
  />
  <ArticleCard
    title="Login to Reliably"
    description="Authenticate the Reliably CLI with Reliably.com"
    link="/docs/getting-started/login/"
  />
  <ArticleCard
    title="Scan your first project"
    description="Reliably helps you discover reliability concerns you may want to pay attention to."
    link="/docs/getting-started/scan-your-first-project/"
  />
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />
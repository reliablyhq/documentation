---
title: CLI Reference
excerpt: Lorem Ipsum is simply dummy text.
categories: ["reference", "cli"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import OtherArticles from '~/components/OtherArticles.vue'

import data from '~/data/cli-index-data.json'

# CLI Reference

<PageIntroduction>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus efficitur velit eget malesuada. Proin tempor odio in justo tempor, vel venenatis eros faucibus. Cras imperdiet arcu aliquet tellus rutrum, at facilisis lectus fringilla. Pellentesque accumsan tempus ex. Suspendisse quis consectetur felis. Vestibulum pellentesque pharetra ante eget tincidunt.
</PageIntroduction>

## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="reliably auth"
    description="Log in, log out, and verify your authentication with Reliably."
    link="/docs/reference/cli/reliably-auth/"
  />
  <ArticleCard
    title="reliably discover"
    description="Scan your Kubernetes manifests for Reliably Suggestions."
    link="/docs/reference/cli/reliably-discover/"
  />
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />

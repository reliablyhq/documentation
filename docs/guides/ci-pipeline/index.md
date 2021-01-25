---
title: Run Reliably in your CI pipeline
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "ci-pipeline"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import OtherArticles from '~/components/OtherArticles.vue'

import data from '~/data/ci-pipeline-index-data.json'

# Run Reliably in your CI pipeline

<PageIntroduction>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus efficitur velit eget malesuada. Proin tempor odio in justo tempor, vel venenatis eros faucibus. Cras imperdiet arcu aliquet tellus rutrum, at facilisis lectus fringilla. Pellentesque accumsan tempus ex. Suspendisse quis consectetur felis. Vestibulum pellentesque pharetra ante eget tincidunt.
</PageIntroduction>

## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="GitHub Action"
    description="The Reliably GitHub Action allows you to get suggestions for each PR."
    link="/docs/guides/ci-pipeline/github-action/"
  />
  <ArticleCard
    title="GitLab Job"
    description="Get Reliably suggestions as part of your GitLab pipeline."
    link="/docs/ci-pipeline/gitlab-pipeline/"
  />
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />
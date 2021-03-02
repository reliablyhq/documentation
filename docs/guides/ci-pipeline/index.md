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
  Reliably follows the principles that the sooner you learn about reliability
  potential risks, the better you can address them. For this reason, it makes
  sense to run Reliably during your CI pipelines and get notified of potential
  issues as soon as possible.

  The articles in this section will show you how to integrate Reliably with
  your CI solution.
</PageIntroduction>

## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="GitHub Action"
    description="The Reliably GitHub Action allows you to get suggestions for each PR."
    link="/guides/ci-pipeline/github-action/"
  />
  <ArticleCard
    title="GitLab Job"
    description="Get Reliably suggestions as part of your GitLab pipeline."
    link="/guides/ci-pipeline/gitlab-pipeline/"
  />
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />
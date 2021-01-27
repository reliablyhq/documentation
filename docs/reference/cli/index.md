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
  The Reliably CLI is the Reliability toolbox for developers from the command
  line.
section. The articles in this section are the reference pages for the CLI, containing
the details of each CLI command.

Installation for the CLI is covered in the [Getting Started][cli-install]



</PageIntroduction>

[cli-install]: /docs/getting-started/install/

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

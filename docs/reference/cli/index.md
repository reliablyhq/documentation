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

The Reliably CLI is the reliability toolbox for developers from the command
line. The articles in this section are the reference pages for the CLI,
containing the details of each CLI command.

Installation for the CLI is covered in the [Getting Started][cli-install]
section.

</PageIntroduction>

[cli-install]: /getting-started/install/

## Main articles

<MarkdownTwoColumns>
  <ArticleCard
    title="reliably auth"
    description="Log in, log out, and verify your authentication with Reliably."
    link="/reference/cli/reliably-auth/"
  />
  <ArticleCard
    title="reliably workflow"
    description="Setup Reliably in your CI/CD workflow."
    link="/reference/cli/reliably-workflow/"
  />
  <ArticleCard
    title="reliably scan"
    description="Scan your Kubernetes manifests or cluster for Reliably Suggestions."
    link="/reference/cli/reliably-scan/"
  />
  <ArticleCard
    title="reliably history"
    description="View your history of executions and suggestions."
    link="/reference/cli/reliably-scan/"
  />
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />

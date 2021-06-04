---
title: Run Reliably in your CI pipeline
excerpt: Automation is at the core of DevOps and SRE practices. Learn how to automate Reliably CLI executions in your CI/CD pipelines.
categories: ["guides", "ci-pipeline"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import OtherArticles from '~/components/OtherArticles.vue'
import BigLink from '~/components/BigLink.vue';

import IconGitHub from '~/assets/images/icons/github.svg';
import IconWorkflow from '~/assets/images/icons/rotate-cw.svg';

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
  <BigLink to="/guides/ci-pipeline/github-action/" :external="false" :dark="true">
    <template v-slot:header>
      GitHub Action
    </template>
    <template v-slot:icon>
      <IconGitHub />
    </template>
    <p>The Reliably GitHub Action allows you to get suggestions for each PR.</p>
  </BigLink>
  <BigLink to="/guides/ci-pipeline/ci-workflow/" :external="false" :dark="true">
    <template v-slot:header>
      CI Workflow Generation
    </template>
    <template v-slot:icon>
      <IconWorkflow />
    </template>
    <p>Use the CLI to generate YAML workflow template files for GitHub, GitLab, and Circle CI.</p>
  </BigLink>
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />
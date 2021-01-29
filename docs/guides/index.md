---
title: Guides
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import SectionList from '~/components/SectionList.vue'

import data from '~/data/guides-index-data.json'

# Guides

<PageIntroduction>
  Practical and actionable guides to get the best out of Reliably.
</PageIntroduction>

<SectionList
    title="CI Pipeline"
    categoryName="ci-pipeline"
    description="Run Reliably as part of your CI pipeline"
    link="/guides/ci-pipeline"
    :list="data['ci-pipeline'].links"
/>

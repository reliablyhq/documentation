---
title: Guides
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue';
import SectionList from '~/components/SectionList.vue';
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue';
import BigLink from '~/components/BigLink.vue';

import IconScan from '~/assets/images/icons/search.svg';
import IconSLO from '~/assets/images/icons/activity.svg';

import data from '~/data/guides-index-data.json';

# Guides

<PageIntroduction>
  Practical and actionable guides to get the best out of Reliably.
</PageIntroduction>


<MarkdownTwoColumns>

<BigLink to="/guides/how-it-works/objectives-indicators-results-and-behaviour/" :external="false" :dark="true">
    <template v-slot:header>
      Objectives, indicators, results and behaviour
    </template>
    <template v-slot:icon>
      <IconSLO />
    </template>
    <p>Discover the Reliably ecosystem, and how its elements work together.</p>
  </BigLink>

  <BigLink to="/guides/scan-infrastructure/kubernetes-manifest/" :external="false" :dark="true">
    <template v-slot:header>
      Scan a Kubernetes Manifest
    </template>
    <template v-slot:icon>
      <IconScan />
    </template>
    <p>Use the Reliably CLI to scan a Kubernetes manifest and make your infrastructure more reliable in minutes.</p>
  </BigLink>


</MarkdownTwoColumns>



<SectionList
    title="Service Level Objectives"
    categoryName="slo"
    description="Declare and measure SLOs in the CLI."
    link="/guides/slo/"
    :list="data['slo-links'].links"
/>

<SectionList
    title="Scan your Infrastructure"
    categoryName="scan-infrastructure"
    description="Scans your manifests and clusters with the Reliably CLI."
    link="/guides/scan-infrastructure/"
    :list="data['scan-infrastructure'].links"
/>

<SectionList
    title="CI Pipeline"
    categoryName="ci-pipeline"
    description="Run Reliably as part of your CI pipeline."
    link="/guides/ci-pipeline/"
    :list="data['ci-pipeline'].links"
/>

<SectionList
    title="How It Works"
    categoryName="how-it-works"
    description="Discover how Reliably works under the hood."
    link="/guides/how-it-works/"
    :list="data['how-it-works'].links"
/>
---
title: Scan your infrastructure
excerpt: Scan your infrastructure with the Reliably CLI to surface potential reliability issues and suggestions.
categories: ["guides", "scan-infrastructure"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import MarkdownTwoColumns from '~/components/MarkdownTwoColumns.vue'
import OtherArticles from '~/components/OtherArticles.vue'
import BigLink from '~/components/BigLink.vue';

import IconScan from '~/assets/images/icons/search.svg';
import IconCluster from '~/assets/images/icons/server.svg';

import data from '~/data/scan-infrastructure-index-data.json'

# Scan your infrastructure with Reliably

<PageIntroduction>

What if you could have an SRE coworker at your side all the time, giving you
best practice suggestions about your Kubernetes manifests even before they're
applied? This is exactly what <code>reliably scan kubernetes</code> is for.

And what about those clusters that are already running? Well, we have you
covered too, with <code>reliably scan kubernetes --live</code>!

</PageIntroduction>

## Main articles

<MarkdownTwoColumns>
  <BigLink to="/guides/scan-infrastructure/kubernetes-manifest/" :external="false" :dark="true">
    <template v-slot:header>
      Scan a Kubernetes Manifest
    </template>
    <template v-slot:icon>
      <IconScan />
    </template>
    <p>Surface potential reliability issues in your Kubernetes manifests.</p>
  </BigLink>
  <BigLink to="/guides/scan-infrastructure/kubernetes-cluster/" :external="false" :dark="true">
    <template v-slot:header>
      Scan a Kubernetes Cluster
    </template>
    <template v-slot:icon>
      <IconCluster />
    </template>
    <p>Get reliability suggestions for your running Kubernetes clusters.</p>
  </BigLink>
</MarkdownTwoColumns>

## Other articles

<OtherArticles :links="data.links" />
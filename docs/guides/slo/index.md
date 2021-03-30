---
title: Service Leevel Objective
excerpt: Lorem Ipsum is simply dummy text.
categories:  ["guides", "service-levle-objective"]
status: published
type: overview
---
import PageIntroduction from '~/components/PageIntroduction.vue'
import SectionList from '~/components/SectionList.vue'

import data from '~/data/guides-index-data.json'

# Guide to Scanning your Infrastructure

<PageIntroduction>
  Service Level Objectives
</PageIntroduction>

## Overview


## Define SLO

Reliably uses a file to define Service Level Objectives and their related Service Lvels Indicators.

```YAML
app:
  name: my-app
  owner: me
  repo: /Users/mickroper/repos/github.com/reliablyhq/cli
service:
  objective:
    name: name-here-?
    indicators:
      - latency: 100ms
      - error_budget_percent: 90
    resources:
      - provider: aws
        id: arn:317464599277:apigateway:eu-west-2::/apis/trj7cyiqib
      - provider: gcp
        id: alpha1-e3d83fa0/Google Cloud Load Balancers/reliablyadvicealpha1
```

NB: above YAML content is TBC

## Service Service Indicator

## Providers

### AWS provider

### GCP Provider

## Measure and Report

The provider will show a score against each SLI ...

Each SLI included




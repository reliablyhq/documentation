---
title: Declare Service Level Objectives
excerpt: The Reliably CLI can measure your SLOs and their dependencies.
categories: ["guides", "slo"]
status: published
type: doc
---
# Declare Service Level Objectives



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
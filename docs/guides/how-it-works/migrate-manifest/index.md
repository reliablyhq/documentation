---
title: Migrate Deprecated Manifests
excerpt: Learn how to migrate your deprecated manifests 
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# Migrate Deprecated Manifests

Reliably's new [manifest structure](/guides/slo/define-slos/#yaml-manifest) allows you to declare your SLOs as entities leveraging a structure based on `labels`. This allows you to define your SLOs in a more powerful way than before. [Objectives, Indicators, Results and Behaviour](/guides/slo/objectives-indicators-results-and-behaviour/), explains in detail the new way Reliaby's API and CLI work. Here we will walk you through how to migrate from our deprecated structure, to our new one.

## Change In Structure

The new manifest maintains the YAML format, but now leverages the concepts of `labels` and `selectors` to define loosely coupled relationships between entities.

Previous Structure:

```yaml
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
```

New Structure: 

```yaml
spec:
  indicatorSelector:
    gcp_loadbalancer_name: example-lb
    gcp_project_id: example-id
```

Information surrounding the provider can now be described within the `indicatorSelector`.

Previous Structure:

```yaml
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
```

New Structure: 

```yaml
spec:
  indicatorSelector:
    gcp_loadbalancer_name: example-lb
    gcp_project_id: example-id
```

mention latency and availibility are different

## API Version

Our format will now be versioned this way:

## Time Format

Currently the CLI reads the observation window as defined here:

example
otherexample

```yaml
apiVersion: reliably.com/api
```

## Complete Example

Previous Structure:

```yaml
services:
- name: http-api
  service-levels:
  - name: 99% availability over 1 hour
    type: availability
    slo: 99
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
    window: PT1H
  - name: 99.5% availability over 1 day
    type: availability
    slo: 99.5
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
    window: PT24H
```

New Structure:


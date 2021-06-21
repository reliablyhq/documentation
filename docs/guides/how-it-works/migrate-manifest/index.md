---
title: Migrate Deprecated Manifests
excerpt: Learn how to migrate your deprecated manifests 
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# Migrate Deprecated Manifests

Reliably's new [manifest structure](/guides/slo/define-slos/#yaml-manifest) allows you to declare your SLOs as entities leveraging a structure based on `labels`. This allows you to define your SLOs in a more powerful way than before. [Objectives, Indicators, Results and Behaviour](/guides/how-it-works/objectives-indicators-results-and-behaviour/), explains in detail the new way Reliaby's API and CLI work. Here we will walk you through how to migrate from our deprecated structure, to our new one.

## Change In Structure

The new manifest maintains the YAML format, but now leverages the concepts of `labels` and `selectors` to define loosely coupled relationships between Objectives, Indicators, and other entities. Many users may find this structure familiar, as there are many similarities with the Kubernetes manifest.

### Indicator Selectors

Information surrounding the data provider and Indicator criteria can now be described within the `indicatorSelector`

Previous Manifest:

```yaml
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
    type: latency
    criteria:
      threshold: 300ms
```

New Manifest: 

```yaml
spec:
  indicatorSelector:
    gcp_loadbalancer_name: example-lb
    gcp_project_id: example-id
    latency_target: 300ms
```

### API Version

Our format will now require an `apiVersion`:

```yaml
apiVersion: reliably.com/v1
```


### Time Format

Currently the CLI reads the observation window as defined in [Define SLOs](/guides/slo/define-slos/#observation-window).

Previous Manifest:

```yaml
window: PT24H
```

New Manifest:

```yaml
window: 24h0m0s
```

### Complete Example

Previous Manifest:

```yaml
services:
- name: reliably-api
  service-levels:
  - name: api-availability
    type: availability
    slo: 99
    sli:
    - id: project-id/google-cloud-load-balancers/example-lb
      provider: gcp
    window: PT1H
  - name: api-latency
    type: latency
    criteria:
      threshold: 300ms
    slo: 99.9
    sli:
    - id: project-id/google-cloud-load-balancers/example-lb
      provider: gcp
    window: PT24H
```

New Manifest:

```yaml
apiVersion: reliably.com/v1
kind: Objective
metadata:
  labels:
    name: api-availability
    service: reliably-api
spec:
  indicatorSelector:
    category: availability
    gcp_loadbalancer_name: example-lb
    gcp_project_id: project-id
  objectivePercent: 99
  window: 1h0m0s
---
apiVersion: reliably.com/v1
kind: Objective
metadata:
  labels:
    name: api-latency
    service: reliably-api
spec:
  indicatorSelector:
    category: latency
    gcp_loadbalancer_name: example-lb
    gcp_project_id: project-id
    latency_target: 300ms
    percentile: "99"
  objectivePercent: 99.9
  window: 24h0m0s
```
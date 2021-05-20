---
title: How Reliably CLI creates SLO Reports
excerpt: How Reliably creates SLO Reports.
categories: ["guides", "how-it-works"]
status: published
type: doc
---
import AsciiPlayer from '~/components/AsciiPlayer.vue'

# How Reliably CLI works

## SLO Report

### About Service Level Objectives

Service Level Objectives identify what you should care about on your system.
 They are what good looks like for the users of your system. If an SLO is underperforming, it will be impacting your users in some way.

With Reliably, the manifest file is at the centre of how you manage and report against your system objectives.

The Reliably manifest will identify one or more Services. Each service will have one or more SLOs. Each SLO will have a target, expressed as a percentage. Associated with each SLO, you can define one or more SLIs. The SLI is used to collect metrics to determine if the SLO is meeting its objective.

To get you started with SLOs, you can use the Reliably `slo report init` command to generate a Reliably manifest.

<AsciiPlayer id="QogWMsBCW5Y3Zmgka5OdCKHDo" />

An example Reliably Manifest is:

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
  - name: 99% of requests under 300ms
    type: latency
    criteria:
      threshold: 300ms
    slo: 99
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
    window: PT24H
  - name: 99.9% of requests under 1s
    type: latency
    criteria:
      threshold: 1s
    slo: 99.9
    sli:
    - id: alpha1-e3d83fa0/google-cloud-load-balancers/resource-id
      provider: gcp
    window: PT24H
```

Reliably will use this manifest to generate a Reliably SLO report. Reliably currently supports GCP and AWS as platforms for services. Reliably will extend the supported platforms in future releases.

### What does the SLO Report Command do

When the Reliably `slo report` command is entered the `cli` will go through the following steps:

* It will read/load the manifest file. The location for the manifest file defaults to `reliably.yaml` in the current working directory. You can alterntively specify the path to the mainifest with the -m / --manifest flag.

* The manifest will define a list of services and SLOs. Each SLO can optionally have one or more SLIs.

* The SLIs are measures that allow metrics collection from a cloud provider. Reliably will collect the metrics over the time period for all the SLIs.

* Once all the SLOs are computed, the report is sent to the Reliably SAAS. The Reliably SAAS will store the report and use the stored reports to generate trends from the report history.

* Finaly the `cli` will write out the report in the desired format either to standard out or to a local file.

### Time Window

When you define your SLI, you specify an Observation window that you want to measure the service over. The choices for the observation window are:

* 1 hour
* 1 day
* 1 week
* 1 month
* custom

When you select a custom observation window, you specify a custom period using
 the ISO-8601 period format.  Example ISO-8601 formats are:

| ISO8601 format | Human readable duration         |
| -------------- | ------------------------------- |
| PT1H           | 1 hour                          |
| P1D            | 1 day                           |
| P13DT3H27M     | 13 days, 3 hours and 27 minutes |

More details on [the Wikipedia page about ISO-8601 durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)

:::note Note
The period of the observation window supports precision to 1 minute.

The period of the observation window must be less than 1 year.
:::

### Availability SLO

For availability, the Reliably CLI will fetch the error rate over the entire time period. The availability is computed as 100 - error rate. The error rate is calculated as: Sum of (HTTP 5xx requests/Sum of all requests) * 100



### Latency SLO

For latency, the Reliably CLI will fetch the 99-percentile latency for every minute over the total time period. It will count the number of times the 99-percentile is above the threshold and divide it by the total number of minutes to get the value as percentage.

#### Where does the Reliably CLI get the Data from

The Reliably CLI uses monitoring metrics from the Cloud Provider. For AWS the CLI uses the Cloudwatch API to agregate data based on the defined time window. For GCP the CLi will query the GCP Monitoring API.

:::warning Warning

In order for the Reliably CLI to be able to query your service provider, your client needs to be authenticated. The Reliably CLI uses the credentials configured for the cloud provider client.

* [Authenticating with AWS](/docs/guides/slo/slo-reports/#aws)
* [Authenticating with GCP](/docs/guides/slo/slo-reports/#google-cloud-platform)

:::

### Reliability Report

For all the SLOs defined in the manifest, Reliably will construct a report
 showing if the target for the SLO is met or not. You can specify different
 output formats for the [SLO report]. The default table output for a
 manifest would be:

 [SLO report]:/docs/reference/cli/reliably-slo-report/


```reliably
<span class="token dollar"></span>reliably slo report --format table
                                          <span class="token purple bold">Actual</span>   <span class="token purple bold">Target</span>  <span class="token purple bold">Delta</span>    <span class="token purple bold">Time Window</span>
  Service #1: http-api
  <span class="token emoji">✅</span> 99% availability over 1 hour         <span class="token green bold">100.00%</span>  99%     1.00%    1 hour
  <span class="token emoji">✅</span> 99.5% availability over 1 day        <span class="token green bold">100.00%</span>  99.5%   0.50%    1 day
  <span class="token emoji">❌</span> 99% of requests under 300ms          <span class="token red bold">77.46%</span>   99%     -21.54%  1 day
  <span class="token emoji">❌</span> 99.9% of requests under 1s           <span class="token red bold">98.59%</span>   99.9%   -1.31%   1 day

  Service #2: products-api
  <span class="token emoji">✅</span> 99% availability over 1 day          <span class="token green bold">100.00%</span>  99%     1.00%    1 day
  <span class="token emoji">✅</span> 99.5% of requests under 200ms        <span class="token green bold">100.00%</span>  99.5%   0.50%    1 day
```

## More on that subject

[How Reliably Scans Resources](/docs/guides/how-it-works/scan-resources/)

[How the Reliably API works](/docs/guides/how-it-works/api/)

[How the Reliably Rules work](/docs/guides/how-it-works/rules/)

## Not using Reliaby yet?

[Getting started with Reliably](/docs/getting-started/)

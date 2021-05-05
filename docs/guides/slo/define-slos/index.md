---
title: Define Service Level Objectives
excerpt: The Reliably CLI can measure your SLOs and their dependencies.
categories: ["guides", "slo"]
status: published
type: doc
---
import AsciiPlayer from '~/components/AsciiPlayer.vue'

# Define Service Level Objectives

## Defining SLOs in Reliably

You can define SLOs interactively with the [Reliably CLI](#with-the-cli) or you can define them in a [`yaml`](#with-a-yaml-file) file.

### With the CLI

Running the `reliably slo init` will prompt you with questions to help you
define an SLO.

<AsciiPlayer id="QogWMsBCW5Y3Zmgka5OdCKHDo" />


* For the SLO type, you can currently choose between **Availability** and
 **Latency**.
* You must specify a **target** for your SLO. This is what good looks like for
 your SLO and is expressed as a percentage. For example, for an
 **Availability SLO**, a target of 98% would mean the service is available
  98% of the time.
* For the **Latency SLO**, you also need to specify a threshold in milliseconds.
 All reponses within this threshold contribute to your target.
* You must answer **Yes** when asked if you want to add a service resource.
* We currently support **AWS** and **Google Cloud Platform** as providers.
* Learn how to identify your AWS resources and GCP resources [here](#providers).
* Answer **Yes** when asked if you want to add another service.

The Reliably CLI will then create a `reliably.yaml` configuration file in your
working directory and it will also upload the generated file to the Reliably server. This file will be used to
[generate your SLO report](/docs/guides/slo/slo-reports/).

You could also create this configuration file yourself, as explained in the next
section.

### With a YAML file

Your SLOs are stored in a `reliably.yaml` configuration file, in your working
directory. You could generate it with the `reliably slo init` command, as
explained in the previous section, or create it yourself.

```yaml
services:
- name: Service A
  service-levels:
  - name: Availability SLO
    type: availability
    slo: 98
    sli:
    - id: arn:partition:service:region:account-id:resource-id
      provider: aws
  - name: Latency SLO
    type: latency
    criteria:
      threshold: 300ms
    slo: 98
    sli:
    - id: project-id/google-cloud-load-balancers/resource-id
      provider: gcp
  dependencies: []

```

AWS resources are identified with their ARN.

GCP resources are identified with a project ID, the resource type (only "Google
Cloud Load Balancers" are currently supported), and the resource name.

## AWS

Resources on AWS are identified with their Amazon Resource Name. Learn more
about <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html" target="_blank" rel="noopener noreferer">ARNs in the AWS documentation</a>.

If **manually creating** the `reliably.yaml` configuration file, you will want to provide this information in the following format:

```yaml
resources:
  - id: arn:partition:service:region:account-id:resource-id
    provider: aws
```

Note the `arn:` prefix.

## Google Cloud Platform

The Reliably CLI can currently fetch Service Level Indicators for **services that are attached to a Google Cloud Load Balancer**. You will thus need a load balancer set up to define and report SLOs for GCP.

When defining a service with GCP as provider, you will be prompted with three questions to identify the service you want to monitor. You can get the service ID using the gcloud CLI or the Google Cloud Console.

![Screenshot of the questions asked by the CLI](./images/reliably-gcp-resource-id.png)

### gcloud CLI

The **project ID** can be found by running:

```console
$ gcloud config get-value project
```

If you want to use a different project than the current one configured on your
machine, list all of them with:

```console
$ gcloud projects list
```

The **resource name** can be found with:

```console
$ gcloud compute url-maps list
```

### Google Cloud Console

The **project ID** can be found in the "Project info" card of your <a href="https://console.cloud.google.com/home/dashboard" target="_blank" rel="noopener noreferer">Google Cloud Console Dashboard</a>.

![Screenshot of Project info card in the Google CLoud Console](./images/gcp-project-info-card.png)

The **resource name** can be found in the <a href="https://console.cloud.google.com/net-services/loadbalancing/" target="_blank" rel="noopener noreferer">Network services / Load balancing section of the Google Cloud Console</a>, where all your services attached to a load balancer are listed.

### Manual file creation

If **manually creating** the `reliably.yaml` configuration file, you will want to provide this information in the following format:

```yaml
resources:
  - id: project-XXXXXX/google-cloud-load-balancers/resource-name
    provider: gcp
```

## Measure and Report

Now that your SLOs are defined, the Reliably CLI will be able to
[query the resources for SLIs and generate SLO reports](/docs/guides/slo/slo-reports/).

## Reference

Read the [Reliably CLI SLO Init command](/docs/reference/cli/reliably-slo-init/) reference for a complete list of options.

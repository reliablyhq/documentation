---
title: Scan your first project
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "scan-infrastructure"]
status: published
type: doc
---
# Scan a Kubernetes Manifest with Reliably scan

Reliably helps you discover reliability concerns you may want to pay attention
to.

## Scan

You ask Reliably to scan your code via the `reliably scan` command. This
command scans the current directory by default.

:::info Info
  Reliably only scans for Kubernetes resources at the moment but will grow
  its capabilities to other assets in the near future.
:::

:::info Example
  This page will assume the following Kubernetes manifest deployment in your
  current directory:

  ```yaml
  kind: Deployment
  apiVersion: apps/v1
  metadata:
    name: myapp
  spec:
    template:
      spec:
        containers:
        - image: nginx
          name: myapp
          imagePullPolicy: Always
          ports:
          - containerPort: 8000
            protocol: TCP
  ```
:::

Run `reliably scan` to find out what reliability suggestions Reliably
offers:

```console
$ reliably scan .
tests/manifests/deployment.yaml:1:1 [warning] You should specify a number of replicas
tests/manifests/deployment.yaml:1:1 [error] Setting a high cpu request may render pod scheduling difficult or starve other pods
tests/manifests/deployment.yaml:1:1 [error] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
tests/manifests/deployment.yaml:1:1 [info] Image pull policy should usually not be set to 'Always'
tests/manifests/deployment.yaml:1:1 [warning] A rollout strategy can reduce the risk of downtime
tests/manifests/deployment.yaml:1:1 [warning] Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long it the pod should be ready for before being considered available.
6 suggestions found
```

Reliably goes through all resources it recognises and issue a suggestion
statement for each potential reliability concern for you to review.

:::info info
  The default format is a plain text list of suggestions, the `scan`
  command supports other formats: yaml, json, sarif, etc.
:::

In this case, Reliably made six suggestions about this Kubernetes deployment.

The output shows the file which triggered a suggestion and the line of the
resource containing the concerning line.

:::warning Warning
  For now, Reliably can only position you at the first line of the owning
  resource for the property. In this case all locations are at line 1 as
  the deployment is at the top of the file. If that Kubernetes file had
  contained another resource, say a service, before this deployment the
  line number would be different.
:::


### Show suggestion with example

When running a CLI scan, the resulting suggestions can be displayed
with an optional example of a best practice to be applied. To do so, you'll
need to run the `scan` command with the specific `extended` format:

```console
$ reliably scan . -f extended
```

The CLI will output the list of suggestions with examples, as well as a
recap summary:
```
Results:
> tests/manifests/deployment.yaml:1:1 [warning] You should specify a number of replicas
Rule: K8S-DPL-0001, Platform: Kubernetes, Kind: Deployment

# Example:
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3

> tests/manifests/deployment.yaml:1:1 [error] Setting a high cpu request may render pod scheduling difficult or starve other pods
...

Summary:
        8 suggestions found
        1 info - 5 warning - 2 error
```
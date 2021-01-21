---
title: Reliably First Scan
excerpt: Run your first scan with Reliably discover
categories: getting-started, first-scan
status: published
type: doc
---
# Running your first Reliably scan

Reliably helps you discover reliability concerns you may want to pay attention
to.

## Scan

You ask Reliably to scan your code via the `reliably discover` command. This
command scans the current directory by default.

!!! info
    Reliably only scans for Kubernetes resources at the moment but will grow
    its capabilities to other assets in the near future.


!!! example
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

Run `reliably discover` to find out what reliability suggestions Reliably
offers:

```console
$ reliably discover .
deployment.yaml:1:1 You should specify a number of replicas
deployment.yaml:1:1 Setting a high cpu request may render pod scheduling difficult or starve other pods
deployment.yaml:1:1 Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
deployment.yaml:1:1 Image pull policy should usually not be set to 'Always'
deployment.yaml:1:1 A rollout strategy can reduce the risk of downtime
deployment.yaml:1:1 Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long it the pod should be ready for before being considered available.
6 suggestion(s) found
```

Reliably goes through all resources it recognises and issue a suggestion
statement for each potential reliability concern for you to review.

!!! info
    The default format is a plain text list of suggestions, the `discover`
    command supports other formats: yaml, json, sarif, etc.

In this case, Reliably made six suggestions about this Kubernetes deployment.

The output shows the file which triggered a suggestion and the line of the
resource containing the concerning line.

!!! warning
    For now, Reliably can only position you at the first line of the owning
    resource for the property. In this case all locations are at line 1 as
    the deployment is at the top of the file. If that Kubernetes file had
    contained another resource, say a service, before this deployment the
    line number would be different.
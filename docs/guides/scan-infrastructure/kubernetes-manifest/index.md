---
title: Scan your first project
excerpt: Scan Kubernetes manifests with Reliably and discover potential reliability issues before deploying your infrastructure.
categories: ["guides", "scan-infrastructure"]
status: published
type: doc
---

# Scan Kubernetes Manifests

Reliably helps you discover reliability concerns you may want to pay attention
to in your Kubernetes manifests.

Scan your code via the `reliably scan kubernetes <directory>` command. This
command scans the current directory by default.

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

```reliably
<span class="token dollar"></span>reliably scan kubernetes .
tests/manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] You should specify a number of replicas
tests/manifests/deployment.yaml:1:1 [<span class="token red">error</span>] Setting a high cpu request may render pod scheduling difficult or starve other pods
tests/manifests/deployment.yaml:1:1 [<span class="token red">error</span>] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
tests/manifests/deployment.yaml:1:1 [<span class="token yellow">info</span>] Image pull policy should usually not be set to 'Always'
tests/manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] A rollout strategy can reduce the risk of downtime
tests/manifests/deployment.yaml:1:1 [<span class="token red">warning</span>] Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long it the pod should be ready for before being considered available.
6 suggestions found
```

Reliably goes through all resources it recognises and issues a suggestion
statement for each potential reliability concern.

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

:::info info
  The default format is a plain text list of suggestions, the `scan`
  command supports other formats: yaml, json, sarif, etc.

  Learn more about output formats [here](/docs/guides/scan-infrastructure/output-formats/).
:::
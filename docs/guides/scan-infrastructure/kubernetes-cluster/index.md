---
title: Run gainst a Kubernetes cluster
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "scan-infrastructure"]
status: published
type: doc
---
# Scan a Kubernetes Cluster with Reliably scan


You can use the [Reliably CLI][reliablyCLI] to discover the state of resources
on a live [Kubernetes](https://kubernetes.io/docs/home/) Cluster.
The Reliably CLI will use a configuration file to connect to your Cluster. This
configuration file is usually referred to as `kubeconfig` (see Note)

:::note Note
  The [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
  command-line tool lets you control Kubernetes clusters.
  The `kubeconfig` file is usually provisioned by `kubectl`. The Kubernetes
  [documentation][kubeconfig] provides more details.

:::


[reliablyCLI]: https://github.com/reliablyhq/cli/
[kubeconfig]: https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/

## Scan for Reliability concerns from a Kubernetes Cluster

To use Reliably to scan for reliability concerns from your live cluster, you can
run:

```
$ reliably scan --live
```

The command will generate an output that offers advice about reliability concerns from your live cluster. An example for the generated output could be:

```
Pod:chaostoolkit:0:0 [warning] You shall not use the default 'latest' image tag. It causes ambiguity and leads to the cluster not pulling the new image.
Pod:nginx-deployment-5bf87f5f59-q9xsp:0:0 [warning] Only images from approved registry can be run.
Deployment:hello-node:0:0 [error] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
Deployment:hello-node:0:0 [warning] A rollout strategy can reduce the risk of downtime
Deployment:hello-node:0:0 [warning] Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long it the pod should be ready for before being considered available.
Deployment:nginx-deployment:0:0 [error] Setting a high cpu request may render pod scheduling difficult or starve other pods
Deployment:nginx-deployment:0:0 [warning] Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long it the pod should be ready for before being considered available.
```

The `reliably --live` command will connect and talk to your cluster using a
 [kubeconfig][kubeconfig] file. This file typically lives at
 `$HOME/.kube/config`. By default, `reliably --live` will use the kubeconfig
 from the home location. You can override the path for the kubeconfig by adding
 the `--kubeconfig` or `-k` flag:

```
$ reliably --live --kubeconfig=/reliably/kube-config
```
You can also use an Environment Variable to locate your kubeconfig file by
setting the `KUBECONFIG` Environment Variable:

```
$ KUBECONFIG=/reliably/kube-config reliably --live --kubeconfig
```

## Next?

Congratulations, you have successfully run 'reliably scan' with a live
 Kubernetes Cluster. For the next steps, see the [Reliably CLI scan]
 [cli-ref] reference section.

[cli-ref]: /docs/reference/cli/reliably-scan/

[kubeconfig]: https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/
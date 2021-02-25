---
title: Run with a live kubernetes cluster
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides"]
status: published
type: overview
---
# Run Reliably with a live Kubernetes Cluster

You can use the [Reliably CLI][reliablyCLI] to discover the state of resources
on a live [Kubernetes](https://kubernetes.io/docs/home/) Cluster.

The [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
command-line tool lets you control Kubernetes clusters. You will need `kubectl`
installed and configured to authenticate to your cluster.

[reliablyCLI]: https://github.com/reliablyhq/cli/

## Discover Reliability concerns from live Kubernetes Cluster

To use Reliably to discover reliability concerns from your live cluster, you can
run:

```
$ reliably discover --live
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

Congratulations, you have successfully run 'reliably discover' with a live
 Kubernetes Cluster. For the next steps, see the [Reliably CLI discover]
 [cli-ref] reference section.

[cli-ref]: /docs/reference/cli/reliably-discover/

[kubeconfig]: https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/

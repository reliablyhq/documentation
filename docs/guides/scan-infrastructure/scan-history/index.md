---
title: Scan history
excerpt: Display an history of all your Reliably infrastructure scans, with the complete list of suggestions.
categories: ["guides", "scan-infrastructure"]
status: published
type: doc
---

# Scan history

The `reliably history` command displays a list of all your `reliably scan` 
executions to date, with a list of all suggestions raised for each scan.

Use the "Enter" key to scroll into older entries.

```reliably
<span class="token dollar"></span>reliably history
<span class="token yellow">Execution ff4a3e1e-f369-4297-b724-2afdfffb2289</span>
Date: Thu, 13 May 2021 12:22:30 +0000

manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] You should specify a number of replicas
manifests/deployment.yaml:1:1 [<span class="token red">error</span>] Setting a high cpu request may render pod scheduling difficult or starve other pods
manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long the pod should be ready for before being considered available
manifests/pod.yaml:1:1 [<span class="token purple">warning</span>] You should not use the default 'latest' image tag. It causes ambiguity and leads to the cluster not pulling the new image
test-manifest.yaml:92:1 [<span class="token yellow">info</span>] Enabling privileged can lead to unwanted escalation from the container's process
manifests/deployment.yaml:1:1 [<span class="token yellow">info</span>] Image pull policy should usually not be set to 'Always'
manifests/pod.yaml:1:1 [<span class="token purple">warning</span>] Only images from an approved registry can be run
manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] A rollout strategy can reduce the risk of downtime
test-manifest.yaml:92:1 [<span class="token yellow">info</span>] To reduce risk of accessing files outside of an allowed paths, it's best to make them read only
manifests/deployment.yaml:1:1 [<span class="token red">error</span>] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
<span class="token red">✕ 10 suggestions found</span>

<span class="token yellow">Execution 5be787fe-6fb9-4919-837f-b93cf80c473a</span>
Date: Thu, 13 May 2021 08:52:17 +0000

manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] Without the 'minReadySeconds' property set, pods are considered available from the first time the readiness probe is valid. Settings this value indicates how long the pod should be ready for before being considered available
test-manifest.yaml:92:1 [<span class="token yellow">info</span>] To reduce risk of accessing files outside of an allowed paths, it's best to make them read only
manifests/deployment.yaml:1:1 [<span class="token red">error</span>] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] A rollout strategy can reduce the risk of downtime
manifests/deployment.yaml:1:1 [<span class="token red">error</span>] Setting a high cpu request may render pod scheduling difficult or starve other pods
manifests/pod.yaml:1:1 [<span class="token purple">warning</span>] Only images from an approved registry can be run
manifests/deployment.yaml:1:1 [<span class="token purple">warning</span>] You should specify a number of replicas
test-manifest.yaml:92:1 [<span class="token yellow">info</span>] Enabling privileged can lead to unwanted escalation from the container's process
manifests/deployment.yaml:1:1 [<span class="token yellow">info</span>] Image pull policy should usually not be set to 'Always'
<span class="token red">✕ 9 suggestions found</span>
<span class="token green">></span> <span class="token bold">press ENTER to load more entries or Ctrl+C to exit...</span>
```
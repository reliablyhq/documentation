---
title: How Reliably CLI works
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# How Reliably CLI works

## Authenticate with the Reliably API

The Reliably CLI will use the Reliably API to gather suggestions and store scan
 histories. In order to use the Reliably API, **you need to authenticate with
 Reliably**. Authentication is done using GitHub or GitLab authentication
 providers, meaning Reliably doesn't store your personal data.

 You can authenticate with:

```bash
$ reliably auth login
```

You will be prompted for your preferred authentication method, select the way
 you want to authenticate with the arrow keys, and then select enter.

For further reading see:

* [Authentication section][reliably-auth] page in the Reference section.
* [Login][getting-started-login] page in Getting Started.

Once you have authenticated, the CLI will interact with the Reliably API.

[reliably-auth]: /docs/reference/cli/reliably-auth/
[getting-started-login]: getting-started/login/

## Scan Resources

The Reliably CLI will scan your resources to discover any reliability concerns.
It will offer advice on how you can resolve those concerns.

The Reliably CLI will work with files that define your resources, or scan your Cluster directly, to work with deployed resources.

For example, to scan for issues in any files in the current working directory
you can run:

```bash
$ reliably scan
```

If you want to scan a Cluster using your default Kubernetes configuration file,
you can run:

```bash
$ reliably scan --live
```

Full details for 'reliably scan' are covered in the [scan][reliably-scan]
section in the reference documentation.

[reliably-scan]: /reference/cli/reliably-discover/

### Kubernetes

Currently the Reliably CLI is focussed on supporting the Kubernetes Platform.
Future versions of the CLI will extend to other platforms.

## Fetch rules

The Reliably CLI will Fetch the rules that will be applied to your `discover`
from the Reliably API.

## Display Results

As a result of running a scan, the Reliably CLI will offer advice for any resource issues.

### In your Terminal

If you are running the CLI in your terminal by default, it will display the advice directly in your terminal session:

```bash
$ reliably discover
tests/manifests/deployment.yaml:1:1 [warning] You should specify a number of replicas
tests/manifests/deployment.yaml:1:1 [error] Setting a high cpu request may render pod scheduling difficult or starve other pods
tests/manifests/deployment.yaml:1:1 [error] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
tests/manifests/deployment.yaml:1:1 [info] Image pull policy should usually not be set to 'Always'
```

### In your CI/CD

If you are running the Reliably CLI as part of your adopted CI/CD, then the
output will be displayed within the CI/CD tools. Examples of using different
CI/CD solutions can be seen in the [guides][ci-pipeline].

[ci-pipeline]: /guides/ci-pipeline/

## Results History

Whenever you run a scan with the Reliably CLI, it will store the results from
the scan with the Reliably API.

Only surfaced suggestions and file or resource metadata are stored. Your code
itself never leaves your own premises and is thereby not stored by Reliably.

The API will maintain that history so you can to view progress of your
reliability effort.

## More on that subject

[How the Reliably API works](/guides/how-it-works/api/)

[How the Reliably Rules work](/guides/how-it-works/rules/)

## Not using Reliaby yet?

[Getting started with Reliably](/getting-started/)
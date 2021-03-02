---
title: How Reliably CLI works
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# How Reliably CLI works

## Authenticates you with API

The Reliably CLI will use the Reliably API to gather suggestions and store scan histories. To use the Reliably API, you will need to Authenticate the CLI with
the API services. You can authenticate with:

```bash
$ reliably auth login
```

You will be prompted for your preferred authentication method, select the way
 you want to authenticate with the arrow keys, and then select enter.

For full details, see the [authentication][reliably-auth] section in the reference documentation.

Once you have authenticated, the CLI will interact with the Reliably API.

[reliably-auth]: /docs/reference/cli/reliably-auth/

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

Full details for 'reliably scan' are covered in the [scan][reliably-scan] section in the reference documentation.

[reliably-scan]: /reference/cli/reliably-discover/

### Platform/kind organization

The Reliably CLI will use its internal repository of reliability concerns and advice. The store is organized around the Platform and the Kind of resource. An example for the `Kubernetes` Platform could be a `Deployment` kind of resource.

<span style="color:red"><i>Do we need to describe this?</i></span>.

### Kubernetes

Currently the Reliably CLI is focussed on supporting the Kubernetes Platform. Future versions of the CLI will extend to other platforms.

<span style="color:red"><i>Not sure what else goes here?</i></span>.

## Fetch rules

The Reliably CLI will Fetch the rules that will be applied to your `scan` from
the Reliably API.

## Display Results

As a result of running a scan, the Reliably CLI will offer advice for any resource issues.

### Running in your Terminal

If you are running the CLI in your terminal by default, it will display the advice directly in your terminal session:

```bash
$ reliably discover
tests/manifests/deployment.yaml:1:1 [warning] You should specify a number of replicas
tests/manifests/deployment.yaml:1:1 [error] Setting a high cpu request may render pod scheduling difficult or starve other pods
tests/manifests/deployment.yaml:1:1 [error] Not setting a cpu requests means the pod will be allowed to consume the entire available CPU (unless the cluster has set a global limit)
tests/manifests/deployment.yaml:1:1 [info] Image pull policy should usually not be set to 'Always'
```

### Running in your CI/CD

If you are running the Reliably CLI as part of your adopted CI/CD, then the
output will be displayed within the CI/CD tools. Examples of using different
CI/CD solutions can be seen in the [guides][ci-pipeline].

[ci-pipeline]: /guides/ci-pipeline/

## Pass Results history to the Reliably API

Whenever you run a scan with the Reliably CLI, it will pass the results from the scan to the Reliably API. The API will maintain that history so you can see what advice has been offered and when.

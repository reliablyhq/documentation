---
title: Run as a kubectl Plugin
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "scan-infrastructure"]
status: published
type: doc
---
# Run Reliably as a `kubectl` Plugin

The [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/) command-
line tool lets you control [Kubernetes](https://kubernetes.io/docs/home/)
clusters. `kubectl` commands are the essential building blocks for interacting
with a Kubernetes cluster. Plugins extend `kubectl` with new sub-commands,
allowing for new  and custom features not included with the main distribution
 of `kubectl`. The [Reliably CLI][reliablyCLI] can be run as a `kubectl` plugin. The
 Reliably CLI plugin is implemented as a
 Krew plugin. [Krew][krew] is an open-source plugin manager maintained
 by the [Kubernetes SIG CLI][sigcli] community.

[reliablyCLI]: https://github.com/reliablyhq/cli
[krew]: https://krew.sigs.k8s.io/
[sigcli]: https://github.com/kubernetes/community/tree/master/sig-cli

## Installation

The easiest way to install and use this plugin is with
[Krew](https://krew.sigs.k8s.io/docs/user-guide/quickstart/).

### As a Krew Plugin

If you don't already have Krew installed, please install it from the [Krew install guide][krew-install].

[krew-install]: https://krew.sigs.k8s.io/docs/user-guide/setup/install/

Once Krew is installed you can install Reliably plugin with:

```bash
$ kubectl krew install reliably
```

### From Github

The Reliably CLI plugin can be installed from the [kubectl-reliably]
[kubectl-reliably-gh] Github repository. To ensure the plugin can be run, the
`reliably.sh` shell script should be download from `kubectl-reliably` Github
into a directory on your system path.

```bash
$ curl -L https://raw.githubusercontent.com/reliablyhq/kubectl-reliably/main/reliably.sh -o $HOME/bin/kubectl-reliably -s
chmod +x ~/bin/kubectl-reliably
```

:::note Note
The steps above assume `$HOME/bin` is a directory on your system PATH.
:::

[kubectl-reliably-gh]: https://github.com/reliablyhq/kubectl-reliably

## Run the `kubectl-reliably` Plugin

If you have installed the `kubectl-reliably` either as a Krew plugin or from
Github, you can run the plugin with:

```bash
$ kubectl reliably
```

You should see the Reliably CLI help page.

## Next?

Congratulations, you have successfully installed the `kubectl-reliably` plugin.
For the next steps, see the [Reliably CLI reference][cli-ref] section.

[cli-ref]: /docs/reference/cli/

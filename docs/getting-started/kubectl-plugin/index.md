---
title: Run as a kubectl Plugin
excerpt: Use the Reliably CLI as a kubectl plugin, to surface and fix potential reliability issues.
categories: ["getting-started"]
status: published
type: doc
---
# Run Reliably as a `kubectl` Plugin

The [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)
command-line tool lets you control
[Kubernetes](https://kubernetes.io/docs/home/) clusters. `kubectl` commands are
the essential building blocks for interacting with a Kubernetes cluster.
Plugins extend `kubectl` with new sub-commands, allowing for new  and custom
features not included with the main distribution of `kubectl`.

The [Reliably CLI][reliablyCLI] can be run as a `kubectl` plugin and installed
as a Krew plugin. [Krew][krew] is an open-source plugin manager maintained by
the [Kubernetes SIG CLI][sigcli] community.

[reliablyCLI]: https://github.com/reliablyhq/cli
[krew]: https://krew.sigs.k8s.io/
[sigcli]: https://github.com/kubernetes/community/tree/master/sig-cli

## Installation

The easiest way to install and use this plugin is with
[Krew](https://krew.sigs.k8s.io/docs/user-guide/quickstart/).

### As a Krew Plugin

If you don't already have Krew installed, please install it from the
[Krew install guide][krew-install].

[krew-install]: https://krew.sigs.k8s.io/docs/user-guide/setup/install/

Once Krew is installed you can install Reliably plugin with:

```bash
$ kubectl krew install reliably
```

### From the GitHub

If you don't want to use Krew, [download the Reliably CLI from the Releases page](https://github.com/reliablyhq/cli/releases/)
or [clone it and build it from the GitHub repository](https://github.com/reliablyhq/cli/).
Then, rename it (or make a copy) as `kubectl-reliably` anywhere in your `PATH`,
ensuring it is executable.

For example, here is how to install it for macOS, considering `$HOME/bin` is a
directory in your `PATH`:

```bash
$ curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-darwin-amd64 -o $HOME/bin/kubectl-reliably -s
chmod +x ~/bin/kubectl-reliably
```

## Usage

If you have installed the `kubectl-reliably` either as a Krew plugin or from
Github, you can run the plugin with:

```bash
$ kubectl reliably
```

You should see the Reliably CLI help page.

You can now use [all the commands from the CLI][cli-ref] in kubectl.

[cli-ref]: /docs/reference/cli/

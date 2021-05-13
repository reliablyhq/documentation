---
title: Upgrade Reliably
excerpt: Upgrade the Reliably CLI to the latest version.
categories: ["getting-started"]
status: published
type: doc
---
# Upgrading the Reliably CLI

When there is a new release of the Reliably CLI available, the CLI will output
 a message to the user:

 ```console
 A new release of reliably is available: v0.11.0 → v0.12.0
 ```

## Quick Upgrade Guide

Download the latest executable for your system, and copy it to a directory in
your PATH.

On macOS

```console
curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-darwin-amd64 -o /usr/local/bin/reliably
```

On Linux

```console
curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-linux-amd64 -o /usr/local/bin/reliably
```

With that, you are good to go, with the new version!

You can check everything is working with the `reliably --version` command.

---
title: Upgrade Reliably
excerpt: Upgrade the Reliably CLI to the latest version.
categories: ["getting-started"]
status: published
type: doc
---

import CopyToClipboard from '~/components/MarkdownCopyToClipboard.vue'

## New update available notice

While running any command, when a new release is available on GitHub,
a message will be output at end of the command output.

```
A new release of reliably is available: 0.15.0 → 0.16.0

Details of the new release can be found here:
https://github.com/reliablyhq/cli/releases/tag/v0.16.0

To upgrade on your system run:
$ reliably update
```


:::tip Tip
  The new release availability check is performed only once every 24 hours.
:::


## How to update

The CLI has the ability to download and replace its own binary.
To do so, simply run:


<CopyToClipboard />

```console
reliably update
```

<CopyToClipboard />

And follow the instructions on the screen.

You can then check your installed version with the `reliably --version` command.

## Update to a specific version

By default, the CLI updates to the latest version. This can be configured
by using the `--version` flag to choose a specific version to update to.

This version may also be a version older than the one that is
currently installed, thus allowing you to downgrade.

```console
reliably update --version 1.2.3
```

---
title: Upgrade Reliably
excerpt: Upgrade the Reliably CLI to the latest version.
categories: ["getting-started"]
status: published
type: doc
---

import CopyToClipboard from '~/components/MarkdownCopyToClipboard.vue'

# Updating the Reliably CLI

When there is a new release of the Reliably CLI available, the CLI will output
 a message to the user:

 ```reliably
 <span class="token yellow">A new release of reliably is available:</span><span class="token blue">v0.11.0</span> → <span class="token blue">v0.16.0</span>

<span class="token yellow">Details of the new release can be found here:</span>
https://github.com/reliablyhq/cli/releases/tag/v0.16.0

 <span class="token yellow">To upgrade on your system run:</span>
 <span class="token dollar"></span>reliably update

 ```

## Quick Update Guide

The Reliably CLI includes the `reliably update` command so you can update to the latest version"

```reliably
<span class="token dollar"></span>reliably update
Your current Cli version is: 0.11.0
You will be upgraded to version: 0.16.0

Do you want to contniue? Yes

You're now up-to-date!

To revert your CLI to the previously installed version, you may run:
<span class="token dollar"></span>reliably update --version 0.11.0
```


With that, you are good to go, with the new version!

You can check everything is working the `reliably --version` command:

```reliably
<span class="token dollar"></span>reliably version
Reliably CLI version 0.16.0 (2021-05-19)
```

## Update Guide Prior to v0.16.0

Download the latest executable for your system, and copy it to a directory in
your PATH.

On macOS

```reliably
<span class="token dollar"></span>curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-darwin-amd64 -o /usr/local/bin/reliably
```
<CopyToClipboard />

On Linux

```reliably
<span class="token dollar"></span>curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-linux-amd64 -o /usr/local/bin/reliably
```
<CopyToClipboard />

On Windows

```reliably
<span class="token dollar"></span>curl -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-windows-amd64 -o  %HOMEDRIVE%%HOMEPATH%/bin/reliably.exe
```
<CopyToClipboard />



With that, you are good to go, with the new version!

You can check everything is working the `reliably --version` command:

```reliably
<span class="token dollar"></span>reliably version
Reliably CLI version 0.16.0 (2021-05-19)
```

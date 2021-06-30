---
title: How Reliably CLI works
excerpt: Authentication to Reliably is done through GitHub or GitLab.
categories: ["guides", "how-it-works"]
status: not-published
type: doc
---

import CopyToClipboard from '~/components/MarkdownCopyToClipboard.vue'

# How Reliably CLI works

## Authenticate with the Reliably API

The Reliably CLI will use the Reliably API to gather suggestions and store scan
 histories. In order to use the Reliably API, **you need to authenticate with
 Reliably**. Authentication is done using GitHub or GitLab authentication
 providers, meaning Reliably doesn't store your personal data.

 You can authenticate with:

```console
reliably auth login
```
<CopyToClipboard />

You will be prompted for your preferred authentication method, select the way
 you want to authenticate with the arrow keys, and then select enter.

For further reading see:

* [Authentication section][reliably-auth] page in the Reference section.
* [Login][getting-started-login] page in Getting Started.

Once you have authenticated, the CLI will interact with the Reliably API.

[reliably-auth]: /docs/reference/cli/reliably-auth/
[getting-started-login]: getting-started/login/

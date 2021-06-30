---
title: Where do the rules come from?
excerpt: Reliably relies on sets of rules to identify patterns in your resources that might result in unreliable behaviour for your system.
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# Rules

The Reliably CLI uses rules to surface potential reliability weaknesses in your
resource declaration files or in running resources.

## How Rules work

Reliably relies on sets of rules to identify patterns in your resources that
might result in unreliable behaviour for your system. When scanning your
resources, the CLI fetches the requested sets of rules and runs them against
your resource. This ensures all **the analysis is done in your own premises**
and **your code never leaves the safety of your environment**.

## Where the rules come from

Reliably Rules are organized in sets of rules, sorted by platform and kind of
resources. For example, we have a set of Kubernetes-related rules, which
comprises subsets of rules for Pods, Deployments, etc.

The rules have been written by the Reliably team and reflect best practices,
Kubernetes official recommendations, and our own experience configuring and
running distributed systems.

We're investigationg letting users submit rules that they think should trigger
suggestions. If you want to know when this is put in place, [follow us on
Twitter](https://twitter.com/reliablyhq/).

## Are this rules mandatory?

Sometimes, you might be in a situation when you know you're going against the
general consensus for some good reasons. Feel free to overlook them if you know
what you're doing!

We're working on a way to allow users to prevent some rules to be
triggered, on a file or line-basis, so that suggestions you know you will
overlook won't appear. As all workarounds, you will want to use it with caution.

## More on that subject

[How Reliably Scans Resources](/docs/guides/how-it-works/scan-resources/)

[How the Reliably API works](/docs/guides/how-it-works/api/)

[How the Reliably Rules work](/docs/guides/how-it-works/rules/)

## Not using Reliaby yet?

[Getting started with Reliably](/docs/getting-started/)


---
title: Sending custom indicators
excerpt: Learn how to send indicators to Reliably directly, without using Reliably tools like the CLI or agent.
categories: ["guides", "how-it-works"]
status: draft
type: overview
---

# Sending Custom Indicators

With Reliably it is possible to define an `objective` using any criteria you desire. However, in order to trigger the behaviour that makes Reliably valuable in your efforts to build robust systems, you need to send `indicators` that describe the current state of the system that the objective relates to.

## Sending indicators with Reliably tools

The Reliably CLI can be used to interract with several observability backends out of the box. Also, since the CLI is an open-source project its likely that the number of supported backends will increase. This makes the job of sending `indicators` relatively simple.

But what happens if you want to use a backend that Reliably doesn't currently support?

## Sending indicators yourself

There are a couple of steps
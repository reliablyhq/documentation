---
title: How the Reliably API works
excerpt: Discover how the Reliably API works and how we handle your data.
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# Reliably API

The Reliably API allows you to store and retrieve your Reliably history, giving
you access to your past executions and suggestions.

## Authentication

In order to use the CLI, **you need to authenticate with Reliably**. This is
done with the CLI through the API.

Authentication is done using GitHub or GitLab authentication providers, meaning
**Reliably doesn't store your personal data**.

## Execution History

Each time you use the Reliably CLI, we store the suggestions related to this
execution. This allows you access your history of executions and suggestions,
to view progress of your reliability effort.

Only surfaced suggestions and file or resource metadata are stored. Your code
itself never leaves your own premises and is thereby not stored by Reliably.

All stored suggestions and related metadata are encrypted on Reliably's side.

## More on that subject

[How the Reliably CLI works](/docs/guides/how-it-works/cli/)

[How the Reliably Rules work](/docs/guides/how-it-works/rules/)

## Not using Reliaby yet?

[Getting started with Reliably](/docs/getting-started/)
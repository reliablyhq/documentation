---
title: How Reliably CLI works
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "how-it-works"]
status: published
type: doc
---
# How Reliably CLI works

## Authenticates you with API

## It scans resources (files, cluster...)

### Platform/kind organization

### Kubernetes

## Fetches rules

## Displays the resulting suggestions

### In your terminal

### In GitHub or GitLab / your CI/CD

## Passes results history to API



The Reliably CLI is currently focussed on Kubernetes resources. It will work either with Kubernetes descriptor files or with a Kubernetes Cluster. The CLI has a set of rules that it will apply. The rules are downloaded to wherever you are running the CLI. Those rules are compared with the configuration of your Kubernetes resources. Any discrepancies between the resource and the rules are highlighted to the user. As a user you can then address those reliability concerns by updating your resources



When the CLI is running as part of an integrated environment, such as Github or Gitlab, the output will be displayed with those platforms.
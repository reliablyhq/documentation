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

## Creating your own indicators

There are a couple of you'll need to know before you try to send an `indicator` to Reliably, and have that `indicator` trigger the required behaviour.

* An `indicator` must match the `indicatorSelector` of an `objective` in order for calculation and behaviour be triggered. This is done by having the `labels` of the `indicator` match the fields in the `indicatorSelector` of the `objective`.
* An `indicator` must have a valid time window. Normally this window is defined by an `objective`, but that is not a true requirement.
* the `percent` value must be a number between 0 and 100.

### Matching Indicators to Objectives

Consider you have an objective that looks like this:

```yaml
apiVersion: reliably.com/v1
kind: objective
metadata:
    labels:
        name: my fulfilled orders objective
spec:
    target: 99.5
    window: 1month
    indicatorSelector:
        warehouse: uk1
        product_category: soft toys
```

An `indicator` that could be used in conjunction with this `objective` would look like:

```yaml
apiVersion: reliably.com/v1
kind: indicator
metadata:
    labels:
        warehouse: uk1
        product_category: soft toys
spec:
    from: 2021-01-01T00:00:00Z
    to: 2021-02-01T00:00:00Z
    percentage: 99.35
```

Since the `labels` of the `indicator` matches the properties of the `indicatorSelector` of the `objective` we are able to say that the `indicator` matches the `objective`, and we can go ahead and process the `result` the comparison (which in this case produces a delta of `-0.15%`).

## So how do I send the data?

You need to to `PUT` the `indicator` data to `https://api.reliably.com/entities/{org}/v1/indicators`, where `org` is the ID of your organisation. This value doesnt change very often at all, and can be retrieved using the cli by typing `reliably org show`.

You'll also need to send an auth token.

### Sending with `curl`

```bash
RELIABLY_DATA=`{
    "Metadata": {
        "Labels": {
            "warehouse": "uk1",
            "product_category": "soft toys"
        }
    },
    "From": "2021-01-01T00:00:00Z",
    "To": "2021-02-01T00:00:00Z",
    "Value": 99.35
}`
```
```bash
ENDPOINT = https://api.reliably.com/entities/v1/$RELIABLY_ORG/indicators
```
```bash
curl -x PUT -d $RELIABLY_DATA -H "Authorization: bearer $RELIABLY_TOKEN" $ENDPOINT
```

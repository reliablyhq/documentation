---
title: Objectives, Indicators, Results and Behaviour
excerpt: Learn how objectives relate to indicators, which create results, which drive behaviour.
categories: ["guides", "how-it-works"]
status: draft
type: overview
---

# Objectives, Indicators, Results and Behaviour

The Reliably ecosystem is constructed of these 4 elements. Using instances of each of these entities we are able to help you understand and react to the current state of your systems, as well as systems that you depend upon.

## Everything is an entity

Within reliably, every single you tell us is defined as an `entity`. An entity has identity, and it also has 0 or more relationships to other entities, but it also cannot be created directly - its more like a `base class` (but not by us, since we work with Golang :D). What this means is that it is possible for any information in Reliably to relate to any other information in reliably. This is incredibly valuable when invoking behaviour - I'll explin more about this later in this article.

## Lets talk about structure

Structure is everything! It defines everything about the types of thing we work with. Lets draw a picture of some of our most common entities.

**At Reliably we love the idea of declarative syntax, so every single type that you are likely to use can be defined as an entity in yaml, so thats what I'll use to diagram this structure**

### Metadata

We can't really go much farther without talking about *metadata*. At Reliably, metadata is used both to convey identity and purpose. The `labels` of metadata define a single identifiable entity by explaining what the entity does, who owns it, where it lives, etc.

Metadata is also where we define what this entity relates to. We dive deeper into relationships later, but its awesome!

### Objective

A Service Level *Objective* defines what good looks like for some aspect of your system.

```yaml
apiVersion: reliably.com/v1
kind: objective
metadata:
    labels: map<string, string>
    relatedTo: map<string, string>
spec:
    indicatorSelector: map<string, string>
    objectivePercent: <number>
    window: <time>
```

### Indicator

A Service Level *Indicator* shows how an aspect of the system has performed between 2 points in time.

```yaml
apiVersion: reliably.com/v1
kind: indicator
metadata:
    labels: map<string, string>
    relatedTo: map<string, string>
spec:
    from: <datetime>
    to: <datetime>
    percent: <number>
```

### Result

A *Result* shows the delta of objective performance vs. actual performance.

```yaml
apiVersion: reliably.com/v1
kind: objective_result
metadata:
    labels: map<string, string>
    relatedTo: map<string, string>
spec:
    indicatorSelector: map<string, string>
    objectivePercent: <number>
    actualPercent: <number>
    remainingPercent: <number>
```

## Simple behaviour

![simple behaviour flow](/static/images/simple-behaviour-flow.svg)

## Relationships

Entities at Reliably all have the ability to be related to other entities based on the labels that define those entites. As  however, entity relationships at Reliably are always calculated at runtime - we don't require certain things to relate to other things, we allow the user to define a relationship at any point, and then we use that relatiobship accordingly.
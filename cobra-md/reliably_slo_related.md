---
title: reliably slo related
excerpt: Documentation for the doc/cobra-md/reliably_slo_related.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo related

fetches a node graph of relationships based on manifest objectives

### Synopsis

By defining the metadata.relatedTo keyword, arbitrary relationships
between 2 or more objectives/entities can be described. 

The [related] command uses the defined relationships to generate a 
Node Graph visualisation of the relationships defined in the local 
manifest and all entities within the organisation.

Passing the --raw/-r flag will return the raw JSON data used to draw
the graph. 

NOTE: the raw JSON data can also be retrieved by going to /data
when running the visualisation in a browser

```
reliably slo related [flags]
```

### Examples

```
open visualisation on a random port between 60000-61000
$ reliably slo related

open visualisation app on port 8085
$ reliably slo related -m reliably.yaml --port 8085

return raw JSON blob of visualisation data
$ reliably slo related --raw

open visualisation app on random port, only showing nodes with labels matching the given filters
$ reliably slo related --filter 'key=value' --filter 'key=value' -m reliably.yaml
```

### Options

```
  -f, --filters stringArray   <key=value> labels to filter relationship graph nodes
  -h, --help                  help for related
  -m, --manifest string       the location of the manifest file (default "reliably.yaml")
  -p, --port string           the port to serve the graph visualisation on. A random port [60000-61000] is used if no port is profided
  -r, --raw                   prints raw json graph data
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


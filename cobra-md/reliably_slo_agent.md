---
title: reliably slo agent
excerpt: Documentation for the doc/cobra-md/reliably_slo_agent.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo agent

runs in agent mode sending SLIs to Reliably

### Synopsis

Runs the CLI in SLO agent mode. This mode utilises data defined
in the slo manifest to retrieve metrics and generate indicators.

The indicators are sent to reliably.

```
reliably slo agent [flags]
```

### Examples

```
$ reliably slo agent -m reliably.yaml -i 300
$ reliably slo agent --interval 600
```

### Options

```
  -h, --help              help for agent
  -i, --interval int      interval indicators are pushed at in seconds (default 300)
  -m, --manifest string   the location of the manifest file (default "reliably.yaml")
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


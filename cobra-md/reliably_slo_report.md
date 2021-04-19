---
title: reliably slo report
excerpt: Documentation for the doc/cobra-md/reliably_slo_report.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo report

Report my slo metrics

```
reliably slo report [flags]
```

### Options

```
  -f, --format string     specify the report format. Allowed Values: [json, simple, tabbed] (default "tabbed")
  -h, --help              help for report
  -m, --manifest string   the location of the manifest file (default "reliably.yaml")
  -o, --output string     where the report should be written to
  -w, --watch             continuously watch for changes in report output
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


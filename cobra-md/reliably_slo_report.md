---
title: reliably slo report
excerpt: Documentation for the doc/cobra-md/reliably_slo_report.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo report

Report my slo metrics

### Synopsis

Generates a report of your SLOs.

It is also possible to generate the report to different files &
formats at once, with using '--format' and '--output' flags with
comma-separated list as values.

```
reliably slo report [flags]
```

### Examples

```
  $ reliably slo report
  $ reliably slo report -f text
  $ reliably slo report -f markdown -o report.md
  $ reliably slo report -f yaml,json -o o.yaml,o.json
  $ reliably slo report -t slo-report.tmpl
  $ reliably slo report -t slo-report.tmpl -o slo-report.txt
```

### Options

```
  -f, --format string     specify the report format. Allowed Values: [json yaml text table markdown template] (default "table")
  -h, --help              help for report
  -m, --manifest string   the location of the manifest file (default "reliably.yaml")
  -o, --output string     where the report should be written to
      --service string    the name of the service
  -t, --template string   the name of the template to use for the report output
  -w, --watch             continuously watch for changes in report output
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


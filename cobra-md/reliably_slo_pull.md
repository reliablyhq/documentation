---
title: reliably slo pull
excerpt: Documentation for the doc/cobra-md/reliably_slo_pull.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo pull

pull/download SLO manifest from reliably

### Synopsis

Pull Manifest from reliably API

A copy of the current manifest is returned. By default the entire
manifest is retrieved. However, you can specify specific services using
the flags, "--service/-s"

```
reliably slo pull [flags]
```

### Options

```
  -h, --help             help for pull
  -o, --output string    output path manifest file will be stored (default "reliably.yaml")
  -s, --service string   the name of the specific service you want to pull
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


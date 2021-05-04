---
title: reliably slo edit
excerpt: Documentation for the doc/cobra-md/reliably_slo_edit.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo edit

Edit slo manifest file on server

### Synopsis

The edit command pulls a copy of the organization service manifest
and opens the default text editor. Once the file is saved and the
editor is closed. The resulting file is applied to the organization

NOTE: This feature only supports terminal based text editors

```
reliably slo edit [flags]
```

### Options

```
  -e, --editor string   path to text editor binary/app
  -h, --help            help for edit
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


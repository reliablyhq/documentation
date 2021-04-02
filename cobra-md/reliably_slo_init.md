---
title: reliably slo init
excerpt: Documentation for the doc/cobra-md/reliably_slo_init.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably slo init

initialise the slo portion of the manifest

### Synopsis

Initialise the reliably manifest.

The manifest describes the operational contraints of the application,
as well as some metadata about the app that allows users to reach out
and communicate with the maintainer.

```
reliably slo init [flags]
```

### Examples

```
$ reliably init:
  this method interactively creates a manifest file, asking you questions
  on the command line and adding your answers to the manifest file.

$ realibly init -f <path>:
  this method works the same as reliably init, but allows you to specify
  the location of the file. This is useful if you use a multi-repo approach
  to source control.
```

### Options

```
  -h, --help              help for init
  -m, --manifest string   the location of the manifest file (default "reliably.yaml")
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably slo](/docs/reference/cli/reliably-slo/)	 - service level objective commands


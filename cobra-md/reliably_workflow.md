---
title: reliably workflow
excerpt: Documentation for the doc/cobra-md/reliably_workflow.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably workflow

Setup your Reliably workflow

### Synopsis

Setup the Reliably workflow for your CI/CD platform.

It runs in an interactive mode by default.

```
reliably workflow [flags]
```

### Examples

```
# Setup your workflow
$ reliably workflow

# Run in non-interactive mode, by specifying the platform as argument
$ reliably workflow --platform=github

```

### Options

```
  -h, --help              help for workflow
  -p, --platform string   Specify the CI/CD platform: [github gitlab circleci]
      --stdout            Generate the workflow to standard output rather than file
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably](/docs/reference/cli/reliably/)	 - Reliably CLI


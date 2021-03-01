---
title: reliably discover
excerpt: Documentation for the doc/cobra-md/reliably_discover.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably discover

Check for Reliably Suggestions

### Synopsis

Check your manifests for Reliably Suggestions.

Manifest(s) can be provided in several ways:
- read from standard input, with dash '-' as argument
- path to a single manifest file
- path to a folder that will be scanned recursively for manifests files

By default, the discover command, run without arguments, is scanning
manifests file from the current working directory.

```
reliably discover [path] [flags]
```

### Examples

```
# Discover with a single file:
$ reliably discover manifest.yaml

# Discover with a folder:
$ reliably discover
$ reliably discover .
$ reliably discover ./manifests

# Discover with reading manifest from stdin:
$ cat manifest.yaml | reliably discover -

# Discover with custom format & output to local file
$ reliably discover --format json --output report.json
```

### Options

```
  -f, --format string        Specify the output format: [simple json yaml sarif codeclimate]
  -h, --help                 help for discover
  -k, --kubeconfig string    Specifies the path and file to use for kubeconfig for live discovery (default "/home/runner/.kube/config")
  -c, --kubecontext string   Specifies the Kubernetes context to evaluate when scanning live cluster
  -l, --level string         Display suggestions only for level and higher
      --live                 Look for weaknesses in a live Kubernetes cluster
  -n, --namespace string     The namespace to use when using a live cluster
  -o, --output string        Write results to a file instead of standard output
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably](/docs/reference/cli/reliably/)	 - Reliably CLI


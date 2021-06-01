---
title: reliably update
excerpt: Documentation for the doc/cobra-md/reliably_update.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably update

Updates Reliably CLI

### Synopsis

Ensure the latest version of Reliably CLI is installed.

The command will indicate the current and latest versions, and asks for
confirmation before proceeding.

By default, this command will update the CLI to the latest version.
This can be configured by using the --version flag to choose a specific version
to update to. This version may also be a version older than the one that is
currently installed, thus allowing you to downgrade.

If you run this command without the --version flag and you already have the
latest version installed, no update will be performed.

```
reliably update [flags]
```

### Examples

```
To update to the latest version:
  $ reliably update

To update to version 1.2.3
  $ reliably update --version 1.2.3
```

### Options

```
  -h, --help             help for update
      --version string   Update to a specific version
  -y, --yes              Don't ask for update confirmation
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably](/docs/reference/cli/reliably/)	 - Reliably CLI


---
title: reliably auth logout
excerpt: Documentation for the doc/cobra-md/reliably_auth_logout.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably auth logout

Log out from Reliably

### Synopsis

Remove authentication for Reliably.

This command removes the authentication configuration.

```
reliably auth logout [flags]
```

### Options

```
  -h, --help              help for logout
      --hostname string   The hostname of Reliably to log out of
  -y, --yes               Don't ask for logout confirmation
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably auth](/docs/reference/cli/reliably-auth/)	 - Login, logout, and verify your authentication


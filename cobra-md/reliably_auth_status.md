---
title: reliably auth status
excerpt: Documentation for the reliably_auth_status.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably auth status

View authentication status

### Synopsis

Verifies and displays information about your authentication to Reliably.

This command will test your authentication token to ensure
it's still valid and report on any issue.

```
reliably auth status [flags]
```

### Options

```
  -h, --help              help for status
      --hostname string   Check a specific hostname's auth status
  -t, --show-token        Display the auth token
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably auth](/docs/reference/cli/reliably-auth/)	 - Login, logout, and verify your authentication


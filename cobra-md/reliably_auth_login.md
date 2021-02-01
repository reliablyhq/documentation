---
title: reliably auth login
excerpt: Documentation for the cobra-md/reliably_auth_login.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably auth login

Authenticate with Reliably

### Synopsis

Authenticate with Reliably.

The default authentication mode is interactive and asking for a token.

Alternatively, pass in a token on standard input by using %[1]s--with-token%[1]s.

```
reliably auth login [flags]
```

### Examples

```
# start interactive authentication setup
$ reliably auth login

# authenticate by reading the token from a file
$ reliably auth login --with-token < my-access-token.txt
```

### Options

```
  -h, --help              help for login
      --hostname string   The hostname of Reliably to authenticate with
      --with-token        Read token from standard input
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably auth](/docs/reference/cli/reliably-auth/)	 - Login, logout, and verify your authentication


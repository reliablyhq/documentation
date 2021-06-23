---
title: reliably org remove-user
excerpt: Documentation for the doc/cobra-md/reliably_org_remove-user.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably org remove-user

remove a user from the current organization

### Synopsis

Remove a user from an existing organization.

By default, the user is removed from the current organization.
It is possible to remove a memnber of a specific organization,
provided with the `--org` flag.

Only the owner of the organization is able to manages users.

```
reliably org remove-user [<username>] [flags]
```

### Examples

```
# remove a user from the current organization
$ reliably org remove-user <someone-user-name>

# remove a user from a specific organization
$ reliably org remove-user <someone-user-name> --org <my-other-org>
```

### Options

```
  -h, --help         help for remove-user
  -o, --org string   specify the organization to which add the user
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably org](/docs/reference/cli/reliably-org/)	 - Manage your organizations


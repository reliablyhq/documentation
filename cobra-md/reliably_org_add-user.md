---
title: reliably org add-user
excerpt: Documentation for the doc/cobra-md/reliably_org_add-user.md command in the Reliably CLI
categories: ["reference", "cli"]
status: published
type: doc
---
## reliably org add-user

add a user to the current organization

### Synopsis

Add a user as a member of an existing organization.

By default, the user is added to the current organization.
It is possible to add a user to a specific organization,
provided with the `--org` flag.

Only the owner of the organization is able to manages users.

```
reliably org add-user <username> [flags]
```

### Examples

```
# add a user to the current organization
$ reliably org add-user <someone-user-name>

# add a user to a specific organization
$ reliably org add-user <someone-user-name> --org <my-other-org>
```

### Options

```
  -h, --help         help for add-user
  -o, --org string   specify the organization to which add the user
```

### Options inherited from parent commands

```
      --no-color   Disable color output
  -v, --verbose    verbose output
```

### SEE ALSO

* [reliably org](/docs/reference/cli/reliably-org/)	 - Manage your organizations


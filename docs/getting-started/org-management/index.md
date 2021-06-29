---
title: Manage your organizations
excerpt: Create organizations and invite other users to collaborate with you.
categories: ["getting-started"]
status: published
type: doc
---
# Organization management

In order to work collaborately with Reliably, you can have several users
contributing to and interacting with a shared organization.

While every user has its own default organization, it is possible to create
new organizations, as well as allowing and restricting the organization access
to some users.

## Create a new organization

You can create as many organization as you like by running `reliably org create`.

```reliably
<span class="token dollar"></span>reliably org create
<span class="token green">?</span> <span class="token bold">What is the name of the organization?</span> <span class="token blue">[? for help]</span>
```

:::note Note
Name may only contain alphanumeric characters or single hyphens,
and cannot begin or end with a hyphen.
:::


To create in non-interactive mode, you can pass the organization name as
command line argument: `reliably org create <org-name>`.

```reliably
<span class="token dollar"></span>reliably org create other-org
<span class="token green">✓</span> organization 'other-org' created
```


## List your organizations

You can list all your organizations, for which you are either owner or member:
`reliably org list`

```reliably
<span class="token dollar"></span>reliably org list
   Name        ID
 * <span class="token bold">my-org</span>     2eabeb41-...  <span class="token yellow">owner</span>
   <span class="token bold">test</span>       d69982e0-...  <span class="token greyed">member</span>
   <span class="token bold">other-org</span>  a2e7691a-...  <span class="token yellow">owner</span>
```

:::tip Tip
  The star at begin of the line indicates the current active organization.
:::


## Delete an organization

You can delete your own organizations by running `reliably org delete`


```reliably
<span class="token dollar"></span>reliably org delete
<span class="token green">?</span> <span class="token bold">What is the name of the organization?</span> <span class="token blue">[Use arrows to move, type to filter]</span>
<span class="token blue">&#62; my-org</span>
<span class="token">&#62; other-org</span>
```

:::note Note
You can only delete organizations you own.
You cannot delete an organization of which you are just a member.
:::

To delete in non-interactive mode, you can pass the organization name as
command line argument: `reliably org delete <org-name>`

```reliably
<span class="token dollar"></span>reliably org delete other-org
<span class="token green">✓</span> organization 'other-org' deleted
```

## Set your current active organization

You can change the current active organization, which is saved into the
configuration file, by running `reliably org set`

```reliably
<span class="token dollar"></span>reliably org set
<span class="token green">?</span> <span class="token bold">Select the organization to set as current</span> <span class="token blue">[Use arrows to move, type to filter]</span>
<span class="token blue">&#62; my-org</span>
<span class="token">&#62; test</span>
<span class="token">&#62; other-org</span>
```

To set an organization as default, in non-interactive mode, you can pass
the organization name as command line argument: `reliably org set <org-name>`

```reliably
<span class="token dollar"></span>reliably org set other-org
<span class="token green">✓</span> Config file has been updated with organization 'other-org' as default
```

## View your current organization

To see the active organization and its details, run `reliably org current`.

```reliably
<span class="token dollar"></span>reliably org current
Current organization:
   Name:   <span class="token bold">other-org</span>
   ID:     a2e7691a-...
```

## Add members to an organization

You can add users as member of yours organization, so that they can start
working collaborately within your organization, by running
`reliably org add-member <username>`

:::note Note
A user must give you its username in order to be added to one of your organizations.
:::

:::tip Tip
  To retrieve its username, a user must run `reliably auth status`,
  once logged in.
:::

```reliably
<span class="token dollar"></span>reliably org add-user reliably-ci
<span class="token green">✓</span> user 'reliably-ci' added to organization 'other-org'
```

By default the user is added to the current active organization. To add a
user to a specific organization different from the current one, you can use
the `--org` flag.

```reliably
<span class="token dollar"></span>reliably org add-user reliably-ci --org other-org
<span class="token green">✓</span> user 'reliably-ci' added to organization 'other-org'
```

## Remove members from an organization

You can remove any user from your organization, by running `reliably org remove-user <username>`.

Once removed, the user will no longer have access to the organization's space nor data.

:::note Note
You need to know the Reliably username of the user to remove them.
:::

```reliably
<span class="token dollar"></span>reliably org remove-user reliably-ci
<span class="token green">✓</span> user 'reliably-ci' remove from organization 'other-org'
```

By default the user is removed from the current active organization. To remove a
user from a specific organization different from current one, you can use
the `--org` flag.

```reliably
<span class="token dollar"></span>reliably org remove-user reliably-ci --org other-org
<span class="token green">✓</span> user 'reliably-ci' remove from organization 'other-org'
```

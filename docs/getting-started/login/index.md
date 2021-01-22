---
title: Loging in to Reliably
excerpt: Lorem Ipsum is simply dummy text.
categories: ["getting-started"]
status: published
type: doc
---
# Login to Reliably

To use Reliably, you will need to authenticate the Reliably CLI
with [Reliably.com](https://reliably.com/).

!!! info
    You can authenticate with third party OAuth providers. Reliably
    currently supports GitHub and GitLab.

    Reliably requires only access to the minimal set of information to create
    your profile. Usually your username and email address.


## Login

You can login with the `reliably auth login` command, when prompted for the
type of login select a provider, with the arrow keys and select enter:

```console
$ reliably auth login
Logging into reliably.com
? How would you like to authenticate?  [Use arrows to move, type to filter]
> Login with GitHub
  Login with GitLab
  Paste an authentication token
```

An authentication page will be launched in your browser, for instance with
the GitHub provider:

![GitHub Login](./images/github_login.png)

When you accept the challenge, the browser will show a message to close its
window and the CLI will acknowledge you are now logged in.

```console
✓ Logged in as user
```

You have successfully logged in to Reliably and are now ready to use the
`reliably` commands.

## Logout

You can logout with the `reliably auth logout` command:

```console
$ reliably auth logout
? Are you sure you want to log out of reliably.dev account 'user'? Yes
Logged out of reliably.com account 'user'
```

Your client session is now logged out from Reliably and you can no further
pass commands to Reliably.


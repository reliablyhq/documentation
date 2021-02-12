---
title: Generate your Reliably CI/CD workflow
excerpt: Lorem Ipsum is simply dummy text.
categories: ["getting-started"]
status: published
type: doc
---
# Generate your CI/CD workflow

Reliably can be used as part of your CI/CD workflow.
It supports usage on different CI/CD platforms.
The CLI has a `workflow` command to automatically generates the workflow file
for you in your current repository.

```console
$ reliably workflow
```

You will then be prompted to choose one of the targeted platforms,
for which we can generate a default workflow template.

```console
? Select your CI/CD platform to create the Reliably workflow  [Use arrows to move, type to filter]
> GitHub
  GitLab
  CircleCI
```

The workflow file will be written at the default location required
by the CI/CD platform.

```console
Your workflow has been generated to .github/workflows/reliably.yaml

You can now add and commit the workflow to your repository:
$ git add .github/workflows/reliably.yaml
$ git commit -m "Add Reliably workflow"
```

## Specify the platform

If you already know the platform you are targetting, and don't want to
enter the interactive mode, you can use the `--platform` flag:

```console
$ reliably workflow --platform github
```

The supported platforms values are:
* github
* gitlab
* circleci

## Generate to standard output

If you don't want us to generate the workflow file in your current repository,
we can display it on the standard output, by using the `--stdout` flag.

```console
$ reliably workflow --platform github --stdout
name: Reliably workflow
on: push
...
```

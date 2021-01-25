---
title: Run Reliably CLI as you code
excerpt: Lorem Ipsum is simply dummy text.
categories: ["guides", "run-as-you-code"]
status: published
type: doc
---
# Run Reliably CLI as you code

Future versions of Relaibly will be integrated with [Visual Studio Code]
[vsCode], but for the time being the easiest way to run relaibly as you code
is to use the Reliably CLI.

[vsCode]: https://code.visualstudio.com/

## The Reliably CLI

The Reliably CLI is a command-line tool for working with Reliably. The Reliably
 CLI is most commonly used as part of a [GitHub][github-get-started] or [GitLab][gitlab-get-started] CI/CD workflow, but you can also install and use the CLI
 on its own or as part of a Docker container.

[github-get-started]: /docs/guides/ci-pipeline/github-action/
[gitlab-get-started]: /docs/guides/ci-pipeline/gitlab-pipeline/

### Installing the Reliably CLI

Installation for the CLi is covered in the [Getting Started][cli-install]
section.

Once you have installed the Reliably CLI you will be able to execute the
`reliably` command. The full usage details of the reliably CLI can be found in
the [reference section][cli-reference] for the CLI.

[cli-install]: /docs/getting-started/install/
[cli-reference]: /docs/reference/cli/

## Using the Reliably CLI Docker image

If you prefer, you can run the CLI with our [docker image](https://github.com/orgs/reliablyhq/packages/container/package/cli%2Fcli)

```
$ docker pull ghcr.io/reliablyhq/cli/cli
$ docker run --rm ghcr.io/reliablyhq/cli/cli
```

---
title: How it works
excerpt: Lorem Ipsum is simply dummy text.
categories: ["reference", "how-it-works"]
status: published
type: overview
---
# How Reliably works

Reliably aims to seamlessly work alongside your existing DevOps toolchain, discovering and surfacing suggestions where you might be able to avoid reliability problems.

To do this, Reliably integrates with your existing GitHub and GitLab workflows through various tools and services.

[services]: ./services

## The Reliably Workflow

You interact with Reliably through commits to your own repositories on GitHub and GitLab. When a commit triggers a workflow or pipeline on either of those platforms, the [Reliably Services][services] are asked if there is any advice that should be applied.

Finally Reliably returns the [Reliably Advice][advice] to be applied and then surfaces any [Reliably Suggestions][suggestions] you should be aware of.

[advice]: ./advice
[suggestions]: ./suggestions

## How Reliably works with GitHub

Reliably integrates with GitHub best as its own [GitHub Action](https://github.com/features/actions) that you can add to your own GitHub CI/CD workflows.

You use the Reliably GitHub Action by including it in any of your GitHub workflow
YAML files:

```yaml
name: Example workflow using Reliably
on: push
jobs:
  reliably:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout source code'
        uses: actions/checkout@v2
      - name: Get Reliably suggestions
        uses: reliablyhq/gh-action@v1
```

The code above adds a new job called `reliably` that checks out the code from your repository and then uses the [Reliably GitHub Action][gh-action] to obtain any [Reliably Advice][advice] and [Suggestions][suggestions] based on the code in the checked out repository.

[More detail on how you can customize how the Reliably GitHub Action works...][(/guides/ci-pipeline/github-action)

## How Reliably works with GitLab

Reliably integrates with GitLab by being added to your own [GitLab CI pipeline configuration](https://docs.gitlab.com/ee/ci/yaml/).

You add Reliably to your GitLab CI pipeline with an entry in your repository's`.gitlab-ci.yml` `code_quality` section:


```yaml
variables:
  SOURCE_CODE: "manifests"

stages:
  - test

include:
  - template: Code-Quality.gitlab-ci.yml

code_quality:
  image:
    name: ghcr.io/reliablyhq/cli/cli:latest
    entrypoint: ["/bin/sh", "-c"]

  script:
    - reliably discover $SOURCE_CODE --format codeclimate --output gl-code-quality-report.json
  stage: test
  allow_failure: true
  artifacts:
    when: always
    expose_as: 'Code Quality Report'
    paths: [gl-code-quality-report.json]
  rules:
    - if: $CI_COMMIT_BRANCH
      changes:
        - "manifests/*.{yaml}"
```

In the code above, the `Code-Quality.gitlab-ci.yml` template needs to be included to create a `code_quality` job in your pipeline that will scan your source
code for code quality issues.


This `code_quality:` job is triggered by any change to a `.yaml` in the
`manifests` folder in the repository. This will trigger GitLab Pipeline
and the `reliably discover` command in the script. The `reliably discover` step
retrieves any appropriate [Reliably Advice](./advice) from the
[Reliably Services](./services), and produces [Reliably Suggestions](/suggestions)
on the Pipeline's output when it has completed.

[More detail on how you can customize how the Reliably GitLab CI/CD pipeline works...](/guides/ci-pipeline/gitlab-pipeline)

## Using the Reliably CLI locally

You can use Reliably locally from the command line using the Reliably CLI:

```bash
$ reliably
Reliability toolbox for developers from the command line.

Usage:
  reliably [command]

Available Commands:
  discover    Check for Reliably Advice and Suggestions

Flags:
      --config string   config file (default is $HOME/.reliably/config.yaml)
  -h, --help            help for reliably
  -v, --verbose         verbose output
      --version         version for reliably

Use "reliably [command] --help" for more information about a command.
```
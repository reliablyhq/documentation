---
title: Run as part of your CI pipeline
excerpt: Lorem Ipsum is simply dummy text.
categories: ["getting-started"]
status: published
type: doc
---
# Execute Reliably during your CI/CD pipeline

Reliably follows the principles that the sooner you learn about reliability
potential risks, the better you can address them. For this reason, it makes
sense to run Reliably during your CI pipelines and get notified of potential
issues as soon as possible.

Let's now add Reliably to a repository on GitHub.

[demo-repo]: https://github.com/reliablyhq/action-demo
[gh-action]: ../../tools/github/action.md

## Add a new workflow to your repository

In the repository that you want Reliably to work with, add a new workflow in
`.github/workflows` called `reliably.yaml` with the following content:

```yaml
name: Reliably Suggestions

on:
  push:
jobs:
  reliably:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout source code'
        uses: actions/checkout@v2
      - name: 'Run Reliably'
        uses: reliablyhq/gh-action@v1
        with:
          dir: ./manifests
```

This workflow describes that GitHub should:

1. Listen for any pushes
3. Run a new job using the `ubuntu-latest` image.
4. Checkout the source code using GitHub's own `actions/checkout@v2` action.
5. Run Reliably's GitHub Action against the local manifests directory of the
   repository.

You should now have the following in your repository (along with any other
files you already had!):

```
.github
└── workflows
    └── reliably.yaml
```

Make sure that you new workflow has been committed and pushed to GitHub. One
you've pushed the changes, navigate to the `Actions` tab on your repository on
GitHub and you should see that your new workflow has been added:

<img src="/images/gh-reliably-workflow-added.png" alt="New Reliably GitHub workflow added"/>

## Enable Code Scanning Alerts

<a href="https://docs.github.com/en/free-pro-team@latest/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors" target="_blank" rel="noopener noreferer">Code Scanning</a> is a GitHub feature which groups potential vulnerabilities in the
Security tab of your repository. To enable Code Scanning Alerts, you need to:

* tell the action to continue on error
* output the errors to a SARIF report file
* upload this SARIF report to GitHub Code Scanning

An example YAML workflow file that applies this would include:

```yaml
name: Reliably Suggestions with Code scanning report

on:
  push:
jobs:
  reliably:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout source code'
        uses: actions/checkout@v2
      - name: 'Run Reliably'
        uses: reliablyhq/gh-action@main
        continue-on-error: false
        with:
          format: "sarif"
          output: "reliably.sarif"
      - name: Upload result to GitHub Code Scanning
        uses: github/codeql-action/upload-sarif@v1
        with:
          sarif_file: reliably.sarif
```

## Trigger your new Reliably workflow

Now you can trigger this workflow by committing and pushing a `manifest.yaml`
file into the root of your repository.
Do that now with a `manifest.yaml` file that contains the following:

```yaml
---
kind: Deployment
apiVersion: apps/v1
metadata:
  name: myapp
spec:
  template:
    spec:
      containers:
      - image: nginx
        name: myapp
        ports:
        - containerPort: 8000
          protocol: TCP
        imagePullPolicy: Always
```

This `manifests/deployment.yaml` file has been specifically written to
trigger some of
Reliably's [Suggestions](/howitworks/suggestions). You should now have the
following in your repository:

```
manifests
└── deployment.yaml
.github
└── workflows
    └── reliably.yaml
```

Again, make sure you've commited and pushed your changes to GitHub on the `main`
branch. When you have pushed your changes, head on over again to the `Actions`
tab on your repository in GitHub and you should see that an action has been
triggered, or even completed:

<img src="/images/reliably-gh-action-triggered.png" alt="Reliably GitHub workflow triggered"/>

Click on the result for the one execution of the workflow and you will see that
it is the `Reliably` action that has failed the workflow:

<img src="/images/failed-gh-workflow.png" alt="Reliably GitHub workflow triggered"/>

If you enabled Code Scanning Alerts and Reliably surfaces some
[Reliably Suggestions](/howitworks/suggestions), then the Security tab in your
repository will now display the number of suggestions.

Clicking on the `Security` tab will display the Security page for your
repository. The lefthand menu will allow you to display the Code scanning
alerts.

<img src="/images/security-page.png" alt="The lefthand menu allows you to display your code scanning alerts"/>

All your Code Scanning alerts will be listed there. Here, we have six alerts
prompted by Reliably Suggestions.

<img src="/images/code-scanning-alerts-list.png" alt="A list of open code scanning alerts"/>

Each alert is displayed in the context in which it was triggered. In this
example, the `manifests/deployment.yaml` file. The Reliably Suggestion is
also displayed.

<img src="/images/alert-detail.png" alt="Screenshot of a Code Scanning Alert details"/>

!!! note
    Currently the highlighted line is the beginning of the resource, but it's
    intended to soon be the precise line of the suggestion in the source code.

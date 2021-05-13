---
title: Jenkins Build
excerpt: Learn how to run the Reliably CLI as part of your CI/CD pipeline with Jenkins.
categories: ["guides", "ci-pipeline"]
status: published
type: doc
---
# Add Reliably to your Jenkins Build

Adding Reliably to your Jenkins build is as simple as adding a job to
[Jenkins][jenkins-home].

## Prerequisites

To run Reliably as a Jenkins Job you will need acess to a
[Jenkins][jenkins-home] server.

[jenkins-home]: https://www.jenkins.io/
[reliably-home]: https://reliably.com/

* [Jenkins installation instructions][jenkins-install]

[jenkins-install]: https://www.jenkins.io/doc/book/installing/

## Create a Reliably Project in Jenkins

Navigate to your Jenkins server home page:

![Jenkins Homepage](./images/jenkins-homepage.png)

:::note Note
  The above screenshot is for a newly installed Jenkins server. A server that
  has previously run jobs would show the jobs dashboard on the Jenkins home
  page.
:::

Selected *New Item* from the menu on the left of the page.

![Jenkins New Build](./images/jenkins-new-build.png)

Enter an item name (e.g. Run Reliably). Select the *Freestyle project* option, then select OK.

### Setup Reliably access token

The CLI must be run with a valid access token to make authenticated calls
to Reliably.

As a pre-requesite, the `RELIABLY_TOKEN` must be defined as an environment variable.

:::note Note
  It requires the [Environment Injector](https://plugins.jenkins.io/envinject/) plugin to be installed.
:::

In the new job display that appears next select the Build Environment tab, then select *Inject passwords to the build as environment variables*,
and click *Add* under *Job passwords*. Type `RELIABLY_TOKEN` in the *name* field and paste your access token in the *password* field.

You can see how to [retrieve your access token](/docs/getting-started/login/#retrieve-your-access-token/).

![Inject Reliably token as env var](./images/jenkins-inject-password.png)

### Add Reliably as a Build step

In the new job display that appears next select the Build tab, then select *Execute Shell* from the *Add Build Step* dropdown menu

In the command window enter these commands:

```console
curl -s -L https://github.com/reliablyhq/cli/releases/latest/download/reliably-linux-amd64 -o reliably
chmod u+x reliably
```

```console
curl -s -O https://raw.githubusercontent.com/reliablyhq/action-demo/main/manifest.yaml
./reliably scan kubernetes manifest.yaml
```

What does this do?

* The Reliably latest release is downloaded from Github.
* The binary is given execute permissions.
* A manifest file is downloaded from a Github repository.
* Finally, the `reliably scan kubernetes` command is run, which will scan the manifest
  file for any issues.

The scan command will discover and surface suggestions where you might be
able to avoid reliability problems.

![Jenkins Execute Shell](./images/jenkins-execute-shell.png)

Select *Save*

In the menu for the project:

* Select the *Build Now* option
* Select the resulting *Job* that appears at the bottom of the menu.
* Select the *Console Output* for the *Job*, you should see output similar to:

![Jenkins Console Output](./images/jenkins-console-output.png)

Congratulations you have successfully run Reliably as part of a Jenkins build!
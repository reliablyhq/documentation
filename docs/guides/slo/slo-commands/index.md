---
title: SLO Commands
excerpt: The Reliably CLI includes a number of commands that allow you to define and measure your SLOs.
categories: ["guides", "slo", "commands"]
status: published
type: doc
---
# Service Level Objectives Commands

The Reliably CLI contains a full set of commands to allow you to define and report on you Service Levels Objectives.

The full set of commands are:

* init  - this initialises an SLO, which can be run either interactively or a manifest file can be provided.
* edit - edit the slo file from the server
* apply - this allows you to apply a locally held manifest to your current
 organisation on the Reliably SAAS.
* pull - this allows you to pull/download a manifest from the Reliably SAAS
* report - once you have created /dowmnloaded a manifest you can run a report that will provide you with an overal status of your SLOs



## Using SLOs on the Reliably SAAS

If you have Releiably SLOs defined as code artefacts in local files you can
 manage them with the Reliably SAAS. This allows Releialby to build historical
  metrics of your SLOs and their reports.  You will also be able to see trend analysis of your SLOs. To manage your SLOs with the Reliably SAAS you can use the `reliably slo apply` command and the `reliably slo pull` command

### Initialisation

As a starting point for managing your SLOs you would use  `slo init` command. SLOs with Reliably are expressed as code artifacts. The use of the `reliably slo init`command is covered in the [Define SLOs] guide. Once an SLO is succesfully defined it is uploaded to the Reliably SAAS.

[Define SLOs]: /docs/guides/slo/define-slos/

### Pull

The `slo pull` command allows you to pull the current services from the Reliably SAAS to a local file. The name of the local file will default to `relaibly.yaml` in your current working directory, or you can specify a file name with the (-o/--output) flag. By default the output will list all the services you have defined, but you can name a specific service for the request with the (-s/--service) flag. Onse you have pulled the file locally you can edit the file to update your Services, SLOs and SLI details. You can then use the 'slo report' command to see the report output from the edited version of hte file. You can also use the Apply command to upload it to the Reliably SAAS.

### Edit

The `slo edit` command will pull the current manifest from the server and open it in your default editor (or it will use the editor specified by the -e / --editor flag). When you make changes to the manifest in the editor, they are saved back to the manifest on the Reliably SAAS.

### Apply

IF you have  local file that you want to upload to the Reliably SAAS, you can use
the `reliably slo apply`. This will upload your file to the SAAS and use it to replace any existing organisational manifest. By default the `apply` will use the `reliably.yaml` file in your current workng directory. Alternatively you can use the (-f/--file) flag to specify the path and file name for the mainfest to use.

### Report

When you have Initialised and Applied a manifest, when you run `slo report`, it will use the `reliably.yaml` file in your current working directory by default or the manifest specfied by the `-m,/ --manifest` flags. If there is no local report, then the `slo report` will use the current manifest stored on hte Reliably SAAS.The `slo report` is covered in detail in  the [Generate SLO Rports] guide.

[Generate SLO Rports]: /docs/guides/slo/slo-reports/

### Reference

Read the [Reliably CLI SLO](/docs/reference/cli/reliably-slo/) reference section for a complete list of SLO Command options.

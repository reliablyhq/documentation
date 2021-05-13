---
title: Generate SLO reports
excerpt: Use the Reliably CLI to generate Service Level Objective reports.
categories: ["guides", "slo"]
status: published
type: doc
---
import AsciiPlayer from '~/components/AsciiPlayer.vue'

# Generate Service Level Objectives reports

Now that you have [defined your SLOs](/docs/guides/slo/define-slos/), you can use the
Reliably CLI to query your resources for SLIs and generate SLO reports.

This is done with the `reliably slo report` command.

:::note
In order for the Reliably CLI to be able to query your service provider, you
will need to be authenticated.

* [Authenticating with AWS](#aws)
* [Authenticating with GCP](#google-cloud-platform)
:::

## Usage

```console
reliably slo report
```
<AsciiPlayer id="409053" />

The `reliably slo report` command will by default use the `reliably.yaml` file in your current directory.  You can specify an alternative manifest file with the `-m` flag. If there is no local manifest file specified Relaibly will use the current manifest for your organisation on the Relaibly server.

Once a manifest is identfied the Relaibly CLI will fetch data from your service providers, agregate the data if you have
several services defined as indicators for your SLO, and return error rates and latency numbers for the duration window specified in your manifest. The report will show the details of how you service is performing against those objectives.

### Specify YAML file

Reliably will look for a file named `reliably.yaml` in your  working directory.
You tell the CLI to use another file by specifying its path specified with the
`--manifest` or `-m` flag.

```console
reliably slo report --manifest path/to/file.yaml
```

## Output format

You can select between output formats with the `--format` or `-f` flag.

### Tabbed output

Tabbed output is the default format for SLO reports.

```console
reliably slo report --format tabbed
```

```reliably
<span class="token dollar"></span>reliably slo report --format tabbed
                                          <span class="token purple bold">Actual</span>   <span class="token purple bold">Target</span>  <span class="token purple bold">Delta</span>    <span class="token purple bold">Time Window</span>  
  Service #1: http-api                           
  <span class="token emoji">✅</span> 99% availability over 1 hour         <span class="token green bold">100.00%</span>  99%     1.00%    1 hour       
  <span class="token emoji">✅</span> 99.5% availability over 1 day        <span class="token green bold">100.00%</span>  99.5%   0.50%    1 day        
  <span class="token emoji">❌</span> 99% of requests under 300ms          <span class="token red bold">77.46%</span>   99%     -21.54%  1 day        
  <span class="token emoji">❌</span> 99.9% of requests under 1s           <span class="token red bold">98.59%</span>   99.9%   -1.31%   1 day        
                                                                           
  Service #2: products-api                       
  <span class="token emoji">✅</span> 99% availability over 1 day          <span class="token green bold">100.00%</span>  99%     1.00%    1 day        
  <span class="token emoji">✅</span> 99.5% of requests under 200ms        <span class="token green bold">100.00%</span>  99.5%   0.50%    1 day   
```

### Simple Output

The simple output will remove the tabs, and use glyphs instead of emojis for
your SLO status, and will not display SLO target and delta.

```console
reliably slo report --format simple
```

```reliably
<span class="token dollar"></span>reliably slo report --format simple
<span class="token yellow">Service #1: http-api</span>
<span class="token green">✓</span> 99% availability over 1 hour: 100.00% (last 1h0m0s) [objective: 99%, delta: 1.00%]
<span class="token green">✓</span> 99.5% availability over 1 day: 100.00% (last 1d) [objective: 99.5%, delta: 0.50%]
<span class="token red">✕</span> 99% of requests under 300ms: 77.46% (last 1d) [objective: 99%, delta: -21.54%]
<span class="token red">✕</span> 99.9% of requests under 1s: 98.59% (last 1d) [objective: 99.9%, delta: -1.31%]

<span class="token yellow">Service #2: products-api</span>
<span class="token green">✓</span> 99% availability over 1 day: 100.00% (last 1d) [objective: 99%, delta: 1.00%]
<span class="token green">✓</span> 99.5% of products API requests under 200ms: 100.00% (last 1d) [objective: 99.5%, delta: 0.50%]
```

If you want to disable the glyph coloring, you can use the `--no-color` global
flag.

```console
reliably slo report --format simple --no-color
```

```reliably
<span class="token dollar"></span>reliably slo report --format simple --no-color
Service #1: http-api
✓ 99% availability over 1 hour: 100.00% (last 1h0m0s) [objective: 99%, delta: 1.00%]
✓ 99.5% availability over 1 day: 100.00% (last 1d) [objective: 99.5%, delta: 0.50%]
✕ 99% of requests under 300ms: 77.46% (last 1d) [objective: 99%, delta: -21.54%]
✕ 99.9% of requests under 1s: 98.59% (last 1d) [objective: 99.9%, delta: -1.31%]

Service #2: products-api
✓ 99% availability over 1 day: 100.00% (last 1d) [objective: 99%, delta: 1.00%]
✓ 99.5% of products API requests under 200ms: 100.00% (last 1d) [objective: 99.5%, delta: 0.50%]
```

### JSON Output

You can generate a JSON-formatted SLO report for consumption in third-party
tools.

```console
reliably slo report --format json
```

### Markdown Output

You can generate a markdown-formatted SLO report.

```console
reliably slo report --format markdown
```

:::tip Tip
  You can use a tool like <a href="https://pandoc.org/" target="_blank" rel="noopener noreferer">Pandoc</a> to convert the output generated from Reliably
  into many other formats such as HTML and PDF. To <a href="https://www.geeksforgeeks.org/piping-in-unix-or-linux/" target="_blank" rel="noopener noreferer">pipe</a> the markdown output to pandoc:

  ```console
    $ reliably slo report --format markdown | pandoc
  ```

  The command above will by default generate HTML output.
:::

## Provider Authentication

For the CLI to be able to connect to your provider and fetch data, you will need
to be authenticated.

### AWS

Authentication with AWS is made through an `credentials` file in your
`$HOME/.aws` directory.

```
[default]
aws_access_key_id = <your access key>
aws_secret_access_key = <your secret access key>
```

<a href="https://aws.github.io/aws-sdk-go-v2/docs/configuring-sdk/#specifying-credentials/" target="_blank" rel="noopener noreferer">Read more in the AWS SDK docs.</a>

### Google Cloud Platform

You can authenticate be using the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. It is set to the file path of the JSON files that contains your service account key.

```console
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/my-key.json"
```

<a href="https://cloud.google.com/docs/authentication/getting-started" target="_blank" rel="noopener noreferer">Read more about authentication methods</a> in the Google Cloud documentation.

:::note
To fetch the required data, your service account will need a specific permission: "Monitoring Viewer"
:::

## Reference

Read the [Reliably CLI SLO Reports command](/docs/reference/cli/reliably-slo-report/) reference for a complete list of options.

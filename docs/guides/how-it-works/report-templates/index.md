---
title: Using ReportTemaplates
excerpt: How Reliably CLI creates reportsd from report tempates.
categories: ["guides", "how-it-works"]
status: published
type: doc
---

# How Reliably CLI works

## SLO Reports from Templates

The Reliably CLI supports SLO Reports from external templates. An SLO Report from a template can be generated with the command:

```bash
reliably slo report -t /path/to/template-file.tmpl
```

Where -t flag specifies a template filename or a path to a template file. The template file must exist and contain valid template syntax.

:::note Note
  If the path or the file does not exist, the Reliably CLI will indicate an Error:

  ```reliably
<span class="token red">Error:</span> Error opening template file: open no.tmpl: no such file or directory.
:::

The Reliably templates use the [Go template package](https://golang.org/pkg/text/template/) and the template syntax documented as part of the package docs.

The Reliably CLI provides a set of functions to enable users to populate reports with data from the Reliably CLI Report. All the [Report Functions] are documented below.

[Report Functions]: #functions-to-use-in-a-report

The types used in the Reliably CLI report are also documented. The [Reliably Report Data] types can also be used to populate reports.

[Reliably Report Data]: #about-report-data

## An Example Report Template

It's is probably easier to work through an example report in the first instance. The following report is a markdown report but in theory you can use the templates for any text-based output format.

```
# Reliably Simple SLO Report

Service Level Objectives identify what you should care about on your system. They are what good looks like for the users of your system. If an SLO is underperforming, it will be impacting your users in some way.

For more details of an SLO report, see the Reliably documentation on [How the Reliably CLI works]

[How the Reliably CLI works]:https://reliably.com/docs/guides/how-it-works/slo-reports/

{{ $report := .Rep }}

Report time: {{ dateTime $report.Timestamp }}
{{ $reps := .Lreps }}
{{ range $index, $service := $report.Services }}
## Service #{{ serviceNo $index}}: {{$service.Name}}

|  | Name                            | Current | Objective| Time Window | Type  | Trend |
|--|-------------------------------- | ------- | -------- |------------ |-------|-------|
{{ range $ind, $sl := $service.ServiceLevels -}}
|{{- svcLevelGetStatusIcon $sl -}}
{{- svcLevelGetName $sl -}}|
{{- svcLevelGetActualResult $sl}}|
{{- svcLevelGetObjective $sl }}|
{{- svcLevelGetTimeWindow $sl }}|
{{- svcLevelGetType $sl }}|
{{- svcLevelGetTrends $service.Name $sl $reps }}
{{ end }}

The Error Budget metrics are:

|  Type    | Name          |ErrorBudget(%)|Time Window|Downtime|Consumed|Remain
| -------- | --------------|--------------|-----------|--------|--------|--------|
{{ range $ind, $sl := $service.ServiceLevels -}}
|{{- svcLevelGetType $sl -}}|
{{- svcLevelGetName $sl}}|
{{- svcLevelGetTimeWindow $sl }}|
{{- errBudgetPercentage $sl }}|
{{- errBudgetAllowedDownTime $sl }}|
{{- errBudgetConsumed $sl }}|
{{- errBudgetRemain $sl }}|
{{ end }}


{{ end }}

<sub>Generating with: The Reliably CLI Version {{ reliablyVersion }}</sub>

````

The report template as mentioned above uses [Go template package](https://golang.org/pkg/text/template/) syntax. Here we will go through the report line by line.

### Report Template Explained

The first few lines are raw text that get included into the output as is, in this case this is markdown text.

:::note Note
When a report template is Executed it is passed a data object. The data object is reference in the report template to populate output report with data. In the case of the Reliably SLO report the data object passed is documented in [Report Data] section.
:::

[Report Data]: #about-report-data


The first line that uses the Go Template syntax is `{{ $report := .Rep }}`. This is assigning the .Rep subfield of a Reliably report to a variable `$report` for use elsewhere in the template.

The next line with content is going to include the time the report was generated:

```
Report time: {{ dateTime $report.Timestamp }}
```

Here the template will call one of the Reliably CLI functions `dateTime` and pass an input parameter from the report using `$report.Timestamp`. The report has a subfield of Timestamp, this timestamp is passed to the `dateTime` function.

`{{ $reps := .Lreps }}`

This line is assigning a subfield (`.Lreps`) of the Reliably Report to a variable `$reps` for use elsewhere in template.

`{{ range $index, $service := $report.Services }}`

This line is using some of the go templating syntax where it is using a range type loop and assigning each entry in the `Services` subfield of the Reliably Report to `$service`. It also sets an `$index` that can be used if required.

`## Service #{{ serviceNo $index}}: {{$service.Name}}`

The first entry with the range loop add's a header to the report using markdown syntax and it includes the `$index` variable. The name of the service from the `.Name` sub-field from the `$service` variable is also used. Both the `$index` & `$service` are asigned as part of the range call above.

The next section is using a markdown format table. The columns, column names and widths are setup with the `|` marker, this block of text is included in the output as is.

```
|  | Name                            | Current | Objective| Time Window | Type  | Trend |
|--|-------------------------------- | ------- | -------- |------------ |-------|-------|
```

Then there is another range loop using the go temaple syntax.

`{{ range $ind, $sl := $service.ServiceLevels -}}`

This is using the `ServiceLevels` subfield of the Reliably Report that is referenced by the `$service` variable.

:::note Note
  Note the use of the hyphen(-) character in the template delimiters, this informs the template to ignore all white space until the next template delimiter. See the section on [Text and spaces](https://golang.org/pkg/text/template/#hdr-Text_and_spaces) in the Go Text Templates documentation.
:::

The content of the range loop populates the table column by column, each using Reliably CLI functions. All the functions take as a prameter a Service Level object from the `$sl` variable that is setup in the range loop above. The exception being the `svcLevelGetTrends` function which takes 3 input variables:


- the service name (`$service.Name`),
- the Service  Level  (`$sl`)
- the a history of reports from `$reps` (see above).


```
|{{- svcLevelGetStatusIcon $sl -}}
{{- svcLevelGetName $sl -}}|
{{- svcLevelGetActualResult $sl}}|
{{- svcLevelGetObjective $sl }}|
{{- svcLevelGetTimeWindow $sl }}|
{{- svcLevelGetType $sl }}|
{{- svcLevelGetTrends $service.Name $sl $reps }}
```

The population of the table column completes the first range block. The range block is delimited by the `{{ end }}` directive.

The next section in the example template adds an Error budget section to the report. This again uses a markdown table format. The first part is text that is included as-is into the output of the report.

```
The Error Budget metrics are:
```

Then the markdown table is setup with:

```
|  Type    | Name          |ErrorBudget(%)|Time Window|Downtime|Consumed|Remain
| -------- | --------------|--------------|-----------|--------|--------|--------|
```

The columns of the table are then populated with a further range loop, this time we show the complate range block:

```
{{ range $ind, $sl := $service.ServiceLevels -}}
|{{- svcLevelGetType $sl -}}|
{{- svcLevelGetName $sl}}|
{{- svcLevelGetTimeWindow $sl }}|
{{- errBudgetPercentage $sl }}|
{{- errBudgetAllowedDownTime $sl }}|
{{- errBudgetConsumed $sl }}|
{{- errBudgetRemain $sl }}|
{{ end }}
```

The `range` statement at the top , set's up a `$ind` and an  `$sl` variable. The `$sl` is set up from the `$service.ServiceLevels` subfield on the referenced `$service` variable. It also set's an an index (`$ind~) that can be used as required.

The columns are then populated using Reliably CLI functions. All the functions take as a prameter a Service Level object from the `$sl` variable.

Again the block is completed by the range `{{ end }}` delimiter.

The report concludes by including a subscript section that shows the version and date of the Reliably CLI that generated the report. This uses a Reliably CLI function to provide the version info.

```
<sub>Generating with: The Reliably CLI Version {{ reliablyVersion }}</sub>
```

## About Report Data

When the 'reliably slo report' runs, it generates Report data. It is this Report data that is used when populating output reports from report templates. The report data object used when processing templates, is defined as follows:

The top-level report is from the following go struct:

```go
type ReportData struct {
  Rep   *Report
  Lreps *[]Report
}
```

This ReportData consists of current report (Rep) and history of recently run reports (Lreps), both use the same type.

### Report

The Report struct is:

```go
type Report struct {
  APIVersion string
  Timestamp  time.Time
  Services   []*Service
}
```
The struct includes:

- The **APIVersion** supported by the CLI.
- The **Timestamp** the report was generated.
- An array of **Services**.

### Service

The Service struct is:

```go
type Service struct {
  Dependencies  []string
  ServiceLevels []*ServiceLevel
  Name          string
}
```

- **Dependencies** is a string list of dependent services.
- **ServiceLevels** is an array of Services levels that are part of the service
- **Name** the name of the service.

### Service Level

A Service can have one or more ServiceLevels. It is the ServiceLevel that holds the essential SLO content.

```go
type ServiceLevel struct {
  Name      string
  Type      string
  Objective float64
  Period    core.Iso8601Duration
  Result    *ServiceLevelResult
  ObservationWindow Window
  errored bool
}
```

The Service level consists of:

- The **Name** for the Service Level.
- The **Type** of the Service Level, this currently either Availablity or Latency.
- An overal **Objective** as a percentage, e.g this service will be 95% available.
- A **Period**, an iso8601 Duration, this is the time Period that is used for the Service Level e.g PT1H. For further information on the time window for an SLI see [SLO Report Time Window].
- The **Result** of an Service Level indicator.
- The actual **Observation window** that was used for the Service Level report. This consists of a From time and a To time.
- **errored** is a flag that indicates if this particular Service Level Indicator errored in it's retrieval process.

:::note Note
  The 'errored' flag is currently not exported so this field is not available in templates.
:::

[SLO Report Time Window]: /docs/guides/how-it-works/slo-reports/#time-window

### Window

This is used to indcate the From and To time, the observation window for the Service Level. Each field is a [Go Time] type.

[Go Time]: https://golang.org/pkg/time/?m=all#Time

```go
type Window struct {
  From time.Time
  To   time.Time
}
```

### Service Level Result

The Service Level result show the results of the SLI collection. This consists of the **Actual** level acheived in the period and the **Delta**. The **Delta** is the difference between the Actual and the Objective.

For example if the Actual measure is 98% avaiablity and the Objective is 100%, then the Delta will be 2%. The **SloIsMet** flag indicates if the SLO has been met during this measurement period.

```go
type ServiceLevelResult struct {
  Actual interface{}
  Delta  interface{}
  SloIsMet bool
}
```
## Functions to use in a Report

Internally the Rleaibly CLI uses a function map to process function calls from the templates. This section lists the current functions that can be used in the templates.

### dateTime Function

This function takes a single argument which is a [Go Time] Type. The report timestamp is available as the `.Timestamp` subfield of the report. The date format in the report is the default RFC1123 format.

### reliablyVersion Function

This function take no arguments and outputs the version of the CLI that is in use and the data that version was created.

### serviceNo

This function takes a single argument which is int, this is expected to be based on an index into the service report which is a zero based index, so the function simply adds 1 to give a Service Number.

### svcLevelGetStatusIcon

This function takes a Service Level object as a single argument. It will return one of the Ascii text icons show below. This is dependent on the Result contained in the Service Level object pass in. If the  result is **SloIsMet** it will return the ✅, if it is not met it will return ❌. If the result is `nil` it will return the Unknown icon.

```
iconTick    = "✅"
iconEx      = "❌"
iconUnknown = "❔"
```

### svcLevelGetName

This function takes a Service Level object as a single argument and will return a string with the ServiceLevel name.

### svcLevelGetActualResult

This function takes a Service Level object as a single argument and will return a string with the Actual result acheived as a percentage.

### svcLevelGetObjective

This function takes a Service Level object as a single argument and will return a string with the Objective for the Service Level as a percentage.

### svcLevelGetTimeWindow

This function takes a Service Level object as a single argument and will return a string with the duration of the time window in humanised form. A humanised duration could be 1 hour, 1 day, etc.

### svcLevelGetType

This function takes a Service Level object as a single argument and will return a string with the type of Service Level. This would currently be either Availiablity or Lstency.

### svcLevelGetTrends

This function takes 3 arguments:

- A string with the Service Name
- A Service Level Oject
- An array of Report object containing recent history

It will return an icon shown the results of SLI Reports in your recent history. An example showing measures where the SLO is met and one where the SLO is not met is shown below:

```reliably
<span class="token green">✓ ✓</span><span class="token red"> ✕</span><span class="token green"> ✓ ✓</span>
```

The service name comes from `$service.ServiceName` assuming the `$service` variable is setup in the range statement:

```
{{ range $index, $service := $report.Services }}
```

The Service Level object comes from `$sl` variable assuming the `$sl` varialbe is setup like:

```
{{ range $ind, $sl := $service.ServiceLevels -}}
```

The array of reports comes from the `$reps` variable assuming this varaible is setup with:

```
{{ $reps := .Lreps }}
```
### errBudgetPercentage

This function takes a Service Level object as a single argument and will return a string with the error budget for the Service Level as a percentage.

### errBudgetAllowedDownTime

This function takes a Service Level object as a single argument and will return a string with the Allowed downtime for the Service Level. The Allowed downtime is calculated from the Error Budget and the Observation Window for the Service Level.

### errBudgetConsumed

This function takes a Service Level object as a single argument and will return a string with the Error Budget Consumed in the Time Period for the Service Level.

### errBudgetRemain

This function takes a Service Level object as a single argument and will return a string with the Error Budget Remaining in the Time Period for the Service Level.

## Generating Custom Reports

This section although its a bit long explains how you can use template files to create Reliably SLO Reports. You can use the example provided as a starting point and then modify to generate your own report format from a template.

## More on that subject

[Reliably SLO Reports](/docs/guides/how-it-works/slo-reports/)

[How the Reliably API works](/docs/guides/how-it-works/api/)

[How the Reliably Rules work](/docs/guides/how-it-works/rules/)

## Not using Reliaby yet?

[Getting started with Reliably](/docs/getting-started/)







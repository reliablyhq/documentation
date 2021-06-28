---
title: Integrating with Slack
excerpt: How to bring Slack into your Reliably ecosystem
categories: ["guides", "how-it-works"]
status: published
type: doc
---

# Integrating with Slack

Reliably now supports integration with Slack. It is possiblt to configure Realibly to send a message to Slack when the budget for a given objective is less than the threshold set in the alert configuration.

## Creating an alert

As with all artifcats in reliably, a the `Slack Alert Criteria` is described in `yaml`. It looks like this:

```yaml
ApiVersion: reliably/v1
Kind: SlackAlertCriteria
Metadata:
    Labels: {}
Spec:
    ObjectiveSelector: {}
    ChannelURL: abc123
    MessageTemplate: abc123
    RemainingPercentThreshold: 10
```

### Properties
* **ObjectiveSelector**: The criteria that allows this alert to be linked to one or more `objectives`. See [selectors](/) for more information.
* **ChannelURL**: The Slack webhook URL. If the URL doesn't look like a Slack URL then this item will not be added to the server.
* **MessageTemplate**: The message to send to the Slack channel. It is possible to provide a `golang` template here. The object that you can reference in the template is an [ObjectiveResult](/).
* **RemainingPercentThreshold**: The threshold at which the alert will be sent. Any value less than or equal to this will trigger the message.

## Example

**Objective**
```yaml
ApiVersion: reliably/v1
Kind: Objective
Metadata:
    Labels:
        service: my awesome service
        name: error rate is less than 1 percent
Spec:
    IndicatorSelector:
        category: error_rate
        aws_resource_arn: some-real-arn
    ObjectivePercent: 1
    Window: 1h
```

**Slack Alert Criteria**
```yaml
ApiVersion: reliably/v1
Kind: SlackAlertCriteria
Metadata:
    Labels:
        name: my slack alert
Spec:
    ObjectiveSelector:
        service: my awesome service
        name: error rate is less than 1 percent
    ChannelURL: abc123
    MessageTemplate: abc123
    RemainingPercentThreshold: 1
```

In this scenario, when an indicator is sent that matches the **Objective**, the difference between the actual performance and the objective performance will be calculated. This value is then used by the **Slack Alert Criteria** to decide if:
1. the criteria matches the objective. In this case it does because the labels of the **Objective** match the **SlackAlertCriteria.Spec.ObjectiveSelector** parameters.
2. the calculated remaining percent is less than the threshold defined in the **SlackAlertCriteria.Spec.RemainingPercentThreshold**.

If both of these conditions are met then the message template is parsed and a message is sent to the URL defined in the **SlackAlertCriteria.Spec.ChannelURL** property.


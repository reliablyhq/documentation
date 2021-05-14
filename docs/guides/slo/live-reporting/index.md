---
title: Live Reporting SLO
excerpt: The Reliably CLI can monitor your SLOs Live.
categories: ["guides", "slo"]
status: published
type: doc
---

import CopyToClipboard from '~/components/MarkdownCopyToClipboard.vue'

# Live Reporting

When you have [defined](./define-slos/) your Service Level Objectives (SLOs), monitoring them gives you a great indication to the state of you system. You can use the Reliably CLI for this.

## Watch

The Reliably CLI has a watch flag that will continually fetch
new metrics and update the displayed report on your terminal every 3 seconds.

You can have this running while you make changes to your system. If your
updates impact your SLOs, this will be reflected in the displayed report in
near real-time.

To monitor your SLOs live via the terminal, add the `--watch / -w` flag.

```console
reliably slo report --watch
```
<CopyToClipboard />

```reliably
<span class="token purple">Refreshing SLO report every 3 seconds.</span> Press CTRL+C to quit.
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

## Reference

Read the [Reliably CLI SLO Reports command][ref-slo-report] reference for a
 complete list of options.

[ref-slo-report]:/docs/reference/cli/reliably-slo-report/
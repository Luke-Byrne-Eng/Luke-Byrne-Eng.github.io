---
layout: post
title:  "Fast Feedforward Networks"
date:   18 Sep 2023
categories: research
paper_url: https://arxiv.org/pdf/2308.14711.pdf
code_url: https://github.com/pbelcak/fastfeedforward
summary: "We break the linear link between the layer size and its inference cost by introducing the fast feedforward1 (FFF) architecture, a log-time alternative to feedforward networks. We demonstrate that FFFs are up to 220x faster than feedforward networks, up to 6x faster than mixture-of-experts networks, and exhibit better training properties than mixtures of experts thanks to noiseless conditional execution. Pushing FFFs to the limit, we show that they can use as little as 1% of layer neurons for inference in vision transformers while preserving 94.2% of predictive performance"
---

<style>
.responsive-pdf-container {
    overflow: hidden;
    padding-top: 141.42%; /* 16:9 Aspect Ratio, adjust as needed */
    position: relative;
}

.responsive-pdf-container iframe {
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>

<a href="{{ page.paper_url }}">{{ page.paper_url }}</a><br>
<a href="{{ page.code_url }}">{{ page.code_url }}</a>

<div class="responsive-pdf-container">
    <iframe src="{{ page.paper_url }}" style="border: none;"></iframe>
</div>
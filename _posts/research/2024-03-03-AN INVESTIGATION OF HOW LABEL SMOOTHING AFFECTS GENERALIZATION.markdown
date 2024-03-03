---
layout: post
title:  "AN INVESTIGATION OF HOW LABEL SMOOTHING AFFECTS GENERALIZATION"
date:   23 Oct 2020
categories: research
paper_url: https://arxiv.org/pdf/2010.12648.pdf
code_url: 
summary: "Label smoothing is hypothesized to mitigate overfitting and enhance generalization, with supporting empirical evidence. However, its mathematical underpinnings remain unclear. This paper introduces a theoretical framework explaining label smoothing's effectiveness in controlling generalization loss, especially in scenarios with partially incorrect training labels. We identify an optimal label smoothing value that minimizes generalization loss and validate our theory with comprehensive experiments. Our results aim to clarify label smoothing's utility for both theoreticians and practitioners in real-world applications"
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
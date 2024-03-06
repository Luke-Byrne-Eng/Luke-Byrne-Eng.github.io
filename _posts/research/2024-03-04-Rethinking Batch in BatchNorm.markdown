---
layout: post
title:  "Rethinking Batch in BatchNorm"
date:   17 May 2021
categories: research
paper_url: https://arxiv.org/pdf/2105.07576.pdf
code_url: 
summary: "BatchNorm, essential in convolutional neural networks, behaves uniquely due to its batch-based operation, leading to performance issues in visual recognition tasks. This paper identifies these issues and suggests reevaluating the concept of batch in BatchNorm for better performance, aiming to guide researchers in its effective use."
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
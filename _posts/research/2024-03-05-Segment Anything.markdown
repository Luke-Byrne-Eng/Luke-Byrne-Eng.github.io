---
layout: post
title:  "Segment Anything"
date:   5 Apr 2023
categories: research
paper_url: https://arxiv.org/pdf/2304.02643.pdf
code_url: 
summary: "The Segment Anything (SA) project introduces a novel task, model, and the largest image segmentation dataset to date, featuring over 1 billion masks across 11 million licensed and privacy-respecting images. The model is engineered for promptability, enabling zero-shot transfer to various image distributions and tasks. Its zero-shot performance has been evaluated across numerous tasks, often matching or surpassing previous fully supervised results. The Segment Anything Model (SAM) and the corresponding SA-1B dataset are made available at https://segment-anything.com to encourage the development of foundational models in computer vision."
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
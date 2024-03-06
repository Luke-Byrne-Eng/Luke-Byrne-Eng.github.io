---
layout: post
title:  "The geometry of hidden representations of large transformer models"
date:   30 Oct 2023
categories: research
paper_url: https://arxiv.org/pdf/2302.00294.pdf#cite.facco2017id
code_url: 
summary: "Large transformers, used for self-supervised learning across data types like protein sequences, images, and text, reveal the semantic structure of data through successive transformations. This study examines the geometric and statistical properties of these representations across layers, finding common evolution patterns in transformers trained on diverse tasks. Initially, data manifolds expand, then contract at intermediate layers, with the intrinsic dimension (ID) stabilizing or peaking slightly towards the end. Semantic information peaks after initial expansion, a trend consistent across models and datasets. The study suggests an unsupervised method to pinpoint layers richest in semantic content, identifying those at a relative ID minimum as optimal for downstream tasks"
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
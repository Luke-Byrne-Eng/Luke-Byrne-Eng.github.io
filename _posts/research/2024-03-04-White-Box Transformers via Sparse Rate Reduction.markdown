---
layout: post
title:  "White-Box Transformers via Sparse Rate Reduction"
date:   1 Jun 2023
categories: research
paper_url: https://arxiv.org/pdf/2306.01129.pdf
code_url: 
summary: "This paper argues that representation learning aims to compress data into low-dimensional Gaussian distributions, evaluated by a unified objective called sparse rate reduction. It interprets popular deep networks, like transformers, as iterative optimizers of this objective. Specifically, it shows how transformer blocks, through alternating optimization, compress and sparsify data representations. This approach yields mathematically interpretable transformer-like networks that effectively compress and sparsify large-scale data, achieving competitive performance on datasets like ImageNet. The code is available online."
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
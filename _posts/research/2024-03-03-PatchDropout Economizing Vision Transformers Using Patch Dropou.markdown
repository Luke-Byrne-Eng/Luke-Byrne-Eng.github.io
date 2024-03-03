---
layout: post
title:  "PatchDropout: Economizing Vision Transformers Using Patch Dropout"
date:   4 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2208.07220.pdf
code_url: 
summary: "Vision transformers (ViTs) can outperform CNNs in various vision tasks but are limited by high computational and memory needs, especially for high-resolution images like medical image classification. Efforts to optimize ViTs are complex, requiring significant changes. However, we introduce PatchDropout, a simple technique that drops random image patches during training, cutting computational and memory demands by at least 50% on datasets like IMAGENET and even more with larger images. On the high-resolution CSAW medical dataset, PatchDropout achieves a 5× reduction in resources and improves performance, enabling more efficient model scaling and parameter tuning within fixed computational or memory budgets"
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
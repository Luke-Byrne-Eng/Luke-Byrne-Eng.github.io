---
layout: post
title:  "A downsampled variant of imagenet as an alternative to the cifar datasets"
date:   23 Aug 2017
categories: research
paper_url: https://arxiv.org/pdf/1707.08819v3.pdf
code_url: 
summary: "Due to the high cost of experiments on the original ImageNet, we propose a downsampled version, ImageNet32x32, and its variants, ImageNet64x64 and ImageNet16x16, which maintain the same number of classes and images but with reduced resolution. This approach significantly speeds up experiments while preserving similar optimal hyperparameters characteristics. The datasets and scripts are available online"
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
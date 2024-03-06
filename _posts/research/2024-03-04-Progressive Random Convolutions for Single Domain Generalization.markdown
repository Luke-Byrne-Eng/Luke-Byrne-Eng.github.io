---
layout: post
title:  "Progressive Random Convolutions for Single Domain Generalization"
date:   2 Apr 2023
categories: research
paper_url: https://arxiv.org/pdf/2304.00424v1.pdf
code_url: 
summary: "To address the limitations of Random Convolutions (RandConv) augmentation in single domain generalization, we introduce a Progressive Random Convolution (Pro-RandConv) method that layers random convolutions with small kernel sizes to maintain semantic integrity and enhance style diversity without increasing kernel size. Additionally, we enhance the random convolution block with deformable offsets and affine transformations for further texture and contrast diversification. Our simple yet powerful augmentation strategy surpasses current state-of-the-art methods in single domain generalization benchmarks without relying on complex generators or adversarial learning."
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
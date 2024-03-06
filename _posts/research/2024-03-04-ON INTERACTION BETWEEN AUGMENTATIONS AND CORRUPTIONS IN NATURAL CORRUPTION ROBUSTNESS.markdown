---
layout: post
title:  "ON INTERACTION BETWEEN AUGMENTATIONS AND
CORRUPTIONS IN NATURAL CORRUPTION ROBUSTNESS"
date:   19 Nov 2021
categories: research
paper_url: https://arxiv.org/pdf/2102.11273.pdf
code_url: 
summary: "Building robust models in computer vision requires invariance to various image corruptions like warping, noise, or color shifts. Despite new data augmentations improving performance on ImageNet-C, a corruption benchmark, the correlation between data augmentations and test-time corruptions remains unclear. We created a feature space for image transforms and introduced the Minimal Sample Distance to show a strong correlation between augmentation-corruption similarity and performance. Our study reveals that training with perceptually similar augmentations enhances test error, but augmentations may not generalize well beyond benchmarks. Our findings and tools aim to enhance robustness to image corruptions, with code available at https://github.com/facebookresearch/augmentation-corruption."
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
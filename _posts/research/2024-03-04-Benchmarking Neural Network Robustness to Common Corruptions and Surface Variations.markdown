---
layout: post
title:  "Benchmarking Neural Network Robustness to
Common Corruptions and Peturbations"
date:   27 Apr 2019
categories: research
paper_url: https://arxiv.org/pdf/1903.12261.pdf
code_url: 
summary: "This paper introduces benchmarks for evaluating the robustness of image classifiers, focusing on common corruptions and perturbations rather than adversarial ones. The benchmarks include IMAGENET-C, which assesses corruption robustness and identifies preferred classifiers for safety-critical roles, and IMAGENET-P, a new dataset for evaluating perturbation robustness. Findings suggest minimal differences in corruption robustness between AlexNet and ResNet classifiers, while also identifying methods to improve robustness, including the unexpected benefit of a bypassed adversarial defense. These benchmarks aim to guide future research towards more generally robust networks."
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
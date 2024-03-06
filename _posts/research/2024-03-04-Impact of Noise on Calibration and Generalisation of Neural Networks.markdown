---
layout: post
title:  "Impact of Noise on Calibration and Generalisation of Neural Networks"
date:   30 Jun 2023
categories: research
paper_url: https://arxiv.org/pdf/2306.17630.pdf
code_url: 
summary: "This study investigates the effects of various noise injection and data augmentation strategies on neural networks (NNs) to enhance generalization, robustness, and calibration. We examine different types of noise, such as activation and input augmentation noise, in both in-distribution and out-of-distribution scenarios. Activation noise significantly improves generalization across scenarios, while input augmentation noise notably enhances calibration in out-of-distribution data but is less effective for in-distribution data."
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
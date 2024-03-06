---
layout: post
title:  "Does Enhanced Shape Bias Improve Neural Network Robustness to Common Corruptions"
date:   20 Apr 2021
categories: research
paper_url: https://arxiv.org/pdf/2104.09789.pdf
code_url: 
summary: "Convolutional neural networks (CNNs) trained on ImageNet exhibit a texture bias but struggle with out-of-distribution data. Recent studies have shown that incorporating diverse image styles into training data reduces texture bias and enhances shape recognition, thereby improving resilience against common image corruptions like noise and blur. This is often interpreted as increased shape bias leading to greater corruption robustness. Through a comprehensive analysis of input compositions using natural images, edge information, and stylization, our study finds that while stylization significantly boosts corruption robustness, a direct link between shape bias and robustness is not evident. We suggest that the enhanced corruption robustness is primarily due to style variation in data augmentation, with increased shape bias being an indirect effect."
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
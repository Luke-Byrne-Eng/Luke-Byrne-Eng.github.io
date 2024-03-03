---
layout: post
title:  "Deep neural networks are robust to weight binarization and other non-linear distortions"
date:   7 Jun 2016
categories: research
paper_url: https://arxiv.org/pdf/1606.01981.pdf
code_url: 
summary: "Recent studies reveal that deep neural networks maintain high performance levels even when trained with binary quantized weights, but this is just a beginning. These networks also show significant resilience to various test-time distortions, including noise and non-linear projections, with robustness extending beyond binary quantization. For instance, a network demonstrated only 11% error on CIFAR-10 with less than one effective bit per weight. Surprisingly, some conventional training adjustments, like weight quantization during backpropagation, can be modified or omitted without sacrificing this robustness. Experiments confirmed these findings on CIFAR-10 and ImageNet, leading to the proposal of a stochastic projection rule that sets a new benchmark of 7.64% error on CIFAR-10 without data augmentation."
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
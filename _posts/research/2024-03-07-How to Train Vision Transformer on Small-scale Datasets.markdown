---
layout: post
title:  "How to Train Vision Transformer on
Small-scale Datasets"
date:   13 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2210.07240v1.pdf
code_url: 
summary: "The Vision Transformer (ViT) offers simplicity, robustness, and superior performance in vision tasks but struggles with small-scale datasets due to its lack of inherent inductive biases and dependence on large-scale pre-training datasets like ImageNet and JFT. This study demonstrates that self-supervised learning can introduce effective inductive biases directly from small datasets, enabling the fine-tuning of ViTs without large-scale pre-training or modifications to the architecture or loss functions. Experiments show improved performance on small datasets such as CIFAR10/100, CINIC10, SVHN, Tiny-ImageNet, Aircraft, and Cars, maintaining ViT's attention to relevant regions and robustness. The code and models are available online."
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
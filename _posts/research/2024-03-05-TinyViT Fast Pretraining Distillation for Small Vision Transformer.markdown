---
layout: post
title:  "TinyViT: Fast Pretraining Distillation for
Small Vision Transformers"
date:   21 Jul 2022
categories: research
paper_url: https://arxiv.org/pdf/2207.10666.pdf
code_url: 
summary: "TinyViT introduces a new series of compact and efficient vision transformers (ViTs), designed for devices with limited resources by pretraining on large datasets using a fast distillation framework. This approach involves transferring knowledge from large pretrained models to smaller ones, allowing the latter to benefit from extensive pretraining data. Key to this process is distilling knowledge during pretraining, where sparsified logits from large teacher models are stored to minimize memory and computational costs. TinyViT models are scaled down from larger counterparts under specific computation and parameter limits. Our experiments show TinyViT achieves 84.8% top-1 accuracy on ImageNet-1k with just 21M parameters, comparable to Swin-B pretrained on ImageNet-21k but with 4.2 times fewer parameters. Furthermore, with increased image resolution, TinyViT reaches 86.5% accuracy, outperforming Swin-L with only 11% of its parameters. TinyViT also demonstrates strong transferability across various downstream tasks. The code and models are publicly available."
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
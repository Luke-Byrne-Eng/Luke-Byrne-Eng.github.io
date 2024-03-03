---
layout: post
title:  "Contrastive Masked Autoencoders are Stronger Vision Learners"
date:   29 Jan 2024
categories: research
paper_url: https://arxiv.org/pdf/2207.13532.pdf
code_url: https://github.com/ZhichengHuang/CMAE
summary: "Contrastive Masked Autoencoders (CMAE) is a new self-supervised method for enhancing vision representation learning by integrating contrastive learning with masked image modeling. CMAE improves upon traditional MIM by offering stronger discriminability and local perceptibility in representations. It features a dual-branch architecture, including an asymmetric encoder-decoder for holistic feature learning and a momentum encoder for boosting feature discriminability through contrastive learning. Innovations like pixel shifting and a feature decoder ensure compatibility between contrastive learning and MIM. CMAE has set new benchmarks in image classification, semantic segmentation, and object detection, with notable performances like 85.3% top-1 accuracy on ImageNet and 52.5% mIoU on ADE20k. The source code is available at https://github.com/ZhichengHuang/CMAE."
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
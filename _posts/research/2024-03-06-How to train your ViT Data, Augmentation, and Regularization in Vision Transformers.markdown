---
layout: post
title:  "How to train your ViT? Data, Augmentation, and Regularization in Vision Transformers"
date:   23 Jun 2022
categories: research
paper_url: https://arxiv.org/pdf/2106.10270.pdf
code_url: 
summary: "Vision Transformers (ViT) excel in various vision tasks, like image classification, object detection, and semantic segmentation, but require more model regularization or data augmentation (AugReg) than convolutional neural networks, especially with smaller datasets. Through a comprehensive study, we explore how training data amount, AugReg, model size, and compute budget interact. Our findings indicate that using more compute and AugReg can achieve the same performance as training with significantly more data. Specifically, we demonstrate that ViTs of various sizes trained on the public ImageNet-21k dataset can match or surpass models trained on the larger, non-public JFT-300M dataset."
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
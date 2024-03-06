---
layout: post
title:  "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"
date:   3 Jun 2021
categories: research
paper_url: https://arxiv.org/pdf/2010.11929.pdf
code_url: 
summary: "The Transformer architecture, while dominant in natural language processing (NLP), has had limited applications in computer vision. Traditionally, in vision tasks, attention mechanisms are integrated with or partially replace convolutional neural networks (CNNs), without abandoning their overall architecture. This study demonstrates that such reliance on CNNs is unnecessary for image classification tasks, showing that a pure transformer applied directly to sequences of image patches—referred to as Vision Transformer (ViT)—can achieve impressive results. When pre-trained on large datasets and then applied to various mid-sized or small image recognition benchmarks (such as ImageNet, CIFAR-100, VTAB), ViT performs comparably or even better than the latest convolutional networks, with significantly less computational cost for training."
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
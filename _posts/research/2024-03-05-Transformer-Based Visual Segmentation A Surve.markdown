---
layout: post
title:  "Transformer-Based Visual Segmentation: A Survey"
date:   20 Dec 2023
categories: research
paper_url: https://arxiv.org/pdf/2304.09854.pdf
code_url: 
summary: "This survey offers an extensive examination of transformer-based visual segmentation, a field crucial for applications in autonomous driving, image editing, robot sensing, and medical analysis. With the advent of deep learning, and especially transformers—neural networks excelling in vision tasks through self-attention—there has been significant progress in segmentation tasks. We cover the evolution from convolutional methods to the emergence of vision transformers, providing a unified framework that simplifies understanding recent advancements. The survey discusses various transformer-based segmentation approaches, modifications, and applications, highlighting specific areas like 3D point cloud, foundation model tuning, domain-aware, efficient, and medical segmentation. Additionally, it re-evaluates these methods on established datasets, outlines current challenges, and suggests future research directions. The comprehensive resources and findings are accessible at https://github.com/lxtGH/Awesome-Segmentation-With-Transformer."
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
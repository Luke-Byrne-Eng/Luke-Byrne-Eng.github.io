---
layout: post
title:  "I-JEPA Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture"
date:   13 Apr 2023
categories: research
paper_url: https://arxiv.org/pdf/2301.08243.pdf
code_url: 
summary: "This paper introduces the Image-based Joint-Embedding Predictive Architecture (I-JEPA) for learning semantic image representations without hand-crafted data augmentations. By predicting the representations of different image blocks from a single context block, I-JEPA generates meaningful representations using a strategic masking approach. When applied with Vision Transformers, I-JEPA shows scalability and efficiency, achieving strong performance in various tasks like classification and depth prediction on ImageNet with a ViT-Huge/14 and 16 A100 GPUs in under 72 hours."
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
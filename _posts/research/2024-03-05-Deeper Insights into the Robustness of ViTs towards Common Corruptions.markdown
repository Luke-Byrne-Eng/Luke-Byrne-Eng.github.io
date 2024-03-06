---
layout: post
title:  "Deeper Insights into the Robustness of ViTs towards Common Corruptions"
date:   19 Aug 2022
categories: research
paper_url: https://arxiv.org/pdf/2204.12143.pdf
code_url: 
summary: "This paper investigates the robustness of various Vision Transformer (ViT) variants against common corruptions, marking the first comprehensive analysis of how different architectural designs affect ViT resilience. Our benchmarking reveals that certain simple architectural features, such as overlapping patch embedding and convolutional feed-forward networks (FFNs), significantly enhance ViT robustness. Additionally, we scrutinize the effectiveness of CNN-based data augmentation strategies, traditionally aimed at improving robustness, when applied to ViTs. Our study finds that while adversarial noise training is effective, fourier-domain augmentation falls short. Leveraging these insights, we propose a new conditional method for generating dynamic augmentation parameters based on input images, achieving state-of-the-art robustness against common corruptions."
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
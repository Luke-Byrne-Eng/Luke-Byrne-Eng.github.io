---
layout: post
title:  "DINOv2: Learning Robust Visual Features without Supervision"
date:   2 Feb 2024
categories: research
paper_url: https://arxiv.org/pdf/2304.07193.pdf
code_url: 
summary: "Recent advances in natural language processing have led to the development of foundational models for computer vision, enabling the creation of versatile visual features without task-specific fine-tuning. By leveraging diverse, curated datasets and combining various pretraining methods, especially self-supervised ones, these models achieve significant improvements. The approach includes scaling data and model sizes and refining training processes for efficiency and stability. An automated pipeline was developed for building high-quality, diverse image datasets. A large ViT model with 1 billion parameters was trained and distilled into smaller models, surpassing existing general-purpose features in several benchmarks."
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
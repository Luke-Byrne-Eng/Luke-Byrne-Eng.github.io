---
layout: post
title:  "VMamba: Visual State Space Model"
date:   18 Jan 2024
categories: research
paper_url: https://arxiv.org/pdf/2401.10166.pdf
code_url: 
summary: "Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) are leading models for visual representation learning, with CNNs being scalable and ViTs offering superior fitting despite higher complexity. We introduce the Visual State Space Model (VMamba), inspired by state space models, to achieve linear complexity while maintaining global receptive fields. The addition of a Cross-Scan Module (CSM) addresses direction-sensitivity, allowing effective spatial domain traversal. Extensive tests show VMamba's effectiveness in visual perception tasks, especially at higher resolutions, with source code available online"
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
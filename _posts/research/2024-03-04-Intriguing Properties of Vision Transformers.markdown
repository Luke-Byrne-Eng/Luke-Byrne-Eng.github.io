---
layout: post
title:  "Intriguing Properties of Vision Transformers"
date:   25 Nov 2021
categories: research
paper_url: https://arxiv.org/pdf/2105.10497.pdf
code_url: 
summary: "This study investigates how ViT's flexibility in contextual attention aids in overcoming challenges like occlusions, domain shifts, and perturbations in natural images. Through comprehensive experiments across three ViT families and comparison with a top CNN, we find ViTs show remarkable resilience to occlusions, perturbations, and domain shifts, maintaining high accuracy even when most of the image is obscured. Unlike CNNs, ViTs exhibit less texture bias, focusing more on shape-based features, which enhances their shape recognition to levels comparable with the human visual system. Additionally, ViTs can perform accurate semantic segmentation without pixel-level supervision and create feature ensembles from a single model for improved classification performance in both traditional and few-shot learning settings. These advantages stem from their dynamic receptive fields enabled by self-attention mechanisms. Access to our code is available at https://git.io/Js15X."
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
---
layout: post
title:  "Towards Robust Monocular Depth Estimation:
Mixing Datasets for Zero-shot Cross-dataset Transfer"
date:   25 Aug 2020
categories: research
paper_url: https://arxiv.org/pdf/1907.01341v3.pdf
code_url: 
summary: "Monocular depth estimation's success hinges on large, diverse training datasets. Acquiring dense ground-truth depth is challenging, leading to diverse datasets with unique biases. We introduce tools for training with multiple datasets, despite incompatible annotations. Our approach includes a robust training objective unaffected by depth range and scale variations, employs principled multi-objective learning for data integration from various sources, and emphasizes the importance of pretraining encoders on auxiliary tasks. We tested our methods using five datasets, including 3D films, a novel, extensive data source. Through zero-shot cross-dataset transfer, we demonstrate our approach's superior generalization, significantly outperforming existing methods and establishing a new benchmark in monocular depth estimation."
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
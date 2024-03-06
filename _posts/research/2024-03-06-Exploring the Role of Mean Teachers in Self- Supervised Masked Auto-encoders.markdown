---
layout: post
title:  "Exploring the Role of Mean Teachers in Self- Supervised Masked Auto-encoders"
date:   5 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2210.02077.pdf
code_url: 
summary: "Masked image modeling (MIM), particularly through the Masked Auto-Encoder (MAE), is a key technique in self-supervised learning (SSL) for visual representation learning with Vision Transformers, involving the reconstruction of randomly masked image patches. Concurrent approaches often use a student/teacher paradigm, where a teacher model updates itself with an exponential moving average (EMA) of the student model's outputs, though the effects of this interaction are not well understood. Analysis of a simple linear model reveals that the teacher model selectively filters gradient directions based on feature similarity, acting as a conditional momentum regularizer. Building on this insight, we introduce the Reconstruction-Consistent Masked Auto-Encoder (RC-MAE), which integrates an EMA teacher with MAE, leading to faster convergence and reduced memory requirements compared to existing self-distillation methods. Furthermore, RC-MAE demonstrates greater robustness and improved performance on tasks like ImageNet-1K classification, object detection, and instance segmentation, compared to the original MAE."
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
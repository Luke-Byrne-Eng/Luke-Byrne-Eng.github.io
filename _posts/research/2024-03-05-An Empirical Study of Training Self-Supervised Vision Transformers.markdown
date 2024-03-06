---
layout: post
title:  "An Empirical Study of Training Self-Supervised Vision Transformers"
date:   16 Aug 2021
categories: research
paper_url: https://arxiv.org/pdf/2104.02057.pdf
code_url: 
summary: "This paper examines self-supervised learning for Vision Transformers (ViT) in the context of recent advancements in computer vision. Unlike the well-established training protocols for convolutional networks, ViT training, especially under self-supervised conditions, remains underdeveloped. The study explores fundamental training components for self-supervised ViT, identifying instability as a key issue that undermines accuracy despite seemingly successful outcomes. By addressing these instabilities, the paper demonstrates improvements in training stability and accuracy. Results and ablations are benchmarked across MoCo v3 and other self-supervised frameworks. The findings highlight both promising approaches and ongoing challenges in self-supervised ViT training, aiming to guide future research with valuable insights and experiences."
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
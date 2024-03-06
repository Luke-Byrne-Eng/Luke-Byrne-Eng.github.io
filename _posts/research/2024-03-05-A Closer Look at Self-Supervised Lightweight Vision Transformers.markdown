---
layout: post
title:  "A Closer Look at Self-Supervised Lightweight Vision Transformers"
date:   3 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2205.14443.pdf
code_url: 
summary: "This study evaluates self-supervised pre-training methods on Vision Transformers (ViTs) for image classification and dense prediction tasks, challenging the notion that vanilla lightweight ViTs are unsuitable for vision tasks in lightweight settings. Surprisingly, with appropriate pre-training, lightweight ViTs can match or exceed the performance of state-of-the-art (SOTA) networks that have more complex designs. However, the study also highlights limitations, such as a lack of improvement from large-scale pre-training data and weaker performance on tasks with limited data. Through an analysis of layer representations and attention maps, the impact of pre-training is detailed. Furthermore, a distillation strategy during pre-training is proposed, enhancing downstream performance for Masked Autoencoder (MAE)-based methods. The findings and code are shared at https://github.com/wangsr126/mae-lite, offering insights and tools for improving lightweight ViTs through self-supervised learning"
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
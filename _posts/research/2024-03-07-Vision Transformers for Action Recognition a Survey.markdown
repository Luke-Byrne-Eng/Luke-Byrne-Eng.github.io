---
layout: post
title:  "Vision Transformers for Action Recognition: a Survey"
date:   13 Sep 2022
categories: research
paper_url: https://arxiv.org/pdf/2209.05700v1.pdf
code_url: 
summary: "This article offers the first extensive review of vision transformer techniques specifically applied to human action recognition, a field gaining interest for its wide applications. Termed action transformers, these methods are analyzed and categorized based on their architecture, modality, and objectives. The review explores how action transformers encode spatio-temporal data, reduce dimensions, construct frame patches and spatio-temporal cubes, and various representation techniques. It also delves into optimizing spatio-temporal attention in transformers for longer sequences and examines different learning strategies, including self-supervised and zero-shot learning, with their respective loss functions. Additionally, the survey assesses progress in benchmark evaluation scores and discusses the challenges and future directions in this research area."
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
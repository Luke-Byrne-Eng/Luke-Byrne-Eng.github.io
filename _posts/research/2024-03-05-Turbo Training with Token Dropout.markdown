---
layout: post
title:  "Turbo Training with Token Dropout"
date:   10 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2210.04889.pdf
code_url: 
summary: "This paper introduces Turbo training, an efficient training method for video-related tasks using Transformers. Turbo training offers three major contributions: Firstly, it presents a simple yet versatile training paradigm applicable to multiple video tasks. Secondly, it demonstrates Turbo training's effectiveness across action classification, video-language representation learning, and long-video activity classification, achieving competitive performance with up to 4× speed-up and reduced memory usage. Thirdly, it enables long-schedule video-language training and end-to-end long-video training with limited resources, outperforming or matching previous methods that were resource-intensive."
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
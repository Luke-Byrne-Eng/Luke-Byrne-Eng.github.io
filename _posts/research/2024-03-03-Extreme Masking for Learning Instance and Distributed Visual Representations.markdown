---
layout: post
title:  "Extreme Masking for Learning Instance and Distributed Visual Representations"
date:   8 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2206.04667.pdf
code_url: 
summary: "The paper introduces ExtreMA, a method for learning visual representations by using high levels of token masking (75%-90%) for data augmentation. It employs self-attention and cross-attention blocks to learn spatial and holistic instance representations. Unlike methods that seek input invariance, ExtreMA focuses on capturing informative image variations. Its contributions include demonstrating the effectiveness of random masking for siamese learning, showing that extreme masking accelerates learning and enhances performance, and achieving superior linear probing and transfer results compared to previous model"
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
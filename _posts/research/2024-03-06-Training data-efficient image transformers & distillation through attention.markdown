---
layout: post
title:  "Training data-efficient image transformers
& distillation through attention"
date:   15 Jan 2021
categories: research
paper_url: https://arxiv.org/pdf/2012.12877.pdf
code_url: 
summary: "This study introduces DeiT, competitive vision transformers trained solely on ImageNet without convolutions, achieving up to 83.1% top-1 accuracy on ImageNet, using a single computer in under 3 days. Notably, it presents a unique teacher-student strategy for transformers, leveraging a distillation token for efficient learning from a convolutional network teacher. This method results in performance on par with convolutional networks, achieving up to 85.2% accuracy on ImageNet and demonstrating effective transferability to other tasks. The authors provide access to their code and models."
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
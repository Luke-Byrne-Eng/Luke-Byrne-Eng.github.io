---
layout: post
title:  "Vision Transformers in 2022: An Update on Tiny Imagenet"
date:   21 May 2022
categories: research
paper_url: https://arxiv.org/pdf/2205.10660.pdf
code_url: 
summary: "Recent advancements in image transformers, notably in models such as Vision Transformer (ViT), Data Efficient Image Transformer (DeiT), Class Attention in Image Transformer (CaiT), and Swin Transformers, have narrowed the performance gap with traditional CNNs. These models are typically trained on large datasets like ImageNet-21k and then finetuned on ImageNet-1k. However, assessments often overlook Tiny ImageNet when evaluating transfer learning performance. This paper updates the performance of vision transformers on Tiny ImageNet, highlighting that Swin Transformers outperform existing benchmarks with a validation accuracy of 91.35%. The code is available at: https://github.com/ehuynh1106/TinyImageNet-Transformers"
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
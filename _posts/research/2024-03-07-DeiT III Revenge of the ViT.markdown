---
layout: post
title:  "DeiT III: Revenge of the ViT"
date:   18 Jan 2023
categories: research
paper_url: https://hal.science/hal-03945731/file/2204.07118.pdf
code_url: 
summary: "This paper explores the supervised training of Vision Transformers (ViTs), using a simplified training approach adapted from ResNet-50 that includes a novel data-augmentation method with just 3 augmentations. The study demonstrates that this method significantly improves ViTs' performance in image classification, transfer learning, and semantic segmentation over previous supervised training techniques. Moreover, it shows ViTs' performance can match newer architectures, providing a new benchmark for evaluating self-supervised methods on ViTs."
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
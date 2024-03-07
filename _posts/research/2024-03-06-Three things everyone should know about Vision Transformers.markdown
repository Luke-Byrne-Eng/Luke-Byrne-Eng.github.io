---
layout: post
title:  "Three things everyone should know about Vision Transformers"
date:   18 Mar 2022
categories: research
paper_url: https://arxiv.org/pdf/2203.09795.pdf
code_url: 
summary: "Transformer architectures have made significant strides in computer vision, excelling in image classification, detection, segmentation, and video analysis. Our research presents three key findings using variants of vision transformers: (1) Vision transformers' residual layers can be processed in parallel to some extent without significantly impacting accuracy. (2) Fine-tuning attention layer weights alone effectively adapts transformers for higher resolution and different classification tasks, reducing compute and memory use while allowing weight sharing. (3) Incorporating MLP-based patch pre-processing enhances Bert-like self-supervised training with patch masking. These approaches are validated using the ImageNet-1k dataset and further confirmed with the ImageNet-v2 test set, with transfer performance evaluated across six additional datasets."
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
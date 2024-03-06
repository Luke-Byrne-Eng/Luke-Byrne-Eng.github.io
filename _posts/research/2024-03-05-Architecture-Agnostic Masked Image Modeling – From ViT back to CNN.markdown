---
layout: post
title:  "Architecture-Agnostic Masked Image Modeling – From ViT back to CNN"
date:   2 Jun 2023
categories: research
paper_url: https://arxiv.org/pdf/2205.13943.pdf
code_url: 
summary: "Masked image modeling (MIM), a self-supervised pre-training method, has proven effective in vision tasks using Vision transformers by masking part of an image and reconstructing it. However, its compatibility with CNNs and operational principle are unclear. This study reveals that MIM improves generalized feature extraction through middle-order interactions among patches and introduces an Architecture-Agnostic Masked Image Modeling framework (A2MIM) that works with both Transformers and CNNs. Our extensive testing demonstrates that A2MIM enhances representation learning and transferability to various tasks without specialized modifications"
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
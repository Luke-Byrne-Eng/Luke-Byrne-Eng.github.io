---
layout: post
title:  "DropAttention: A Regularization Method for Fully-Connected Self-Attention Networks"
date:   26 Jul 2019
categories: research
paper_url: https://arxiv.org/pdf/1907.11065.pdf
code_url: 
summary: "This paper introduces DropAttention, a novel dropout method for fully-connected self-attention layers in Transformers, aiming to prevent overfitting by regularizing attention weights. Unlike existing dropout techniques for other neural network layers, DropAttention specifically targets the unique challenges of self-attention mechanisms. Our experiments across various tasks demonstrate that DropAttention not only enhances performance but also mitigates overfitting, providing a significant advancement in the regularization of Transformers."
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
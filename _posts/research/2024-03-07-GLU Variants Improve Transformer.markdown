---
layout: post
title:  "GLU Variants Improve Transformer"
date:   12 Feb 2020
categories: research
paper_url: https://arxiv.org/pdf/2002.05202v1.pdf
code_url: 
summary: "Gated Linear Units (GLUs) involve the component-wise product of two linear projections, with one undergoing a sigmoid function. Exploring GLU variants by substituting the sigmoid with other nonlinear or linear functions within the Transformer model's feed-forward sublayers, we find certain variants outperform the conventional ReLU or GELU activations in terms of quality."
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
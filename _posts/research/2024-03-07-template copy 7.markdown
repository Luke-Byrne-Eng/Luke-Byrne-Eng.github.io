---
layout: post
title:  "Gaussian Error Linear Units (Gelus)"
date:   6 Jun 2023
categories: research
paper_url: https://arxiv.org/pdf/1606.08415.pdf
code_url: 
summary: "We introduce the Gaussian Error Linear Unit (GELU), a neural network activation function that outperforms existing functions by weighting inputs by their magnitude using the standard Gaussian cumulative distribution function, unlike ReLU which gates inputs by sign. Our empirical evaluation across computer vision, natural language processing, and speech tasks shows that GELU offers performance improvements over ReLU and ELU activations."
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
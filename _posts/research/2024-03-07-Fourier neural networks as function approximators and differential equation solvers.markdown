---
layout: post
title:  "Fourier neural networks as function approximators and differential equation solvers"
date:   9 Jul 2020
categories: research
paper_url: https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/sam.11531
code_url: 
summary: "We introduce a Fourier neural network (FNN) aligned with Fourier decomposition, utilizing specific activation and loss functions to accurately mimic Fourier series expansion within a simple, single-layer architecture. This design ensures easy integration with more complex networks for data processing tasks. The FNN's efficacy is demonstrated on both smooth and piecewise continuous periodic functions and its application in modeling or solving partial differential equations with periodic boundary conditions. Key benefits include solution validity beyond the training scope, model interpretability, and ease of use."
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
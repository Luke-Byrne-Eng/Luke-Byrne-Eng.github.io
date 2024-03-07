---
layout: post
title:  "Taming the Waves: Sine as Activation Function in Deep Neural Networks"
date:   4 Nov 2016
categories: research
paper_url: https://openreview.net/pdf?id=Sks3zF9eg
code_url: 
summary: "This paper examines the challenges of training deep neural networks with sinusoidal activation functions, despite their successful use in specific applications. It explains the difficulty in training due to the emergence of numerous shallow local minima from the architecture. The study also reveals that successful learning in typical classification tasks occurs when the network effectively disregards the periodic cycles. Furthermore, it demonstrates that for certain non-trivial tasks, networks with sinusoidal activations can outperform those using traditional monotonic functions."
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
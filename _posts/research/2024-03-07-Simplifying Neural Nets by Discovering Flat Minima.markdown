---
layout: post
title:  "Simplifying Neural Nets by Discovering Flat Minima"
date:   Nov 28 1994
categories: research
paper_url: https://proceedings.neurips.cc/paper/1994/file/01882513d5fa7c329e940dda99b12147-Paper.pdf
code_url: 
summary: "We introduce an algorithm designed to identify networks that are both simple and highly generalizable by searching for extensive areas of flat minima in the error function, where the error rate is relatively stable. These flat minima are associated with lower risks of overfitting according to MDL principles. Despite needing to calculate second-order derivatives, the algorithm maintains a complexity level comparable to backpropagation. We tested it on both feedforward and recurrent networks, and in stock market prediction tasks, it performed better than traditional backpropagation, weight decay, and the optimal brain surgeon methods."
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
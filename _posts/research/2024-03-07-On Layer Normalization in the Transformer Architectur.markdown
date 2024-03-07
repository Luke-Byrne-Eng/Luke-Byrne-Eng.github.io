---
layout: post
title:  "On Layer Normalization in the Transformer Architectur"
date:   29 Jun 2020
categories: research
paper_url: https://arxiv.org/pdf/2002.04745.pdf
code_url: 
summary: "The Transformer is crucial for natural language processing tasks, but its training requires a learning rate warm-up stage, essential for performance yet slowing optimization and increasing hyper-parameter tuning needs. This paper investigates the importance of the warm-up stage and the impact of layer normalization placement. It uses mean field theory to demonstrate that the original Post-LN Transformer's design, with layer normalization between residual blocks, results in large initial gradients, necessitating a warm-up stage for stability. Conversely, placing layer normalization inside residual blocks, as seen in Pre-LN Transformers, stabilizes initial gradients, allowing the elimination of the warm-up stage. Experiments reveal that Pre-LN Transformers achieve comparable performance to traditional models with less training time and fewer hyper-parameters across various applications."
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
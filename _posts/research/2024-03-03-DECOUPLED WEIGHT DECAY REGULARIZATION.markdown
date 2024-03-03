---
layout: post
title:  "ADAMW: DECOUPLED WEIGHT DECAY REGULARIZATION"
date:   4 Jan 2019
categories: research
paper_url: https://arxiv.org/pdf/1711.05101.pdf
code_url: 
summary: "L2 regularization and weight decay are equivalent for standard SGD when adjusted for learning rate, but not for adaptive gradient methods like Adam. We highlight the inequivalence and introduce a modification to align weight decay with its original concept, separate from loss optimization steps. This change allows for independent optimization of the weight decay factor and learning rate, enhancing Adam's performance to match or exceed SGD with momentum on image classification tasks. Our decoupled weight decay approach has gained traction, with implementations in TensorFlow and PyTorch, and the full code for our study is available at https://github.com/loshchil/AdamW-and-SGDW"
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
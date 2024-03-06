---
layout: post
title:  "Shrink and Perturb: On Warm-Starting Neural Network Training"
date:   31 Dec 2020
categories: research
paper_url: https://arxiv.org/pdf/1910.08475.pdf
code_url: 
summary: "In machine learning systems where data arrive incrementally, either passively due to the problem's nature or actively through sample selection, it's common to build a sequence of models that incorporate progressively more data. Although intuitively, using the solution of a previous model to initialize a new one should save time, this warm start often results in poorer generalization compared to models initialized randomly, despite similar training losses. This discrepancy persists even when hyperparameter adjustments are made, often at the expense of the time saved through warm starting. This work investigates this phenomenon and introduces shrink and perturb, a simple yet effective method to mitigate the issue, with experiments demonstrating its utility in various contexts."
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
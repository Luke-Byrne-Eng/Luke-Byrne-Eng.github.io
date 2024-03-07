---
layout: post
title:  "Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets"
date:   6 Jan 2022
categories: research
paper_url: https://arxiv.org/pdf/2201.02177.pdf
code_url: 
summary: "This paper investigates how neural networks generalize on small, algorithmically generated datasets, focusing on data efficiency, memorization, generalization, and learning speed. It highlights instances where neural networks grok patterns, significantly improving their generalization ability from mere chance to perfect accuracy, even beyond the point of overfitting. Additionally, the study finds that generalization on smaller datasets demands more optimization. It posits that such datasets are ideal for exploring the enigmatic phenomenon of how overparametrized neural networks generalize beyond simply memorizing their training data."
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
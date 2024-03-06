---
layout: post
title:  "Universal Adversarial Robustness of Texture and Shape-biased Models"
date:   31 Aug 2021
categories: research
paper_url: https://arxiv.org/pdf/1911.10364.pdf
code_url: 
summary: "This paper analyzes the adversarial robustness of deep neural networks (DNNs) with texture and shape biases against Universal Adversarial Perturbations (UAPs). Through evaluation, it finds that shape-biased models alone do not significantly enhance adversarial robustness. However, combining texture and shape-biased models into ensembles can increase universal adversarial robustness while retaining high performance."
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
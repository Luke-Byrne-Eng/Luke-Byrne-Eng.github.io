---
layout: post
title:  "Delving Deep into Label Smoothing"
date:   22 Jul 2021
categories: research
paper_url: https://arxiv.org/pdf/2011.12562.pdf
code_url: 
summary: "Label smoothing, a regularization technique for deep neural networks (DNNs) to mitigate overfitting and enhance classification performance, involves creating soft labels via a weighted blend of the uniform distribution and the hard label. This paper introduces an Online Label Smoothing (OLS) strategy that generates soft labels using model prediction statistics for the target category, creating a more accurate probability distribution for supervising DNNs. Our method significantly improves classification accuracy and model robustness to noisy labels on CIFAR-100, ImageNet, and fine-grained datasets compared to existing label smoothing techniques. The source code is available online."
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
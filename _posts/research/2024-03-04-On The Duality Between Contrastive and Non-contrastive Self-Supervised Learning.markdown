---
layout: post
title:  "On The Duality Between Contrastive and Non-contrastive Self-Supervised Learning"
date:   26 Jun 2023
categories: research
paper_url: https://arxiv.org/pdf/2206.02574.pdf
code_url: 
summary: "Recent self-supervised learning approaches for image representation can be broadly divided into contrastive and non-contrastive methods. This study focuses on their theoretical similarities rather than their differences. By developing contrastive and covariance-based non-contrastive criteria that are algebraically related and equivalent under certain conditions, we demonstrate the close relationship between these two families. We further explore popular methods, propose variations, and connect our theoretical findings to current practices. Our analysis includes improving SimCLR's performance to match that of VICReg through precise hyperparameter adjustments and challenging the assumption that non-contrastive methods require large output dimensions. Our results indicate that with better network design and hyperparameter tuning, the performance gap between contrastive and non-contrastive methods can be minimized, suggesting that integrating various state-of-the-art methods could enhance understanding of self-supervised learning."
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
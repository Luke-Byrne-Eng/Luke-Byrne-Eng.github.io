---
layout: post
title:  "Bootstrap Your Own Latent A New Approach to Self-Supervised Learning"
date:   10 Sep 2020
categories: research
paper_url: https://arxiv.org/pdf/2006.07733.pdf
code_url: https://github.com/google-deepmind/deepmind-research/tree/master/byol
summary: "We introduce BYOL, a novel self-supervised learning method for image representation without using negative pairs. Utilizing two networks, BYOL trains one to predict the representation of an image as seen by the other under a different view, updating the latter with the former's slow-moving average. Surpassing state-of-the-art methods, it achieves up to 79.6% accuracy on ImageNet with ResNet models, performing equally or better on transfer and semi-supervised tasks. Code and models are available on GitHub."
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
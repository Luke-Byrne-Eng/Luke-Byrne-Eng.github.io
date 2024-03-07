---
layout: post
title:  "Online Normalization for Training Neural Networks"
date:   3 Dec 2019
categories: research
paper_url: https://arxiv.org/pdf/1905.05894.pdf
code_url: 
summary: "Online Normalization is a novel method for normalizing neural network hidden activations, offering a batch-independent alternative with comparable accuracy to Batch Normalization. It overcomes Batch Normalization's theoretical flaw by employing an unbiased method for gradient normalization of activations, integrating seamlessly with automatic differentiation. Applicable to recurrent, fully connected networks, and those with high activation memory requirements, it demonstrates effectiveness in image classification, segmentation, and language modeling, supported by proofs and experimental data from ImageNet, CIFAR, and PTB datasets."
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
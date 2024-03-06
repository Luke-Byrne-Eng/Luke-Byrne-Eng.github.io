---
layout: post
title:  "Scheduled DropHead: A Regularization Method for Transformer Models"
date:   1 Nov 2020
categories: research
paper_url: https://arxiv.org/pdf/2004.13342.pdf
code_url: 
summary: "We introduce DropHead, a structured dropout method tailored for multi-head attention in transformers, offering a novel approach by dropping entire attention heads to avoid dominance by a few and reduce overfitting. We also propose a dropout rate scheduler to optimize training, showing improvements in transformer models with up to 0.9 BLEU score increase on the WMT14 En-De translation task and around 1.0 accuracy boost for text classification tasks."
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
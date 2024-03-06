---
layout: post
title:  "Dropout Reduces Underfittin"
date:   31 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.01500.pdf
code_url: 
summary: "Dropout, introduced by Hinton et al. in 2012, is a well-known technique for preventing overfitting in neural networks. This study reveals that early application of dropout can also prevent underfitting by reducing the directional variance of gradients across mini-batches and aligning them with the full dataset's gradient, which improves the stability of SGD training. We introduce early dropout where dropout is applied only during the initial training phases, and late dropout for controlling overfitting by activating dropout in later training stages. Our experiments across ImageNet and other vision tasks show these approaches enhance generalization accuracy. This suggests more exploration into regularization techniques in deep learning could be beneficial. The code is available on GitHub"
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
---
layout: post
title:  "Operational Neural Networks for Parameter-Efficient Hyperspectral Single-Image Super-Resolution"
date:   25 Oct 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.16636.pdf
code_url: 
summary: "Hyperspectral Imaging, a key tool in remote sensing, captures more spectral information than standard images but with lower spatial resolution. Super-resolution aims to enhance low-resolution inputs, with modern techniques often using deep convolutional neural networks (CNNs) that rely on non-linear activation functions. Recently, self-organized operational neural networks (SONNs) have been proposed, utilizing learnable non-linear functions instead of convolutional filters, to address the depth issue of CNNs. This study enhances a popular super-resolution model with operational filters for better hyperspectral image performance, examining the impact of residual connections and normalization types. Operational neural networks, despite fewer parameters, outperform CNN equivalents on small datasets, with the code available on Github."
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
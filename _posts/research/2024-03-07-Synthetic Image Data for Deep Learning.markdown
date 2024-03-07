---
layout: post
title:  "Synthetic Image Data for Deep Learning"
date:   12 Dec 2022
categories: research
paper_url: https://arxiv.org/pdf/2212.06232.pdf
code_url: 
summary: "This study investigates the use of high-quality, physically-based rendering and domain randomization to generate a large synthetic dataset from 3D CAD models of a real vehicle, enhancing image classification and semantic segmentation models. Synthetic images proved to be effective for augmenting limited real training data. However, models trained solely on synthetic images showed low accuracy on real validation images, which significantly improved when even small amounts of real data were included. Augmenting real data with synthetic images outperformed training on only real images. Moreover, pretraining models on synthetic data before transfer learning significantly reduced training costs, allowing most of the training to be completed upfront."
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
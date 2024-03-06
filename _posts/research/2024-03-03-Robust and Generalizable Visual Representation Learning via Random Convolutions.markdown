---
layout: post
title:  "Robust and Generalizable Visual Representation Learning via Random Convolutions"
date:   3 May 2021
categories: research
paper_url: https://arxiv.org/pdf/2007.13003.pdf
code_url: 
summary: "This study demonstrates that deep neural networks' vulnerability to texture shifts and perturbations can be mitigated by using random convolutions for data augmentation. Random convolutions, which approximately preserve shape while distorting local textures, create an infinite variety of new domains. We tested using these convolutions as new images or in combination with original images during training. Our method significantly enhances performance on unseen domains and domain generalization benchmarks, including a substantial improvement in generalizing to sketch domains over current state-of-the-art methods. Additionally, it provides a more robust pretrained visual representation for downstream tasks."
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
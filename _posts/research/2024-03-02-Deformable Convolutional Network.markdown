---
layout: post
title:  "Deformable Convolutional Networks"
date:   5 Jun 2017
categories: research
paper_url: https://arxiv.org/pdf/1703.06211.pdf
code_url: https://github.com/msracver/Deformable-ConvNets
summary: This work introduces deformable convolution and deformable RoI pooling modules to improve the geometric transformation capability of CNNs by augmenting spatial sampling with learned offsets, without extra supervision. These modules can replace standard ones in CNNs for end-to-end training. The approach, validated by extensive experiments, effectively learns dense spatial transformations for complex vision tasks like object detection and semantic segmentation. The code is available at https://github.com/msracver/Deformable-ConvNets.
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
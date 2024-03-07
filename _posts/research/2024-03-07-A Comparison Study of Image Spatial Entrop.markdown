---
layout: post
title:  "Masked Autoencoders are Robust Data Augmentors"
date:   10 Jun 2022
categories: research
paper_url: https://arxiv.org/pdf/2206.04846.pdf
code_url: 
summary: "Deep neural networks, while effective in complex vision tasks, suffer from overfitting. Current image augmentation techniques, largely linear and hand-crafted like scale, flip, and color jitter, fail to produce sufficiently challenging examples. We introduce a new augmentation approach, Mask-Reconstruct Augmentation (MRA), leveraging self-supervised masked autoencoders to generate distorted inputs. This method, inspired by masked image modeling's success in self-supervised learning, uses nonlinear transformations for regularization. Our extensive testing across various image classification benchmarks demonstrates MRA's ability to significantly improve performance in supervised, semi-supervised, and few-shot classification tasks. The code is available at https://github.com/haohang96/MRA."
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
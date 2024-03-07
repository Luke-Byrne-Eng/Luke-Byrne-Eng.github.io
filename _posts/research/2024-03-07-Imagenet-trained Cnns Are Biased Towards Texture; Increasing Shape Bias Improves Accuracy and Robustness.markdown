---
layout: post
title:  "Imagenet-trained Cnns Are Biased Towards Texture; Increasing Shape Bias Improves Accuracy and Robustness"
date:   1 Jan 1000
categories: research
paper_url: https://arxiv.org/pdf/1811.12231.pdf
code_url: 
summary: "Recent studies have shown that Convolutional Neural Networks (CNNs), which were thought to recognize objects by learning complex shapes, are actually more biased towards recognizing textures. This finding, based on a series of tests comparing CNNs with human observers using images with conflicting texture and shape cues, contradicts the traditional understanding of how these networks process images. We discovered that CNNs trained on ImageNet favor texture over shape, differing significantly from human visual processing. However, when we trained a standard CNN architecture (ResNet-50) on a stylized version of ImageNet, designed to emphasize shape, the network's performance aligned more closely with human behavior. This training not only matched human performance in controlled experiments (involving 97 observers across 48,560 trials) but also enhanced object detection and robustness against image distortions, underscoring the benefits of shape-based representations in visual recognition systems."
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
---
layout: post
title:  "Visual Identification of Individual Holstein-Friesian Cattle via Deep Metric Learning"
date:   14 Oct 2020
categories: research
paper_url: https://arxiv.org/pdf/2006.09205.pdf
code_url: 
summary: "This study utilizes the unique black and white coat patterns of Holstein-Friesian cattle, akin to Turing’s reaction-diffusion systems, to automate the visual detection and biometric identification of individual cattle using convolutional neural networks and deep metric learning. Unlike traditional methods that depend on physical markings or wearables, this approach offers a completely hands-off technique for automated detection, localization, and identification of cattle from overhead images in open herd settings, without the need for re-training for new herd additions. The system demonstrates high accuracy, with a 93.8% success rate in identifying cattle unseen during training, using only half of the population. This research facilitates non-intrusive cattle monitoring, beneficial for precision farming, health and welfare surveillance, and veterinary research, including behavioral studies and disease tracking. Essential components of the research, including source code, network weights, and datasets, are publicly accessible."
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
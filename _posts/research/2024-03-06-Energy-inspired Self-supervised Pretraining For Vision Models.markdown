---
layout: post
title:  "Energy-inspired Self-supervised Pretraining For Vision Models"
date:   2 Feb 2023
categories: research
paper_url: https://arxiv.org/pdf/2302.01384.pdf
code_url: 
summary: "Leveraging symmetric mappings in deep networks, we introduce a self-supervised vision model pretraining framework without auxiliary components, inspired by energy-based models (EBMs). This framework models energy estimation and data restoration through the network's forward and backward passes respectively. It assigns low energy to unlabeled dataset samples and uses gradient-based optimization to restore data from corrupted versions. This approach integrates the encoder-decoder architecture into a single model, supporting a variety of pretext tasks such as masked image modeling, patch sorting, and image restoration tasks like super-resolution, denoising, and colorization. Our extensive experiments demonstrate that this method achieves comparable or better performance with fewer training epochs than current self-supervised pretraining methods, suggesting potential for further exploration in self-supervised vision model pretraining and pretext tasks."
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
---
layout: post
title:  "Visual Atoms: Pre-training Vision Transformers with Sinusoidal Waves"
date:   2 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.01112.pdf
code_url: 
summary: "Formula-driven supervised learning (FDSL) has proven effective for pre-training vision transformers, with ExFractalDB-21k surpassing ImageNet-21k's pre-training effects, emphasizing the importance of contours over textures. This study introduces a novel methodology utilizing circular harmonics to explore the design space of contour-oriented synthetic datasets systematically. This approach identifies the optimal FDSL parameters and maximizes synthetic image variety, identified as crucial for success. Using the newly created VisualAtom-21k for pre-training, ViT-Base achieves a top-1 accuracy of 83.7% on ImageNet-1k, nearing the 84.2% achieved with JFT-300M pre-training but with significantly fewer images. Unlike static real-image datasets like JFT-300M, synthetic datasets can continuously improve, demonstrating FDSL's potential. FDSL also avoids issues common to real images, such as privacy/copyright concerns, labeling costs/errors, and ethical biases."
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
---
layout: post
title:  "Sigmoid Loss for Language Image Pre-Training"
date:   27 sept 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.15343.pdf
code_url: 
summary: "We introduce a simple pairwise Sigmoid loss for Language-Image Pre-training (SigLIP), which outperforms standard contrastive learning by not requiring a global normalization of pairwise similarities. Our approach facilitates scaling up the batch size and improves performance even with smaller batches. Using only four TPUv4 chips, we trained a SigLiT model achieving 84.5% ImageNet zero-shot accuracy in two days. Our method's disentanglement of batch size from the loss allows for examining the impact of example versus pair counts and the negative to positive ratio. Pushing the batch size to one million showed diminishing returns, with 32k being a sufficient batch size. We encourage further research in language-image pre-training efficiency and quality by releasing our models at the provided URL."
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
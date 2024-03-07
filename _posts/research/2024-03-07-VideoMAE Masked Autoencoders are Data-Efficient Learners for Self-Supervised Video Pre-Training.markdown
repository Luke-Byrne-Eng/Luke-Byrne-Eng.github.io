---
layout: post
title:  "VideoMAE: Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training"
date:   18 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2203.12602.pdf
code_url: 
summary: "This paper introduces VideoMAE, a data-efficient approach for self-supervised video pre-training (SSVP) that utilizes video masked autoencoders with a novel, high-ratio video tube masking technique. This method, inspired by ImageMAE, challenges the model with video reconstruction tasks to improve video representation learning. Key findings include: (1) High masking ratios (90% to 95%) are effective due to video's temporal redundancy, (2) VideoMAE performs well on small datasets (~3k-4k videos) without extra data, highlighting the importance of high-level structure learning, and (3) Data quality is more crucial than quantity for SSVP, with domain shift between pre-training and target datasets being significant. Remarkably, VideoMAE achieves strong performance on several benchmarks using a basic ViT backbone, without extra data. The code is available online."
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
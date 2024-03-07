---
layout: post
title:  "VideoMAE V2: Scaling Video Masked Autoencoders with Dual Masking"
date:   18 Apr 2023
categories: research
paper_url: https://arxiv.org/pdf/2303.16727v2.pdf
code_url: 
summary: "This paper introduces VideoMAE, a scalable, self-supervised pre-training approach for video foundation models, capable of handling billions of parameters. It utilizes a dual masking strategy to efficiently pre-train by dividing video tokens between the encoder and decoder, thus reducing computational costs. The approach includes progressive training, starting with an unlabeled multi-source dataset followed by a labeled mixed dataset. The result is a billion-parameter video ViT model that sets new performance records on Kinetics and Something-Something datasets, demonstrating its efficacy as a general-purpose video representation learner."
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
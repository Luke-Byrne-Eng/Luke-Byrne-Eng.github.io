---
layout: post
title:  "Efficient Masked Autoencoders with Self-Consistency"
date:   28 Feb 2023
categories: research
paper_url: https://arxiv.org/pdf/2302.14431.pdf
code_url: 
summary: "Masked image modeling (MIM), inspired by masked language modeling in natural language processing, is a prevalent self-supervised pre-training method in computer vision. Its high random mask ratio, however, leads to inefficient data use and pre-training (requiring 1600 epochs for MAE versus 300 for supervised learning) and results in a pre-trained model that is uncertain and inconsistent in its predictions. To address these issues, we introduce efficient masked autoencoders with self-consistency (EMAE), enhancing pre-training efficiency and prediction consistency for MIM. EMAE divides the image into non-overlapping parts, each subject to a random mask with a uniform mask ratio, to perform parallel MIM tasks and generate predictions. A self-consistency module is also designed to ensure consistent predictions for overlapping masked patches. EMAE improves data utilization and achieves reliable representations, showing superior results on ImageNet with only 300 pre-training epochs under ViT-Base compared to MAE's 1600 epochs. Additionally, EMAE demonstrates top-tier transfer performance in various downstream tasks, such as object detection and semantic segmentation."
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
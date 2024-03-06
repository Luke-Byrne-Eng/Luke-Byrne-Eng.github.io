---
layout: post
title:  "Learning Transferable Visual Models From Natural Language Supervision"
date:   26 Feb 2021
categories: research
paper_url: https://arxiv.org/pdf/2103.00020.pdf
code_url: 
summary: "This paper introduces a novel approach to computer vision that learns directly from raw text descriptions of images, moving beyond the traditional model of training on a fixed set of object categories. By pre-training on a massive dataset of 400 million (image, text) pairs from the internet using the task of matching captions to images, the method achieves state-of-the-art (SOTA) image representations from scratch. This approach allows for zero-shot transfer to a wide range of downstream tasks by using natural language to reference or describe visual concepts, eliminating the need for additional labeled data. The model's performance was evaluated across over 30 diverse computer vision datasets, including OCR, video action recognition, geo-localization, and fine-grained object classification, showing competitive results against fully supervised baselines without task-specific training. Remarkably, it matches the accuracy of the original ResNet-50 on ImageNet zero-shot, without using any of its 1.28 million training examples. The code and pre-trained model weights are made available at https://github.com/OpenAI/CLIP."
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
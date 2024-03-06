---
layout: post
title:  "A SIMPLE, EFFICIENT AND SCALABLE CONTRASTIVE MASKED AUTOENCODER FOR LEARNING VISUAL REPRESENTATIONS"
date:   30 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2210.16870.pdf
code_url: 
summary: "Introuces CAN, a method that combines contrastive learning, masked autoencoders, and noise prediction for efficient and scalable self-supervised visual learning. Its a straightforward framework that enhances image representation learning by leveraging the strengths of each approach. CAN outperforms existing methods in transfer learning and robustness tasks, showing particularly strong performance when pre-training on large, uncurated datasets. It offers a significant efficiency improvement and reduces the computational load compared to previous models."
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
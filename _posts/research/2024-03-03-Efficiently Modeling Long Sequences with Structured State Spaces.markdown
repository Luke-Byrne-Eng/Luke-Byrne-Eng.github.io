---
layout: post
title:  "Efficiently Modeling Long Sequences with Structured State Spaces"
date:   5 Aug 2022
categories: research
paper_url: https://arxiv.org/pdf/2111.00396.pdf
code_url: 
summary: "he quest for a universal sequence model capable of handling data across different tasks and modalities, especially long-range dependencies, faces challenges with conventional models like RNNs, CNNs, and Transformers, which struggle with very long sequences. A promising approach using state space models (SSM) showed potential but had high computational demands. We introduce the Structured State Space sequence model (S4), a more efficient parameterization of SSM, demonstrating strong empirical performance across various benchmarks, including achieving state-of-the-art results and significantly outperforming prior models in efficiency and speed."
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
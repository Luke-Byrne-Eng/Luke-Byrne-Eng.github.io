---
layout: post
title:  "Mamba: Linear-Time Sequence Modeling with Selective State Spaces"
date:   1 Dec 2023
categories: research
paper_url: https://arxiv.org/ftp/arxiv/papers/2312/2312.00752.pdf
code_url: 
summary: "Transformer-based models, crucial for advancements in deep learning, suffer from inefficiency in processing long sequences. Recent models attempting to address this issue haven't matched Transformers' success in key areas like language due to their poor content-based reasoning. Our work enhances these models by making selective state space models (SSMs) input-dependent, improving handling of sequences and designing a hardware-friendly algorithm for better performance. The new architecture, Mamba, achieves superior speed and scalability, outperforming traditional Transformers in various domains including language, audio, and genomics, especially in tasks involving extremely long sequences."
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
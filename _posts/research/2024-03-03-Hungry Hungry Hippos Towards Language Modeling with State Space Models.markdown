---
layout: post
title:  "Hungry Hungry Hippos: Towards Language Modeling with State Space Models"
date:   29 Apr 2023
categories: research
paper_url: https://arxiv.org/pdf/2212.14052.pdf
code_url: 
summary: "This paper investigates the performance and efficiency gaps between State Space Models (SSMs) and attention mechanisms in language modeling. SSMs, despite scaling better with sequence length, underperform attention and suffer from poor hardware utilization. The study introduces a new SSM layer, H3, designed to improve recall and comparison across sequences, narrowing the performance gap with Transformers. Furthermore, a hybrid H3-attention model surpasses Transformer performance on OpenWebText. To enhance SSM training efficiency, the paper proposes FlashConv, a method that significantly speeds up processing and enables scaling of hybrid models, showing promising results against Transformers in both perplexity and few-shot learning tasks."
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
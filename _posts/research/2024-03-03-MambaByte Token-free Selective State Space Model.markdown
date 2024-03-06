---
layout: post
title:  "MambaByte: Token-free Selective State Space Model"
date:   24 Jan 2024
categories: research
paper_url: https://arxiv.org/pdf/2401.13660.pdf
code_url: 
summary: "MambaByte, a token-free language model, effectively operates on byte sequences without subword tokenization bias, offering computational efficiency and outperforming state-of-the-art subword models. Its linear scaling and fast inference demonstrate its potential for token-free language modeling."
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
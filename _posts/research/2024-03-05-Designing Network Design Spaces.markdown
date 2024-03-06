---
layout: post
title:  "Designing Network Design Spaces"
date:   30 Mar 2020
categories: research
paper_url: https://arxiv.org/pdf/2003.13678.pdf
code_url: 
summary: "In this study, we introduce a novel approach to network design aimed at enhancing the understanding and generalizability of network design principles. Our method involves creating spaces for network design that parameterize multiple network populations, akin to traditional network design but on a broader scale. We explore network structure and develop a low-dimensional, efficient design space called RegNet, based on the insight that network widths and depths can be modeled through a quantized linear function. Our analysis of the RegNet space reveals findings that challenge existing design practices, offering simpler and faster networks effective across various computational budgets. Comparatively, RegNet models surpass EfficientNet models in performance and are up to five times faster on GPUs, under similar training conditions and computational resources."
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
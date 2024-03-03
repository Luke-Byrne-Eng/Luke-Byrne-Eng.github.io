---
layout: post
title:  "Do Transformer Modifications Transfer Across Implementations and Applications?"
date:   10 Sep 2021
categories: research
paper_url: https://arxiv.org/pdf/2102.11972.pdf
code_url: 
summary: "This paper evaluates numerous Transformer architecture modifications in a unified experimental framework, focusing on common natural language processing applications. Surprisingly, it finds that most modifications do not significantly enhance performance. The beneficial variants are mostly minor or developed in the same code base used for testing. The study suggests that performance gains may largely depend on implementation details and offers recommendations for improving the generalizability of experimental results."
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
---
layout: post
title:  "X3D: Expanding Architectures for Efficient Video Recognitio"
date:   9 Apr 2020
categories: research
paper_url: https://arxiv.org/pdf/2004.04730.pdf
code_url: 
summary: "This paper introduces X3D, a set of efficient video networks that expand a small 2D image classification structure across space, time, width, and depth dimensions. By adopting a stepwise expansion method inspired by feature selection in machine learning, X3D optimizes accuracy and complexity by expanding one dimension at a time. It achieves superior performance with significantly fewer operations and parameters than previous models, revealing that high spatiotemporal resolution networks can be both effective and lightweight. X3D delivers competitive results on video classification and detection benchmarks with unparalleled efficiency. The code is available at the provided GitHub link."
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
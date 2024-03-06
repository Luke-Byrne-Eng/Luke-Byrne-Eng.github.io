---
layout: post
title:  "Group Normalization"
date:   1 Jun 2018
categories: research
paper_url: https://arxiv.org/pdf/1803.08494.pdf
code_url: 
summary: "Batch Normalization (BN) helps train various deep learning networks but struggles with small batch sizes due to inaccurate statistics estimation, limiting its use in memory-constrained tasks. This paper introduces Group Normalization (GN) as an alternative that divides channels into groups for normalization, independent of batch sizes, offering stable accuracy across various batch sizes. GN shows lower error rates compared to BN in small batches and comparable performance in typical batch sizes. It also outperforms BN in object detection, segmentation, and video classification tasks, proving to be a viable replacement for BN in a range of applications. GN is easy to implement in modern libraries."
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
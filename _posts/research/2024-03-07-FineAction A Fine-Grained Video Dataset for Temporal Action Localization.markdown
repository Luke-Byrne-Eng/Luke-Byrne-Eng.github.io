---
layout: post
title:  "FineAction: A Fine-Grained Video Dataset for Temporal Action Localization"
date:   20 Oct 2022
categories: research
paper_url: https://arxiv.org/pdf/2105.11107v3.pdf
code_url: 
summary: "Temporal action localization (TAL) is crucial for video understanding but is hindered by benchmarks that rely on coarse action classes, leading to model overfitting and ambiguous annotations. Addressing these issues, we introduce FineAction, a large-scale, fine-grained video dataset with 103K instances across 106 action categories in 17K videos. FineAction offers a diverse, densely annotated dataset with co-occurring actions, posing new challenges for TAL. We evaluated popular localization methods on FineAction, revealing the impact of fine-grained instances on performance, and proposed a baseline method achieving a 13.17% mAP. FineAction aims to propel TAL research forward and is accessible online."
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
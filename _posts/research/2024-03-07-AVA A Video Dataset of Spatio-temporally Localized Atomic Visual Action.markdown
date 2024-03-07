---
layout: post
title:  "AVA: A Video Dataset of Spatio-temporally Localized Atomic Visual Action"
date:   30 Apr 2018
categories: research
paper_url: https://arxiv.org/pdf/1705.08421.pdf
code_url: 
summary: "This paper presents the AVA dataset, featuring 1.58M labels for 80 atomic visual actions across 430 15-minute video clips, with precise spatio-temporal and person-specific annotations. Unlike previous datasets focused on composite actions in shorter clips with sparse annotations, AVA emphasizes atomic actions, detailed annotations throughout longer videos, continuity of persons across clips, and varied action representations from movies. It highlights the challenges in action recognition, introduces a novel localization approach surpassing existing benchmarks but shows modest performance on AVA (15.6% mAP), pointing out the necessity for advanced video understanding methods."
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
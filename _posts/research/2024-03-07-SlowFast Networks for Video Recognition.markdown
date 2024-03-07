---
layout: post
title:  "SlowFast Networks for Video Recognition"
date:   29 Oct 2019
categories: research
paper_url: https://arxiv.org/pdf/1812.03982.pdf
code_url: 
summary: "We introduce SlowFast networks for video recognition, featuring a Slow pathway for spatial semantics at low frame rates and a Fast pathway for motion details at high frame rates. The Fast pathway's efficiency is achieved through reduced channel capacity, yet it effectively captures temporal information. Our models significantly enhance action classification and detection, achieving top accuracy on benchmarks like Kinetics, Charades, and AVA. Code is available at: https://github.com/facebookresearch/SlowFast."
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
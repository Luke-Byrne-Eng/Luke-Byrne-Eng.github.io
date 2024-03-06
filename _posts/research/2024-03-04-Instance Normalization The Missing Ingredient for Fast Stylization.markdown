---
layout: post
title:  "Instance Normalization: The Missing Ingredient for Fast Stylization"
date:   6 Nov 2017
categories: research
paper_url: https://arxiv.org/pdf/1607.08022.pdf
code_url: 
summary: "In this study, we improve upon the fast stylization method by Ulyanov et al. (2016) through a minor yet impactful modification: substituting batch normalization with instance normalization during both training and testing. This adjustment significantly enhances the quality of generated images and enables the training of efficient real-time image generation architectures. The code and full paper are available online."
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
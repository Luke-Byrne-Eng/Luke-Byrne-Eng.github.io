---
layout: post
title:  "Learning from Children: Improving Image-Caption Pretraining via Curriculum"
date:   30 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2305.17540.pdf
code_url: 
summary: "Image-caption pretraining, crucial for tasks like zero-shot image classification and object detection, faces challenges in aligning multiple concepts from captions to objects in images. We introduce a curriculum learning framework inspired by children's language learning from cognitive science, starting with simple image-caption pairs and gradually increasing complexity by adding more concepts. This method, which leverages knowledge from each phase for subsequent learning, outperforms traditional image-caption training across various settings, including starting from scratch, using pretrained encoders, and in low data scenarios. The code is available at: https://github.com/hayyubi/cur_vl.git."
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
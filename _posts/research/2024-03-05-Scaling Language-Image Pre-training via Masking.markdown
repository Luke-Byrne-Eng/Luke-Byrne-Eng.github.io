---
layout: post
title:  "Scaling Language-Image Pre-training via Masking"
date:   30 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2212.00794.pdf
code_url: 
summary: "We introduce Fast Language-Image Pre-training (FLIP), an efficient method for training CLIP that masks out a significant portion of image patches to allow more image-text pair learning in the same amount of time, enhancing sample contrast within similar memory usage. This results in better accuracy and training speed. Testing on 400 million image-text pairs, FLIP surpasses the original no-masking approach in accuracy and speed, and significantly outperforms CLIP models on various downstream tasks. The speedup from our method also enables us to experiment with larger model sizes, more data, or longer training periods, yielding promising outcomes that may advance vision-language learning research."
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
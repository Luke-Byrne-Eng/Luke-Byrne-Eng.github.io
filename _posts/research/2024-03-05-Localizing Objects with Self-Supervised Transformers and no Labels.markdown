---
layout: post
title:  "Localizing Objects with Self-Supervised Transformers and no Labels"
date:   29 Sept 2021
categories: research
paper_url: https://arxiv.org/pdf/2109.14279.pdf
code_url: 
summary: "We introduce LOST, a straightforward method for unsupervised object localization in image collections, utilizing activation features from a vision transformer pre-trained in a self-supervised manner. Unlike other methods, LOST does not rely on external object proposals or image collection exploration and works on individual images. It surpasses existing object discovery methods by up to 8 CorLoc points on PASCAL VOC 2012. Additionally, training a class-agnostic detector on the objects found by LOST further improves performance by 7 points, showing its effectiveness also in unsupervised object discovery. The implementation of our approach is available at https://github.com/valeoai/LOST"
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
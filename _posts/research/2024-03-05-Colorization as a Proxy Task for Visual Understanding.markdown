---
layout: post
title:  "Colorization as a Proxy Task for Visual Understanding"
date:   13 Aug 2017
categories: research
paper_url: https://arxiv.org/pdf/1703.04044.pdf
code_url: 
summary: "This study explores the potential of self-supervision, specifically through automatic colorization, as an alternative to ImageNet pretraining for improving the use of unlabeled data. It demonstrates that self-supervised training can achieve state-of-the-art results on VOC segmentation and classification tasks without relying on ImageNet labels. The research also provides a comprehensive analysis of self-supervision via colorization, highlighting the significance of loss formulation, training specifics, and network architecture. Additionally, it revisits and questions the ImageNet pretraining approach, including the necessity of training data volume, label quantity, and the adaptability of features upon fine-tuning. The findings suggest that colorization offers a supervisory signal comparable in power to various types of ImageNet pretraining."
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
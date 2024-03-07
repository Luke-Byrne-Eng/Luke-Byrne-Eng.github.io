---
layout: post
title:  "Training Deep Networks with Synthetic Data:
Bridging the Reality Gap by Domain Randomizatio"
date:   23 Apr 2018
categories: research
paper_url: https://arxiv.org/pdf/1804.06516.pdf
code_url: 
summary: "We introduce a system that trains deep neural networks for object detection using synthetic images, leveraging domain randomization to manage real-world data variability. This involves randomizing simulator parameters—like lighting and object textures—in non-realistic ways, helping the network to identify essential object features. Our findings reveal that networks can achieve impressive performance with just synthetic data and further improve with real data fine-tuning. This suggests the potential of using cost-effective synthetic data for training, circumventing the challenges of acquiring vast amounts of real-world data or creating detailed synthetic environments. We validate our method through car bounding box detection on the KITTI dataset."
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
---
layout: post
title:  "Quo Vadis, Action Recognition A New Model and the Kinetics Datase"
date:   12 Feb 2018
categories: research
paper_url: https://arxiv.org/pdf/1705.07750.pdf
code_url: 
summary: "The limited number of videos in current action classification datasets like UCF-101 and HMDB-51 hinders the identification of effective video architectures due to similar performance across small-scale benchmarks. This study re-examines top architectures using the new, significantly larger Kinetics Human Action Video dataset, featuring 400 classes and over 400 clips per class from challenging YouTube videos. It analyzes the impact of this dataset on the performance of existing architectures and the benefits of pre-training on Kinetics. Additionally, the paper introduces the Two-Stream Inflated 3D ConvNet (I3D), an advancement that expands 2D ConvNet designs into 3D for enhanced video feature extraction. This model, pre-trained on Kinetics, sets new benchmarks in action classification, achieving 80.9% accuracy on HMDB-51 and 98.0% on UCF-101."
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
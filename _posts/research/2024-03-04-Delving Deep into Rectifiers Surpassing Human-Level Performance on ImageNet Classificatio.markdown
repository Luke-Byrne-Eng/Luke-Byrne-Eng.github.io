---
layout: post
title:  "Delving Deep into Rectifiers:
Surpassing Human-Level Performance on ImageNet Classificatio"
date:   6 Feb 2015
categories: research
paper_url: https://arxiv.org/pdf/1502.01852.pdf
code_url: 
summary: "In this study, we explore two enhancements to rectifier neural networks for image classification. Firstly, we introduce a Parametric Rectified Linear Unit (PReLU) that extends traditional units, offering improved model fitting with negligible additional computational cost. Secondly, we develop a robust initialization strategy tailored for rectifier non-linearities, allowing the training of very deep models from scratch. Using PReLU networks, we achieved a 4.94% top-5 error rate on the ImageNet 2012 dataset, outperforming the previous best result and surpassing human-level performance."
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
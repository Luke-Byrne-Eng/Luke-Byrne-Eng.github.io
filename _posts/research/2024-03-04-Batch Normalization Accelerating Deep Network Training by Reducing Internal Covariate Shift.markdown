---
layout: post
title:  "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift"
date:   2 Mar 2015
categories: research
paper_url: https://arxiv.org/pdf/1502.03167.pdf
code_url: 
summary: "Training Deep Neural Networks is challenging due to the changing input distribution at each layer, caused by updates in previous layer parameters. This issue, known as internal covariate shift, slows training, necessitating lower learning rates and careful initialization, especially with models using saturating nonlinearities. By normalizing layer inputs for each mini-batch, our Batch Normalization method significantly improves training efficiency, allowing for higher learning rates, reducing the need for meticulous initialization, and sometimes removing the need for Dropout regularization. Applied to a leading image classification model, it reached the same accuracy with 14 times fewer steps and surpassed the original model. Moreover, an ensemble of batch-normalized networks set a new record on ImageNet classification, achieving a top-5 validation error of 4.9% (and 4.8% test error), surpassing human accuracy."
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
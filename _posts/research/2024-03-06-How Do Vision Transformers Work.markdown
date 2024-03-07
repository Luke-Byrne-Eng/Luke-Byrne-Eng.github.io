---
layout: post
title:  "How Do Vision Transformers Work"
date:   8 jun 2022
categories: research
paper_url: https://arxiv.org/pdf/2202.06709.pdf
code_url: 
summary: "The success of multi-head self-attentions (MSAs) in computer vision is well-recognized, yet their operational mechanics remain largely unexplored. This study elucidates the workings of MSAs and Vision Transformers (ViTs), revealing that MSAs enhance both accuracy and generalization by smoothing loss landscapes, attributed more to data specificity than to managing long-range dependencies. Conversely, ViTs grapple with non-convex losses, mitigated by large datasets and specific smoothing techniques. The research further contrasts MSAs and convolutional layers (Convs), noting MSAs act as low-pass filters while Convs serve as high-pass filters, making them complementary. It is also found that multi-stage neural networks function akin to a series of small models, with MSAs crucial for predictions at stage ends. Introducing AlterNet, the study showcases a model where Conv blocks are substituted with MSA blocks at stage ends, achieving superior performance over CNNs across both large and small data scenarios."
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
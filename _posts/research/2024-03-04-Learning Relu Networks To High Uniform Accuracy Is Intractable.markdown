---
layout: post
title:  "Learning RelU Networks To High Uniform Accuracy Is Intractable"
date:   28 Feb 2023
categories: research
paper_url: https://arxiv.org/pdf/2205.13531.pdf
code_url: 
summary: "Statistical learning theory provides guidelines on the number of training samples needed for achieving desired accuracy in learning problems, especially emphasizing generalization error. However, this is not always adequate, particularly in security-sensitive areas or computational sciences, where uniform accuracy across all inputs is necessary. This paper quantifies the training samples required for uniform accuracy in learning problems involving ReLU neural networks, revealing that the number of samples needed exponentially increases with the network's depth and input dimension."
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
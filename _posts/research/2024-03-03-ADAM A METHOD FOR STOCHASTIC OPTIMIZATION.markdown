---
layout: post
title:  "ADAM: A METHOD FOR STOCHASTIC OPTIMIZATION"
date:   30 Jan 2017
categories: research
paper_url: https://arxiv.org/pdf/1412.6980.pdf
code_url: 
summary: "Adam is an optimization algorithm designed for large-scale data and parameter problems, efficiently handling stochastic objective functions with adaptive moment estimation. It's easy to implement, requires minimal memory, and adapts well to non-stationary objectives and noisy or sparse gradients. Adam's hyper-parameters are intuitive and usually need little adjustment. The paper also explores Adam's connections to related algorithms, its theoretical convergence properties, including a competitive regret bound, and its practical performance, which favorably compares with other methods. Additionally, the variant AdaMax, based on the infinity norm, is introduced."
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
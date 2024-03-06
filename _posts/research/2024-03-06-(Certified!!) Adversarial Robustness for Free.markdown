---
layout: post
title:  "(Certified!!) Adversarial Robustness for Free"
date:   6 Mar 2023
categories: research
paper_url: https://arxiv.org/pdf/2206.10550.pdf
code_url: 
summary: "This paper demonstrates achieving top certified adversarial robustness against `2-norm bounded perturbations using pre-existing models. By applying the denoised smoothing method with a pretrained denoising diffusion probabilistic model and a high-accuracy classifier, we significantly improve robustness, certifying 71% accuracy on ImageNet under specified adversarial constraints. This marks a 14 percentage point increase over previous best results and a 30 point improvement over denoised smoothing, achieved without fine-tuning or retraining model parameters."
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
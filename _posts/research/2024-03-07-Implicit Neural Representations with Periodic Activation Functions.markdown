---
layout: post
title:  "Implicit Neural Representations with Periodic Activation Functions"
date:   1 Jan 1000
categories: research
paper_url: https://arxiv.org/pdf/2006.09661.pdf
code_url: 
summary: "Neural networks parameterized for continuous, differentiable signal representations provide a promising paradigm but struggle with modeling fine detail and representing spatial and temporal derivatives critical for signals defined by partial differential equations. We introduce sinusoidal representation networks (SIRENs), utilizing periodic activation functions to effectively capture complex natural signals and their derivatives. Our analysis leads to a principled initialization strategy, enabling the representation of images, wavefields, video, sound, and derivatives. We also showcase SIRENs' application in solving boundary value problems like Eikonal equations, the Poisson equation, and the Helmholtz and wave equations, and extend their use with hypernetworks to learn priors for SIREN functions. A video overview and full applications are available on our project website."
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
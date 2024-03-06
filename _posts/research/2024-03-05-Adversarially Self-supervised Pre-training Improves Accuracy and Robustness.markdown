---
layout: post
title:  "Adversarially Self-supervised Pre-training Improves Accuracy and Robustness"
date:   10 Mar 2023
categories: research
paper_url: https://openreview.net/pdf?id=Y4Tm1A2Z1B
code_url: 
summary: "This paper explores using adversarial training, typically a defense against adversarial shifts, to enhance visual representation pre-training for transfer across tasks and distribution shifts, integrating it with self-supervised methods like BYOL, MAE, and RotNet. It finds that adversarial self-supervision improves fine-tuning accuracy both within and outside distributions, outperforming standard methods even without adversarial fine-tuning. Optimal performance requires method-specific perturbation radii and preserving early layer parameters during fine-tuning. While no single method excels in all scenarios, adversarial MAE performs best for in-distribution tasks, and adversarial BYOL is superior for out-of-distribution tasks."
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
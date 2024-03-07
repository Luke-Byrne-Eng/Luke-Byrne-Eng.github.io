---
layout: post
title:  "TrivialAugment: Tuning-free Yet State-of-the-Art Data Augmentation"
date:   18 Mar 2021
categories: research
paper_url: https://arxiv.org/pdf/2103.10158.pdf
code_url: 
summary: "TrivialAugment, a parameter-free and surprisingly effective automatic augmentation method, applies a single augmentation to each image and outperforms existing methods with minimal complexity and cost. We conducted extensive experiments to validate its performance against state-of-the-art methods across various image classification scenarios and explored its effectiveness through multiple ablation studies involving different augmentation spaces and methods. Our work includes a user-friendly interface and fully shared codebase to encourage adoption and reproducibility. Highlighting a stagnation in automatic augmentation research, we conclude with proposed best practices for future advancements in the field."
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
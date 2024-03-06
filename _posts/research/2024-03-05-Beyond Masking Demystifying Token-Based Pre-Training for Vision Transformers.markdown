---
layout: post
title:  "Beyond Masking: Demystifying Token-Based Pre-Training for Vision Transformers"
date:   27 Mar 2022
categories: research
paper_url: https://arxiv.org/pdf/2203.14313.pdf
code_url: 
summary: "This paper explores alternatives to masked image modeling (MIM), a method leveraging vision transformers for self-supervised visual representation by masking parts of an input image and predicting the missing content. We propose five different learning objectives that, like MIM, degrade the input image in various ways. Through comprehensive experiments, we establish design principles for token-based pre-training of vision transformers. Notably, we find the most effective strategy combines preserving the original image style with introducing spatial misalignment in addition to spatial masking. This approach outperforms traditional MIM on downstream recognition tasks without increasing computational demands. The code for our study is accessible at https://github.com/sunsmarterjie/beyond masking"
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
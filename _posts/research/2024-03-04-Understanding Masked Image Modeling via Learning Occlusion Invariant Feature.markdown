---
layout: post
title:  "Understanding Masked Image Modeling via Learning Occlusion Invariant Feature"
date:   8 Aug 2022
categories: research
paper_url: https://arxiv.org/pdf/2208.04164.pdf
code_url: 
summary: "Masked Image Modeling (MIM) has been successful in self-supervised visual recognition, yet its working mechanism remains unclear, especially compared to siamese approaches like contrastive learning. This study introduces a new perspective that MIM implicitly learns occlusion-invariant features, similar to the invariances learned by siamese methods. We show that MIM can be interpreted within a unified framework alongside traditional methods, differing only in data transformations and similarity measurements. Using MAE as an example, we find that MIM's success is less about similarity functions and more about the occlusion-invariant features it learns, which provide a beneficial initialization for vision transformers despite possibly being less semantic. Our findings encourage the development of more effective self-supervised methods in computer vision"
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
---
layout: post
title:  "Masked Image Residual Learning for Scaling Deeper Vision Transformers"
date:   15 Nov 2023
categories: research
paper_url: https://arxiv.org/pdf/2309.14136.pdf
code_url: 
summary: "Training deeper Vision Transformers (ViTs) presents challenges, including a degradation problem in deeper layers during masked image modeling (MIM) pre-training. To address this, we introduce Masked Image Residual Learning (MIRL), a self-supervised learning framework that alleviates the degradation issue and enables effective scaling of ViT depth for performance improvement. MIRL redefines the pre-training objective for deep ViT layers as learning to recover the residual of the masked image. Through extensive testing, we show that MIRL allows deeper ViTs to be optimized more effectively, enhancing accuracy with increased depth. Implementing this approach, we developed ViT-S-54 and ViT-B-48 models, which are 4.5× and 2× deeper than the standard ViT-Base and ViT-Large, respectively. ViT-S-54 matches ViT-Large's performance at a third of the cost, and ViT-B-48 reaches 86.2% top-1 accuracy on ImageNet. Deeper ViTs pre-trained with MIRL show strong generalization on downstream tasks like object detection and semantic segmentation and demonstrate high pre-training efficiency, achieving competitive performance in less time. The code and pretrained models are accessible at https://github.com/russellllaputa/MIRL."
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
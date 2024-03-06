---
layout: post
title:  "What do Self-supervised vision transformers learn?"
date:   1 May 2023
categories: research
paper_url: https://arxiv.org/pdf/2305.00729.pdf
code_url: 
summary: "This study compares contrastive learning (CL) and masked image modeling (MIM) in self-supervised Vision Transformers (ViTs), focusing on their representations and downstream task performance. Key findings include: (1) CL captures longer-range global patterns and is more shape-oriented, aiding in linear image separation but leading to homogenous self-attentions. (2) CL focuses on low-frequency signals, while MIM emphasizes high-frequencies, making MIM more texture-oriented. (3) CL is significant in later layers, whereas MIM targets early layers. The study suggests CL and MIM can be harmonized to leverage both methods' strengths, enhancing performance."
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
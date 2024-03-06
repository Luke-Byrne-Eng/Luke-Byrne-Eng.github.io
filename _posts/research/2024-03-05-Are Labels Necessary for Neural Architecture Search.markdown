---
layout: post
title:  "Are Labels Necessary for Neural Architecture Search?"
date:   3 Aug 2020
categories: research
paper_url: https://arxiv.org/pdf/2003.12056.pdf
code_url: 
summary: "This paper introduces Unsupervised Neural Architecture Search (UnNAS), questioning if effective neural architectures can be discovered using only images without human-annotated labels. Through two experimental setups—sample-based and search-based—we investigate this possibility. In the sample-based approach, we evaluate 500 diverse architectures trained with both supervised and unsupervised objectives, revealing a high correlation between the architecture rankings with and without labels. In the search-based experiments, we employ a recognized NAS algorithm, DARTS, with various unsupervised objectives, finding that architectures identified without labels perform competitively compared to those found with labels. These findings suggest that human-annotated labels may not be necessary for identifying efficient neural architectures, as image statistics alone could be sufficient."
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
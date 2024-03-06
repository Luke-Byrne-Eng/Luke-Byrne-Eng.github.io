---
layout: post
title:  "Colorful Image Colorization"
date:   5 Oct 2016
categories: research
paper_url: https://arxiv.org/pdf/1603.08511.pdf
code_url: 
summary: "This paper presents a novel approach to automatically colorize grayscale photos with vibrant and realistic results, addressing the challenge of the underconstrained nature of the problem. Instead of requiring significant user input or producing desaturated outcomes, this method frames colorization as a classification task and employs class rebalancing during training to enhance color diversity. The approach utilizes a convolutional neural network (CNN) trained on over a million color images, operating as a feed-forward pass at test time. The effectiveness of the algorithm is validated through a colorization Turing test, where human participants struggled to distinguish between generated and real color images, with our method deceiving participants in 32% of trials—a notable improvement over previous techniques. Additionally, this paper illustrates how colorization can serve as an effective pretext task for self-supervised feature learning, functioning as a cross-channel encoder and achieving state-of-the-art results on several feature learning benchmarks."
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
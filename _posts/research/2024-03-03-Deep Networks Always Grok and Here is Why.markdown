---
layout: post
title:  "Deep Networks Always Grok and Here is Why"
date:   23 Feb 2024
categories: research
paper_url: https://arxiv.org/pdf/2402.15555.pdf
code_url: https://github.com/AhmedImtiazPrio/grok-adversarial
summary: "Grokking, or delayed generalization in deep neural networks (DNNs), happens well after nearly perfect training performance. It's more common than thought, appearing in various practical scenarios, including CNN training on CIFAR10 or Resnet on Imagenette. This study introduces "delayed robustness," where DNNs become adept at handling adversarial examples significantly later in training. The emergence of delayed generalization and robustness is attributed to a new measure of DNN input-output mapping complexity, focusing on the density of "linear regions." Evidence shows a phase transition in these regions during training, leading to a smoother DNN mapping near training samples and less smooth near decision boundaries. Grokking occurs after this transition, as a stable input space partition is established."
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
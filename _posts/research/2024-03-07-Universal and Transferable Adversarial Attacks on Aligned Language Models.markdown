---
layout: post
title:  "Universal and Transferable Adversarial Attacks on Aligned Language Models"
date:   1 Jan 1000
categories: research
paper_url: https://arxiv.org/pdf/2307.15043.pdf
code_url: 
summary: "This paper introduces a novel and effective method for prompting aligned large language models (LLMs) to generate objectionable content by attaching a specific suffixes to various queries. The approach is shown to be highly transferable, even to black-box, publicly released LLMs like ChatGPT, Bard, Claude, as well as open-source models such as LLaMA-2-Chat, Pythia, Falcon, etc., particularly demonstrating a higher success rate with GPT-based models. This advancement in adversarial attacks against LLMs highlights critical security concerns, urging the need for robust defenses against the generation of objectionable content. The research, along with the code, is shared for further exploration and mitigation efforts."
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